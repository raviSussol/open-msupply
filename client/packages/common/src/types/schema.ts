import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * Implement the DateTime<Utc> scalar
   *
   * The input/output is a string in RFC3339 format.
   */
  DateTime: string;
  /**
   * ISO 8601 calendar date without timezone.
   * Format: %Y-%m-%d
   *
   * # Examples
   *
   * * `1994-11-13`
   * * `2000-02-24`
   */
  NaiveDate: string;
  /**
   * ISO 8601 combined date and time without timezone.
   *
   * # Examples
   *
   * * `2015-07-01T08:59:60.123`,
   */
  NaiveDateTime: any;
};

export type AccessDenied = LogoutErrorInterface & {
  __typename?: 'AccessDenied';
  description: Scalars['String'];
  fullError: Scalars['String'];
};

export type AuthToken = {
  __typename?: 'AuthToken';
  /** Bearer token */
  token: Scalars['String'];
};

/** Generic Error Wrapper */
export type AuthTokenError = {
  __typename?: 'AuthTokenError';
  error: AuthTokenErrorInterface;
};

export type AuthTokenErrorInterface = {
  description: Scalars['String'];
};

export type AuthTokenResponse = AuthToken | AuthTokenError;

export type BatchCustomerRequisitionInput = {
  deleteCustomerRequisitionLines?: InputMaybe<Array<DeleteCustomerRequisitionLineInput>>;
  deleteCustomerRequisitions?: InputMaybe<Array<DeleteCustomerRequisitionInput>>;
  insertCustomerRequisitionLines?: InputMaybe<Array<InsertCustomerRequisitionLineInput>>;
  insertCustomerRequisitions?: InputMaybe<Array<InsertCustomerRequisitionInput>>;
  updateCustomerRequisitionLines?: InputMaybe<Array<UpdateCustomerRequisitionLineInput>>;
  updateCustomerRequisitions?: InputMaybe<Array<UpdateCustomerRequisitionInput>>;
};

export type BatchCustomerRequisitionResponse = {
  __typename?: 'BatchCustomerRequisitionResponse';
  deleteCustomerRequisitionLines?: Maybe<Array<DeleteCustomerRequisitionLineResponseWithId>>;
  deleteCustomerRequisitions?: Maybe<Array<DeleteCustomerRequisitionResponseWithId>>;
  insertCustomerRequisitionLines?: Maybe<Array<InsertCustomerRequisitionLineResponseWithId>>;
  insertCustomerRequisitions?: Maybe<Array<InsertCustomerRequisitionResponseWithId>>;
  updateCustomerRequisitionLines?: Maybe<Array<UpdateCustomerRequisitionLineResponseWithId>>;
  updateCustomerRequisitions?: Maybe<Array<UpdateCustomerRequisitionResponseWithId>>;
};

export type BatchInboundShipmentInput = {
  deleteInboundShipmentLines?: InputMaybe<Array<DeleteInboundShipmentLineInput>>;
  deleteInboundShipments?: InputMaybe<Array<DeleteInboundShipmentInput>>;
  insertInboundShipmentLines?: InputMaybe<Array<InsertInboundShipmentLineInput>>;
  insertOutboundShipments?: InputMaybe<Array<InsertInboundShipmentInput>>;
  updateInboundShipmentLines?: InputMaybe<Array<UpdateInboundShipmentLineInput>>;
  updateInboundShipments?: InputMaybe<Array<UpdateInboundShipmentInput>>;
};

export type BatchInboundShipmentResponse = {
  __typename?: 'BatchInboundShipmentResponse';
  deleteInboundShipmentLines?: Maybe<Array<DeleteInboundShipmentLineResponseWithId>>;
  deleteInboundShipments?: Maybe<Array<DeleteInboundShipmentResponseWithId>>;
  insertInboundShipmentLines?: Maybe<Array<InsertInboundShipmentLineResponseWithId>>;
  insertInboundShipments?: Maybe<Array<InsertInboundShipmentResponseWithId>>;
  updateInboundShipmentLines?: Maybe<Array<UpdateInboundShipmentLineResponseWithId>>;
  updateInboundShipments?: Maybe<Array<UpdateInboundShipmentResponseWithId>>;
};

export type BatchIsReserved = DeleteInboundShipmentLineErrorInterface & UpdateInboundShipmentLineErrorInterface & {
  __typename?: 'BatchIsReserved';
  description: Scalars['String'];
};

export type BatchOutboundShipmentInput = {
  deleteOutboundShipmentLines?: InputMaybe<Array<DeleteOutboundShipmentLineInput>>;
  deleteOutboundShipments?: InputMaybe<Array<Scalars['String']>>;
  insertOutboundShipmentLines?: InputMaybe<Array<InsertOutboundShipmentLineInput>>;
  insertOutboundShipments?: InputMaybe<Array<InsertOutboundShipmentInput>>;
  updateOutboundShipmentLines?: InputMaybe<Array<UpdateOutboundShipmentLineInput>>;
  updateOutboundShipments?: InputMaybe<Array<UpdateOutboundShipmentInput>>;
};

export type BatchOutboundShipmentResponse = {
  __typename?: 'BatchOutboundShipmentResponse';
  deleteOutboundShipmentLines?: Maybe<Array<DeleteOutboundShipmentLineResponseWithId>>;
  deleteOutboundShipmentServiceLines?: Maybe<Array<DeleteOutboundShipmentServiceLineResponseWithId>>;
  deleteOutboundShipments?: Maybe<Array<DeleteOutboundShipmentResponseWithId>>;
  insertOutboundShipmentLines?: Maybe<Array<InsertOutboundShipmentLineResponseWithId>>;
  insertOutboundShipmentServiceLines?: Maybe<Array<InsertOutboundShipmentServiceLineResponseWithId>>;
  insertOutboundShipments?: Maybe<Array<InsertOutboundShipmentResponseWithId>>;
  updateOutboundShipmentLines?: Maybe<Array<UpdateOutboundShipmentLineResponseWithId>>;
  updateOutboundShipmentServiceLines?: Maybe<Array<UpdateOutboundShipmentServiceLineResponseWithId>>;
  updateOutboundShipments?: Maybe<Array<UpdateOutboundShipmentResponseWithId>>;
};

export type BatchStocktakeInput = {
  deleteStocktakeLines?: InputMaybe<Array<DeleteStocktakeLineInput>>;
  deleteStocktakes?: InputMaybe<Array<DeleteStocktakeInput>>;
  insertStocktakeLines?: InputMaybe<Array<InsertStocktakeLineInput>>;
  insertStocktakes?: InputMaybe<Array<InsertStocktakeInput>>;
  updateStocktakeLines?: InputMaybe<Array<UpdateStocktakeLineInput>>;
  updateStocktakes?: InputMaybe<Array<UpdateStocktakeInput>>;
};

export type BatchStocktakeResponse = {
  __typename?: 'BatchStocktakeResponse';
  deleteStocktakeLines?: Maybe<Array<DeleteStocktakeLineResponseWithId>>;
  deleteStocktakes?: Maybe<Array<DeleteStocktakeResponseWithId>>;
  insertStocktakeLines?: Maybe<Array<InsertStocktakeLineResponseWithId>>;
  insertStocktakes?: Maybe<Array<InsertStocktakeResponseWithId>>;
  updateStocktakeLines?: Maybe<Array<UpdateStocktakeLineResponseWithId>>;
  updateStocktakes?: Maybe<Array<UpdateStocktakeResponseWithId>>;
};

export type BatchSupplierRequisitionInput = {
  deleteSupplierRequisitionLines?: InputMaybe<Array<DeleteSupplierRequisitionLineInput>>;
  deleteSupplierRequisitions?: InputMaybe<Array<DeleteSupplierRequisitionInput>>;
  insertSupplierRequisitionLines?: InputMaybe<Array<InsertSupplierRequisitionLineInput>>;
  insertSupplierRequisitions?: InputMaybe<Array<InsertSupplierRequisitionInput>>;
  updateSupplierRequisitionLines?: InputMaybe<Array<UpdateSupplierRequisitionLineInput>>;
  updateSupplierRequisitions?: InputMaybe<Array<UpdateSupplierRequisitionInput>>;
};

export type BatchSupplierRequisitionResponse = {
  __typename?: 'BatchSupplierRequisitionResponse';
  deleteSupplierRequisitionLines?: Maybe<Array<DeleteSupplierRequisitionLineResponseWithId>>;
  deleteSupplierRequisitions?: Maybe<Array<DeleteSupplierRequisitionResponseWithId>>;
  insertSupplierRequisitionLines?: Maybe<Array<InsertSupplierRequisitionLineResponseWithId>>;
  insertSupplierRequisitions?: Maybe<Array<InsertSupplierRequisitionResponseWithId>>;
  updateSupplierRequisitionLines?: Maybe<Array<UpdateSupplierRequisitionLineResponseWithId>>;
  updateSupplierRequisitions?: Maybe<Array<UpdateSupplierRequisitionResponseWithId>>;
};

export type CanOnlyChangeToAllocatedWhenNoUnallocatedLines = UpdateOutboundShipmentErrorInterface & {
  __typename?: 'CanOnlyChangeToAllocatedWhenNoUnallocatedLines';
  description: Scalars['String'];
  invoiceLines: InvoiceLineConnector;
};

export type CanOnlyEditInvoicesInLoggedInStoreError = UpdateOutboundShipmentErrorInterface & {
  __typename?: 'CanOnlyEditInvoicesInLoggedInStoreError';
  description: Scalars['String'];
};

export type CannotChangeStatusOfInvoiceOnHold = UpdateInboundShipmentErrorInterface & UpdateOutboundShipmentErrorInterface & {
  __typename?: 'CannotChangeStatusOfInvoiceOnHold';
  description: Scalars['String'];
};

export type CannotDeleteInvoiceWithLines = DeleteInboundShipmentErrorInterface & DeleteOutboundShipmentErrorInterface & {
  __typename?: 'CannotDeleteInvoiceWithLines';
  description: Scalars['String'];
  lines: InvoiceLineConnector;
};

export type CannotEditInvoice = DeleteInboundShipmentErrorInterface & DeleteInboundShipmentLineErrorInterface & DeleteOutboundShipmentErrorInterface & DeleteOutboundShipmentLineErrorInterface & DeleteOutboundShipmentServiceLineErrorInterface & InsertInboundShipmentLineErrorInterface & InsertOutboundShipmentLineErrorInterface & InsertOutboundShipmentServiceLineErrorInterface & UpdateInboundShipmentErrorInterface & UpdateInboundShipmentLineErrorInterface & UpdateOutboundShipmentLineErrorInterface & UpdateOutboundShipmentServiceLineErrorInterface & {
  __typename?: 'CannotEditInvoice';
  description: Scalars['String'];
};

export type CannotReverseInvoiceStatus = UpdateInboundShipmentErrorInterface & UpdateOutboundShipmentErrorInterface & {
  __typename?: 'CannotReverseInvoiceStatus';
  description: Scalars['String'];
};

/** Generic Error Wrapper */
export type ConnectorError = {
  __typename?: 'ConnectorError';
  error: ConnectorErrorInterface;
};

export type ConnectorErrorInterface = {
  description: Scalars['String'];
};

export enum CustomerRequisitionNodeStatus {
  Finalised = 'FINALISED',
  InProgress = 'IN_PROGRESS',
  New = 'NEW'
}

export type DatabaseError = AuthTokenErrorInterface & ConnectorErrorInterface & DeleteInboundShipmentErrorInterface & DeleteInboundShipmentLineErrorInterface & DeleteLocationErrorInterface & DeleteOutboundShipmentErrorInterface & DeleteOutboundShipmentLineErrorInterface & DeleteOutboundShipmentServiceLineErrorInterface & InsertInboundShipmentErrorInterface & InsertInboundShipmentLineErrorInterface & InsertLocationErrorInterface & InsertOutboundShipmentErrorInterface & InsertOutboundShipmentLineErrorInterface & InsertOutboundShipmentServiceLineErrorInterface & NodeErrorInterface & RefreshTokenErrorInterface & UpdateInboundShipmentErrorInterface & UpdateInboundShipmentLineErrorInterface & UpdateLocationErrorInterface & UpdateOutboundShipmentErrorInterface & UpdateOutboundShipmentLineErrorInterface & UpdateOutboundShipmentServiceLineErrorInterface & UserRegisterErrorInterface & {
  __typename?: 'DatabaseError';
  description: Scalars['String'];
  fullError: Scalars['String'];
};

export type DatetimeFilterInput = {
  afterOrEqualTo?: InputMaybe<Scalars['DateTime']>;
  beforeOrEqualTo?: InputMaybe<Scalars['DateTime']>;
  equalTo?: InputMaybe<Scalars['DateTime']>;
};

export type DeleteCustomerRequisitionInput = {
  id: Scalars['String'];
};

export type DeleteCustomerRequisitionLineInput = {
  id: Scalars['String'];
};

export type DeleteCustomerRequisitionLineResponse = DeleteResponse | NodeError;

export type DeleteCustomerRequisitionLineResponseWithId = {
  __typename?: 'DeleteCustomerRequisitionLineResponseWithId';
  id: Scalars['String'];
  response?: Maybe<DeleteCustomerRequisitionLineResponse>;
};

export type DeleteCustomerRequisitionResponse = DeleteResponse | NodeError;

export type DeleteCustomerRequisitionResponseWithId = {
  __typename?: 'DeleteCustomerRequisitionResponseWithId';
  id: Scalars['String'];
  response?: Maybe<DeleteCustomerRequisitionResponse>;
};

/** Generic Error Wrapper */
export type DeleteInboundShipmentError = {
  __typename?: 'DeleteInboundShipmentError';
  error: DeleteInboundShipmentErrorInterface;
};

export type DeleteInboundShipmentErrorInterface = {
  description: Scalars['String'];
};

export type DeleteInboundShipmentInput = {
  id: Scalars['String'];
};

/** Generic Error Wrapper */
export type DeleteInboundShipmentLineError = {
  __typename?: 'DeleteInboundShipmentLineError';
  error: DeleteInboundShipmentLineErrorInterface;
};

export type DeleteInboundShipmentLineErrorInterface = {
  description: Scalars['String'];
};

export type DeleteInboundShipmentLineInput = {
  id: Scalars['String'];
  invoiceId: Scalars['String'];
};

export type DeleteInboundShipmentLineResponse = DeleteInboundShipmentLineError | DeleteResponse;

export type DeleteInboundShipmentLineResponseWithId = {
  __typename?: 'DeleteInboundShipmentLineResponseWithId';
  id: Scalars['String'];
  response: DeleteInboundShipmentLineResponse;
};

export type DeleteInboundShipmentResponse = DeleteInboundShipmentError | DeleteResponse;

export type DeleteInboundShipmentResponseWithId = {
  __typename?: 'DeleteInboundShipmentResponseWithId';
  id: Scalars['String'];
  response: DeleteInboundShipmentResponse;
};

export type DeleteLocationError = {
  __typename?: 'DeleteLocationError';
  error: DeleteLocationErrorInterface;
};

export type DeleteLocationErrorInterface = {
  description: Scalars['String'];
};

export type DeleteLocationInput = {
  id: Scalars['String'];
};

export type DeleteLocationResponse = DeleteLocationError | DeleteResponse;

/** Generic Error Wrapper */
export type DeleteOutboundShipmentError = {
  __typename?: 'DeleteOutboundShipmentError';
  error: DeleteOutboundShipmentErrorInterface;
};

export type DeleteOutboundShipmentErrorInterface = {
  description: Scalars['String'];
};

/** Generic Error Wrapper */
export type DeleteOutboundShipmentLineError = {
  __typename?: 'DeleteOutboundShipmentLineError';
  error: DeleteOutboundShipmentLineErrorInterface;
};

export type DeleteOutboundShipmentLineErrorInterface = {
  description: Scalars['String'];
};

export type DeleteOutboundShipmentLineInput = {
  id: Scalars['String'];
  invoiceId: Scalars['String'];
};

export type DeleteOutboundShipmentLineResponse = DeleteOutboundShipmentLineError | DeleteResponse;

export type DeleteOutboundShipmentLineResponseWithId = {
  __typename?: 'DeleteOutboundShipmentLineResponseWithId';
  id: Scalars['String'];
  response: DeleteOutboundShipmentLineResponse;
};

export type DeleteOutboundShipmentResponse = DeleteOutboundShipmentError | DeleteResponse;

export type DeleteOutboundShipmentResponseWithId = {
  __typename?: 'DeleteOutboundShipmentResponseWithId';
  id: Scalars['String'];
  response: DeleteOutboundShipmentResponse;
};

/** Generic Error Wrapper */
export type DeleteOutboundShipmentServiceLineError = {
  __typename?: 'DeleteOutboundShipmentServiceLineError';
  error: DeleteOutboundShipmentServiceLineErrorInterface;
};

export type DeleteOutboundShipmentServiceLineErrorInterface = {
  description: Scalars['String'];
};

export type DeleteOutboundShipmentServiceLineInput = {
  id: Scalars['String'];
  invoiceId: Scalars['String'];
};

export type DeleteOutboundShipmentServiceLineResponse = DeleteOutboundShipmentServiceLineError | DeleteResponse;

export type DeleteOutboundShipmentServiceLineResponseWithId = {
  __typename?: 'DeleteOutboundShipmentServiceLineResponseWithId';
  id: Scalars['String'];
  response: DeleteOutboundShipmentServiceLineResponse;
};

export type DeleteOutboundShipmentUnallocatedLineError = {
  __typename?: 'DeleteOutboundShipmentUnallocatedLineError';
  error: DeleteOutboundShipmentUnallocatedLineErrorInterface;
};

export type DeleteOutboundShipmentUnallocatedLineErrorInterface = {
  description: Scalars['String'];
};

export type DeleteOutboundShipmentUnallocatedLineInput = {
  id: Scalars['String'];
};

export type DeleteOutboundShipmentUnallocatedLineResponse = DeleteOutboundShipmentUnallocatedLineError | DeleteResponse;

export type DeleteResponse = {
  __typename?: 'DeleteResponse';
  id: Scalars['String'];
};

export type DeleteStockTakeInput = {
  id: Scalars['String'];
};

export type DeleteStockTakeLineInput = {
  id: Scalars['String'];
};

export type DeleteStockTakeLineNode = {
  __typename?: 'DeleteStockTakeLineNode';
  id: Scalars['String'];
};

export type DeleteStockTakeLineResponse = DeleteStockTakeLineNode;

export type DeleteStockTakeNode = {
  __typename?: 'DeleteStockTakeNode';
  /** The id of the deleted stock take */
  id: Scalars['String'];
};

export type DeleteStockTakeResponse = DeleteStockTakeNode;

export type DeleteStocktakeInput = {
  id: Scalars['String'];
};

export type DeleteStocktakeLineInput = {
  id: Scalars['String'];
};

export type DeleteStocktakeLineResponse = DeleteResponse | NodeError;

export type DeleteStocktakeLineResponseWithId = {
  __typename?: 'DeleteStocktakeLineResponseWithId';
  id: Scalars['String'];
  response?: Maybe<DeleteResponse>;
};

export type DeleteStocktakeResponse = DeleteResponse | NodeError;

export type DeleteStocktakeResponseWithId = {
  __typename?: 'DeleteStocktakeResponseWithId';
  id: Scalars['String'];
  response?: Maybe<DeleteResponse>;
};

export type DeleteSupplierRequisitionInput = {
  id: Scalars['String'];
};

export type DeleteSupplierRequisitionLineInput = {
  id: Scalars['String'];
};

export type DeleteSupplierRequisitionLineResponse = DeleteResponse | NodeError;

export type DeleteSupplierRequisitionLineResponseWithId = {
  __typename?: 'DeleteSupplierRequisitionLineResponseWithId';
  id: Scalars['String'];
  response?: Maybe<DeleteSupplierRequisitionLineResponse>;
};

export type DeleteSupplierRequisitionResponse = DeleteResponse | NodeError;

export type DeleteSupplierRequisitionResponseWithId = {
  __typename?: 'DeleteSupplierRequisitionResponseWithId';
  id: Scalars['String'];
  response?: Maybe<DeleteSupplierRequisitionResponse>;
};

export type EqualFilterBigNumberInput = {
  equalAny?: InputMaybe<Array<Scalars['Int']>>;
  equalTo?: InputMaybe<Scalars['Int']>;
  notEqualTo?: InputMaybe<Scalars['Int']>;
};

export type EqualFilterBooleanInput = {
  equalAny?: InputMaybe<Array<Scalars['Boolean']>>;
  equalTo?: InputMaybe<Scalars['Boolean']>;
  notEqualTo?: InputMaybe<Scalars['Boolean']>;
};

export type EqualFilterInvoiceStatusInput = {
  equalAny?: InputMaybe<Array<InvoiceNodeStatus>>;
  equalTo?: InputMaybe<InvoiceNodeStatus>;
  notEqualTo?: InputMaybe<InvoiceNodeStatus>;
};

export type EqualFilterInvoiceTypeInput = {
  equalAny?: InputMaybe<Array<InvoiceNodeType>>;
  equalTo?: InputMaybe<InvoiceNodeType>;
  notEqualTo?: InputMaybe<InvoiceNodeType>;
};

export type EqualFilterStockTakeStatusInput = {
  equalAny?: InputMaybe<Array<StockTakeNodeStatus>>;
  equalTo?: InputMaybe<StockTakeNodeStatus>;
  notEqualTo?: InputMaybe<StockTakeNodeStatus>;
};

export type EqualFilterStringInput = {
  equalAny?: InputMaybe<Array<Scalars['String']>>;
  equalTo?: InputMaybe<Scalars['String']>;
  notEqualTo?: InputMaybe<Scalars['String']>;
};

export enum ForeignKey {
  InvoiceId = 'invoiceId',
  ItemId = 'itemId',
  LocationId = 'locationId',
  OtherPartyId = 'otherPartyId',
  StockLineId = 'stockLineId'
}

export type ForeignKeyError = DeleteInboundShipmentLineErrorInterface & DeleteOutboundShipmentLineErrorInterface & DeleteOutboundShipmentServiceLineErrorInterface & InsertInboundShipmentErrorInterface & InsertInboundShipmentLineErrorInterface & InsertOutboundShipmentErrorInterface & InsertOutboundShipmentLineErrorInterface & InsertOutboundShipmentServiceLineErrorInterface & InsertOutboundShipmentUnallocatedLineErrorInterface & UpdateInboundShipmentErrorInterface & UpdateInboundShipmentLineErrorInterface & UpdateOutboundShipmentErrorInterface & UpdateOutboundShipmentLineErrorInterface & UpdateOutboundShipmentServiceLineErrorInterface & {
  __typename?: 'ForeignKeyError';
  description: Scalars['String'];
  key: ForeignKey;
};

export type InboundInvoiceCounts = {
  __typename?: 'InboundInvoiceCounts';
  created: InvoiceCountsSummary;
};

export type InsertCustomerRequisitionInput = {
  comment?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  orderDate?: InputMaybe<Scalars['String']>;
  otherPartyId: Scalars['String'];
  theirReference?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<RequisitionNodeType>;
};

