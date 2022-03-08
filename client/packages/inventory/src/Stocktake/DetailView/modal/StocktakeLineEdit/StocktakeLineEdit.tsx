import React, { FC, useState } from 'react';
import { ItemRowFragment } from '@openmsupply-client/system';
import {
  BasicSpinner,
  Divider,
  useTranslation,
  useIsMediumScreen,
  Box,
  ModalMode,
  useNotification,
  TableProvider,
  createTableStore,
} from '@openmsupply-client/common';
import { StocktakeLineEditForm } from './StocktakeLineEditForm';
import { useStocktakeLineEdit } from './hooks';
import {
  StocktakeLineEditTabs,
  StyledTabContainer,
  StyledTabPanel,
} from './StocktakeLineEditTabs';
import { useIsStocktakeDisabled } from '../../../api';
import { BatchTable, PricingTable } from './StocktakeLineEditTables';
import { StocktakeLineEditModal } from './StocktakeLineEditModal';
interface StocktakeLineEditProps {
  item: ItemRowFragment | null;
  mode: ModalMode | null;
  onClose: () => void;
  isOpen: boolean;
}

export const StocktakeLineEdit: FC<StocktakeLineEditProps> = ({
  item,
  mode,
  onClose,
  isOpen,
}) => {
  const isDisabled = useIsStocktakeDisabled();
  const { error } = useNotification();
  const [currentItem, setCurrentItem] = useState(item);
  const isMediumScreen = useIsMediumScreen();
  const t = useTranslation(['common', 'inventory']);
  const { draftLines, update, addLine, isLoading, save, nextItem } =
    useStocktakeLineEdit(currentItem);

  const onNext = async () => {
    await save(draftLines);
    if (mode === ModalMode.Update && nextItem) setCurrentItem(nextItem);
    else if (mode === ModalMode.Create) setCurrentItem(null);
    else onClose();
    // Returning true here triggers the slide animation
    return true;
  };

  const onOk = async () => {
    try {
      await save(draftLines);
      onClose();
    } catch (e) {
      error(t('error.cant-save'))();
    }
  };

  return (
    <TableProvider createStore={createTableStore}>
      <StocktakeLineEditModal
        onNext={onNext}
        onOk={onOk}
        onCancel={onClose}
        mode={mode}
        isOpen={isOpen}
      >
        {(() => {
          if (isLoading) {
            return (
              <Box sx={{ height: isMediumScreen ? 350 : 450 }}>
                <BasicSpinner messageKey="saving" />
              </Box>
            );
          }

          return (
            <>
              <StocktakeLineEditForm
                item={currentItem}
                onChangeItem={setCurrentItem}
                mode={mode}
              />
              {!currentItem ? (
                <Box sx={{ height: isMediumScreen ? 400 : 500 }} />
              ) : null}
              {!!currentItem ? (
                <>
                  <Divider margin={5} />
                  <StocktakeLineEditTabs
                    isDisabled={isDisabled}
                    onAddLine={addLine}
                  >
                    <StyledTabPanel value={'Batch'}>
                      <StyledTabContainer>
                        <BatchTable
                          isDisabled={isDisabled}
                          batches={draftLines}
                          update={update}
                        />
                      </StyledTabContainer>
                    </StyledTabPanel>

                    <StyledTabPanel value={'Pricing'}>
                      <StyledTabContainer>
                        <PricingTable
                          isDisabled={isDisabled}
                          batches={draftLines}
                          update={update}
                        />
                      </StyledTabContainer>
                    </StyledTabPanel>
                  </StocktakeLineEditTabs>
                </>
              ) : null}
            </>
          );
        })()}
      </StocktakeLineEditModal>
    </TableProvider>
  );
};
