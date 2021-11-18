import {
  gql,
  Name,
  SortBy,
  Invoice,
  GraphQLClient,
  getSdk,
  NameSortFieldInput,
  InvoiceQuery,
  InvoiceLineConnector,
  InvoicePriceResponse,
  ConnectorError,
  NameResponse,
  UpdateOutboundShipmentInput,
  InvoiceNodeStatus,
  OmSupplyApi,
  InsertOutboundShipmentLineInput,
  StockLineResponse,
  StockLineNode,
  DeleteOutboundShipmentLineInput,
  InvoiceLine,
  UpdateOutboundShipmentLineInput,
} from '@openmsupply-client/common';
import { Environment } from '@openmsupply-client/config';
import {
  OutboundShipment,
  OutboundShipmentRow,
} from './OutboundShipment/DetailView/types';
import { flattenSummaryItems } from './utils';

const client = new GraphQLClient(Environment.API_URL);
const api = getSdk(client);

const otherPartyGuard = (otherParty: NameResponse) => {
  if (otherParty.__typename === 'NameNode') {
    return otherParty;
  } else if (otherParty.__typename === 'NodeError') {
    throw new Error(otherParty.error.description);
  }

  throw new Error('Unknown');
};

const pricingGuard = (pricing: InvoicePriceResponse) => {
  if (pricing.__typename === 'InvoicePricingNode') {
    return pricing;
  } else if (pricing.__typename === 'NodeError') {
    throw new Error(pricing.error.description);
  } else {
    throw new Error('Unknown');
  }
};

const invoiceGuard = (invoiceQuery: InvoiceQuery) => {
  if (invoiceQuery.invoice.__typename === 'InvoiceNode') {
    return invoiceQuery.invoice;
  }

  throw new Error(invoiceQuery.invoice.error.description);
};

const linesGuard = (invoiceLines: InvoiceLineConnector | ConnectorError) => {
  if (invoiceLines.__typename === 'InvoiceLineConnector') {
    return invoiceLines.nodes;
  }

  if (invoiceLines.__typename === 'ConnectorError') {
    throw new Error(invoiceLines.error.description);
  }

  throw new Error('Unknown');
};

const stockLineGuard = (stockLine: StockLineResponse): StockLineNode => {
  if (stockLine.__typename === 'StockLineNode') {
    return stockLine;
  }

  throw new Error('Unknown');
};

export const getMutation = (): string => gql`
  mutation updateInvoice($invoicePatch: InvoicePatch) {
    updateInvoice(invoice: $invoicePatch) {
      id
      comment
      status
      type
      entered
      confirmed
      invoiceNumber
      total
    }
  }
`;

export const nameListQueryFn = async ({
  first,
  offset,
  sortBy,
}: {
  first?: number;
  offset?: number;
  sortBy?: SortBy<Name>;
} = {}): Promise<{
  nodes: Name[];
  totalCount: number;
}> => {
  const key =
    sortBy?.key === 'name' ? NameSortFieldInput.Name : NameSortFieldInput.Code;

  const { names } = await api.names({
    first,
    offset,
    key,
    desc: sortBy?.isDesc,
  });

  if (names.__typename === 'NameConnector') {
    return names;
  }

  throw new Error(names.error.description);
};

export const onRead =
  (api: OmSupplyApi) =>
  async (id: string): Promise<Invoice> => {
    const result = await api.invoice({ id });

    const invoice = invoiceGuard(result);
    const lineNodes = linesGuard(invoice.lines);
    const lines: InvoiceLine[] = lineNodes.map(line => {
      const stockLine = line.stockLine
        ? stockLineGuard(line.stockLine)
        : undefined;
      return {
        ...line,
        stockLine,
        stockLineId: stockLine?.id ?? '',
        invoiceId: invoice.id,
      };
    });

    return {
      ...invoice,
      lines,
      pricing: pricingGuard(invoice.pricing),
      otherParty: otherPartyGuard(invoice.otherParty),
    };
  };

const invoiceToInput = (
  patch: Partial<OutboundShipment> & { id: string }
): UpdateOutboundShipmentInput => {
  return {
    id: patch.id,
    color: patch.color,
    comment: patch.comment,
    status: patch.status as InvoiceNodeStatus,
    onHold: patch.onHold,
    otherPartyId: patch.otherParty?.id,
    theirReference: patch.theirReference,
  };
};

const createInsertOutboundLineInput = (
  line: OutboundShipmentRow
): InsertOutboundShipmentLineInput => {
  return {
    id: line.id,
    itemId: line.itemId,
    numberOfPacks: line.numberOfPacks,
    stockLineId: line.stockLineId,
    invoiceId: line.invoiceId,
  };
};

const createDeleteOutboundLineInput = (
  line: OutboundShipmentRow
): DeleteOutboundShipmentLineInput => {
  return {
    id: line.id,
    invoiceId: line.invoiceId,
  };
};

const createUpdateOutboundLineInput = (
  line: OutboundShipmentRow
): UpdateOutboundShipmentLineInput => {
  return {
    id: line.id,
    invoiceId: line.invoiceId,
    numberOfPacks: line.numberOfPacks,
    stockLineId: line.stockLineId,
  };
};

export const onUpdate =
  (api: OmSupplyApi) =>
  async (patch: OutboundShipment): Promise<OutboundShipment> => {
    const rows = flattenSummaryItems(patch.items);
    const deleteLines = rows.filter(({ isDeleted }) => isDeleted);
    const insertLines = rows.filter(
      ({ isCreated, isDeleted }) => !isDeleted && isCreated
    );
    const updateLines = rows.filter(
      ({ isUpdated, isCreated, isDeleted }) =>
        isUpdated && !isCreated && !isDeleted
    );

    const result = await api.upsertOutboundShipment({
      insertOutboundShipmentLines: insertLines.map(
        createInsertOutboundLineInput
      ),
      deleteOutboundShipmentLines: deleteLines.map(
        createDeleteOutboundLineInput
      ),
      updateOutboundShipments: [invoiceToInput(patch)],

      updateOutboundShipmentLines: updateLines.map(
        createUpdateOutboundLineInput
      ),
    });

    const { batchOutboundShipment } = result;

    if (batchOutboundShipment.__typename === 'BatchOutboundShipmentResponse') {
      const { updateOutboundShipments } = batchOutboundShipment;
      if (
        updateOutboundShipments?.[0]?.__typename ===
        'UpdateOutboundShipmentResponseWithId'
      ) {
        return patch;
      }
    }

    throw new Error(':shrug');
  };

interface Api<ReadType, UpdateType> {
  onRead: (id: string) => Promise<ReadType>;
  onUpdate: (val: UpdateType) => Promise<ReadType>;
}

export const getOutboundShipmentDetailViewApi = (
  api: OmSupplyApi
): Api<Invoice, OutboundShipment> => ({
  onRead: onRead(api),
  onUpdate: onUpdate(api),
});