export type InsertCustomerRequisitionLineInput = {
  calculatedQuantity?: InputMaybe<Scalars['Float']>;
  closingQuantity?: InputMaybe<Scalars['Int']>;
  comment?: InputMaybe<Scalars['String']>;
  expiredQuantity?: InputMaybe<Scalars['Float']>;
  id: Scalars['String'];
  imprestQuantity?: InputMaybe<Scalars['Float']>;
  issuedQuantity?: InputMaybe<Scalars['Float']>;
  itemCode?: InputMaybe<Scalars['String']>;
  itemId: Scalars['String'];
  itemName?: InputMaybe<Scalars['String']>;
  itemUnit?: InputMaybe<Scalars['String']>;
  monthlyConsumption?: InputMaybe<Scalars['Float']>;
  monthsOfSupply?: InputMaybe<Scalars['Float']>;
  openingQuantity?: InputMaybe<Scalars['Float']>;
  otherPartyClosingQuantity?: InputMaybe<Scalars['Int']>;
  previousQuantity?: InputMaybe<Scalars['Float']>;
  previousStockOnHand?: InputMaybe<Scalars['Float']>;
  receivedQuantity?: InputMaybe<Scalars['Float']>;
  requestedQuantity?: InputMaybe<Scalars['Float']>;
  requisitionId: Scalars['String'];
  stockAdditions?: InputMaybe<Scalars['Float']>;
  stockLosses?: InputMaybe<Scalars['Float']>;
  supplyQuantity?: InputMaybe<Scalars['Float']>;
};

export type InsertCustomerRequisitionLineResponse = NodeError | RequisitionLineNode;

export type InsertCustomerRequisitionLineResponseWithId = {
  __typename?: 'InsertCustomerRequisitionLineResponseWithId';
  id: Scalars['String'];
  response?: Maybe<InsertCustomerRequisitionLineResponse>;
};

export type InsertCustomerRequisitionResponse = NodeError | RequisitionNode;

export type InsertCustomerRequisitionResponseWithId = {
  __typename?: 'InsertCustomerRequisitionResponseWithId';
  id: Scalars['String'];
  response?: Maybe<InsertCustomerRequisitionResponse>;
};

/** Generic Error Wrapper */
export type InsertInboundShipmentError = {
  __typename?: 'InsertInboundShipmentError';
  error: InsertInboundShipmentErrorInterface;
};

export type InsertInboundShipmentErrorInterface = {
  description: Scalars['String'];
};

export type InsertInboundShipmentInput = {
  color?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  onHold?: InputMaybe<Scalars['Boolean']>;
  otherPartyId: Scalars['String'];
  theirReference?: InputMaybe<Scalars['String']>;
};

/** Generic Error Wrapper */
export type InsertInboundShipmentLineError = {
  __typename?: 'InsertInboundShipmentLineError';
  error: InsertInboundShipmentLineErrorInterface;
};

export type InsertInboundShipmentLineErrorInterface = {
  description: Scalars['String'];
};

export type InsertInboundShipmentLineInput = {
  batch?: InputMaybe<Scalars['String']>;
  costPricePerPack: Scalars['Float'];
  expiryDate?: InputMaybe<Scalars['NaiveDate']>;
  id: Scalars['String'];
  invoiceId: Scalars['String'];
  itemId: Scalars['String'];
  locationId?: InputMaybe<Scalars['String']>;
  numberOfPacks: Scalars['Int'];
  packSize: Scalars['Int'];
  sellPricePerPack: Scalars['Float'];
  tax?: InputMaybe<Scalars['Float']>;
  totalAfterTax: Scalars['Float'];
  totalBeforeTax: Scalars['Float'];
};

export type InsertInboundShipmentLineResponse = InsertInboundShipmentLineError | InvoiceLineNode | NodeError;

export type InsertInboundShipmentLineResponseWithId = {
  __typename?: 'InsertInboundShipmentLineResponseWithId';
  id: Scalars['String'];
  response: InsertInboundShipmentLineResponse;
};

export type InsertInboundShipmentResponse = InsertInboundShipmentError | InvoiceNode | NodeError;

export type InsertInboundShipmentResponseWithId = {
  __typename?: 'InsertInboundShipmentResponseWithId';
  id: Scalars['String'];
  response: InsertInboundShipmentResponse;
};

export type InsertLocationError = {
  __typename?: 'InsertLocationError';
  error: InsertLocationErrorInterface;
};

export type InsertLocationErrorInterface = {
  description: Scalars['String'];
};

export type InsertLocationInput = {
  code: Scalars['String'];
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  onHold?: InputMaybe<Scalars['Boolean']>;
};

export type InsertLocationResponse = InsertLocationError | LocationNode;

/** Generic Error Wrapper */
export type InsertOutboundShipmentError = {
  __typename?: 'InsertOutboundShipmentError';
  error: InsertOutboundShipmentErrorInterface;
};

export type InsertOutboundShipmentErrorInterface = {
  description: Scalars['String'];
};

export type InsertOutboundShipmentInput = {
  color?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  /** The new invoice id provided by the client */
  id: Scalars['String'];
  onHold?: InputMaybe<Scalars['Boolean']>;
  /** The other party must be an customer of the current store */
  otherPartyId: Scalars['String'];
  status?: InputMaybe<InvoiceNodeStatus>;
  theirReference?: InputMaybe<Scalars['String']>;
};

/** Generic Error Wrapper */
export type InsertOutboundShipmentLineError = {
  __typename?: 'InsertOutboundShipmentLineError';
  error: InsertOutboundShipmentLineErrorInterface;
};

export type InsertOutboundShipmentLineErrorInterface = {
  description: Scalars['String'];
};

export type InsertOutboundShipmentLineInput = {
  id: Scalars['String'];
  invoiceId: Scalars['String'];
  itemId: Scalars['String'];
  numberOfPacks: Scalars['Int'];
  stockLineId: Scalars['String'];
  tax?: InputMaybe<Scalars['Float']>;
  totalAfterTax: Scalars['Float'];
  totalBeforeTax: Scalars['Float'];
};

export type InsertOutboundShipmentLineResponse = InsertOutboundShipmentLineError | InvoiceLineNode | NodeError;

export type InsertOutboundShipmentLineResponseWithId = {
  __typename?: 'InsertOutboundShipmentLineResponseWithId';
  id: Scalars['String'];
  response: InsertOutboundShipmentLineResponse;
};

export type InsertOutboundShipmentResponse = InsertOutboundShipmentError | InvoiceNode | NodeError;

export type InsertOutboundShipmentResponseWithId = {
  __typename?: 'InsertOutboundShipmentResponseWithId';
  id: Scalars['String'];
  response: InsertOutboundShipmentResponse;
};

/** Generic Error Wrapper */
export type InsertOutboundShipmentServiceLineError = {
  __typename?: 'InsertOutboundShipmentServiceLineError';
  error: InsertOutboundShipmentServiceLineErrorInterface;
};

export type InsertOutboundShipmentServiceLineErrorInterface = {
  description: Scalars['String'];
};

export type InsertOutboundShipmentServiceLineInput = {
  id: Scalars['String'];
  invoiceId: Scalars['String'];
  itemId: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  tax?: InputMaybe<Scalars['Float']>;
  totalAfterTax: Scalars['Float'];
  totalBeforeTax: Scalars['Float'];
};

export type InsertOutboundShipmentServiceLineResponse = InsertOutboundShipmentServiceLineError | InvoiceLineNode;

export type InsertOutboundShipmentServiceLineResponseWithId = {
  __typename?: 'InsertOutboundShipmentServiceLineResponseWithId';
  id: Scalars['String'];
  response: InsertOutboundShipmentServiceLineResponse;
};

export type InsertOutboundShipmentUnallocatedLineError = {
  __typename?: 'InsertOutboundShipmentUnallocatedLineError';
  error: InsertOutboundShipmentUnallocatedLineErrorInterface;
};

export type InsertOutboundShipmentUnallocatedLineErrorInterface = {
  description: Scalars['String'];
};

export type InsertOutboundShipmentUnallocatedLineInput = {
  id: Scalars['String'];
  invoiceId: Scalars['String'];
  itemId: Scalars['String'];
  quantity: Scalars['Int'];
};

export type InsertOutboundShipmentUnallocatedLineResponse = InsertOutboundShipmentUnallocatedLineError | InvoiceLineNode;

export type InsertStockTakeInput = {
  comment?: InputMaybe<Scalars['String']>;
  createdDatetime: Scalars['NaiveDateTime'];
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
};

export type InsertStockTakeLineInput = {
  batch?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  costPricePerPack?: InputMaybe<Scalars['Float']>;
  countedNumberOfPacks?: InputMaybe<Scalars['Int']>;
  expiryDate?: InputMaybe<Scalars['NaiveDate']>;
  id: Scalars['String'];
  itemId?: InputMaybe<Scalars['String']>;
  locationId?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  packSize?: InputMaybe<Scalars['Int']>;
  sellPricePerPack?: InputMaybe<Scalars['Float']>;
  stockLineId?: InputMaybe<Scalars['String']>;
  stockTakeId: Scalars['String'];
};

export type InsertStockTakeLineResponse = StockTakeLineNode;

export type InsertStockTakeResponse = StockTakeNode;

export type InsertStocktakeInput = {
  comment?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  stocktakeDatetime?: InputMaybe<Scalars['String']>;
};

export type InsertStocktakeLineInput = {
  batch?: InputMaybe<Scalars['String']>;
  costPricePerPack?: InputMaybe<Scalars['Float']>;
  countedNumPacks?: InputMaybe<Scalars['Int']>;
  expiryDate?: InputMaybe<Scalars['NaiveDate']>;
  id: Scalars['String'];
  itemId: Scalars['String'];
  sellPricePerPack?: InputMaybe<Scalars['Float']>;
  stocktakeId: Scalars['String'];
};

export type InsertStocktakeLineResponse = NodeError | StocktakeLineNode;

export type InsertStocktakeLineResponseWithId = {
  __typename?: 'InsertStocktakeLineResponseWithId';
  id: Scalars['String'];
  response?: Maybe<InsertStocktakeLineResponse>;
};

export type InsertStocktakeResponse = NodeError | StocktakeNode;

export type InsertStocktakeResponseWithId = {
  __typename?: 'InsertStocktakeResponseWithId';
  id: Scalars['String'];
  response?: Maybe<InsertStocktakeResponse>;
};

export type InsertSupplierRequisitionInput = {
  comment?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  orderDate?: InputMaybe<Scalars['String']>;
  otherPartyId: Scalars['String'];
  theirReference?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<RequisitionNodeType>;
};

export type InsertSupplierRequisitionLineInput = {
  calculatedQuantity?: InputMaybe<Scalars['Float']>;
  closingQuantity?: InputMaybe<Scalars['Int']>;
  comment?: InputMaybe<Scalars['String']>;
  expiredQuantity?: InputMaybe<Scalars['Float']>;
  id: Scalars['String'];
  imprestQuantity?: InputMaybe<Scalars['Float']>;
  issuedQuantity?: InputMaybe<Scalars['Float']>;
  itemCode?: InputMaybe<Scalars['String']>;
  itemId: Scalars['String'];
  itemName?: InputMaybe<Scalars['String']>;
  itemUnit?: InputMaybe<Scalars['String']>;
  monthlyConsumption?: InputMaybe<Scalars['Float']>;
  monthsOfSupply?: InputMaybe<Scalars['Float']>;
  openingQuantity?: InputMaybe<Scalars['Float']>;
  otherPartyClosingQuantity?: InputMaybe<Scalars['Int']>;
  previousQuantity?: InputMaybe<Scalars['Float']>;
  previousStockOnHand?: InputMaybe<Scalars['Float']>;
  receivedQuantity?: InputMaybe<Scalars['Float']>;
  requestedQuantity?: InputMaybe<Scalars['Float']>;
  requisitionId: Scalars['String'];
  stockAdditions?: InputMaybe<Scalars['Float']>;
  stockLosses?: InputMaybe<Scalars['Float']>;
  supplyQuantity?: InputMaybe<Scalars['Float']>;
};

export type InsertSupplierRequisitionLineResponse = NodeError | RequisitionLineNode;

export type InsertSupplierRequisitionLineResponseWithId = {
  __typename?: 'InsertSupplierRequisitionLineResponseWithId';
  id: Scalars['String'];
  response?: Maybe<InsertSupplierRequisitionLineResponse>;
};

export type InsertSupplierRequisitionResponse = NodeError | RequisitionNode;

export type InsertSupplierRequisitionResponseWithId = {
  __typename?: 'InsertSupplierRequisitionResponseWithId';
  id: Scalars['String'];
  response?: Maybe<InsertSupplierRequisitionResponse>;
};

export type InternalError = AuthTokenErrorInterface & InsertLocationErrorInterface & InsertOutboundShipmentServiceLineErrorInterface & LogoutErrorInterface & RefreshTokenErrorInterface & UpdateLocationErrorInterface & UpdateOutboundShipmentServiceLineErrorInterface & UserRegisterErrorInterface & {
  __typename?: 'InternalError';
  description: Scalars['String'];
  fullError: Scalars['String'];
};

export type InvalidCredentials = AuthTokenErrorInterface & {
  __typename?: 'InvalidCredentials';
  description: Scalars['String'];
};

export type InvalidToken = RefreshTokenErrorInterface & {
  __typename?: 'InvalidToken';
  description: Scalars['String'];
};

/** Generic Connector */
export type InvoiceConnector = {
  __typename?: 'InvoiceConnector';
  nodes: Array<InvoiceNode>;
  totalCount: Scalars['Int'];
};

export type InvoiceCounts = {
  __typename?: 'InvoiceCounts';
  inbound: InboundInvoiceCounts;
  outbound: OutboundInvoiceCounts;
};

export type InvoiceCountsSummary = {
  __typename?: 'InvoiceCountsSummary';
  thisWeek: Scalars['Int'];
  today: Scalars['Int'];
};

export type InvoiceDoesNotBelongToCurrentStore = DeleteInboundShipmentErrorInterface & DeleteInboundShipmentLineErrorInterface & DeleteOutboundShipmentErrorInterface & DeleteOutboundShipmentLineErrorInterface & DeleteOutboundShipmentServiceLineErrorInterface & InsertInboundShipmentLineErrorInterface & InsertOutboundShipmentLineErrorInterface & UpdateInboundShipmentErrorInterface & UpdateInboundShipmentLineErrorInterface & UpdateOutboundShipmentLineErrorInterface & {
  __typename?: 'InvoiceDoesNotBelongToCurrentStore';
  description: Scalars['String'];
};

export type InvoiceFilterInput = {
  allocatedDatetime?: InputMaybe<DatetimeFilterInput>;
  comment?: InputMaybe<SimpleStringFilterInput>;
  createdDatetime?: InputMaybe<DatetimeFilterInput>;
  deliveredDatetime?: InputMaybe<DatetimeFilterInput>;
  invoiceNumber?: InputMaybe<EqualFilterBigNumberInput>;
  nameId?: InputMaybe<EqualFilterStringInput>;
  pickedDatetime?: InputMaybe<DatetimeFilterInput>;
  shippedDatetime?: InputMaybe<DatetimeFilterInput>;
  status?: InputMaybe<EqualFilterInvoiceStatusInput>;
  storeId?: InputMaybe<EqualFilterStringInput>;
  theirReference?: InputMaybe<EqualFilterStringInput>;
  type?: InputMaybe<EqualFilterInvoiceTypeInput>;
  verifiedDatetime?: InputMaybe<DatetimeFilterInput>;
};

export type InvoiceIsNotEditable = UpdateOutboundShipmentErrorInterface & {
  __typename?: 'InvoiceIsNotEditable';
  description: Scalars['String'];
};

export type InvoiceLineBelongsToAnotherInvoice = DeleteInboundShipmentLineErrorInterface & DeleteOutboundShipmentLineErrorInterface & DeleteOutboundShipmentServiceLineErrorInterface & UpdateInboundShipmentLineErrorInterface & UpdateOutboundShipmentLineErrorInterface & UpdateOutboundShipmentServiceLineErrorInterface & {
  __typename?: 'InvoiceLineBelongsToAnotherInvoice';
  description: Scalars['String'];
  invoice: InvoiceResponse;
};

/** Generic Connector */
export type InvoiceLineConnector = {
  __typename?: 'InvoiceLineConnector';
  nodes: Array<InvoiceLineNode>;
  totalCount: Scalars['Int'];
};

export type InvoiceLineHasNoStockLineError = UpdateOutboundShipmentErrorInterface & {
  __typename?: 'InvoiceLineHasNoStockLineError';
  description: Scalars['String'];
  invoiceLineId: Scalars['String'];
};

export type InvoiceLineNode = {
  __typename?: 'InvoiceLineNode';
  batch?: Maybe<Scalars['String']>;
  costPricePerPack: Scalars['Float'];
  expiryDate?: Maybe<Scalars['NaiveDate']>;
  id: Scalars['String'];
  invoiceId: Scalars['String'];
  item: ItemResponse;
  itemCode: Scalars['String'];
  itemId: Scalars['String'];
  itemName: Scalars['String'];
  location?: Maybe<LocationResponse>;
  locationId?: Maybe<Scalars['String']>;
  locationName?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  numberOfPacks: Scalars['Int'];
  packSize: Scalars['Int'];
  sellPricePerPack: Scalars['Float'];
  stockLine?: Maybe<StockLineResponse>;
  type: InvoiceLineNodeType;
};

export enum InvoiceLineNodeType {
  Service = 'SERVICE',
  StockIn = 'STOCK_IN',
  StockOut = 'STOCK_OUT',
  UnallocatedStock = 'UNALLOCATED_STOCK'
}

export type InvoiceLineResponse = InvoiceLineNode | NodeError;

export type InvoiceLinesResponse = ConnectorError | InvoiceLineConnector;

export type InvoiceNode = {
  __typename?: 'InvoiceNode';
  allocatedDatetime?: Maybe<Scalars['DateTime']>;
  color?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  createdDatetime: Scalars['DateTime'];
  deliveredDatetime?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  invoiceNumber: Scalars['Int'];
  lines: InvoiceLinesResponse;
  onHold: Scalars['Boolean'];
  otherParty: NameResponse;
  otherPartyId: Scalars['String'];
  otherPartyName: Scalars['String'];
  otherPartyStore?: Maybe<StoreNode>;
  pickedDatetime?: Maybe<Scalars['DateTime']>;
  pricing: InvoicePriceResponse;
  shippedDatetime?: Maybe<Scalars['DateTime']>;
  status: InvoiceNodeStatus;
  theirReference?: Maybe<Scalars['String']>;
  type: InvoiceNodeType;
  verifiedDatetime?: Maybe<Scalars['DateTime']>;
};

export enum InvoiceNodeStatus {
  /**
   * General description: Outbound Shipment is ready for picking (all unallocated lines need to be fullfilled)
   * Outbound Shipment: Invoice can only be turned to allocated status when
   * all unallocated lines are fullfilled
   * Inbound Shipment: not applicable
   */
  Allocated = 'ALLOCATED',
  /**
   * General description: Inbound Shipment was received
   * Outbound Shipment: Status is updated based on corresponding inbound Shipment
   * Inbound Shipment: Stock is introduced and can be issued
   */
  Delivered = 'DELIVERED',
  /**
   * Outbound Shipment: available_number_of_packs in a stock line gets
   * updated when items are added to the invoice.
   * Inbound Shipment: No stock changes in this status, only manually entered
   * inbound Shipments have new status
   */
  New = 'NEW',
  /**
   * General description: Outbound Shipment was picked from shelf and ready for Shipment
   * Outbound Shipment: available_number_of_packs and
   * total_number_of_packs get updated when items are added to the invoice
   * Inbound Shipment: For inter store stock transfers an inbound Shipment
   * is created when corresponding outbound Shipment is picked and ready for
   * Shipment, inbound Shipment is not editable in this status
   */
  Picked = 'PICKED',
  /**
   * General description: Outbound Shipment is sent out for delivery
   * Outbound Shipment: Becomes not editable
   * Inbound Shipment: For inter store stock transfers an inbound Shipment
   * becomes editable when this status is set as a result of corresponding
   * outbound Shipment being chagned to shipped (this is similar to New status)
   */
  Shipped = 'SHIPPED',
  /**
   * General description: Received inbound Shipment was counted and verified
   * Outbound Shipment: Status is updated based on corresponding inbound Shipment
   * Inbound Shipment: Becomes not editable
   */
  Verified = 'VERIFIED'
}

export enum InvoiceNodeType {
  InboundShipment = 'INBOUND_SHIPMENT',
  InventoryAdjustment = 'INVENTORY_ADJUSTMENT',
  OutboundShipment = 'OUTBOUND_SHIPMENT'
}

export type InvoicePriceResponse = InvoicePricingNode | NodeError;

export type InvoicePricingNode = {
  __typename?: 'InvoicePricingNode';
  serviceTotalAfterTax: Scalars['Float'];
  serviceTotalBeforeTax: Scalars['Float'];
  stockTotalAfterTax: Scalars['Float'];
  stockTotalBeforeTax: Scalars['Float'];
  totalAfterTax: Scalars['Float'];
  totalBeforeTax: Scalars['Float'];
};

export type InvoiceResponse = InvoiceNode | NodeError;

export enum InvoiceSortFieldInput {
  AllocatedDatetime = 'allocatedDatetime',
  Comment = 'comment',
  CreatedDatetime = 'createdDatetime',
  DeliveredDatetime = 'deliveredDatetime',
  InvoiceNumber = 'invoiceNumber',
  OtherPartyName = 'otherPartyName',
  PickedDatetime = 'pickedDatetime',
  ShippedDatetime = 'shippedDatetime',
  Status = 'status',
  Type = 'type',
  VerifiedDatetime = 'verifiedDatetime'
}

export type InvoiceSortInput = {
  /**
   * Sort query result is sorted descending or ascending (if not provided the default is
   * ascending)
   */
  desc?: InputMaybe<Scalars['Boolean']>;
  /** Sort query result by `key` */
  key: InvoiceSortFieldInput;
};

export type InvoicesResponse = ConnectorError | InvoiceConnector;

export type ItemConnector = {
  __typename?: 'ItemConnector';
  nodes: Array<ItemNode>;
  totalCount: Scalars['Int'];
};

export type ItemDoesNotMatchStockLine = InsertOutboundShipmentLineErrorInterface & UpdateOutboundShipmentLineErrorInterface & {
  __typename?: 'ItemDoesNotMatchStockLine';
  description: Scalars['String'];
};

export type ItemError = {
  __typename?: 'ItemError';
  error: ItemResponseError;
};

export type ItemFilterInput = {
  code?: InputMaybe<SimpleStringFilterInput>;
  isVisible?: InputMaybe<EqualFilterBooleanInput>;
  name?: InputMaybe<SimpleStringFilterInput>;
};

export type ItemNode = {
  __typename?: 'ItemNode';
  availableBatches: StockLinesResponse;
  code: Scalars['String'];
  id: Scalars['String'];
  isVisible: Scalars['Boolean'];
  name: Scalars['String'];
  unitName?: Maybe<Scalars['String']>;
};

export type ItemResponse = ItemError | ItemNode;

export type ItemResponseError = InternalError;

export enum ItemSortFieldInput {
  Code = 'code',
  Name = 'name'
}

export type ItemSortInput = {
  /**
   * Sort query result is sorted descending or ascending (if not provided the default is
   * ascending)
   */
  desc?: InputMaybe<Scalars['Boolean']>;
  /** Sort query result by `key` */
  key: ItemSortFieldInput;
};

export type ItemsResponse = ConnectorError | ItemConnector;

export type LineDoesNotReferenceStockLine = UpdateOutboundShipmentLineErrorInterface & {
  __typename?: 'LineDoesNotReferenceStockLine';
  description: Scalars['String'];
};

