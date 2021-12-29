import React from 'react';
import { ExpiryDateInput } from '@common/components';
import { DomainObject } from '@common/types';
import { isTypeOf, isProduction } from '@common/utils';
import { ColumnDefinition } from '../../columns';

export const getExpiryDateInputColumn = <
  T extends DomainObject
>(): ColumnDefinition<T> => ({
  key: 'expiryDateInput',
  label: 'label.expiry',
  accessor: ({ rowData }) => {
    if (isTypeOf<{ expiryDate: Date | null }>(rowData, 'expiryDate')) {
      return rowData.expiryDate;
    } else {
      if (!isProduction()) {
        // TODO: Bugsnag during prod
        throw new Error(`
        The default accessor for the expiry input column has been called with row data
        that does not have an 'expiryDate' field.

        This column requires the field 'expiryDate' to be present in the row data to render
        correctly.

        Have you forgotten to provide a custom accessor to return the expiry date? i.e.
        [ getExpiryDateInputColumn(), { accessor: ({rowData}) => ({ location: rowData.stockLine.expiryDate }) }]
        `);
      } else {
        return null;
      }
    }
  },
  Cell: ({ rowData, column, rows }) => {
    const value = column.accessor({ rowData, rows }) as Date | null;

    const onChange = (value: Date | null) => {
      column.setter({ ...rowData, expiryDate: value });
    };

    return <ExpiryDateInput value={value} onChange={onChange} />;
  },
});
