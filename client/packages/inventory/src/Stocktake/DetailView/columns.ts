import {
  getRowExpandColumn,
  GenericColumnKey,
  useColumns,
  ColumnAlign,
  ifTheSameElseDefault,
  formatExpiryDate,
  Column,
  SortBy,
} from '@openmsupply-client/common';
import { StocktakeLine, StocktakeSummaryItem } from './../../types';

interface UseStocktakeColumnOptions {
  sortBy: SortBy<StocktakeLine | StocktakeSummaryItem>;
  onChangeSortBy: (
    column: Column<StocktakeLine | StocktakeSummaryItem>
  ) => SortBy<StocktakeLine | StocktakeSummaryItem>;
}

const expandColumn = getRowExpandColumn<StocktakeLine | StocktakeSummaryItem>();

export const useStocktakeColumns = ({
  sortBy,
  onChangeSortBy,
}: UseStocktakeColumnOptions): Column<StocktakeLine | StocktakeSummaryItem>[] =>
  useColumns<StocktakeLine | StocktakeSummaryItem>(
    [
      [
        'itemCode',
        {
          getSortValue: row => {
            if ('lines' in row) {
              const { lines } = row;
              return ifTheSameElseDefault(lines, 'itemCode', '');
            } else {
              return row.itemCode;
            }
          },
          accessor: ({ rowData }) => {
            if ('lines' in rowData) {
              const { lines } = rowData;
              return ifTheSameElseDefault(lines, 'itemCode', '');
            } else {
              return rowData.itemCode;
            }
          },
        },
      ],
      [
        'itemName',
        {
          getSortValue: row => {
            if ('lines' in row) {
              const { lines } = row;
              return ifTheSameElseDefault(lines, 'itemName', '');
            } else {
              return row.itemName;
            }
          },
          accessor: ({ rowData }) => {
            if ('lines' in rowData) {
              const { lines } = rowData;
              return ifTheSameElseDefault(lines, 'itemName', '');
            } else {
              return rowData.itemName;
            }
          },
        },
      ],
      [
        'batch',
        {
          getSortValue: row => {
            if ('lines' in row) {
              const { lines } = row;
              return ifTheSameElseDefault(lines, 'batch', '[multiple]') ?? '';
            } else {
              return row.batch ?? '';
            }
          },
          accessor: ({ rowData }) => {
            if ('lines' in rowData) {
              const { lines } = rowData;
              return ifTheSameElseDefault(lines, 'batch', '[multiple]');
            } else {
              return rowData.batch;
            }
          },
        },
      ],
      [
        'expiryDate',
        {
          getSortValue: row => {
            if ('lines' in row) {
              const { lines } = row;
              const expiryDate =
                ifTheSameElseDefault(lines, 'expiryDate', null) ?? '';
              return (expiryDate && formatExpiryDate(expiryDate)) || '';
            } else {
              return formatExpiryDate(row.expiryDate) ?? '';
            }
          },
          accessor: ({ rowData }) => {
            if ('lines' in rowData) {
              const { lines } = rowData;
              const expiryDate = ifTheSameElseDefault(
                lines,
                'expiryDate',
                null
              );
              return expiryDate;
            } else {
              return rowData.expiryDate;
            }
          },
        },
      ],
      [
        'packSize',
        {
          width: 50,
          getSortValue: row => {
            if ('lines' in row) {
              const { lines } = row;
              return ifTheSameElseDefault(lines, 'packSize', '') ?? '';
            } else {
              return row.packSize ?? '';
            }
          },
          accessor: ({ rowData }) => {
            if ('lines' in rowData) {
              const { lines } = rowData;
              return ifTheSameElseDefault(lines, 'packSize', '');
            } else {
              return rowData.packSize;
            }
          },
        },
      ],
      {
        key: 'snapshotNumPacks',
        width: 180,
        label: 'label.snapshot-num-of-packs',
        align: ColumnAlign.Right,
        getSortValue: row => {
          if ('lines' in row) {
            const { lines } = row;
            return (
              ifTheSameElseDefault(lines, 'snapshotNumberOfPacks', '') ?? ''
            );
          } else {
            return row.snapshotNumberOfPacks ?? '';
          }
        },
        accessor: ({ rowData }) => {
          if ('lines' in rowData) {
            const { lines } = rowData;
            return ifTheSameElseDefault(lines, 'snapshotNumberOfPacks', '');
          } else {
            return rowData.snapshotNumberOfPacks;
          }
        },
      },
      {
        key: 'countedNumPacks',
        label: 'label.counted-num-of-packs',
        width: 180,
        align: ColumnAlign.Right,
        getSortValue: row => {
          if ('lines' in row) {
            const { lines } = row;
            return (
              ifTheSameElseDefault(lines, 'countedNumberOfPacks', '') ?? ''
            );
          } else {
            return row.countedNumberOfPacks ?? '';
          }
        },
        accessor: ({ rowData }) => {
          if ('lines' in rowData) {
            const { lines } = rowData;
            return ifTheSameElseDefault(lines, 'countedNumberOfPacks', '');
          } else {
            return rowData.countedNumberOfPacks;
          }
        },
      },
      expandColumn,
      GenericColumnKey.Selection,
    ],
    { sortBy, onChangeSortBy },
    [sortBy, onChangeSortBy]
  );

export const useExpansionColumns = (): Column<StocktakeLine>[] =>
  useColumns([
    'batch',
    'expiryDate',
    'packSize',
    {
      key: 'snapshotNumPacks',
      width: 200,
      label: 'label.snapshot-num-of-packs',
      align: ColumnAlign.Right,
      accessor: ({ rowData }) => rowData.snapshotNumberOfPacks,
    },
    {
      key: 'countedNumPacks',
      label: 'label.counted-num-of-packs',
      width: 200,
      align: ColumnAlign.Right,
      accessor: ({ rowData }) => rowData.countedNumberOfPacks,
    },
  ]);