/** Generic Connector */
export type LocationConnector = {
  __typename?: 'LocationConnector';
  nodes: Array<LocationNode>;
  totalCount: Scalars['Int'];
};

export type LocationFilterInput = {
  code?: InputMaybe<EqualFilterStringInput>;
  id?: InputMaybe<EqualFilterStringInput>;
  name?: InputMaybe<EqualFilterStringInput>;
};

export type LocationInUse = DeleteLocationErrorInterface & {
  __typename?: 'LocationInUse';
  description: Scalars['String'];
  invoiceLines: InvoiceLineConnector;
  stockLines: StockLineConnector;
};

export type LocationIsOnHold = InsertOutboundShipmentLineErrorInterface & UpdateOutboundShipmentLineErrorInterface & {
  __typename?: 'LocationIsOnHold';
  description: Scalars['String'];
};

export type LocationNode = {
  __typename?: 'LocationNode';
  code: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  onHold: Scalars['Boolean'];
  stock: StockLinesResponse;
};

export type LocationNotFound = InsertOutboundShipmentLineErrorInterface & UpdateOutboundShipmentLineErrorInterface & {
  __typename?: 'LocationNotFound';
  description: Scalars['String'];
};

export type LocationResponse = LocationNode | NodeError;

export enum LocationSortFieldInput {
  Code = 'code',
  Name = 'name'
}

export type LocationSortInput = {
  /**
   * Sort query result is sorted descending or ascending (if not provided the default is
   * ascending)
   */
  desc?: InputMaybe<Scalars['Boolean']>;
  /** Sort query result by `key` */
  key: LocationSortFieldInput;
};

export type LocationsResponse = ConnectorError | LocationConnector;

export type Logout = {
  __typename?: 'Logout';
  /** User id of the logged out user */
  userId: Scalars['String'];
};

/** Generic Error Wrapper */
export type LogoutError = {
  __typename?: 'LogoutError';
  error: LogoutErrorInterface;
};

export type LogoutErrorInterface = {
  description: Scalars['String'];
};

export type LogoutResponse = Logout | LogoutError;

export type MasterListConnector = {
  __typename?: 'MasterListConnector';
  nodes: Array<MasterListNode>;
  totalCount: Scalars['Int'];
};

export type MasterListFilterInput = {
  code?: InputMaybe<SimpleStringFilterInput>;
  description?: InputMaybe<SimpleStringFilterInput>;
  existsForName?: InputMaybe<SimpleStringFilterInput>;
  existsForNameId?: InputMaybe<EqualFilterStringInput>;
  id?: InputMaybe<EqualFilterStringInput>;
  name?: InputMaybe<SimpleStringFilterInput>;
};

export type MasterListLineConnector = {
  __typename?: 'MasterListLineConnector';
  nodes: Array<MasterListLineNode>;
  totalCount: Scalars['Int'];
};

export type MasterListLineNode = {
  __typename?: 'MasterListLineNode';
  id: Scalars['String'];
  item: ItemNode;
  itemId: Scalars['String'];
};

export type MasterListNode = {
  __typename?: 'MasterListNode';
  code: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['String'];
  lines: MasterListLineConnector;
  name: Scalars['String'];
};

export enum MasterListSortFieldInput {
  Code = 'code',
  Description = 'description',
  Name = 'name'
}

export type MasterListSortInput = {
  /**
   * Sort query result is sorted descending or ascending (if not provided the default is
   * ascending)
   */
  desc?: InputMaybe<Scalars['Boolean']>;
  /** Sort query result by `key` */
  key: MasterListSortFieldInput;
};

export type MasterListsResponse = ConnectorError | MasterListConnector;

export type Mutations = {
  __typename?: 'Mutations';
  batchCustomerRequisition: BatchCustomerRequisitionResponse;
  batchInboundShipment: BatchInboundShipmentResponse;
  batchOutboundShipment: BatchOutboundShipmentResponse;
  batchStocktake: BatchStocktakeResponse;
  batchSupplierRequisition: BatchSupplierRequisitionResponse;
  deleteCustomerRequisition: DeleteCustomerRequisitionResponse;
  deleteCustomerRequisitionLine: DeleteCustomerRequisitionLineResponse;
  deleteInboundShipment: DeleteInboundShipmentResponse;
  deleteInboundShipmentLine: DeleteInboundShipmentLineResponse;
  deleteLocation: DeleteLocationResponse;
  deleteOutboundShipment: DeleteOutboundShipmentResponse;
  deleteOutboundShipmentLine: DeleteOutboundShipmentLineResponse;
  deleteOutboundShipmentServiceLine: DeleteOutboundShipmentServiceLineResponse;
  deleteOutboundShipmentUnallocatedLine: DeleteOutboundShipmentUnallocatedLineResponse;
  deleteStockTake: DeleteStockTakeResponse;
  deleteStockTakeLine: DeleteStockTakeLineResponse;
  deleteStocktake: DeleteStocktakeResponse;
  deleteSupplierRequisition: DeleteSupplierRequisitionResponse;
  deleteSupplierRequisitionLine: DeleteSupplierRequisitionLineResponse;
  insertCustomerRequisition: InsertCustomerRequisitionResponse;
  insertCustomerRequisitionLine: InsertCustomerRequisitionLineResponse;
  insertInboundShipment: InsertInboundShipmentResponse;
  insertInboundShipmentLine: InsertInboundShipmentLineResponse;
  insertLocation: InsertLocationResponse;
  insertOutboundShipment: InsertOutboundShipmentResponse;
  insertOutboundShipmentLine: InsertOutboundShipmentLineResponse;
  insertOutboundShipmentServiceLine: InsertOutboundShipmentServiceLineResponse;
  insertOutboundShipmentUnallocatedLine: InsertOutboundShipmentUnallocatedLineResponse;
  insertStockTake: InsertStockTakeResponse;
  insertStockTakeLine: InsertStockTakeLineResponse;
  insertStocktake: InsertStocktakeResponse;
  insertSupplierRequisition: InsertSupplierRequisitionResponse;
  insertSupplierRequisitionLine: InsertSupplierRequisitionLineResponse;
  registerUser: UserRegisterResponse;
  updateCustomerRequisition: UpdateCustomerRequisitionResponse;
  updateCustomerRequisitionLine: UpdateCustomerRequisitionLineResponse;
  updateInboundShipment: UpdateInboundShipmentResponse;
  updateInboundShipmentLine: UpdateInboundShipmentLineResponse;
  updateLocation: UpdateLocationResponse;
  updateOutboundShipment: UpdateOutboundShipmentResponse;
  updateOutboundShipmentLine: UpdateOutboundShipmentLineResponse;
  updateOutboundShipmentServiceLine: UpdateOutboundShipmentServiceLineResponse;
  updateOutboundShipmentUnallocatedLine: UpdateOutboundShipmentUnallocatedLineResponse;
  updateStockTake: UpdateStockTakeResponse;
  updateStockTakeLine: UpdateStockTakeLineResponse;
  updateStocktake: UpdateStocktakeResponse;
  updateSupplierRequisition: UpdateSupplierRequisitionResponse;
  updateSupplierRequisitionLine: UpdateSupplierRequisitionLineResponse;
};


export type MutationsBatchCustomerRequisitionArgs = {
  deleteCustomerRequisitionLines?: InputMaybe<Array<DeleteCustomerRequisitionLineInput>>;
  deleteCustomerRequisitions?: InputMaybe<Array<DeleteCustomerRequisitionInput>>;
  insertCustomerRequisitionLines?: InputMaybe<Array<InsertCustomerRequisitionLineInput>>;
  insertCustomerRequisitions?: InputMaybe<Array<InsertCustomerRequisitionInput>>;
  updateCustomerRequisitionLines?: InputMaybe<Array<UpdateCustomerRequisitionLineInput>>;
  updateCustomerRequisitions?: InputMaybe<Array<UpdateCustomerRequisitionInput>>;
};


export type MutationsBatchInboundShipmentArgs = {
  deleteInboundShipmentLines?: InputMaybe<Array<DeleteInboundShipmentLineInput>>;
  deleteInboundShipments?: InputMaybe<Array<DeleteInboundShipmentInput>>;
  insertInboundShipmentLines?: InputMaybe<Array<InsertInboundShipmentLineInput>>;
  insertInboundShipments?: InputMaybe<Array<InsertInboundShipmentInput>>;
  updateInboundShipmentLines?: InputMaybe<Array<UpdateInboundShipmentLineInput>>;
  updateInboundShipments?: InputMaybe<Array<UpdateInboundShipmentInput>>;
};


export type MutationsBatchOutboundShipmentArgs = {
  deleteOutboundShipmentLines?: InputMaybe<Array<DeleteOutboundShipmentLineInput>>;
  deleteOutboundShipmentServiceLines?: InputMaybe<Array<DeleteOutboundShipmentServiceLineInput>>;
  deleteOutboundShipments?: InputMaybe<Array<Scalars['String']>>;
  insertOutboundShipmentLines?: InputMaybe<Array<InsertOutboundShipmentLineInput>>;
  insertOutboundShipmentServiceLines?: InputMaybe<Array<InsertOutboundShipmentServiceLineInput>>;
  insertOutboundShipments?: InputMaybe<Array<InsertOutboundShipmentInput>>;
  updateOutboundShipmentLines?: InputMaybe<Array<UpdateOutboundShipmentLineInput>>;
  updateOutboundShipmentServiceLines?: InputMaybe<Array<UpdateOutboundShipmentServiceLineInput>>;
  updateOutboundShipments?: InputMaybe<Array<UpdateOutboundShipmentInput>>;
};


export type MutationsBatchStocktakeArgs = {
  deleteStocktakeLines?: InputMaybe<Array<DeleteStocktakeLineInput>>;
  deleteStocktakes?: InputMaybe<Array<DeleteStocktakeInput>>;
  insertStocktakeLines?: InputMaybe<Array<InsertStocktakeLineInput>>;
  insertStocktakes?: InputMaybe<Array<InsertStocktakeInput>>;
  updateStocktakeLines?: InputMaybe<Array<UpdateStocktakeLineInput>>;
  updateStocktakes?: InputMaybe<Array<UpdateStocktakeInput>>;
};


export type MutationsBatchSupplierRequisitionArgs = {
  deleteSupplierRequisitionLines?: InputMaybe<Array<DeleteSupplierRequisitionLineInput>>;
  deleteSupplierRequisitions?: InputMaybe<Array<DeleteSupplierRequisitionInput>>;
  insertSupplierRequisitionLines?: InputMaybe<Array<InsertSupplierRequisitionLineInput>>;
  insertSupplierRequisitions?: InputMaybe<Array<InsertSupplierRequisitionInput>>;
  updateSupplierRequisitionLines?: InputMaybe<Array<UpdateSupplierRequisitionLineInput>>;
  updateSupplierRequisitions?: InputMaybe<Array<UpdateSupplierRequisitionInput>>;
};


export type MutationsDeleteCustomerRequisitionArgs = {
  input: DeleteCustomerRequisitionInput;
};


export type MutationsDeleteCustomerRequisitionLineArgs = {
  input: DeleteCustomerRequisitionLineInput;
};


export type MutationsDeleteInboundShipmentArgs = {
  input: DeleteInboundShipmentInput;
};


export type MutationsDeleteInboundShipmentLineArgs = {
  input: DeleteInboundShipmentLineInput;
};


export type MutationsDeleteLocationArgs = {
  input: DeleteLocationInput;
};


export type MutationsDeleteOutboundShipmentArgs = {
  id: Scalars['String'];
};


export type MutationsDeleteOutboundShipmentLineArgs = {
  input: DeleteOutboundShipmentLineInput;
};


export type MutationsDeleteOutboundShipmentServiceLineArgs = {
  input: DeleteOutboundShipmentServiceLineInput;
};


export type MutationsDeleteOutboundShipmentUnallocatedLineArgs = {
  input: DeleteOutboundShipmentUnallocatedLineInput;
};


export type MutationsDeleteStockTakeArgs = {
  input: DeleteStockTakeInput;
  storeId?: InputMaybe<Scalars['String']>;
};


export type MutationsDeleteStockTakeLineArgs = {
  input: DeleteStockTakeLineInput;
  storeId?: InputMaybe<Scalars['String']>;
};


export type MutationsDeleteStocktakeArgs = {
  input: DeleteStocktakeInput;
};


export type MutationsDeleteSupplierRequisitionArgs = {
  input: DeleteSupplierRequisitionInput;
};


export type MutationsDeleteSupplierRequisitionLineArgs = {
  input: DeleteSupplierRequisitionLineInput;
};


export type MutationsInsertCustomerRequisitionArgs = {
  input: InsertCustomerRequisitionInput;
};


export type MutationsInsertCustomerRequisitionLineArgs = {
  input: InsertCustomerRequisitionLineInput;
};


export type MutationsInsertInboundShipmentArgs = {
  input: InsertInboundShipmentInput;
};


export type MutationsInsertInboundShipmentLineArgs = {
  input: InsertInboundShipmentLineInput;
};


export type MutationsInsertLocationArgs = {
  input: InsertLocationInput;
};


export type MutationsInsertOutboundShipmentArgs = {
  input: InsertOutboundShipmentInput;
};


export type MutationsInsertOutboundShipmentLineArgs = {
  input: InsertOutboundShipmentLineInput;
};


export type MutationsInsertOutboundShipmentServiceLineArgs = {
  input: InsertOutboundShipmentServiceLineInput;
};


export type MutationsInsertOutboundShipmentUnallocatedLineArgs = {
  input: InsertOutboundShipmentUnallocatedLineInput;
};


export type MutationsInsertStockTakeArgs = {
  input: InsertStockTakeInput;
  storeId?: InputMaybe<Scalars['String']>;
};


export type MutationsInsertStockTakeLineArgs = {
  input: InsertStockTakeLineInput;
  storeId?: InputMaybe<Scalars['String']>;
};


export type MutationsInsertStocktakeArgs = {
  input: InsertStocktakeInput;
};


export type MutationsInsertSupplierRequisitionArgs = {
  input: InsertSupplierRequisitionInput;
};


export type MutationsInsertSupplierRequisitionLineArgs = {
  input: InsertSupplierRequisitionLineInput;
};


export type MutationsRegisterUserArgs = {
  input: UserRegisterInput;
};


export type MutationsUpdateCustomerRequisitionArgs = {
  input: UpdateCustomerRequisitionInput;
};


export type MutationsUpdateCustomerRequisitionLineArgs = {
  input: UpdateCustomerRequisitionLineInput;
};


export type MutationsUpdateInboundShipmentArgs = {
  input: UpdateInboundShipmentInput;
};


export type MutationsUpdateInboundShipmentLineArgs = {
  input: UpdateInboundShipmentLineInput;
};


export type MutationsUpdateLocationArgs = {
  input: UpdateLocationInput;
};


export type MutationsUpdateOutboundShipmentArgs = {
  input: UpdateOutboundShipmentInput;
};


export type MutationsUpdateOutboundShipmentLineArgs = {
  input: UpdateOutboundShipmentLineInput;
};


export type MutationsUpdateOutboundShipmentServiceLineArgs = {
  input: UpdateOutboundShipmentServiceLineInput;
};


export type MutationsUpdateOutboundShipmentUnallocatedLineArgs = {
  input: UpdateOutboundShipmentUnallocatedLineInput;
};


export type MutationsUpdateStockTakeArgs = {
  input: UpdateStockTakeInput;
  storeId?: InputMaybe<Scalars['String']>;
};


export type MutationsUpdateStockTakeLineArgs = {
  input: UpdateStockTakeLineInput;
  storeId?: InputMaybe<Scalars['String']>;
};


export type MutationsUpdateStocktakeArgs = {
  input: UpdateStocktakeInput;
};


export type MutationsUpdateSupplierRequisitionArgs = {
  input: UpdateSupplierRequisitionInput;
};


export type MutationsUpdateSupplierRequisitionLineArgs = {
  input: UpdateSupplierRequisitionLineInput;
};

export type NameConnector = {
  __typename?: 'NameConnector';
  nodes: Array<NameNode>;
  totalCount: Scalars['Int'];
};

export type NameFilterInput = {
  /** Filter by code */
  code?: InputMaybe<SimpleStringFilterInput>;
  id?: InputMaybe<EqualFilterStringInput>;
  /** Filter by customer property */
  isCustomer?: InputMaybe<Scalars['Boolean']>;
  /** Filter by supplier property */
  isSupplier?: InputMaybe<Scalars['Boolean']>;
  /** Filter by name */
  name?: InputMaybe<SimpleStringFilterInput>;
};

export type NameNode = {
  __typename?: 'NameNode';
  code: Scalars['String'];
  id: Scalars['String'];
  isCustomer: Scalars['Boolean'];
  isSupplier: Scalars['Boolean'];
  name: Scalars['String'];
  store?: Maybe<StoreNode>;
};

export type NameResponse = NameNode | NodeError;

export enum NameSortFieldInput {
  Code = 'code',
  Name = 'name'
}

export type NameSortInput = {
  /**
   * Sort query result is sorted descending or ascending (if not provided the default is
   * ascending)
   */
  desc?: InputMaybe<Scalars['Boolean']>;
  /** Sort query result by `key` */
  key: NameSortFieldInput;
};

export type NamesResponse = ConnectorError | NameConnector;

export type NoRefreshTokenProvided = RefreshTokenErrorInterface & {
  __typename?: 'NoRefreshTokenProvided';
  description: Scalars['String'];
};

/** Generic Error Wrapper */
export type NodeError = {
  __typename?: 'NodeError';
  error: NodeErrorInterface;
};

export type NodeErrorInterface = {
  description: Scalars['String'];
};

export type NotARefreshToken = RefreshTokenErrorInterface & {
  __typename?: 'NotARefreshToken';
  description: Scalars['String'];
};

export type NotAServiceItem = DeleteOutboundShipmentServiceLineErrorInterface & InsertOutboundShipmentServiceLineErrorInterface & UpdateOutboundShipmentServiceLineErrorInterface & {
  __typename?: 'NotAServiceItem';
  description: Scalars['String'];
};

export type NotAnInboundShipment = DeleteInboundShipmentErrorInterface & DeleteInboundShipmentLineErrorInterface & InsertInboundShipmentLineErrorInterface & UpdateInboundShipmentErrorInterface & UpdateInboundShipmentLineErrorInterface & {
  __typename?: 'NotAnInboundShipment';
  description: Scalars['String'];
};

export type NotAnOutboundShipment = DeleteOutboundShipmentErrorInterface & DeleteOutboundShipmentLineErrorInterface & DeleteOutboundShipmentServiceLineErrorInterface & InsertOutboundShipmentLineErrorInterface & InsertOutboundShipmentServiceLineErrorInterface & UpdateOutboundShipmentLineErrorInterface & UpdateOutboundShipmentServiceLineErrorInterface & {
  __typename?: 'NotAnOutboundShipment';
  description: Scalars['String'];
};

export type NotAnOutboundShipmentError = UpdateOutboundShipmentErrorInterface & {
  __typename?: 'NotAnOutboundShipmentError';
  description: Scalars['String'];
};

export type NotEnoughStockForReduction = InsertOutboundShipmentLineErrorInterface & UpdateOutboundShipmentLineErrorInterface & {
  __typename?: 'NotEnoughStockForReduction';
  batch: StockLineResponse;
  description: Scalars['String'];
  line?: Maybe<InvoiceLineResponse>;
};

export type OtherPartyCannotBeThisStoreError = InsertOutboundShipmentErrorInterface & UpdateOutboundShipmentErrorInterface & {
  __typename?: 'OtherPartyCannotBeThisStoreError';
  description: Scalars['String'];
};

export type OtherPartyNotACustomerError = InsertOutboundShipmentErrorInterface & UpdateOutboundShipmentErrorInterface & {
  __typename?: 'OtherPartyNotACustomerError';
  description: Scalars['String'];
  otherParty: NameNode;
};

export type OtherPartyNotASupplier = InsertInboundShipmentErrorInterface & UpdateInboundShipmentErrorInterface & {
  __typename?: 'OtherPartyNotASupplier';
  description: Scalars['String'];
  otherParty: NameNode;
};

export type OutboundInvoiceCounts = {
  __typename?: 'OutboundInvoiceCounts';
  created: InvoiceCountsSummary;
  /** Number of outbound shipments ready to be picked */
  toBePicked: Scalars['Int'];
};

export type PaginationError = ConnectorErrorInterface & {
  __typename?: 'PaginationError';
  description: Scalars['String'];
  rangeError: RangeError;
};

/**
 * Pagination input.
 *
 * Option to limit the number of returned items and/or queries large lists in "pages".
 */
export type PaginationInput = {
  /** Max number of returned items */
  first?: InputMaybe<Scalars['Int']>;
  /** First returned item is at the `offset` position in the full list */
  offset?: InputMaybe<Scalars['Int']>;
};

export type Queries = {
  __typename?: 'Queries';
  apiVersion: Scalars['String'];
  /**
   * Retrieves a new auth bearer and refresh token
   * The refresh token is returned as a cookie
   */
  authToken: AuthTokenResponse;
  invoice: InvoiceResponse;
  invoiceByNumber: InvoiceResponse;
  invoiceCounts: InvoiceCounts;
  invoices: InvoicesResponse;
  /** Query omSupply "item" entries */
  items: ItemsResponse;
  /** Query omSupply "locations" entries */
  locations: LocationsResponse;
  logout: LogoutResponse;
  /** Query omSupply "master_lists" entries */
  masterLists: MasterListsResponse;
  me: UserResponse;
  /** Query omSupply "name" entries */
  names: NamesResponse;
  /**
   * Retrieves a new auth bearer and refresh token
   * The refresh token is returned as a cookie
   */
  refreshToken: RefreshTokenResponse;
  requisition: RequisitionResponse;
  requisitions: RequisitionsResponse;
  stockCounts: StockCounts;
  stockTakes: StockTakesResponse;
  stocktake: StocktakeResponse;
  stocktakes: StocktakesResponse;
  stores: StoresResponse;
};


export type QueriesAuthTokenArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type QueriesInvoiceArgs = {
  id: Scalars['String'];
};


export type QueriesInvoiceByNumberArgs = {
  invoiceNumber: Scalars['Int'];
  type: InvoiceNodeType;
};


export type QueriesInvoiceCountsArgs = {
  timezoneOffset?: InputMaybe<Scalars['Int']>;
};


export type QueriesInvoicesArgs = {
  filter?: InputMaybe<InvoiceFilterInput>;
  page?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<Array<InvoiceSortInput>>;
};


export type QueriesItemsArgs = {
  filter?: InputMaybe<ItemFilterInput>;
  page?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<Array<ItemSortInput>>;
};


export type QueriesLocationsArgs = {
  filter?: InputMaybe<LocationFilterInput>;
  page?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<Array<LocationSortInput>>;
};


export type QueriesMasterListsArgs = {
  filter?: InputMaybe<MasterListFilterInput>;
  page?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<Array<MasterListSortInput>>;
};


export type QueriesNamesArgs = {
  filter?: InputMaybe<NameFilterInput>;
  page?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<Array<NameSortInput>>;
};


export type QueriesRequisitionArgs = {
  id: Scalars['String'];
};


export type QueriesRequisitionsArgs = {
  params?: InputMaybe<RequisitionListParameters>;
};


export type QueriesStockCountsArgs = {
  daysTillExpired?: InputMaybe<Scalars['Int']>;
  timezoneOffset?: InputMaybe<Scalars['Int']>;
};


