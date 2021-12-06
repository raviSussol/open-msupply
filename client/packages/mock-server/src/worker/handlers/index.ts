import { InvoiceHandlers } from './invoice';
import { RequisitionHandlers } from './requisition';
import { NameHandlers } from './name';
import { ItemHandlers } from './item';
import { StocktakeHandlers } from './stocktake';
import { ExperimentalHandlers } from './experimental';

// Checking for not equal to production instead of
// checking for development, as jest sets this to
// test during tests. For now, the test and dev
// environments are the same so can is sufficient
// to not differentiate between them.
const isDev = process.env.NODE_ENV !== 'production';

const unsupported = [
  ...StocktakeHandlers,
  ...RequisitionHandlers,
  ...ExperimentalHandlers,
];
const supported = [...InvoiceHandlers, ...NameHandlers, ...ItemHandlers];

const DevHandlers = [...unsupported, ...supported];
const ProdHandlers = [...unsupported];

export const Handlers = isDev ? DevHandlers : ProdHandlers;