export type QueriesStockTakesArgs = {
  filter?: InputMaybe<StockTakeFilterInput>;
  page?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<Array<StockTakeSortInput>>;
  storeId?: InputMaybe<Scalars['String']>;
};


export type QueriesStocktakeArgs = {
  id: Scalars['String'];
};


export type QueriesStocktakesArgs = {
  params?: InputMaybe<StocktakeListParameters>;
};


export type QueriesStoresArgs = {
  filter?: InputMaybe<StoreFilterInput>;
  page?: InputMaybe<PaginationInput>;
};

export type RangeError = InsertInboundShipmentLineErrorInterface & InsertOutboundShipmentLineErrorInterface & UpdateInboundShipmentLineErrorInterface & UpdateOutboundShipmentLineErrorInterface & {
  __typename?: 'RangeError';
  description: Scalars['String'];
  field: RangeField;
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
};

export enum RangeField {
  First = 'first',
  NumberOfPacks = 'numberOfPacks',
  PackSize = 'packSize'
}

export type RecordAlreadyExist = InsertInboundShipmentErrorInterface & InsertInboundShipmentLineErrorInterface & InsertLocationErrorInterface & InsertOutboundShipmentErrorInterface & InsertOutboundShipmentLineErrorInterface & InsertOutboundShipmentServiceLineErrorInterface & UserRegisterErrorInterface & {
  __typename?: 'RecordAlreadyExist';
  description: Scalars['String'];
};

export type RecordBelongsToAnotherStore = DeleteLocationErrorInterface & UpdateLocationErrorInterface & {
  __typename?: 'RecordBelongsToAnotherStore';
  description: Scalars['String'];
};

export type RecordDoesNotExist = DeleteOutboundShipmentUnallocatedLineErrorInterface & UpdateOutboundShipmentUnallocatedLineErrorInterface & {
  __typename?: 'RecordDoesNotExist';
  description: Scalars['String'];
};

export type RecordNotFound = DeleteInboundShipmentErrorInterface & DeleteInboundShipmentLineErrorInterface & DeleteLocationErrorInterface & DeleteOutboundShipmentErrorInterface & DeleteOutboundShipmentLineErrorInterface & DeleteOutboundShipmentServiceLineErrorInterface & NodeErrorInterface & UpdateInboundShipmentErrorInterface & UpdateInboundShipmentLineErrorInterface & UpdateLocationErrorInterface & UpdateOutboundShipmentErrorInterface & UpdateOutboundShipmentLineErrorInterface & UpdateOutboundShipmentServiceLineErrorInterface & {
  __typename?: 'RecordNotFound';
  description: Scalars['String'];
};

export type RefreshToken = {
  __typename?: 'RefreshToken';
  /** New Bearer token */
  token: Scalars['String'];
};

/** Generic Error Wrapper */
export type RefreshTokenError = {
  __typename?: 'RefreshTokenError';
  error: RefreshTokenErrorInterface;
};

export type RefreshTokenErrorInterface = {
  description: Scalars['String'];
};

export type RefreshTokenResponse = RefreshToken | RefreshTokenError;

export type RegisteredUser = {
  __typename?: 'RegisteredUser';
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  username: Scalars['String'];
};

export type RequisitionConnector = {
  __typename?: 'RequisitionConnector';
  nodes: Array<RequisitionNode>;
  totalCount: Scalars['Int'];
};

export type RequisitionFilterInput = {
  comment?: InputMaybe<SimpleStringFilterInput>;
  type?: InputMaybe<SimpleStringFilterInput>;
};

export type RequisitionLineConnector = {
  __typename?: 'RequisitionLineConnector';
  nodes: Array<RequisitionLineNode>;
  totalCount: Scalars['Int'];
};

export type RequisitionLineNode = {
  __typename?: 'RequisitionLineNode';
  calculatedQuantity?: Maybe<Scalars['Float']>;
  closingQuantity?: Maybe<Scalars['Float']>;
  comment?: Maybe<Scalars['String']>;
  expiredQuantity?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  imprestQuantity?: Maybe<Scalars['Float']>;
  issuedQuantity?: Maybe<Scalars['Float']>;
  itemCode?: Maybe<Scalars['String']>;
  itemId: Scalars['String'];
  itemName?: Maybe<Scalars['String']>;
  itemUnit?: Maybe<Scalars['String']>;
  monthlyConsumption?: Maybe<Scalars['Float']>;
  monthsOfSupply?: Maybe<Scalars['Float']>;
  openingQuantity?: Maybe<Scalars['Float']>;
  otherPartyClosingQuantity?: Maybe<Scalars['Float']>;
  previousQuantity?: Maybe<Scalars['Float']>;
  previousStockOnHand?: Maybe<Scalars['Float']>;
  receivedQuantity?: Maybe<Scalars['Float']>;
  requestedQuantity?: Maybe<Scalars['Float']>;
  stockAdditions?: Maybe<Scalars['Float']>;
  stockLosses?: Maybe<Scalars['Float']>;
  supplyQuantity?: Maybe<Scalars['Float']>;
};

export type RequisitionLineResponse = NodeError | RequisitionNode;

export type RequisitionLinesResponse = ConnectorError | RequisitionLineConnector;

export type RequisitionListParameters = {
  filter?: InputMaybe<RequisitionFilterInput>;
  page?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<Array<RequisitionSortInput>>;
};

export type RequisitionNode = {
  __typename?: 'RequisitionNode';
  color?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lines: RequisitionLinesResponse;
  maxMOS?: Maybe<Scalars['Int']>;
  orderDate?: Maybe<Scalars['DateTime']>;
  otherParty: NameResponse;
  otherPartyId: Scalars['String'];
  otherPartyName: Scalars['String'];
  requisitionDate?: Maybe<Scalars['DateTime']>;
  requisitionNumber: Scalars['Int'];
  status: SupplierRequisitionNodeStatus;
  theirReference?: Maybe<Scalars['String']>;
  thresholdMOS?: Maybe<Scalars['Int']>;
  type?: Maybe<RequisitionNodeType>;
};

export enum RequisitionNodeType {
  CustomerRequisition = 'CUSTOMER_REQUISITION',
  SupplierRequisition = 'SUPPLIER_REQUISITION'
}

export type RequisitionResponse = NodeError | RequisitionNode;

export enum RequisitionSortFieldInput {
  OtherPartyName = 'otherPartyName'
}

export type RequisitionSortInput = {
  desc?: InputMaybe<Scalars['Boolean']>;
  key: RequisitionSortFieldInput;
};

export type RequisitionsResponse = ConnectorError | RequisitionConnector;

export type SimpleStringFilterInput = {
  /** Search term must be an exact match (case sensitive) */
  equalTo?: InputMaybe<Scalars['String']>;
  /** Search term must be included in search candidate (case insensitive) */
  like?: InputMaybe<Scalars['String']>;
};

export type SnapshotCountCurrentCountMismatch = UpdateStockTakeErrorInterface & {
  __typename?: 'SnapshotCountCurrentCountMismatch';
  description: Scalars['String'];
  lines: StockTakeLineConnector;
};

export type StockCounts = {
  __typename?: 'StockCounts';
  expired: Scalars['Int'];
  expiringSoon: Scalars['Int'];
};

export type StockLineAlreadyExistsInInvoice = InsertOutboundShipmentLineErrorInterface & UpdateOutboundShipmentLineErrorInterface & {
  __typename?: 'StockLineAlreadyExistsInInvoice';
  description: Scalars['String'];
  line: InvoiceLineResponse;
};

/** Generic Connector */
export type StockLineConnector = {
  __typename?: 'StockLineConnector';
  nodes: Array<StockLineNode>;
  totalCount: Scalars['Int'];
};

export type StockLineDoesNotBelongToCurrentStore = InsertOutboundShipmentLineErrorInterface & UpdateOutboundShipmentLineErrorInterface & {
  __typename?: 'StockLineDoesNotBelongToCurrentStore';
  description: Scalars['String'];
};

export type StockLineIsOnHold = InsertOutboundShipmentLineErrorInterface & UpdateOutboundShipmentLineErrorInterface & {
  __typename?: 'StockLineIsOnHold';
  description: Scalars['String'];
};

export type StockLineNode = {
  __typename?: 'StockLineNode';
  availableNumberOfPacks: Scalars['Int'];
  batch?: Maybe<Scalars['String']>;
  costPricePerPack: Scalars['Float'];
  expiryDate?: Maybe<Scalars['NaiveDate']>;
  id: Scalars['String'];
  itemId: Scalars['String'];
  location?: Maybe<LocationResponse>;
  locationId?: Maybe<Scalars['String']>;
  locationName?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  onHold: Scalars['Boolean'];
  packSize: Scalars['Int'];
  sellPricePerPack: Scalars['Float'];
  storeId: Scalars['String'];
  totalNumberOfPacks: Scalars['Int'];
};

export type StockLineResponse = NodeError | StockLineNode;

export type StockLinesResponse = ConnectorError | StockLineConnector;

export type StockTakeConnector = {
  __typename?: 'StockTakeConnector';
  nodes: Array<StockTakeNode>;
  totalCount: Scalars['Int'];
};

export type StockTakeFilterInput = {
  createdDatetime?: InputMaybe<DatetimeFilterInput>;
  finalisedDatetime?: InputMaybe<DatetimeFilterInput>;
  id?: InputMaybe<EqualFilterStringInput>;
  status?: InputMaybe<EqualFilterStockTakeStatusInput>;
  stockTakeNumber?: InputMaybe<EqualFilterBigNumberInput>;
};

export type StockTakeLineConnector = {
  __typename?: 'StockTakeLineConnector';
  nodes: Array<StockTakeLineNode>;
  totalCount: Scalars['Int'];
};

export type StockTakeLineNode = {
  __typename?: 'StockTakeLineNode';
  batch?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  costPricePerPack?: Maybe<Scalars['Float']>;
  countedNumberOfPacks?: Maybe<Scalars['Int']>;
  expiryDate?: Maybe<Scalars['NaiveDate']>;
  id: Scalars['String'];
  item?: Maybe<ItemNode>;
  itemId: Scalars['String'];
  location?: Maybe<LocationNode>;
  note?: Maybe<Scalars['String']>;
  packSize?: Maybe<Scalars['Int']>;
  sellPricePerPack?: Maybe<Scalars['Float']>;
  snapshotNumberOfPacks: Scalars['Int'];
  stockLine?: Maybe<StockLineNode>;
  stockTakeId: Scalars['String'];
};

export type StockTakeNode = {
  __typename?: 'StockTakeNode';
  comment?: Maybe<Scalars['String']>;
  createdDatetime: Scalars['NaiveDateTime'];
  description?: Maybe<Scalars['String']>;
  finalisedDatetime?: Maybe<Scalars['NaiveDateTime']>;
  id: Scalars['String'];
  inventoryAdjustment?: Maybe<InvoiceNode>;
  inventoryAdjustmentId?: Maybe<Scalars['String']>;
  lines: StockTakeLineConnector;
  status: StockTakeNodeStatus;
  stockTakeNumber: Scalars['Int'];
  storeId: Scalars['String'];
};

export enum StockTakeNodeStatus {
  Finalised = 'FINALISED',
  New = 'NEW'
}

export enum StockTakeSortFieldInput {
  CreatedDatetime = 'createdDatetime',
  FinalisedDatetime = 'finalisedDatetime',
  Status = 'status'
}

export type StockTakeSortInput = {
  /**
   * Sort query result is sorted descending or ascending (if not provided the default is
   * ascending)
   */
  desc?: InputMaybe<Scalars['Boolean']>;
  /** Sort query result by `key` */
  key: StockTakeSortFieldInput;
};

export type StockTakesResponse = StockTakeConnector;

export type StocktakeConnector = {
  __typename?: 'StocktakeConnector';
  nodes: Array<StocktakeNode>;
  totalCount: Scalars['Int'];
};

export type StocktakeFilterInput = {
  description?: InputMaybe<SimpleStringFilterInput>;
};

export type StocktakeLineConnector = {
  __typename?: 'StocktakeLineConnector';
  nodes?: Maybe<Array<StocktakeLineNode>>;
  totalCount: Scalars['Int'];
};

export type StocktakeLineNode = {
  __typename?: 'StocktakeLineNode';
  batch?: Maybe<Scalars['String']>;
  costPricePerPack?: Maybe<Scalars['Float']>;
  countedNumberOfPacks?: Maybe<Scalars['Int']>;
  expiryDate?: Maybe<Scalars['NaiveDate']>;
  id: Scalars['String'];
  itemCode: Scalars['String'];
  itemId: Scalars['String'];
  itemName: Scalars['String'];
  packSize?: Maybe<Scalars['Int']>;
  sellPricePerPack?: Maybe<Scalars['Float']>;
  snapshotNumberOfPacks?: Maybe<Scalars['Int']>;
  stockLineId?: Maybe<Scalars['String']>;
};

export type StocktakeLinesResponse = ConnectorError | StocktakeLineConnector;

export type StocktakeListParameters = {
  filter?: InputMaybe<StocktakeFilterInput>;
  page?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<Array<StocktakeSortInput>>;
};

export type StocktakeNode = {
  __typename?: 'StocktakeNode';
  comment?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  enteredByName: Scalars['String'];
  entryDatetime: Scalars['DateTime'];
  id: Scalars['String'];
  lines: StocktakeLinesResponse;
  onHold: Scalars['Boolean'];
  status: StocktakeNodeStatus;
  stocktakeDatetime?: Maybe<Scalars['String']>;
  stocktakeNumber: Scalars['Int'];
};

export enum StocktakeNodeStatus {
  Finalised = 'FINALISED',
  Suggested = 'SUGGESTED'
}

export type StocktakeResponse = NodeError | StocktakeNode;

export enum StocktakeSortFieldInput {
  Description = 'description'
}

export type StocktakeSortInput = {
  desc?: InputMaybe<Scalars['Boolean']>;
  key: StocktakeSortFieldInput;
};

export type StocktakesResponse = NodeError | StocktakeConnector;

export type StoreConnector = {
  __typename?: 'StoreConnector';
  nodes: Array<StoreNode>;
  totalCount: Scalars['Int'];
};

export type StoreFilterInput = {
  id?: InputMaybe<SimpleStringFilterInput>;
};

export type StoreNode = {
  __typename?: 'StoreNode';
  code: Scalars['String'];
  id: Scalars['String'];
};

export type StoresResponse = StoreConnector;

export enum SupplierRequisitionNodeStatus {
  Draft = 'DRAFT',
  Finalised = 'FINALISED',
  InProgress = 'IN_PROGRESS',
  Sent = 'SENT'
}

export type TaxUpdate = {
  /** Set or unset the tax value (in percentage) */
  percentage?: InputMaybe<Scalars['Float']>;
};

export type TokenExpired = RefreshTokenErrorInterface & {
  __typename?: 'TokenExpired';
  description: Scalars['String'];
};

export type UnallocatedLineForItemAlreadyExists = InsertOutboundShipmentUnallocatedLineErrorInterface & {
  __typename?: 'UnallocatedLineForItemAlreadyExists';
  description: Scalars['String'];
};

export type UnallocatedLinesOnlyEditableInNewInvoice = InsertOutboundShipmentUnallocatedLineErrorInterface & {
  __typename?: 'UnallocatedLinesOnlyEditableInNewInvoice';
  description: Scalars['String'];
};

export enum UniqueValueKey {
  Code = 'code'
}

export type UniqueValueViolation = InsertLocationErrorInterface & UpdateLocationErrorInterface & {
  __typename?: 'UniqueValueViolation';
  description: Scalars['String'];
  field: UniqueValueKey;
};

export type UpdateCustomerRequisitionInput = {
  color?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  orderDate?: InputMaybe<Scalars['String']>;
  otherPartyId?: InputMaybe<Scalars['String']>;
  requisitionDate?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<SupplierRequisitionNodeStatus>;
  theirReference?: InputMaybe<Scalars['String']>;
};

export type UpdateCustomerRequisitionLineInput = {
  calculatedQuantity?: InputMaybe<Scalars['Float']>;
  closingQuantity?: InputMaybe<Scalars['Int']>;
  comment?: InputMaybe<Scalars['String']>;
  expiredQuantity?: InputMaybe<Scalars['Float']>;
  id: Scalars['String'];
  imprestQuantity?: InputMaybe<Scalars['Float']>;
  issuedQuantity?: InputMaybe<Scalars['Float']>;
  itemCode?: InputMaybe<Scalars['String']>;
  itemName?: InputMaybe<Scalars['String']>;
  itemUnit?: InputMaybe<Scalars['String']>;
  monthlyConsumption?: InputMaybe<Scalars['Float']>;
  monthsOfSupply?: InputMaybe<Scalars['Float']>;
  openingQuantity?: InputMaybe<Scalars['Float']>;
  otherPartyClosingQuantity?: InputMaybe<Scalars['Int']>;
  previousQuantity?: InputMaybe<Scalars['Float']>;
  previousStockOnHand?: InputMaybe<Scalars['Float']>;
  receivedQuantity?: InputMaybe<Scalars['Float']>;
  requestedQuantity?: InputMaybe<Scalars['Float']>;
  stockAdditions?: InputMaybe<Scalars['Float']>;
  stockLosses?: InputMaybe<Scalars['Float']>;
  supplyQuantity?: InputMaybe<Scalars['Float']>;
};

export type UpdateCustomerRequisitionLineResponse = NodeError | RequisitionLineNode;

export type UpdateCustomerRequisitionLineResponseWithId = {
  __typename?: 'UpdateCustomerRequisitionLineResponseWithId';
  id: Scalars['String'];
  response?: Maybe<UpdateCustomerRequisitionLineResponse>;
};

export type UpdateCustomerRequisitionResponse = NodeError | RequisitionNode;

export type UpdateCustomerRequisitionResponseWithId = {
  __typename?: 'UpdateCustomerRequisitionResponseWithId';
  id: Scalars['String'];
  response?: Maybe<UpdateCustomerRequisitionResponse>;
};

/** Generic Error Wrapper */
export type UpdateInboundShipmentError = {
  __typename?: 'UpdateInboundShipmentError';
  error: UpdateInboundShipmentErrorInterface;
};

export type UpdateInboundShipmentErrorInterface = {
  description: Scalars['String'];
};

export type UpdateInboundShipmentInput = {
  color?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  onHold?: InputMaybe<Scalars['Boolean']>;
  otherPartyId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UpdateInboundShipmentStatusInput>;
  theirReference?: InputMaybe<Scalars['String']>;
};

/** Generic Error Wrapper */
export type UpdateInboundShipmentLineError = {
  __typename?: 'UpdateInboundShipmentLineError';
  error: UpdateInboundShipmentLineErrorInterface;
};

export type UpdateInboundShipmentLineErrorInterface = {
  description: Scalars['String'];
};

export type UpdateInboundShipmentLineInput = {
  batch?: InputMaybe<Scalars['String']>;
  costPricePerPack?: InputMaybe<Scalars['Float']>;
  expiryDate?: InputMaybe<Scalars['NaiveDate']>;
  id: Scalars['String'];
  invoiceId: Scalars['String'];
  itemId?: InputMaybe<Scalars['String']>;
  locationId?: InputMaybe<Scalars['String']>;
  numberOfPacks?: InputMaybe<Scalars['Int']>;
  packSize?: InputMaybe<Scalars['Int']>;
  sellPricePerPack?: InputMaybe<Scalars['Float']>;
};

export type UpdateInboundShipmentLineResponse = InvoiceLineNode | NodeError | UpdateInboundShipmentLineError;

export type UpdateInboundShipmentLineResponseWithId = {
  __typename?: 'UpdateInboundShipmentLineResponseWithId';
  id: Scalars['String'];
  response: UpdateInboundShipmentLineResponse;
};

export type UpdateInboundShipmentResponse = InvoiceNode | NodeError | UpdateInboundShipmentError;

export type UpdateInboundShipmentResponseWithId = {
  __typename?: 'UpdateInboundShipmentResponseWithId';
  id: Scalars['String'];
  response: UpdateInboundShipmentResponse;
};

export enum UpdateInboundShipmentStatusInput {
  Delivered = 'DELIVERED',
  Verified = 'VERIFIED'
}

export type UpdateLocationError = {
  __typename?: 'UpdateLocationError';
  error: UpdateLocationErrorInterface;
};

export type UpdateLocationErrorInterface = {
  description: Scalars['String'];
};

export type UpdateLocationInput = {
  code?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  onHold?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateLocationResponse = LocationNode | UpdateLocationError;

/** Generic Error Wrapper */
export type UpdateOutboundShipmentError = {
  __typename?: 'UpdateOutboundShipmentError';
  error: UpdateOutboundShipmentErrorInterface;
};

export type UpdateOutboundShipmentErrorInterface = {
  description: Scalars['String'];
};

export type UpdateOutboundShipmentInput = {
  color?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  /** The new invoice id provided by the client */
  id: Scalars['String'];
  onHold?: InputMaybe<Scalars['Boolean']>;
  /**
   * The other party must be a customer of the current store.
   * This field can be used to change the other_party of an invoice
   */
  otherPartyId?: InputMaybe<Scalars['String']>;
  /**
   * When changing the status from DRAFT to CONFIRMED or FINALISED the total_number_of_packs for
   * existing invoice items gets updated.
   */
  status?: InputMaybe<UpdateOutboundShipmentStatusInput>;
  /** External invoice reference, e.g. purchase or shipment number */
  theirReference?: InputMaybe<Scalars['String']>;
};

/** Generic Error Wrapper */
export type UpdateOutboundShipmentLineError = {
  __typename?: 'UpdateOutboundShipmentLineError';
  error: UpdateOutboundShipmentLineErrorInterface;
};

export type UpdateOutboundShipmentLineErrorInterface = {
  description: Scalars['String'];
};

export type UpdateOutboundShipmentLineInput = {
  id: Scalars['String'];
  invoiceId: Scalars['String'];
  itemId?: InputMaybe<Scalars['String']>;
  numberOfPacks?: InputMaybe<Scalars['Int']>;
  stockLineId?: InputMaybe<Scalars['String']>;
  tax?: InputMaybe<TaxUpdate>;
  totalAfterTax?: InputMaybe<Scalars['Float']>;
  totalBeforeTax?: InputMaybe<Scalars['Float']>;
};

export type UpdateOutboundShipmentLineResponse = InvoiceLineNode | NodeError | UpdateOutboundShipmentLineError;

export type UpdateOutboundShipmentLineResponseWithId = {
  __typename?: 'UpdateOutboundShipmentLineResponseWithId';
  id: Scalars['String'];
  response: UpdateOutboundShipmentLineResponse;
};

export type UpdateOutboundShipmentResponse = InvoiceNode | NodeError | UpdateOutboundShipmentError;

export type UpdateOutboundShipmentResponseWithId = {
  __typename?: 'UpdateOutboundShipmentResponseWithId';
  id: Scalars['String'];
  response: UpdateOutboundShipmentResponse;
};

/** Generic Error Wrapper */
export type UpdateOutboundShipmentServiceLineError = {
  __typename?: 'UpdateOutboundShipmentServiceLineError';
  error: UpdateOutboundShipmentServiceLineErrorInterface;
};

export type UpdateOutboundShipmentServiceLineErrorInterface = {
  description: Scalars['String'];
};

export type UpdateOutboundShipmentServiceLineInput = {
  id: Scalars['String'];
  invoiceId: Scalars['String'];
  itemId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  tax?: InputMaybe<TaxUpdate>;
  totalAfterTax?: InputMaybe<Scalars['Float']>;
  totalBeforeTax?: InputMaybe<Scalars['Float']>;
};

export type UpdateOutboundShipmentServiceLineResponse = InvoiceLineNode | UpdateOutboundShipmentServiceLineError;

export type UpdateOutboundShipmentServiceLineResponseWithId = {
  __typename?: 'UpdateOutboundShipmentServiceLineResponseWithId';
  id: Scalars['String'];
  response: UpdateOutboundShipmentServiceLineResponse;
};

export enum UpdateOutboundShipmentStatusInput {
  Allocated = 'ALLOCATED',
  Picked = 'PICKED',
  Shipped = 'SHIPPED'
}

export type UpdateOutboundShipmentUnallocatedLineError = {
  __typename?: 'UpdateOutboundShipmentUnallocatedLineError';
  error: UpdateOutboundShipmentUnallocatedLineErrorInterface;
};

export type UpdateOutboundShipmentUnallocatedLineErrorInterface = {
  description: Scalars['String'];
};

export type UpdateOutboundShipmentUnallocatedLineInput = {
  id: Scalars['String'];
  quantity: Scalars['Int'];
};

export type UpdateOutboundShipmentUnallocatedLineResponse = InvoiceLineNode | UpdateOutboundShipmentUnallocatedLineError;

export type UpdateStockTakeError = {
  __typename?: 'UpdateStockTakeError';
  error: UpdateStockTakeErrorInterface;
};

export type UpdateStockTakeErrorInterface = {
  description: Scalars['String'];
};

export type UpdateStockTakeInput = {
  comment?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  status?: InputMaybe<StockTakeNodeStatus>;
};

export type UpdateStockTakeLineInput = {
  batch?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  costPricePerPack?: InputMaybe<Scalars['Float']>;
  countedNumberOfPacks?: InputMaybe<Scalars['Int']>;
  expiryDate?: InputMaybe<Scalars['NaiveDate']>;
  id: Scalars['String'];
  locationId?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  packSize?: InputMaybe<Scalars['Int']>;
  sellPricePerPack?: InputMaybe<Scalars['Float']>;
  snapshotNumberOfPacks?: InputMaybe<Scalars['Int']>;
};

export type UpdateStockTakeLineResponse = StockTakeLineNode;

export type UpdateStockTakeResponse = StockTakeNode | UpdateStockTakeError;

export type UpdateStocktakeInput = {
  comment?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  onHold?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<StocktakeNodeStatus>;
  stocktakeDatetime?: InputMaybe<Scalars['String']>;
};

export type UpdateStocktakeLineInput = {
  batch?: InputMaybe<Scalars['String']>;
  costPricePerPack?: InputMaybe<Scalars['Float']>;
  countedNumPacks?: InputMaybe<Scalars['Int']>;
  expiryDate?: InputMaybe<Scalars['NaiveDate']>;
  id: Scalars['String'];
  sellPricePerPack?: InputMaybe<Scalars['Float']>;
};

export type UpdateStocktakeLineResponse = NodeError | StocktakeLineNode;

export type UpdateStocktakeLineResponseWithId = {
  __typename?: 'UpdateStocktakeLineResponseWithId';
  id: Scalars['String'];
  response?: Maybe<UpdateStocktakeLineResponse>;
};

export type UpdateStocktakeResponse = NodeError | StocktakeNode;

export type UpdateStocktakeResponseWithId = {
  __typename?: 'UpdateStocktakeResponseWithId';
  id: Scalars['String'];
  response?: Maybe<UpdateStocktakeResponse>;
};

export type UpdateSupplierRequisitionInput = {
  color?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  orderDate?: InputMaybe<Scalars['String']>;
  otherPartyId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<SupplierRequisitionNodeStatus>;
  theirReference?: InputMaybe<Scalars['String']>;
};

export type UpdateSupplierRequisitionLineInput = {
  calculatedQuantity?: InputMaybe<Scalars['Float']>;
  closingQuantity?: InputMaybe<Scalars['Int']>;
  comment?: InputMaybe<Scalars['String']>;
  expiredQuantity?: InputMaybe<Scalars['Float']>;
  id: Scalars['String'];
  imprestQuantity?: InputMaybe<Scalars['Float']>;
  issuedQuantity?: InputMaybe<Scalars['Float']>;
  itemCode?: InputMaybe<Scalars['String']>;
  itemName?: InputMaybe<Scalars['String']>;
  itemUnit?: InputMaybe<Scalars['String']>;
  monthlyConsumption?: InputMaybe<Scalars['Float']>;
  monthsOfSupply?: InputMaybe<Scalars['Float']>;
  openingQuantity?: InputMaybe<Scalars['Float']>;
  otherPartyClosingQuantity?: InputMaybe<Scalars['Int']>;
  previousQuantity?: InputMaybe<Scalars['Float']>;
  previousStockOnHand?: InputMaybe<Scalars['Float']>;
  receivedQuantity?: InputMaybe<Scalars['Float']>;
  requestedQuantity?: InputMaybe<Scalars['Float']>;
  stockAdditions?: InputMaybe<Scalars['Float']>;
  stockLosses?: InputMaybe<Scalars['Float']>;
  supplyQuantity?: InputMaybe<Scalars['Float']>;
};

export type UpdateSupplierRequisitionLineResponse = NodeError | RequisitionLineNode;

export type UpdateSupplierRequisitionLineResponseWithId = {
  __typename?: 'UpdateSupplierRequisitionLineResponseWithId';
  id: Scalars['String'];
  response?: Maybe<UpdateSupplierRequisitionLineResponse>;
};

export type UpdateSupplierRequisitionResponse = NodeError | RequisitionNode;

export type UpdateSupplierRequisitionResponseWithId = {
  __typename?: 'UpdateSupplierRequisitionResponseWithId';
  id: Scalars['String'];
  response?: Maybe<UpdateSupplierRequisitionResponse>;
};

export type User = {
  __typename?: 'User';
  /** The user's email address */
  email?: Maybe<Scalars['String']>;
  /** Internal user id */
  userId: Scalars['String'];
};

export type UserNameDoesNotExist = AuthTokenErrorInterface & {
  __typename?: 'UserNameDoesNotExist';
  description: Scalars['String'];
};

/** Generic Error Wrapper */
export type UserRegisterError = {
  __typename?: 'UserRegisterError';
  error: UserRegisterErrorInterface;
};

export type UserRegisterErrorInterface = {
  description: Scalars['String'];
};

export type UserRegisterInput = {
  email?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserRegisterResponse = RegisteredUser | UserRegisterError;

export type UserResponse = User;

export type InvoiceQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type InvoiceQuery = { __typename?: 'Queries', invoice: { __typename: 'InvoiceNode', id: string, comment?: string | null, createdDatetime: string, allocatedDatetime?: string | null, deliveredDatetime?: string | null, pickedDatetime?: string | null, shippedDatetime?: string | null, verifiedDatetime?: string | null, invoiceNumber: number, color?: string | null, onHold: boolean, otherPartyId: string, otherPartyName: string, status: InvoiceNodeStatus, theirReference?: string | null, type: InvoiceNodeType, otherParty: { __typename: 'NameNode', id: string, name: string, code: string, isCustomer: boolean, isSupplier: boolean } | { __typename: 'NodeError', error: { __typename: 'DatabaseError', description: string, fullError: string } | { __typename: 'RecordNotFound', description: string } }, lines: { __typename: 'ConnectorError', error: { __typename: 'DatabaseError', description: string, fullError: string } | { __typename?: 'PaginationError', description: string } } | { __typename: 'InvoiceLineConnector', totalCount: number, nodes: Array<{ __typename: 'InvoiceLineNode', type: InvoiceLineNodeType, batch?: string | null, costPricePerPack: number, expiryDate?: string | null, id: string, itemCode: string, itemId: string, itemName: string, numberOfPacks: number, packSize: number, note?: string | null, invoiceId: string, locationName?: string | null, sellPricePerPack: number, location?: { __typename: 'LocationNode', id: string, name: string, code: string, onHold: boolean, stock: { __typename: 'ConnectorError', error: { __typename: 'DatabaseError', description: string, fullError: string } | { __typename?: 'PaginationError', description: string } } | { __typename: 'StockLineConnector', totalCount: number, nodes: Array<{ __typename?: 'StockLineNode', id: string, costPricePerPack: number, itemId: string, availableNumberOfPacks: number, onHold: boolean, packSize: number, sellPricePerPack: number, storeId: string, totalNumberOfPacks: number }> } } | { __typename: 'NodeError', error: { __typename: 'DatabaseError', description: string, fullError: string } | { __typename: 'RecordNotFound', description: string } } | null, item: { __typename: 'ItemError', error: { __typename: 'InternalError', description: string, fullError: string } } | { __typename: 'ItemNode', id: string, name: string, code: string, isVisible: boolean, unitName?: string | null, availableBatches: { __typename: 'ConnectorError', error: { __typename?: 'DatabaseError', description: string } | { __typename?: 'PaginationError', description: string } } | { __typename?: 'StockLineConnector', totalCount: number, nodes: Array<{ __typename?: 'StockLineNode', id: string, availableNumberOfPacks: number, costPricePerPack: number, itemId: string, onHold: boolean, packSize: number, sellPricePerPack: number, storeId: string, totalNumberOfPacks: number, expiryDate?: string | null }> } }, stockLine?: { __typename: 'NodeError', error: { __typename: 'DatabaseError', description: string, fullError: string } | { __typename: 'RecordNotFound', description: string } } | { __typename: 'StockLineNode', availableNumberOfPacks: number, batch?: string | null, costPricePerPack: number, expiryDate?: string | null, id: string, itemId: string, packSize: number, sellPricePerPack: number, storeId: string, totalNumberOfPacks: number, onHold: boolean, note?: string | null } | null }> }, pricing: { __typename: 'InvoicePricingNode', totalAfterTax: number, totalBeforeTax: number, stockTotalBeforeTax: number, stockTotalAfterTax: number, serviceTotalAfterTax: number, serviceTotalBeforeTax: number } | { __typename: 'NodeError', error: { __typename: 'DatabaseError', description: string, fullError: string } | { __typename: 'RecordNotFound', description: string } } } | { __typename: 'NodeError', error: { __typename: 'DatabaseError', description: string, fullError: string } | { __typename: 'RecordNotFound', description: string } } };

export type StocktakeQueryVariables = Exact<{
  stocktakeId: Scalars['String'];
}>;


export type StocktakeQuery = { __typename?: 'Queries', stocktake: { __typename: 'NodeError' } | { __typename: 'StocktakeNode', id: string, stocktakeNumber: number, comment?: string | null, stocktakeDatetime?: string | null, status: StocktakeNodeStatus, description?: string | null, entryDatetime: string, enteredByName: string, onHold: boolean, lines: { __typename: 'ConnectorError', error: { __typename?: 'DatabaseError', description: string } | { __typename?: 'PaginationError', description: string } } | { __typename: 'StocktakeLineConnector', totalCount: number, nodes?: Array<{ __typename: 'StocktakeLineNode', batch?: string | null, itemCode: string, itemName: string, itemId: string, id: string, expiryDate?: string | null, packSize?: number | null, snapshotNumberOfPacks?: number | null, countedNumberOfPacks?: number | null, sellPricePerPack?: number | null, costPricePerPack?: number | null }> | null } } };

export type UpdateStocktakeMutationVariables = Exact<{
  input: UpdateStocktakeInput;
}>;


export type UpdateStocktakeMutation = { __typename?: 'Mutations', updateStocktake: { __typename?: 'NodeError' } | { __typename: 'StocktakeNode', id: string } };

export type UpsertStocktakeLinesMutationVariables = Exact<{
  deleteStocktakeLines?: InputMaybe<Array<DeleteStocktakeLineInput> | DeleteStocktakeLineInput>;
  insertStocktakeLines?: InputMaybe<Array<InsertStocktakeLineInput> | InsertStocktakeLineInput>;
  updateStocktakeLines?: InputMaybe<Array<UpdateStocktakeLineInput> | UpdateStocktakeLineInput>;
}>;


export type UpsertStocktakeLinesMutation = { __typename?: 'Mutations', batchStocktake: { __typename: 'BatchStocktakeResponse', updateStocktakes?: Array<{ __typename: 'UpdateStocktakeResponseWithId', id: string }> | null, insertStocktakeLines?: Array<{ __typename: 'InsertStocktakeLineResponseWithId', id: string }> | null, deleteStocktakeLines?: Array<{ __typename: 'DeleteStocktakeLineResponseWithId', id: string }> | null, updateStocktakeLines?: Array<{ __typename: 'UpdateStocktakeLineResponseWithId', id: string }> | null } };

export type StocktakesQueryVariables = Exact<{
  params?: InputMaybe<StocktakeListParameters>;
}>;


export type StocktakesQuery = { __typename?: 'Queries', stocktakes: { __typename: 'NodeError' } | { __typename: 'StocktakeConnector', totalCount: number, nodes: Array<{ __typename?: 'StocktakeNode', id: string, comment?: string | null, description?: string | null, stocktakeDatetime?: string | null, stocktakeNumber: number, status: StocktakeNodeStatus }> } };

export type DeleteStocktakesMutationVariables = Exact<{
  ids?: InputMaybe<Array<DeleteStocktakeInput> | DeleteStocktakeInput>;
}>;


export type DeleteStocktakesMutation = { __typename?: 'Mutations', batchStocktake: { __typename: 'BatchStocktakeResponse', deleteStocktakes?: Array<{ __typename: 'DeleteStocktakeResponseWithId', id: string }> | null } };

export type InsertStocktakeMutationVariables = Exact<{
  input: InsertStocktakeInput;
}>;


export type InsertStocktakeMutation = { __typename?: 'Mutations', insertStocktake: { __typename?: 'NodeError' } | { __typename: 'StocktakeNode', id: string } };

export type RequisitionsQueryVariables = Exact<{
  params?: InputMaybe<RequisitionListParameters>;
}>;


export type RequisitionsQuery = { __typename?: 'Queries', requisitions: { __typename: 'ConnectorError', error: { __typename: 'DatabaseError', description: string, fullError: string } | { __typename?: 'PaginationError', description: string } } | { __typename: 'RequisitionConnector', totalCount: number, nodes: Array<{ __typename?: 'RequisitionNode', id: string, comment?: string | null, orderDate?: string | null, theirReference?: string | null, requisitionNumber: number, status: SupplierRequisitionNodeStatus, otherPartyName: string, otherPartyId: string, color?: string | null }> } };

export type DeleteSupplierRequisitionsMutationVariables = Exact<{
  ids?: InputMaybe<Array<DeleteSupplierRequisitionInput> | DeleteSupplierRequisitionInput>;
}>;


export type DeleteSupplierRequisitionsMutation = { __typename?: 'Mutations', batchSupplierRequisition: { __typename: 'BatchSupplierRequisitionResponse', deleteSupplierRequisitions?: Array<{ __typename: 'DeleteSupplierRequisitionResponseWithId', id: string }> | null } };

export type UpdateSupplierRequisitionMutationVariables = Exact<{
  input: UpdateSupplierRequisitionInput;
}>;


export type UpdateSupplierRequisitionMutation = { __typename?: 'Mutations', updateSupplierRequisition: { __typename?: 'NodeError' } | { __typename: 'RequisitionNode', id: string } };

export type InsertSupplierRequisitionMutationVariables = Exact<{
  input: InsertSupplierRequisitionInput;
}>;


export type InsertSupplierRequisitionMutation = { __typename?: 'Mutations', insertSupplierRequisition: { __typename?: 'NodeError' } | { __typename: 'RequisitionNode', id: string } };

export type DeleteCustomerRequisitionsMutationVariables = Exact<{
  ids?: InputMaybe<Array<DeleteCustomerRequisitionInput> | DeleteCustomerRequisitionInput>;
}>;


export type DeleteCustomerRequisitionsMutation = { __typename?: 'Mutations', batchCustomerRequisition: { __typename: 'BatchCustomerRequisitionResponse', deleteCustomerRequisitions?: Array<{ __typename: 'DeleteCustomerRequisitionResponseWithId', id: string }> | null } };

export type UpdateCustomerRequisitionMutationVariables = Exact<{
  input: UpdateCustomerRequisitionInput;
}>;


export type UpdateCustomerRequisitionMutation = { __typename?: 'Mutations', updateCustomerRequisition: { __typename?: 'NodeError' } | { __typename: 'RequisitionNode', id: string } };

export type InsertCustomerRequisitionMutationVariables = Exact<{
  input: InsertCustomerRequisitionInput;
}>;


export type InsertCustomerRequisitionMutation = { __typename?: 'Mutations', insertCustomerRequisition: { __typename?: 'NodeError' } | { __typename: 'RequisitionNode', id: string } };

export type RequisitionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type RequisitionQuery = { __typename?: 'Queries', requisition: { __typename: 'NodeError' } | { __typename: 'RequisitionNode', id: string, orderDate?: string | null, requisitionDate?: string | null, comment?: string | null, theirReference?: string | null, type?: RequisitionNodeType | null, requisitionNumber: number, thresholdMOS?: number | null, maxMOS?: number | null, status: SupplierRequisitionNodeStatus, otherPartyId: string, lines: { __typename: 'ConnectorError', error: { __typename?: 'DatabaseError', description: string } | { __typename?: 'PaginationError', description: string } } | { __typename: 'RequisitionLineConnector', totalCount: number, nodes: Array<{ __typename?: 'RequisitionLineNode', id: string, itemName?: string | null, itemCode?: string | null, itemUnit?: string | null, itemId: string, comment?: string | null, monthlyConsumption?: number | null, monthsOfSupply?: number | null, supplyQuantity?: number | null, openingQuantity?: number | null, issuedQuantity?: number | null, requestedQuantity?: number | null, receivedQuantity?: number | null, imprestQuantity?: number | null, previousQuantity?: number | null, calculatedQuantity?: number | null, previousStockOnHand?: number | null, closingQuantity?: number | null, stockAdditions?: number | null, stockLosses?: number | null, expiredQuantity?: number | null, otherPartyClosingQuantity?: number | null }> }, otherParty: { __typename: 'NameNode', id: string, name: string, code: string, isCustomer: boolean, isSupplier: boolean } | { __typename: 'NodeError', error: { __typename?: 'DatabaseError', description: string } | { __typename?: 'RecordNotFound', description: string } } } };

export type UpsertSupplierRequisitionMutationVariables = Exact<{
  deleteSupplierRequisitionLines?: InputMaybe<Array<DeleteSupplierRequisitionLineInput> | DeleteSupplierRequisitionLineInput>;
  insertSupplierRequisitionLines?: InputMaybe<Array<InsertSupplierRequisitionLineInput> | InsertSupplierRequisitionLineInput>;
  updateSupplierRequisitionLines?: InputMaybe<Array<UpdateSupplierRequisitionLineInput> | UpdateSupplierRequisitionLineInput>;
  updateSupplierRequisitions?: InputMaybe<Array<UpdateSupplierRequisitionInput> | UpdateSupplierRequisitionInput>;
}>;


export type UpsertSupplierRequisitionMutation = { __typename?: 'Mutations', batchSupplierRequisition: { __typename: 'BatchSupplierRequisitionResponse', updateSupplierRequisitions?: Array<{ __typename: 'UpdateSupplierRequisitionResponseWithId', id: string }> | null, insertSupplierRequisitionLines?: Array<{ __typename: 'InsertSupplierRequisitionLineResponseWithId', id: string }> | null, deleteSupplierRequisitionLines?: Array<{ __typename: 'DeleteSupplierRequisitionLineResponseWithId', id: string }> | null, updateSupplierRequisitionLines?: Array<{ __typename: 'UpdateSupplierRequisitionLineResponseWithId', id: string }> | null } };

export type UpsertCustomerRequisitionMutationVariables = Exact<{
  deleteCustomerRequisitionLines?: InputMaybe<Array<DeleteCustomerRequisitionLineInput> | DeleteCustomerRequisitionLineInput>;
  insertCustomerRequisitionLines?: InputMaybe<Array<InsertCustomerRequisitionLineInput> | InsertCustomerRequisitionLineInput>;
  updateCustomerRequisitionLines?: InputMaybe<Array<UpdateCustomerRequisitionLineInput> | UpdateCustomerRequisitionLineInput>;
  updateCustomerRequisitions?: InputMaybe<Array<UpdateCustomerRequisitionInput> | UpdateCustomerRequisitionInput>;
}>;


export type UpsertCustomerRequisitionMutation = { __typename?: 'Mutations', batchCustomerRequisition: { __typename: 'BatchCustomerRequisitionResponse', updateCustomerRequisitions?: Array<{ __typename: 'UpdateCustomerRequisitionResponseWithId', id: string }> | null, insertCustomerRequisitionLines?: Array<{ __typename: 'InsertCustomerRequisitionLineResponseWithId', id: string }> | null, deleteCustomerRequisitionLines?: Array<{ __typename: 'DeleteCustomerRequisitionLineResponseWithId', id: string }> | null, updateCustomerRequisitionLines?: Array<{ __typename: 'UpdateCustomerRequisitionLineResponseWithId', id: string }> | null } };

export type InvoicesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  key: InvoiceSortFieldInput;
  desc?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<InvoiceFilterInput>;
}>;


export type InvoicesQuery = { __typename?: 'Queries', invoices: { __typename: 'ConnectorError', error: { __typename: 'DatabaseError', description: string, fullError: string } | { __typename: 'PaginationError', description: string, rangeError: { __typename?: 'RangeError', description: string, field: RangeField, max?: number | null, min?: number | null } } } | { __typename: 'InvoiceConnector', totalCount: number, nodes: Array<{ __typename?: 'InvoiceNode', comment?: string | null, createdDatetime: string, allocatedDatetime?: string | null, deliveredDatetime?: string | null, pickedDatetime?: string | null, shippedDatetime?: string | null, verifiedDatetime?: string | null, id: string, invoiceNumber: number, otherPartyId: string, otherPartyName: string, theirReference?: string | null, type: InvoiceNodeType, status: InvoiceNodeStatus, color?: string | null, pricing: { __typename: 'InvoicePricingNode', totalAfterTax: number, totalBeforeTax: number, stockTotalBeforeTax: number, stockTotalAfterTax: number, serviceTotalAfterTax: number, serviceTotalBeforeTax: number } | { __typename: 'NodeError', error: { __typename: 'DatabaseError', description: string, fullError: string } | { __typename: 'RecordNotFound', description: string } } }> } };

export type NamesQueryVariables = Exact<{
  key: NameSortFieldInput;
  desc?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<NameFilterInput>;
}>;


export type NamesQuery = { __typename?: 'Queries', names: { __typename: 'ConnectorError', error: { __typename: 'DatabaseError', description: string, fullError: string } | { __typename: 'PaginationError', description: string, rangeError: { __typename?: 'RangeError', description: string, field: RangeField, max?: number | null, min?: number | null } } } | { __typename: 'NameConnector', totalCount: number, nodes: Array<{ __typename?: 'NameNode', code: string, id: string, isCustomer: boolean, isSupplier: boolean, name: string }> } };

export type ItemsWithStockLinesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  key: ItemSortFieldInput;
  desc?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<ItemFilterInput>;
}>;


export type ItemsWithStockLinesQuery = { __typename?: 'Queries', items: { __typename: 'ConnectorError', error: { __typename: 'DatabaseError', description: string, fullError: string } | { __typename: 'PaginationError', description: string, rangeError: { __typename?: 'RangeError', description: string, field: RangeField, max?: number | null, min?: number | null } } } | { __typename: 'ItemConnector', totalCount: number, nodes: Array<{ __typename: 'ItemNode', code: string, id: string, isVisible: boolean, name: string, unitName?: string | null, availableBatches: { __typename: 'ConnectorError', error: { __typename: 'DatabaseError', description: string, fullError: string } | { __typename: 'PaginationError', description: string, rangeError: { __typename?: 'RangeError', description: string, field: RangeField, max?: number | null, min?: number | null } } } | { __typename: 'StockLineConnector', totalCount: number, nodes: Array<{ __typename: 'StockLineNode', availableNumberOfPacks: number, batch?: string | null, costPricePerPack: number, expiryDate?: string | null, id: string, itemId: string, packSize: number, sellPricePerPack: number, totalNumberOfPacks: number, onHold: boolean, note?: string | null, storeId: string, locationName?: string | null }> } }> } };

export type ItemsListViewQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  key: ItemSortFieldInput;
  desc?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<ItemFilterInput>;
}>;


export type ItemsListViewQuery = { __typename?: 'Queries', items: { __typename: 'ConnectorError', error: { __typename: 'DatabaseError', description: string, fullError: string } | { __typename: 'PaginationError', description: string, rangeError: { __typename?: 'RangeError', description: string, field: RangeField, max?: number | null, min?: number | null } } } | { __typename: 'ItemConnector', totalCount: number, nodes: Array<{ __typename: 'ItemNode', code: string, id: string, isVisible: boolean, name: string, unitName?: string | null }> } };

export type InsertOutboundShipmentMutationVariables = Exact<{
  id: Scalars['String'];
  otherPartyId: Scalars['String'];
}>;


export type InsertOutboundShipmentMutation = { __typename?: 'Mutations', insertOutboundShipment: { __typename: 'InsertOutboundShipmentError', error: { __typename: 'DatabaseError', description: string, fullError: string } | { __typename: 'ForeignKeyError', description: string, key: ForeignKey } | { __typename: 'OtherPartyCannotBeThisStoreError', description: string } | { __typename: 'OtherPartyNotACustomerError', description: string, otherParty: { __typename?: 'NameNode', code: string, id: string, isCustomer: boolean, isSupplier: boolean, name: string } } | { __typename: 'RecordAlreadyExist', description: string } } | { __typename: 'InvoiceNode', id: string } | { __typename: 'NodeError', error: { __typename: 'DatabaseError', description: string, fullError: string } | { __typename: 'RecordNotFound', description: string } } };

export type UpdateOutboundShipmentMutationVariables = Exact<{
  input: UpdateOutboundShipmentInput;
}>;


export type UpdateOutboundShipmentMutation = { __typename?: 'Mutations', updateOutboundShipment: { __typename: 'InvoiceNode', id: string } | { __typename: 'NodeError', error: { __typename: 'DatabaseError', description: string, fullError: string } | { __typename: 'RecordNotFound', description: string } } | { __typename: 'UpdateOutboundShipmentError', error: { __typename?: 'CanOnlyChangeToAllocatedWhenNoUnallocatedLines', description: string } | { __typename?: 'CanOnlyEditInvoicesInLoggedInStoreError', description: string } | { __typename?: 'CannotChangeStatusOfInvoiceOnHold', description: string } | { __typename?: 'CannotReverseInvoiceStatus', description: string } | { __typename?: 'DatabaseError', description: string } | { __typename?: 'ForeignKeyError', description: string } | { __typename?: 'InvoiceIsNotEditable', description: string } | { __typename?: 'InvoiceLineHasNoStockLineError', description: string } | { __typename?: 'NotAnOutboundShipmentError', description: string } | { __typename?: 'OtherPartyCannotBeThisStoreError', description: string } | { __typename?: 'OtherPartyNotACustomerError', description: string } | { __typename?: 'RecordNotFound', description: string } } };

export type DeleteOutboundShipmentsMutationVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type DeleteOutboundShipmentsMutation = { __typename?: 'Mutations', batchOutboundShipment: { __typename: 'BatchOutboundShipmentResponse', deleteOutboundShipments?: Array<{ __typename: 'DeleteOutboundShipmentResponseWithId', id: string }> | null } };

export type InvoiceCountsQueryVariables = Exact<{
  timezoneOffset?: InputMaybe<Scalars['Int']>;
}>;


export type InvoiceCountsQuery = { __typename?: 'Queries', invoiceCounts: { __typename?: 'InvoiceCounts', outbound: { __typename?: 'OutboundInvoiceCounts', toBePicked: number, created: { __typename?: 'InvoiceCountsSummary', today: number, thisWeek: number } }, inbound: { __typename?: 'InboundInvoiceCounts', created: { __typename?: 'InvoiceCountsSummary', today: number, thisWeek: number } } } };

export type StockCountsQueryVariables = Exact<{
  daysTillExpired?: InputMaybe<Scalars['Int']>;
  timezoneOffset?: InputMaybe<Scalars['Int']>;
}>;


export type StockCountsQuery = { __typename?: 'Queries', stockCounts: { __typename?: 'StockCounts', expired: number, expiringSoon: number } };

export type UpsertOutboundShipmentMutationVariables = Exact<{
  deleteOutboundShipmentLines?: InputMaybe<Array<DeleteOutboundShipmentLineInput> | DeleteOutboundShipmentLineInput>;
  insertOutboundShipmentLines?: InputMaybe<Array<InsertOutboundShipmentLineInput> | InsertOutboundShipmentLineInput>;
  updateOutboundShipmentLines?: InputMaybe<Array<UpdateOutboundShipmentLineInput> | UpdateOutboundShipmentLineInput>;
  updateOutboundShipments?: InputMaybe<Array<UpdateOutboundShipmentInput> | UpdateOutboundShipmentInput>;
}>;


export type UpsertOutboundShipmentMutation = { __typename?: 'Mutations', batchOutboundShipment: { __typename: 'BatchOutboundShipmentResponse', insertOutboundShipmentLines?: Array<{ __typename: 'InsertOutboundShipmentLineResponseWithId', id: string }> | null, updateOutboundShipments?: Array<{ __typename: 'UpdateOutboundShipmentResponseWithId', id: string }> | null, deleteOutboundShipmentLines?: Array<{ __typename: 'DeleteOutboundShipmentLineResponseWithId', id: string }> | null, updateOutboundShipmentLines?: Array<{ __typename: 'UpdateOutboundShipmentLineResponseWithId', id: string }> | null } };

export type DeleteInboundShipmentLinesMutationVariables = Exact<{
  input?: InputMaybe<Array<DeleteInboundShipmentLineInput> | DeleteInboundShipmentLineInput>;
}>;


export type DeleteInboundShipmentLinesMutation = { __typename?: 'Mutations', batchInboundShipment: { __typename?: 'BatchInboundShipmentResponse', deleteInboundShipmentLines?: Array<{ __typename?: 'DeleteInboundShipmentLineResponseWithId', id: string, response: { __typename: 'DeleteInboundShipmentLineError', error: { __typename?: 'BatchIsReserved', description: string } | { __typename?: 'CannotEditInvoice', description: string } | { __typename?: 'DatabaseError', description: string } | { __typename?: 'ForeignKeyError', description: string } | { __typename?: 'InvoiceDoesNotBelongToCurrentStore', description: string } | { __typename?: 'InvoiceLineBelongsToAnotherInvoice', description: string } | { __typename?: 'NotAnInboundShipment', description: string } | { __typename?: 'RecordNotFound', description: string } } | { __typename?: 'DeleteResponse', id: string } }> | null } };

export type DeleteOutboundShipmentLinesMutationVariables = Exact<{
  input?: InputMaybe<Array<DeleteOutboundShipmentLineInput> | DeleteOutboundShipmentLineInput>;
}>;


export type DeleteOutboundShipmentLinesMutation = { __typename?: 'Mutations', batchOutboundShipment: { __typename?: 'BatchOutboundShipmentResponse', deleteOutboundShipmentLines?: Array<{ __typename?: 'DeleteOutboundShipmentLineResponseWithId', id: string, response: { __typename: 'DeleteOutboundShipmentLineError', error: { __typename?: 'CannotEditInvoice', description: string } | { __typename?: 'DatabaseError', description: string } | { __typename?: 'ForeignKeyError', description: string } | { __typename?: 'InvoiceDoesNotBelongToCurrentStore', description: string } | { __typename?: 'InvoiceLineBelongsToAnotherInvoice', description: string } | { __typename?: 'NotAnOutboundShipment', description: string } | { __typename?: 'RecordNotFound', description: string } } | { __typename?: 'DeleteResponse', id: string } }> | null } };

export type UpsertInboundShipmentMutationVariables = Exact<{
  deleteInboundShipmentLines?: InputMaybe<Array<DeleteInboundShipmentLineInput> | DeleteInboundShipmentLineInput>;
  insertInboundShipmentLines?: InputMaybe<Array<InsertInboundShipmentLineInput> | InsertInboundShipmentLineInput>;
  updateInboundShipmentLines?: InputMaybe<Array<UpdateInboundShipmentLineInput> | UpdateInboundShipmentLineInput>;
  updateInboundShipments?: InputMaybe<Array<UpdateInboundShipmentInput> | UpdateInboundShipmentInput>;
}>;


export type UpsertInboundShipmentMutation = { __typename?: 'Mutations', batchInboundShipment: { __typename: 'BatchInboundShipmentResponse', updateInboundShipments?: Array<{ __typename: 'UpdateInboundShipmentResponseWithId', id: string }> | null, insertInboundShipmentLines?: Array<{ __typename: 'InsertInboundShipmentLineResponseWithId', id: string }> | null, deleteInboundShipmentLines?: Array<{ __typename: 'DeleteInboundShipmentLineResponseWithId', id: string }> | null, updateInboundShipmentLines?: Array<{ __typename: 'UpdateInboundShipmentLineResponseWithId', id: string }> | null } };

export type UpdateInboundShipmentMutationVariables = Exact<{
  input: UpdateInboundShipmentInput;
}>;


export type UpdateInboundShipmentMutation = { __typename?: 'Mutations', updateInboundShipment: { __typename: 'InvoiceNode', id: string } | { __typename: 'NodeError', error: { __typename: 'DatabaseError', description: string, fullError: string } | { __typename: 'RecordNotFound', description: string } } | { __typename: 'UpdateInboundShipmentError', error: { __typename?: 'CannotChangeStatusOfInvoiceOnHold', description: string } | { __typename?: 'CannotEditInvoice', description: string } | { __typename?: 'CannotReverseInvoiceStatus', description: string } | { __typename?: 'DatabaseError', description: string } | { __typename?: 'ForeignKeyError', description: string } | { __typename?: 'InvoiceDoesNotBelongToCurrentStore', description: string } | { __typename?: 'NotAnInboundShipment', description: string } | { __typename?: 'OtherPartyNotASupplier', description: string } | { __typename?: 'RecordNotFound', description: string } } };

export type DeleteInboundShipmentsMutationVariables = Exact<{
  ids?: InputMaybe<Array<DeleteInboundShipmentInput> | DeleteInboundShipmentInput>;
}>;


export type DeleteInboundShipmentsMutation = { __typename?: 'Mutations', batchInboundShipment: { __typename: 'BatchInboundShipmentResponse', deleteInboundShipments?: Array<{ __typename: 'DeleteInboundShipmentResponseWithId', id: string }> | null } };

export type InsertInboundShipmentMutationVariables = Exact<{
  id: Scalars['String'];
  otherPartyId: Scalars['String'];
}>;


export type InsertInboundShipmentMutation = { __typename?: 'Mutations', insertInboundShipment: { __typename: 'InsertInboundShipmentError', error: { __typename: 'DatabaseError', description: string, fullError: string } | { __typename: 'ForeignKeyError', description: string, key: ForeignKey } | { __typename: 'OtherPartyNotASupplier', description: string, otherParty: { __typename?: 'NameNode', code: string, id: string, isCustomer: boolean, isSupplier: boolean, name: string } } | { __typename: 'RecordAlreadyExist', description: string } } | { __typename: 'InvoiceNode', id: string } | { __typename: 'NodeError', error: { __typename: 'DatabaseError', description: string, fullError: string } | { __typename: 'RecordNotFound', description: string } } };

export type LocationsQueryVariables = Exact<{
  sort?: InputMaybe<Array<LocationSortInput> | LocationSortInput>;
}>;


export type LocationsQuery = { __typename?: 'Queries', locations: { __typename: 'ConnectorError', error: { __typename: 'DatabaseError', description: string, fullError: string } | { __typename: 'PaginationError', description: string, rangeError: { __typename?: 'RangeError', description: string, field: RangeField, max?: number | null, min?: number | null } } } | { __typename: 'LocationConnector', totalCount: number, nodes: Array<{ __typename: 'LocationNode', id: string, name: string, onHold: boolean, code: string }> } };

export type InsertLocationMutationVariables = Exact<{
  input: InsertLocationInput;
}>;


export type InsertLocationMutation = { __typename?: 'Mutations', insertLocation: { __typename: 'InsertLocationError', error: { __typename: 'DatabaseError', description: string, fullError: string } | { __typename: 'InternalError', description: string, fullError: string } | { __typename: 'RecordAlreadyExist', description: string } | { __typename: 'UniqueValueViolation', description: string, field: UniqueValueKey } } | { __typename?: 'LocationNode', id: string, name: string, code: string, onHold: boolean } };

export type UpdateLocationMutationVariables = Exact<{
  input: UpdateLocationInput;
}>;


export type UpdateLocationMutation = { __typename?: 'Mutations', updateLocation: { __typename?: 'LocationNode', id: string, name: string, onHold: boolean, code: string } | { __typename: 'UpdateLocationError', error: { __typename: 'DatabaseError', description: string, fullError: string } | { __typename: 'InternalError', description: string, fullError: string } | { __typename: 'RecordBelongsToAnotherStore', description: string } | { __typename: 'RecordNotFound', description: string } | { __typename: 'UniqueValueViolation', description: string, field: UniqueValueKey } } };

export type StoresQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<StoreFilterInput>;
}>;


export type StoresQuery = { __typename?: 'Queries', stores: { __typename: 'StoreConnector', totalCount: number, nodes: Array<{ __typename?: 'StoreNode', code: string, id: string }> } };

export type AuthTokenQueryVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthTokenQuery = { __typename?: 'Queries', authToken: { __typename: 'AuthToken', token: string } | { __typename: 'AuthTokenError', error: { __typename: 'DatabaseError', description: string, fullError: string } | { __typename: 'InternalError', description: string, fullError: string } | { __typename: 'InvalidCredentials', description: string } | { __typename: 'UserNameDoesNotExist', description: string } } };

export type MasterListsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  key: MasterListSortFieldInput;
  desc?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<MasterListFilterInput>;
}>;


export type MasterListsQuery = { __typename?: 'Queries', masterLists: { __typename: 'ConnectorError', error: { __typename: 'DatabaseError', description: string, fullError: string } | { __typename: 'PaginationError', description: string, rangeError: { __typename?: 'RangeError', field: RangeField, min?: number | null, max?: number | null, description: string } } } | { __typename: 'MasterListConnector', totalCount: number, nodes: Array<{ __typename?: 'MasterListNode', name: string, code: string, description: string, id: string, lines: { __typename?: 'MasterListLineConnector', totalCount: number, nodes: Array<{ __typename?: 'MasterListLineNode', id: string, itemId: string, item: { __typename?: 'ItemNode', code: string, id: string, unitName?: string | null, name: string, isVisible: boolean, availableBatches: { __typename: 'ConnectorError', error: { __typename: 'DatabaseError', description: string, fullError: string } | { __typename: 'PaginationError', description: string, rangeError: { __typename?: 'RangeError', description: string, min?: number | null, max?: number | null, field: RangeField } } } | { __typename: 'StockLineConnector', totalCount: number, nodes: Array<{ __typename: 'StockLineNode', availableNumberOfPacks: number, batch?: string | null, costPricePerPack: number, expiryDate?: string | null, itemId: string, id: string, totalNumberOfPacks: number, storeId: string, sellPricePerPack: number, packSize: number, onHold: boolean, note?: string | null, locationName?: string | null }> } } }> } }> } };


export const InvoiceDocument = gql`
    query invoice($id: String!) {
  invoice(id: $id) {
    __typename
    ... on NodeError {
      __typename
      error {
        description
        ... on DatabaseError {
          __typename
          description
          fullError
        }
        ... on RecordNotFound {
          __typename
          description
        }
      }
    }
    ... on InvoiceNode {
      __typename
      id
      comment
      createdDatetime
      allocatedDatetime
      deliveredDatetime
      pickedDatetime
      shippedDatetime
      verifiedDatetime
      invoiceNumber
      color
      onHold
      otherParty {
        __typename
        ... on NameNode {
          __typename
          id
          name
          code
          isCustomer
          isSupplier
        }
        ... on NodeError {
          __typename
          error {
            description
            ... on DatabaseError {
              __typename
              description
              fullError
            }
            ... on RecordNotFound {
              __typename
              description
            }
          }
        }
      }
      lines {
        ... on ConnectorError {
          __typename
          error {
            description
            ... on DatabaseError {
              __typename
              description
              fullError
            }
          }
        }
        ... on InvoiceLineConnector {
          __typename
          nodes {
            __typename
            type
            batch
            costPricePerPack
            expiryDate
            id
            itemCode
            itemId
            itemName
            numberOfPacks
            packSize
            note
            invoiceId
            location {
              __typename
              ... on LocationNode {
                __typename
                id
                name
                code
                onHold
                stock {
                  __typename
                  ... on ConnectorError {
                    __typename
                    error {
                      description
                      ... on DatabaseError {
                        __typename
                        description
                        fullError
                      }
                    }
                  }
                  ... on StockLineConnector {
                    __typename
                    totalCount
                    nodes {
                      id
                      costPricePerPack
                      itemId
                      availableNumberOfPacks
                      onHold
                      packSize
                      sellPricePerPack
                      storeId
                      totalNumberOfPacks
                    }
                  }
                }
              }
              ... on NodeError {
                __typename
                error {
                  description
                  ... on DatabaseError {
                    __typename
                    description
                    fullError
                  }
                  ... on RecordNotFound {
                    __typename
                    description
                  }
                }
              }
            }
            item {
              ... on ItemNode {
                __typename
                id
                name
                code
                isVisible
                unitName
                availableBatches {
                  ... on StockLineConnector {
                    totalCount
                    nodes {
                      id
                      availableNumberOfPacks
                      costPricePerPack
                      itemId
                      onHold
                      packSize
                      sellPricePerPack
                      storeId
                      totalNumberOfPacks
                      expiryDate
                    }
                  }
                  ... on ConnectorError {
                    __typename
                    error {
                      description
                    }
                  }
                }
              }
              ... on ItemError {
                __typename
                error {
                  ... on InternalError {
                    __typename
                    description
                    fullError
                  }
                }
              }
            }
            locationName
            sellPricePerPack
            stockLine {
              __typename
              ... on NodeError {
                __typename
                error {
                  description
                  ... on DatabaseError {
                    __typename
                    description
                    fullError
                  }
                  ... on RecordNotFound {
                    __typename
                    description
                  }
                }
              }
              ... on StockLineNode {
                __typename
                availableNumberOfPacks
                batch
                costPricePerPack
                expiryDate
                id
                itemId
                packSize
                sellPricePerPack
                storeId
                totalNumberOfPacks
                onHold
                note
              }
            }
          }
          totalCount
        }
      }
      otherPartyId
      otherPartyName
      pricing {
        __typename
        ... on NodeError {
          __typename
          error {
            description
            ... on DatabaseError {
              __typename
              description
              fullError
            }
            ... on RecordNotFound {
              __typename
              description
            }
          }
        }
        ... on InvoicePricingNode {
          __typename
          totalAfterTax
          totalBeforeTax
          stockTotalBeforeTax
          stockTotalAfterTax
          serviceTotalAfterTax
          serviceTotalBeforeTax
        }
      }
      status
      theirReference
      type
    }
  }
}
    `;
export const StocktakeDocument = gql`
    query stocktake($stocktakeId: String!) {
  stocktake(id: $stocktakeId) {
    __typename
    ... on StocktakeNode {
      __typename
      id
      stocktakeNumber
      comment
      stocktakeDatetime
      status
      description
      entryDatetime
      enteredByName
      onHold
      lines {
        __typename
        ... on ConnectorError {
          __typename
          error {
            description
          }
        }
        ... on StocktakeLineConnector {
          __typename
          nodes {
            __typename
            batch
            itemCode
            itemName
            itemId
            id
            expiryDate
            packSize
            snapshotNumberOfPacks
            countedNumberOfPacks
            sellPricePerPack
            costPricePerPack
          }
          totalCount
        }
      }
    }
  }
}
    `;
export const UpdateStocktakeDocument = gql`
    mutation updateStocktake($input: UpdateStocktakeInput!) {
  updateStocktake(input: $input) {
    ... on StocktakeNode {
      __typename
      id
    }
  }
}
    `;
export const UpsertStocktakeLinesDocument = gql`
    mutation upsertStocktakeLines($deleteStocktakeLines: [DeleteStocktakeLineInput!], $insertStocktakeLines: [InsertStocktakeLineInput!], $updateStocktakeLines: [UpdateStocktakeLineInput!]) {
  batchStocktake(
    deleteStocktakeLines: $deleteStocktakeLines
    insertStocktakeLines: $insertStocktakeLines
    updateStocktakeLines: $updateStocktakeLines
  ) {
    __typename
    updateStocktakes {
      __typename
      id
    }
    insertStocktakeLines {
      __typename
      id
    }
    deleteStocktakeLines {
      __typename
      id
    }
    updateStocktakeLines {
      __typename
      id
    }
  }
}
    `;
export const StocktakesDocument = gql`
    query stocktakes($params: StocktakeListParameters) {
  stocktakes(params: $params) {
    __typename
    ... on StocktakeConnector {
      nodes {
        id
        comment
        description
        stocktakeDatetime
        stocktakeNumber
        status
      }
      totalCount
    }
  }
}
    `;
export const DeleteStocktakesDocument = gql`
    mutation deleteStocktakes($ids: [DeleteStocktakeInput!]) {
  batchStocktake(deleteStocktakes: $ids) {
    __typename
    deleteStocktakes {
      __typename
      id
    }
  }
}
    `;
export const InsertStocktakeDocument = gql`
    mutation insertStocktake($input: InsertStocktakeInput!) {
  insertStocktake(input: $input) {
    ... on StocktakeNode {
      __typename
      id
    }
  }
}
    `;
export const RequisitionsDocument = gql`
    query requisitions($params: RequisitionListParameters) {
  requisitions(params: $params) {
    __typename
    ... on RequisitionConnector {
      nodes {
        id
        comment
        orderDate
        theirReference
        requisitionNumber
        status
        otherPartyName
        otherPartyId
        color
      }
      totalCount
    }
    ... on ConnectorError {
      __typename
      error {
        description
        ... on DatabaseError {
          __typename
          description
          fullError
        }
      }
    }
  }
}
    `;
export const DeleteSupplierRequisitionsDocument = gql`
    mutation deleteSupplierRequisitions($ids: [DeleteSupplierRequisitionInput!]) {
  batchSupplierRequisition(deleteSupplierRequisitions: $ids) {
    __typename
    deleteSupplierRequisitions {
      __typename
      id
    }
  }
}
    `;
export const UpdateSupplierRequisitionDocument = gql`
    mutation updateSupplierRequisition($input: UpdateSupplierRequisitionInput!) {
  updateSupplierRequisition(input: $input) {
    ... on RequisitionNode {
      __typename
      id
    }
  }
}
    `;
export const InsertSupplierRequisitionDocument = gql`
    mutation insertSupplierRequisition($input: InsertSupplierRequisitionInput!) {
  insertSupplierRequisition(input: $input) {
    ... on RequisitionNode {
      __typename
      id
    }
  }
}
    `;
export const DeleteCustomerRequisitionsDocument = gql`
    mutation deleteCustomerRequisitions($ids: [DeleteCustomerRequisitionInput!]) {
  batchCustomerRequisition(deleteCustomerRequisitions: $ids) {
    __typename
    deleteCustomerRequisitions {
      __typename
      id
    }
  }
}
    `;
export const UpdateCustomerRequisitionDocument = gql`
    mutation updateCustomerRequisition($input: UpdateCustomerRequisitionInput!) {
  updateCustomerRequisition(input: $input) {
    ... on RequisitionNode {
      __typename
      id
    }
  }
}
    `;
export const InsertCustomerRequisitionDocument = gql`
    mutation insertCustomerRequisition($input: InsertCustomerRequisitionInput!) {
  insertCustomerRequisition(input: $input) {
    ... on RequisitionNode {
      __typename
      id
    }
  }
}
    `;
export const RequisitionDocument = gql`
    query requisition($id: String!) {
  requisition(id: $id) {
    __typename
    ... on RequisitionNode {
      __typename
      id
      orderDate
      requisitionDate
      comment
      theirReference
      type
      requisitionNumber
      thresholdMOS
      maxMOS
      status
      otherPartyId
      lines {
        __typename
        ... on ConnectorError {
          error {
            description
          }
        }
        ... on RequisitionLineConnector {
          totalCount
          nodes {
            id
            itemName
            itemCode
            itemUnit
            itemId
            comment
            monthlyConsumption
            monthsOfSupply
            supplyQuantity
            openingQuantity
            issuedQuantity
            requestedQuantity
            receivedQuantity
            imprestQuantity
            previousQuantity
            calculatedQuantity
            previousStockOnHand
            closingQuantity
            stockAdditions
            stockLosses
            expiredQuantity
            otherPartyClosingQuantity
          }
        }
      }
      otherParty {
        __typename
        ... on NodeError {
          error {
            description
          }
        }
        ... on NameNode {
          id
          name
          code
          isCustomer
          isSupplier
        }
      }
    }
  }
}
    `;
export const UpsertSupplierRequisitionDocument = gql`
    mutation upsertSupplierRequisition($deleteSupplierRequisitionLines: [DeleteSupplierRequisitionLineInput!], $insertSupplierRequisitionLines: [InsertSupplierRequisitionLineInput!], $updateSupplierRequisitionLines: [UpdateSupplierRequisitionLineInput!], $updateSupplierRequisitions: [UpdateSupplierRequisitionInput!]) {
  batchSupplierRequisition(
    deleteSupplierRequisitionLines: $deleteSupplierRequisitionLines
    insertSupplierRequisitionLines: $insertSupplierRequisitionLines
    updateSupplierRequisitionLines: $updateSupplierRequisitionLines
    updateSupplierRequisitions: $updateSupplierRequisitions
  ) {
    __typename
    updateSupplierRequisitions {
      __typename
      id
    }
    insertSupplierRequisitionLines {
      __typename
      id
    }
    deleteSupplierRequisitionLines {
      __typename
      id
    }
    updateSupplierRequisitionLines {
      __typename
      id
    }
  }
}
    `;
export const UpsertCustomerRequisitionDocument = gql`
    mutation upsertCustomerRequisition($deleteCustomerRequisitionLines: [DeleteCustomerRequisitionLineInput!], $insertCustomerRequisitionLines: [InsertCustomerRequisitionLineInput!], $updateCustomerRequisitionLines: [UpdateCustomerRequisitionLineInput!], $updateCustomerRequisitions: [UpdateCustomerRequisitionInput!]) {
  batchCustomerRequisition(
    deleteCustomerRequisitionLines: $deleteCustomerRequisitionLines
    insertCustomerRequisitionLines: $insertCustomerRequisitionLines
    updateCustomerRequisitionLines: $updateCustomerRequisitionLines
    updateCustomerRequisitions: $updateCustomerRequisitions
  ) {
    __typename
    updateCustomerRequisitions {
      __typename
      id
    }
    insertCustomerRequisitionLines {
      __typename
      id
    }
    deleteCustomerRequisitionLines {
      __typename
      id
    }
    updateCustomerRequisitionLines {
      __typename
      id
    }
  }
}
    `;
export const InvoicesDocument = gql`
    query invoices($first: Int, $offset: Int, $key: InvoiceSortFieldInput!, $desc: Boolean, $filter: InvoiceFilterInput) {
  invoices(
    page: {first: $first, offset: $offset}
    sort: {key: $key, desc: $desc}
    filter: $filter
  ) {
    ... on ConnectorError {
      __typename
      error {
        description
        ... on DatabaseError {
          __typename
          description
          fullError
        }
        ... on PaginationError {
          __typename
          description
          rangeError {
            description
            field
            max
            min
          }
        }
      }
    }
    ... on InvoiceConnector {
      __typename
      nodes {
        comment
        createdDatetime
        allocatedDatetime
        deliveredDatetime
        pickedDatetime
        shippedDatetime
        verifiedDatetime
        id
        invoiceNumber
        otherPartyId
        otherPartyName
        theirReference
        type
        status
        color
        pricing {
          __typename
          ... on NodeError {
            __typename
            error {
              ... on RecordNotFound {
                __typename
                description
              }
              ... on DatabaseError {
                __typename
                description
                fullError
              }
              description
            }
          }
          ... on InvoicePricingNode {
            __typename
            totalAfterTax
            totalBeforeTax
            stockTotalBeforeTax
            stockTotalAfterTax
            serviceTotalAfterTax
            serviceTotalBeforeTax
          }
        }
      }
      totalCount
    }
  }
}
    `;
export const NamesDocument = gql`
    query names($key: NameSortFieldInput!, $desc: Boolean, $first: Int, $offset: Int, $filter: NameFilterInput) {
  names(
    page: {first: $first, offset: $offset}
    sort: {key: $key, desc: $desc}
    filter: $filter
  ) {
    ... on ConnectorError {
      __typename
      error {
        ... on DatabaseError {
          __typename
          description
          fullError
        }
        description
        ... on PaginationError {
          __typename
          description
          rangeError {
            description
            field
            max
            min
          }
        }
      }
    }
    ... on NameConnector {
      __typename
      nodes {
        code
        id
        isCustomer
        isSupplier
        name
      }
      totalCount
    }
  }
}
    `;
export const ItemsWithStockLinesDocument = gql`
    query itemsWithStockLines($first: Int, $offset: Int, $key: ItemSortFieldInput!, $desc: Boolean, $filter: ItemFilterInput) {
  items(
    page: {first: $first, offset: $offset}
    sort: {key: $key, desc: $desc}
    filter: $filter
  ) {
    ... on ConnectorError {
      __typename
      error {
        description
        ... on DatabaseError {
          __typename
          description
          fullError
        }
        ... on PaginationError {
          __typename
          description
          rangeError {
            description
            field
            max
            min
          }
        }
      }
    }
    ... on ItemConnector {
      __typename
      nodes {
        __typename
        availableBatches {
          __typename
          ... on ConnectorError {
            __typename
            error {
              description
              ... on DatabaseError {
                __typename
                description
                fullError
              }
              ... on PaginationError {
                __typename
                description
                rangeError {
                  description
                  field
                  max
                  min
                }
              }
            }
          }
          ... on StockLineConnector {
            __typename
            nodes {
              __typename
              availableNumberOfPacks
              batch
              costPricePerPack
              expiryDate
              id
              itemId
              packSize
              sellPricePerPack
              totalNumberOfPacks
              onHold
              note
              storeId
              locationName
            }
            totalCount
          }
        }
        code
        id
        isVisible
        name
        unitName
      }
      totalCount
    }
  }
}
    `;
export const ItemsListViewDocument = gql`
    query itemsListView($first: Int, $offset: Int, $key: ItemSortFieldInput!, $desc: Boolean, $filter: ItemFilterInput) {
  items(
    page: {first: $first, offset: $offset}
    sort: {key: $key, desc: $desc}
    filter: $filter
  ) {
    ... on ConnectorError {
      __typename
      error {
        description
        ... on DatabaseError {
          __typename
          description
          fullError
        }
        ... on PaginationError {
          __typename
          description
          rangeError {
            description
            field
            max
            min
          }
        }
      }
    }
    ... on ItemConnector {
      __typename
      nodes {
        __typename
        code
        id
        isVisible
        name
        unitName
      }
      totalCount
    }
  }
}
    `;
export const InsertOutboundShipmentDocument = gql`
    mutation insertOutboundShipment($id: String!, $otherPartyId: String!) {
  insertOutboundShipment(input: {id: $id, otherPartyId: $otherPartyId}) {
    __typename
    ... on InvoiceNode {
      id
    }
    ... on InsertOutboundShipmentError {
      __typename
      error {
        description
        ... on DatabaseError {
          __typename
          description
          fullError
        }
        ... on ForeignKeyError {
          __typename
          description
          key
        }
        ... on OtherPartyCannotBeThisStoreError {
          __typename
          description
        }
        ... on OtherPartyNotACustomerError {
          __typename
          description
          otherParty {
            code
            id
            isCustomer
            isSupplier
            name
          }
        }
        ... on RecordAlreadyExist {
          __typename
          description
        }
      }
    }
    ... on NodeError {
      __typename
      error {
        description
        ... on DatabaseError {
          __typename
          description
          fullError
        }
        ... on RecordNotFound {
          __typename
          description
        }
      }
    }
  }
}
    `;
export const UpdateOutboundShipmentDocument = gql`
    mutation updateOutboundShipment($input: UpdateOutboundShipmentInput!) {
  updateOutboundShipment(input: $input) {
    ... on InvoiceNode {
      __typename
      id
    }
    ... on NodeError {
      __typename
      error {
        description
        ... on DatabaseError {
          __typename
          description
          fullError
        }
        ... on RecordNotFound {
          __typename
          description
        }
      }
    }
    ... on UpdateOutboundShipmentError {
      __typename
      error {
        description
      }
    }
  }
}
    `;
export const DeleteOutboundShipmentsDocument = gql`
    mutation deleteOutboundShipments($ids: [String!]) {
  batchOutboundShipment(deleteOutboundShipments: $ids) {
    __typename
    deleteOutboundShipments {
      __typename
      id
    }
  }
}
    `;
export const InvoiceCountsDocument = gql`
    query invoiceCounts($timezoneOffset: Int) {
  invoiceCounts(timezoneOffset: $timezoneOffset) {
    outbound {
      created {
        today
        thisWeek
      }
      toBePicked
    }
    inbound {
      created {
        today
        thisWeek
      }
    }
  }
}
    `;
export const StockCountsDocument = gql`
    query stockCounts($daysTillExpired: Int, $timezoneOffset: Int) {
  stockCounts(daysTillExpired: $daysTillExpired, timezoneOffset: $timezoneOffset) {
    expired
    expiringSoon
  }
}
    `;
export const UpsertOutboundShipmentDocument = gql`
    mutation upsertOutboundShipment($deleteOutboundShipmentLines: [DeleteOutboundShipmentLineInput!], $insertOutboundShipmentLines: [InsertOutboundShipmentLineInput!], $updateOutboundShipmentLines: [UpdateOutboundShipmentLineInput!], $updateOutboundShipments: [UpdateOutboundShipmentInput!]) {
  batchOutboundShipment(
    deleteOutboundShipmentLines: $deleteOutboundShipmentLines
    insertOutboundShipmentLines: $insertOutboundShipmentLines
    updateOutboundShipmentLines: $updateOutboundShipmentLines
    updateOutboundShipments: $updateOutboundShipments
  ) {
    __typename
    insertOutboundShipmentLines {
      __typename
      id
    }
    updateOutboundShipments {
      __typename
      id
    }
    deleteOutboundShipmentLines {
      __typename
      id
    }
    updateOutboundShipmentLines {
      __typename
      id
    }
  }
}
    `;
export const DeleteInboundShipmentLinesDocument = gql`
    mutation deleteInboundShipmentLines($input: [DeleteInboundShipmentLineInput!]) {
  batchInboundShipment(deleteInboundShipmentLines: $input) {
    deleteInboundShipmentLines {
      id
      response {
        ... on DeleteInboundShipmentLineError {
          __typename
          error {
            description
          }
        }
        ... on DeleteResponse {
          id
        }
      }
    }
  }
}
    `;
export const DeleteOutboundShipmentLinesDocument = gql`
    mutation deleteOutboundShipmentLines($input: [DeleteOutboundShipmentLineInput!]) {
  batchOutboundShipment(deleteOutboundShipmentLines: $input) {
    deleteOutboundShipmentLines {
      id
      response {
        ... on DeleteOutboundShipmentLineError {
          __typename
          error {
            description
          }
        }
        ... on DeleteResponse {
          id
        }
      }
    }
  }
}
    `;
export const UpsertInboundShipmentDocument = gql`
    mutation upsertInboundShipment($deleteInboundShipmentLines: [DeleteInboundShipmentLineInput!], $insertInboundShipmentLines: [InsertInboundShipmentLineInput!], $updateInboundShipmentLines: [UpdateInboundShipmentLineInput!], $updateInboundShipments: [UpdateInboundShipmentInput!]) {
  batchInboundShipment(
    deleteInboundShipmentLines: $deleteInboundShipmentLines
    insertInboundShipmentLines: $insertInboundShipmentLines
    updateInboundShipmentLines: $updateInboundShipmentLines
    updateInboundShipments: $updateInboundShipments
  ) {
    __typename
    updateInboundShipments {
      __typename
      id
    }
    insertInboundShipmentLines {
      __typename
      id
    }
    deleteInboundShipmentLines {
      __typename
      id
    }
    updateInboundShipmentLines {
      __typename
      id
    }
  }
}
    `;
export const UpdateInboundShipmentDocument = gql`
    mutation updateInboundShipment($input: UpdateInboundShipmentInput!) {
  updateInboundShipment(input: $input) {
    ... on InvoiceNode {
      __typename
      id
    }
    ... on NodeError {
      __typename
      error {
        description
        ... on DatabaseError {
          __typename
          description
          fullError
        }
        ... on RecordNotFound {
          __typename
          description
        }
      }
    }
    ... on UpdateInboundShipmentError {
      __typename
      error {
        description
      }
    }
  }
}
    `;
export const DeleteInboundShipmentsDocument = gql`
    mutation deleteInboundShipments($ids: [DeleteInboundShipmentInput!]) {
  batchInboundShipment(deleteInboundShipments: $ids) {
    __typename
    deleteInboundShipments {
      __typename
      id
    }
  }
}
    `;
export const InsertInboundShipmentDocument = gql`
    mutation insertInboundShipment($id: String!, $otherPartyId: String!) {
  insertInboundShipment(input: {id: $id, otherPartyId: $otherPartyId}) {
    __typename
    ... on InvoiceNode {
      id
    }
    ... on InsertInboundShipmentError {
      __typename
      error {
        description
        ... on DatabaseError {
          __typename
          description
          fullError
        }
        ... on ForeignKeyError {
          __typename
          description
          key
        }
        ... on OtherPartyNotASupplier {
          __typename
          description
          otherParty {
            code
            id
            isCustomer
            isSupplier
            name
          }
        }
        ... on RecordAlreadyExist {
          __typename
          description
        }
      }
    }
    ... on NodeError {
      __typename
      error {
        description
        ... on DatabaseError {
          __typename
          description
          fullError
        }
        ... on RecordNotFound {
          __typename
          description
        }
      }
    }
  }
}
    `;
export const LocationsDocument = gql`
    query locations($sort: [LocationSortInput!]) {
  locations(sort: $sort) {
    __typename
    ... on LocationConnector {
      __typename
      nodes {
        __typename
        id
        name
        onHold
        code
      }
      totalCount
    }
    ... on ConnectorError {
      __typename
      error {
        description
        ... on DatabaseError {
          __typename
          description
          fullError
        }
        ... on PaginationError {
          __typename
          description
          rangeError {
            description
            field
            max
            min
          }
        }
      }
    }
  }
}
    `;
export const InsertLocationDocument = gql`
    mutation insertLocation($input: InsertLocationInput!) {
  insertLocation(input: $input) {
    ... on InsertLocationError {
      __typename
      error {
        description
        ... on InternalError {
          __typename
          description
          fullError
        }
        ... on DatabaseError {
          __typename
          description
          fullError
        }
        ... on RecordAlreadyExist {
          __typename
          description
        }
        ... on UniqueValueViolation {
          __typename
          description
          field
        }
      }
    }
    ... on LocationNode {
      id
      name
      code
      onHold
    }
  }
}
    `;
export const UpdateLocationDocument = gql`
    mutation updateLocation($input: UpdateLocationInput!) {
  updateLocation(input: $input) {
    ... on UpdateLocationError {
      __typename
      error {
        description
        ... on InternalError {
          __typename
          description
          fullError
        }
        ... on DatabaseError {
          __typename
          description
          fullError
        }
        ... on RecordBelongsToAnotherStore {
          __typename
          description
        }
        ... on RecordNotFound {
          __typename
          description
        }
        ... on UniqueValueViolation {
          __typename
          description
          field
        }
      }
    }
    ... on LocationNode {
      id
      name
      onHold
      code
    }
  }
}
    `;
export const StoresDocument = gql`
    query stores($first: Int, $offset: Int, $filter: StoreFilterInput) {
  stores(page: {first: $first, offset: $offset}, filter: $filter) {
    ... on StoreConnector {
      __typename
      nodes {
        code
        id
      }
      totalCount
    }
  }
}
    `;
export const AuthTokenDocument = gql`
    query authToken($username: String!, $password: String!) {
  authToken(password: $password, username: $username) {
    ... on AuthToken {
      __typename
      token
    }
    ... on AuthTokenError {
      __typename
      error {
        ... on UserNameDoesNotExist {
          __typename
          description
        }
        ... on InvalidCredentials {
          __typename
          description
        }
        ... on DatabaseError {
          __typename
          description
          fullError
        }
        ... on InternalError {
          __typename
          description
          fullError
        }
        description
      }
    }
  }
}
    `;
export const MasterListsDocument = gql`
    query masterLists($first: Int, $offset: Int, $key: MasterListSortFieldInput!, $desc: Boolean, $filter: MasterListFilterInput) {
  masterLists(
    filter: $filter
    page: {first: $first, offset: $offset}
    sort: {key: $key, desc: $desc}
  ) {
    ... on MasterListConnector {
      __typename
      nodes {
        name
        code
        lines {
          nodes {
            id
            itemId
            item {
              code
              id
              unitName
              name
              isVisible
              availableBatches {
                ... on ConnectorError {
                  __typename
                  error {
                    ... on PaginationError {
                      __typename
                      description
                      rangeError {
                        description
                        min
                        max
                        field
                      }
                    }
                    ... on DatabaseError {
                      __typename
                      description
                      fullError
                    }
                    description
                  }
                }
                ... on StockLineConnector {
                  __typename
                  nodes {
                    __typename
                    availableNumberOfPacks
                    batch
                    costPricePerPack
                    expiryDate
                    itemId
                    id
                    totalNumberOfPacks
                    storeId
                    sellPricePerPack
                    packSize
                    onHold
                    note
                    locationName
                  }
                  totalCount
                }
              }
            }
          }
          totalCount
        }
        code
        description
        id
      }
      totalCount
    }
    ... on ConnectorError {
      __typename
      error {
        description
        ... on DatabaseError {
          __typename
          description
          fullError
        }
        ... on PaginationError {
          __typename
          description
          rangeError {
            field
            min
            max
            description
          }
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    invoice(variables: InvoiceQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InvoiceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<InvoiceQuery>(InvoiceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'invoice');
    },
    stocktake(variables: StocktakeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StocktakeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StocktakeQuery>(StocktakeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'stocktake');
    },
    updateStocktake(variables: UpdateStocktakeMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateStocktakeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateStocktakeMutation>(UpdateStocktakeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateStocktake');
    },
    upsertStocktakeLines(variables?: UpsertStocktakeLinesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpsertStocktakeLinesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpsertStocktakeLinesMutation>(UpsertStocktakeLinesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'upsertStocktakeLines');
    },
    stocktakes(variables?: StocktakesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StocktakesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StocktakesQuery>(StocktakesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'stocktakes');
    },
    deleteStocktakes(variables?: DeleteStocktakesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteStocktakesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteStocktakesMutation>(DeleteStocktakesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteStocktakes');
    },
    insertStocktake(variables: InsertStocktakeMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertStocktakeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertStocktakeMutation>(InsertStocktakeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertStocktake');
    },
    requisitions(variables?: RequisitionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RequisitionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RequisitionsQuery>(RequisitionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'requisitions');
    },
    deleteSupplierRequisitions(variables?: DeleteSupplierRequisitionsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteSupplierRequisitionsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteSupplierRequisitionsMutation>(DeleteSupplierRequisitionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteSupplierRequisitions');
    },
    updateSupplierRequisition(variables: UpdateSupplierRequisitionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateSupplierRequisitionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateSupplierRequisitionMutation>(UpdateSupplierRequisitionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateSupplierRequisition');
    },
    insertSupplierRequisition(variables: InsertSupplierRequisitionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertSupplierRequisitionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertSupplierRequisitionMutation>(InsertSupplierRequisitionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertSupplierRequisition');
    },
    deleteCustomerRequisitions(variables?: DeleteCustomerRequisitionsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteCustomerRequisitionsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteCustomerRequisitionsMutation>(DeleteCustomerRequisitionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteCustomerRequisitions');
    },
    updateCustomerRequisition(variables: UpdateCustomerRequisitionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateCustomerRequisitionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateCustomerRequisitionMutation>(UpdateCustomerRequisitionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateCustomerRequisition');
    },
    insertCustomerRequisition(variables: InsertCustomerRequisitionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertCustomerRequisitionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertCustomerRequisitionMutation>(InsertCustomerRequisitionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertCustomerRequisition');
    },
    requisition(variables: RequisitionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RequisitionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RequisitionQuery>(RequisitionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'requisition');
    },
    upsertSupplierRequisition(variables?: UpsertSupplierRequisitionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpsertSupplierRequisitionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpsertSupplierRequisitionMutation>(UpsertSupplierRequisitionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'upsertSupplierRequisition');
    },
    upsertCustomerRequisition(variables?: UpsertCustomerRequisitionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpsertCustomerRequisitionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpsertCustomerRequisitionMutation>(UpsertCustomerRequisitionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'upsertCustomerRequisition');
    },
    invoices(variables: InvoicesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InvoicesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<InvoicesQuery>(InvoicesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'invoices');
    },
    names(variables: NamesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<NamesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<NamesQuery>(NamesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'names');
    },
    itemsWithStockLines(variables: ItemsWithStockLinesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ItemsWithStockLinesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ItemsWithStockLinesQuery>(ItemsWithStockLinesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'itemsWithStockLines');
    },
    itemsListView(variables: ItemsListViewQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ItemsListViewQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ItemsListViewQuery>(ItemsListViewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'itemsListView');
    },
    insertOutboundShipment(variables: InsertOutboundShipmentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertOutboundShipmentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertOutboundShipmentMutation>(InsertOutboundShipmentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertOutboundShipment');
    },
    updateOutboundShipment(variables: UpdateOutboundShipmentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateOutboundShipmentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateOutboundShipmentMutation>(UpdateOutboundShipmentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateOutboundShipment');
    },
    deleteOutboundShipments(variables?: DeleteOutboundShipmentsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteOutboundShipmentsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteOutboundShipmentsMutation>(DeleteOutboundShipmentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteOutboundShipments');
    },
    invoiceCounts(variables?: InvoiceCountsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InvoiceCountsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<InvoiceCountsQuery>(InvoiceCountsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'invoiceCounts');
    },
    stockCounts(variables?: StockCountsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StockCountsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StockCountsQuery>(StockCountsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'stockCounts');
    },
    upsertOutboundShipment(variables?: UpsertOutboundShipmentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpsertOutboundShipmentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpsertOutboundShipmentMutation>(UpsertOutboundShipmentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'upsertOutboundShipment');
    },
    deleteInboundShipmentLines(variables?: DeleteInboundShipmentLinesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteInboundShipmentLinesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteInboundShipmentLinesMutation>(DeleteInboundShipmentLinesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteInboundShipmentLines');
    },
    deleteOutboundShipmentLines(variables?: DeleteOutboundShipmentLinesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteOutboundShipmentLinesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteOutboundShipmentLinesMutation>(DeleteOutboundShipmentLinesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteOutboundShipmentLines');
    },
    upsertInboundShipment(variables?: UpsertInboundShipmentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpsertInboundShipmentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpsertInboundShipmentMutation>(UpsertInboundShipmentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'upsertInboundShipment');
    },
    updateInboundShipment(variables: UpdateInboundShipmentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateInboundShipmentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateInboundShipmentMutation>(UpdateInboundShipmentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateInboundShipment');
    },
    deleteInboundShipments(variables?: DeleteInboundShipmentsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteInboundShipmentsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteInboundShipmentsMutation>(DeleteInboundShipmentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteInboundShipments');
    },
    insertInboundShipment(variables: InsertInboundShipmentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertInboundShipmentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertInboundShipmentMutation>(InsertInboundShipmentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertInboundShipment');
    },
    locations(variables?: LocationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LocationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LocationsQuery>(LocationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'locations');
    },
    insertLocation(variables: InsertLocationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertLocationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertLocationMutation>(InsertLocationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertLocation');
    },
    updateLocation(variables: UpdateLocationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateLocationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateLocationMutation>(UpdateLocationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateLocation');
    },
    stores(variables?: StoresQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StoresQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StoresQuery>(StoresDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'stores');
    },
    authToken(variables: AuthTokenQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AuthTokenQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthTokenQuery>(AuthTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'authToken');
    },
    masterLists(variables: MasterListsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MasterListsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MasterListsQuery>(MasterListsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'masterLists');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockInvoiceQuery((req, res, ctx) => {
 *   const { id } = req.variables;
 *   return res(
 *     ctx.data({ invoice })
 *   )
 * })
 */
export const mockInvoiceQuery = (resolver: ResponseResolver<GraphQLRequest<InvoiceQueryVariables>, GraphQLContext<InvoiceQuery>, any>) =>
  graphql.query<InvoiceQuery, InvoiceQueryVariables>(
    'invoice',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockStocktakeQuery((req, res, ctx) => {
 *   const { stocktakeId } = req.variables;
 *   return res(
 *     ctx.data({ stocktake })
 *   )
 * })
 */
export const mockStocktakeQuery = (resolver: ResponseResolver<GraphQLRequest<StocktakeQueryVariables>, GraphQLContext<StocktakeQuery>, any>) =>
  graphql.query<StocktakeQuery, StocktakeQueryVariables>(
    'stocktake',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpdateStocktakeMutation((req, res, ctx) => {
 *   const { input } = req.variables;
 *   return res(
 *     ctx.data({ updateStocktake })
 *   )
 * })
 */
export const mockUpdateStocktakeMutation = (resolver: ResponseResolver<GraphQLRequest<UpdateStocktakeMutationVariables>, GraphQLContext<UpdateStocktakeMutation>, any>) =>
  graphql.mutation<UpdateStocktakeMutation, UpdateStocktakeMutationVariables>(
    'updateStocktake',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpsertStocktakeLinesMutation((req, res, ctx) => {
 *   const { deleteStocktakeLines, insertStocktakeLines, updateStocktakeLines } = req.variables;
 *   return res(
 *     ctx.data({ batchStocktake })
 *   )
 * })
 */
export const mockUpsertStocktakeLinesMutation = (resolver: ResponseResolver<GraphQLRequest<UpsertStocktakeLinesMutationVariables>, GraphQLContext<UpsertStocktakeLinesMutation>, any>) =>
  graphql.mutation<UpsertStocktakeLinesMutation, UpsertStocktakeLinesMutationVariables>(
    'upsertStocktakeLines',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockStocktakesQuery((req, res, ctx) => {
 *   const { params } = req.variables;
 *   return res(
 *     ctx.data({ stocktakes })
 *   )
 * })
 */
export const mockStocktakesQuery = (resolver: ResponseResolver<GraphQLRequest<StocktakesQueryVariables>, GraphQLContext<StocktakesQuery>, any>) =>
  graphql.query<StocktakesQuery, StocktakesQueryVariables>(
    'stocktakes',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockDeleteStocktakesMutation((req, res, ctx) => {
 *   const { ids } = req.variables;
 *   return res(
 *     ctx.data({ batchStocktake })
 *   )
 * })
 */
export const mockDeleteStocktakesMutation = (resolver: ResponseResolver<GraphQLRequest<DeleteStocktakesMutationVariables>, GraphQLContext<DeleteStocktakesMutation>, any>) =>
  graphql.mutation<DeleteStocktakesMutation, DeleteStocktakesMutationVariables>(
    'deleteStocktakes',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockInsertStocktakeMutation((req, res, ctx) => {
 *   const { input } = req.variables;
 *   return res(
 *     ctx.data({ insertStocktake })
 *   )
 * })
 */
export const mockInsertStocktakeMutation = (resolver: ResponseResolver<GraphQLRequest<InsertStocktakeMutationVariables>, GraphQLContext<InsertStocktakeMutation>, any>) =>
  graphql.mutation<InsertStocktakeMutation, InsertStocktakeMutationVariables>(
    'insertStocktake',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockRequisitionsQuery((req, res, ctx) => {
 *   const { params } = req.variables;
 *   return res(
 *     ctx.data({ requisitions })
 *   )
 * })
 */
export const mockRequisitionsQuery = (resolver: ResponseResolver<GraphQLRequest<RequisitionsQueryVariables>, GraphQLContext<RequisitionsQuery>, any>) =>
  graphql.query<RequisitionsQuery, RequisitionsQueryVariables>(
    'requisitions',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockDeleteSupplierRequisitionsMutation((req, res, ctx) => {
 *   const { ids } = req.variables;
 *   return res(
 *     ctx.data({ batchSupplierRequisition })
 *   )
 * })
 */
export const mockDeleteSupplierRequisitionsMutation = (resolver: ResponseResolver<GraphQLRequest<DeleteSupplierRequisitionsMutationVariables>, GraphQLContext<DeleteSupplierRequisitionsMutation>, any>) =>
  graphql.mutation<DeleteSupplierRequisitionsMutation, DeleteSupplierRequisitionsMutationVariables>(
    'deleteSupplierRequisitions',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpdateSupplierRequisitionMutation((req, res, ctx) => {
 *   const { input } = req.variables;
 *   return res(
 *     ctx.data({ updateSupplierRequisition })
 *   )
 * })
 */
export const mockUpdateSupplierRequisitionMutation = (resolver: ResponseResolver<GraphQLRequest<UpdateSupplierRequisitionMutationVariables>, GraphQLContext<UpdateSupplierRequisitionMutation>, any>) =>
  graphql.mutation<UpdateSupplierRequisitionMutation, UpdateSupplierRequisitionMutationVariables>(
    'updateSupplierRequisition',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockInsertSupplierRequisitionMutation((req, res, ctx) => {
 *   const { input } = req.variables;
 *   return res(
 *     ctx.data({ insertSupplierRequisition })
 *   )
 * })
 */
export const mockInsertSupplierRequisitionMutation = (resolver: ResponseResolver<GraphQLRequest<InsertSupplierRequisitionMutationVariables>, GraphQLContext<InsertSupplierRequisitionMutation>, any>) =>
  graphql.mutation<InsertSupplierRequisitionMutation, InsertSupplierRequisitionMutationVariables>(
    'insertSupplierRequisition',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockDeleteCustomerRequisitionsMutation((req, res, ctx) => {
 *   const { ids } = req.variables;
 *   return res(
 *     ctx.data({ batchCustomerRequisition })
 *   )
 * })
 */
export const mockDeleteCustomerRequisitionsMutation = (resolver: ResponseResolver<GraphQLRequest<DeleteCustomerRequisitionsMutationVariables>, GraphQLContext<DeleteCustomerRequisitionsMutation>, any>) =>
  graphql.mutation<DeleteCustomerRequisitionsMutation, DeleteCustomerRequisitionsMutationVariables>(
    'deleteCustomerRequisitions',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpdateCustomerRequisitionMutation((req, res, ctx) => {
 *   const { input } = req.variables;
 *   return res(
 *     ctx.data({ updateCustomerRequisition })
 *   )
 * })
 */
export const mockUpdateCustomerRequisitionMutation = (resolver: ResponseResolver<GraphQLRequest<UpdateCustomerRequisitionMutationVariables>, GraphQLContext<UpdateCustomerRequisitionMutation>, any>) =>
  graphql.mutation<UpdateCustomerRequisitionMutation, UpdateCustomerRequisitionMutationVariables>(
    'updateCustomerRequisition',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockInsertCustomerRequisitionMutation((req, res, ctx) => {
 *   const { input } = req.variables;
 *   return res(
 *     ctx.data({ insertCustomerRequisition })
 *   )
 * })
 */
export const mockInsertCustomerRequisitionMutation = (resolver: ResponseResolver<GraphQLRequest<InsertCustomerRequisitionMutationVariables>, GraphQLContext<InsertCustomerRequisitionMutation>, any>) =>
  graphql.mutation<InsertCustomerRequisitionMutation, InsertCustomerRequisitionMutationVariables>(
    'insertCustomerRequisition',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockRequisitionQuery((req, res, ctx) => {
 *   const { id } = req.variables;
 *   return res(
 *     ctx.data({ requisition })
 *   )
 * })
 */
export const mockRequisitionQuery = (resolver: ResponseResolver<GraphQLRequest<RequisitionQueryVariables>, GraphQLContext<RequisitionQuery>, any>) =>
  graphql.query<RequisitionQuery, RequisitionQueryVariables>(
    'requisition',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpsertSupplierRequisitionMutation((req, res, ctx) => {
 *   const { deleteSupplierRequisitionLines, insertSupplierRequisitionLines, updateSupplierRequisitionLines, updateSupplierRequisitions } = req.variables;
 *   return res(
 *     ctx.data({ batchSupplierRequisition })
 *   )
 * })
 */
export const mockUpsertSupplierRequisitionMutation = (resolver: ResponseResolver<GraphQLRequest<UpsertSupplierRequisitionMutationVariables>, GraphQLContext<UpsertSupplierRequisitionMutation>, any>) =>
  graphql.mutation<UpsertSupplierRequisitionMutation, UpsertSupplierRequisitionMutationVariables>(
    'upsertSupplierRequisition',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpsertCustomerRequisitionMutation((req, res, ctx) => {
 *   const { deleteCustomerRequisitionLines, insertCustomerRequisitionLines, updateCustomerRequisitionLines, updateCustomerRequisitions } = req.variables;
 *   return res(
 *     ctx.data({ batchCustomerRequisition })
 *   )
 * })
 */
export const mockUpsertCustomerRequisitionMutation = (resolver: ResponseResolver<GraphQLRequest<UpsertCustomerRequisitionMutationVariables>, GraphQLContext<UpsertCustomerRequisitionMutation>, any>) =>
  graphql.mutation<UpsertCustomerRequisitionMutation, UpsertCustomerRequisitionMutationVariables>(
    'upsertCustomerRequisition',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockInvoicesQuery((req, res, ctx) => {
 *   const { first, offset, key, desc, filter } = req.variables;
 *   return res(
 *     ctx.data({ invoices })
 *   )
 * })
 */
export const mockInvoicesQuery = (resolver: ResponseResolver<GraphQLRequest<InvoicesQueryVariables>, GraphQLContext<InvoicesQuery>, any>) =>
  graphql.query<InvoicesQuery, InvoicesQueryVariables>(
    'invoices',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockNamesQuery((req, res, ctx) => {
 *   const { key, desc, first, offset, filter } = req.variables;
 *   return res(
 *     ctx.data({ names })
 *   )
 * })
 */
export const mockNamesQuery = (resolver: ResponseResolver<GraphQLRequest<NamesQueryVariables>, GraphQLContext<NamesQuery>, any>) =>
  graphql.query<NamesQuery, NamesQueryVariables>(
    'names',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockItemsWithStockLinesQuery((req, res, ctx) => {
 *   const { first, offset, key, desc, filter } = req.variables;
 *   return res(
 *     ctx.data({ items })
 *   )
 * })
 */
export const mockItemsWithStockLinesQuery = (resolver: ResponseResolver<GraphQLRequest<ItemsWithStockLinesQueryVariables>, GraphQLContext<ItemsWithStockLinesQuery>, any>) =>
  graphql.query<ItemsWithStockLinesQuery, ItemsWithStockLinesQueryVariables>(
    'itemsWithStockLines',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockItemsListViewQuery((req, res, ctx) => {
 *   const { first, offset, key, desc, filter } = req.variables;
 *   return res(
 *     ctx.data({ items })
 *   )
 * })
 */
export const mockItemsListViewQuery = (resolver: ResponseResolver<GraphQLRequest<ItemsListViewQueryVariables>, GraphQLContext<ItemsListViewQuery>, any>) =>
  graphql.query<ItemsListViewQuery, ItemsListViewQueryVariables>(
    'itemsListView',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockInsertOutboundShipmentMutation((req, res, ctx) => {
 *   const { id, otherPartyId } = req.variables;
 *   return res(
 *     ctx.data({ insertOutboundShipment })
 *   )
 * })
 */
export const mockInsertOutboundShipmentMutation = (resolver: ResponseResolver<GraphQLRequest<InsertOutboundShipmentMutationVariables>, GraphQLContext<InsertOutboundShipmentMutation>, any>) =>
  graphql.mutation<InsertOutboundShipmentMutation, InsertOutboundShipmentMutationVariables>(
    'insertOutboundShipment',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpdateOutboundShipmentMutation((req, res, ctx) => {
 *   const { input } = req.variables;
 *   return res(
 *     ctx.data({ updateOutboundShipment })
 *   )
 * })
 */
export const mockUpdateOutboundShipmentMutation = (resolver: ResponseResolver<GraphQLRequest<UpdateOutboundShipmentMutationVariables>, GraphQLContext<UpdateOutboundShipmentMutation>, any>) =>
  graphql.mutation<UpdateOutboundShipmentMutation, UpdateOutboundShipmentMutationVariables>(
    'updateOutboundShipment',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockDeleteOutboundShipmentsMutation((req, res, ctx) => {
 *   const { ids } = req.variables;
 *   return res(
 *     ctx.data({ batchOutboundShipment })
 *   )
 * })
 */
export const mockDeleteOutboundShipmentsMutation = (resolver: ResponseResolver<GraphQLRequest<DeleteOutboundShipmentsMutationVariables>, GraphQLContext<DeleteOutboundShipmentsMutation>, any>) =>
  graphql.mutation<DeleteOutboundShipmentsMutation, DeleteOutboundShipmentsMutationVariables>(
    'deleteOutboundShipments',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockInvoiceCountsQuery((req, res, ctx) => {
 *   const { timezoneOffset } = req.variables;
 *   return res(
 *     ctx.data({ invoiceCounts })
 *   )
 * })
 */
export const mockInvoiceCountsQuery = (resolver: ResponseResolver<GraphQLRequest<InvoiceCountsQueryVariables>, GraphQLContext<InvoiceCountsQuery>, any>) =>
  graphql.query<InvoiceCountsQuery, InvoiceCountsQueryVariables>(
    'invoiceCounts',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockStockCountsQuery((req, res, ctx) => {
 *   const { daysTillExpired, timezoneOffset } = req.variables;
 *   return res(
 *     ctx.data({ stockCounts })
 *   )
 * })
 */
export const mockStockCountsQuery = (resolver: ResponseResolver<GraphQLRequest<StockCountsQueryVariables>, GraphQLContext<StockCountsQuery>, any>) =>
  graphql.query<StockCountsQuery, StockCountsQueryVariables>(
    'stockCounts',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpsertOutboundShipmentMutation((req, res, ctx) => {
 *   const { deleteOutboundShipmentLines, insertOutboundShipmentLines, updateOutboundShipmentLines, updateOutboundShipments } = req.variables;
 *   return res(
 *     ctx.data({ batchOutboundShipment })
 *   )
 * })
 */
export const mockUpsertOutboundShipmentMutation = (resolver: ResponseResolver<GraphQLRequest<UpsertOutboundShipmentMutationVariables>, GraphQLContext<UpsertOutboundShipmentMutation>, any>) =>
  graphql.mutation<UpsertOutboundShipmentMutation, UpsertOutboundShipmentMutationVariables>(
    'upsertOutboundShipment',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockDeleteInboundShipmentLinesMutation((req, res, ctx) => {
 *   const { input } = req.variables;
 *   return res(
 *     ctx.data({ batchInboundShipment })
 *   )
 * })
 */
export const mockDeleteInboundShipmentLinesMutation = (resolver: ResponseResolver<GraphQLRequest<DeleteInboundShipmentLinesMutationVariables>, GraphQLContext<DeleteInboundShipmentLinesMutation>, any>) =>
  graphql.mutation<DeleteInboundShipmentLinesMutation, DeleteInboundShipmentLinesMutationVariables>(
    'deleteInboundShipmentLines',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockDeleteOutboundShipmentLinesMutation((req, res, ctx) => {
 *   const { input } = req.variables;
 *   return res(
 *     ctx.data({ batchOutboundShipment })
 *   )
 * })
 */
export const mockDeleteOutboundShipmentLinesMutation = (resolver: ResponseResolver<GraphQLRequest<DeleteOutboundShipmentLinesMutationVariables>, GraphQLContext<DeleteOutboundShipmentLinesMutation>, any>) =>
  graphql.mutation<DeleteOutboundShipmentLinesMutation, DeleteOutboundShipmentLinesMutationVariables>(
    'deleteOutboundShipmentLines',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpsertInboundShipmentMutation((req, res, ctx) => {
 *   const { deleteInboundShipmentLines, insertInboundShipmentLines, updateInboundShipmentLines, updateInboundShipments } = req.variables;
 *   return res(
 *     ctx.data({ batchInboundShipment })
 *   )
 * })
 */
export const mockUpsertInboundShipmentMutation = (resolver: ResponseResolver<GraphQLRequest<UpsertInboundShipmentMutationVariables>, GraphQLContext<UpsertInboundShipmentMutation>, any>) =>
  graphql.mutation<UpsertInboundShipmentMutation, UpsertInboundShipmentMutationVariables>(
    'upsertInboundShipment',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpdateInboundShipmentMutation((req, res, ctx) => {
 *   const { input } = req.variables;
 *   return res(
 *     ctx.data({ updateInboundShipment })
 *   )
 * })
 */
export const mockUpdateInboundShipmentMutation = (resolver: ResponseResolver<GraphQLRequest<UpdateInboundShipmentMutationVariables>, GraphQLContext<UpdateInboundShipmentMutation>, any>) =>
  graphql.mutation<UpdateInboundShipmentMutation, UpdateInboundShipmentMutationVariables>(
    'updateInboundShipment',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockDeleteInboundShipmentsMutation((req, res, ctx) => {
 *   const { ids } = req.variables;
 *   return res(
 *     ctx.data({ batchInboundShipment })
 *   )
 * })
 */
export const mockDeleteInboundShipmentsMutation = (resolver: ResponseResolver<GraphQLRequest<DeleteInboundShipmentsMutationVariables>, GraphQLContext<DeleteInboundShipmentsMutation>, any>) =>
  graphql.mutation<DeleteInboundShipmentsMutation, DeleteInboundShipmentsMutationVariables>(
    'deleteInboundShipments',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockInsertInboundShipmentMutation((req, res, ctx) => {
 *   const { id, otherPartyId } = req.variables;
 *   return res(
 *     ctx.data({ insertInboundShipment })
 *   )
 * })
 */
export const mockInsertInboundShipmentMutation = (resolver: ResponseResolver<GraphQLRequest<InsertInboundShipmentMutationVariables>, GraphQLContext<InsertInboundShipmentMutation>, any>) =>
  graphql.mutation<InsertInboundShipmentMutation, InsertInboundShipmentMutationVariables>(
    'insertInboundShipment',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockLocationsQuery((req, res, ctx) => {
 *   const { sort } = req.variables;
 *   return res(
 *     ctx.data({ locations })
 *   )
 * })
 */
export const mockLocationsQuery = (resolver: ResponseResolver<GraphQLRequest<LocationsQueryVariables>, GraphQLContext<LocationsQuery>, any>) =>
  graphql.query<LocationsQuery, LocationsQueryVariables>(
    'locations',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockInsertLocationMutation((req, res, ctx) => {
 *   const { input } = req.variables;
 *   return res(
 *     ctx.data({ insertLocation })
 *   )
 * })
 */
export const mockInsertLocationMutation = (resolver: ResponseResolver<GraphQLRequest<InsertLocationMutationVariables>, GraphQLContext<InsertLocationMutation>, any>) =>
  graphql.mutation<InsertLocationMutation, InsertLocationMutationVariables>(
    'insertLocation',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpdateLocationMutation((req, res, ctx) => {
 *   const { input } = req.variables;
 *   return res(
 *     ctx.data({ updateLocation })
 *   )
 * })
 */
export const mockUpdateLocationMutation = (resolver: ResponseResolver<GraphQLRequest<UpdateLocationMutationVariables>, GraphQLContext<UpdateLocationMutation>, any>) =>
  graphql.mutation<UpdateLocationMutation, UpdateLocationMutationVariables>(
    'updateLocation',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockStoresQuery((req, res, ctx) => {
 *   const { first, offset, filter } = req.variables;
 *   return res(
 *     ctx.data({ stores })
 *   )
 * })
 */
export const mockStoresQuery = (resolver: ResponseResolver<GraphQLRequest<StoresQueryVariables>, GraphQLContext<StoresQuery>, any>) =>
  graphql.query<StoresQuery, StoresQueryVariables>(
    'stores',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockAuthTokenQuery((req, res, ctx) => {
 *   const { username, password } = req.variables;
 *   return res(
 *     ctx.data({ authToken })
 *   )
 * })
 */
export const mockAuthTokenQuery = (resolver: ResponseResolver<GraphQLRequest<AuthTokenQueryVariables>, GraphQLContext<AuthTokenQuery>, any>) =>
  graphql.query<AuthTokenQuery, AuthTokenQueryVariables>(
    'authToken',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockMasterListsQuery((req, res, ctx) => {
 *   const { first, offset, key, desc, filter } = req.variables;
 *   return res(
 *     ctx.data({ masterLists })
 *   )
 * })
 */
export const mockMasterListsQuery = (resolver: ResponseResolver<GraphQLRequest<MasterListsQueryVariables>, GraphQLContext<MasterListsQuery>, any>) =>
  graphql.query<MasterListsQuery, MasterListsQueryVariables>(
    'masterLists',
    resolver
  )
