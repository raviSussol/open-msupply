import React, { FC, useState } from 'react';
import {
  and,
  Categorization,
  categorizationHasCategory,
  Category,
  isVisible,
  LayoutProps,
  optionIs,
  RankedTester,
  rankWith,
  uiTypeIs,
} from '@jsonforms/core';
import { withJsonFormsLayoutProps } from '@jsonforms/react';
import { Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DialogButton } from '../../../components/buttons';
import { ModalProps, useDialog } from '@common/hooks';
import {
  AjvProps,
  MaterialLayoutRenderer,
  MaterialLayoutRendererProps,
  withAjvProps,
} from '@jsonforms/material-renderers';

interface CategoryModalProps extends ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CategoryModal: FC<CategoryModalProps> = ({
  children,
  isOpen,
  onClose,
  ...modalProps
}) => {
  const { Modal } = useDialog({
    isOpen,
    onClose,
  });
  return <Modal {...modalProps}>{children}</Modal>;
};

export const categorizationTabLayoutTester: RankedTester = rankWith(
  2,
  and(
    uiTypeIs('Categorization'),
    categorizationHasCategory,
    optionIs('variant', 'tab')
  )
);

const Icon = styled('i')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: 50,
  width: 50,
}));

const UIComponent: FC<LayoutProps & AjvProps> = ({
  ajv,
  data,
  path,
  renderers,
  schema,
  uischema,
  visible,
  cells,
}) => {
  const [activeCategory, setActiveCategory] = useState<number | undefined>();
  const categorization = uischema as Categorization;

  const categories = categorization.elements
    .filter(
      (category: Category | Categorization) =>
        isVisible(category, data, '', ajv) && category.type === 'Category'
    )
    .map(category => category as Category);

  const childProps: MaterialLayoutRendererProps = {
    elements:
      activeCategory === undefined
        ? []
        : categorization.elements[activeCategory]?.elements ?? [],
    schema,
    path,
    direction: 'column',
    visible,
    renderers,
    cells,
  };

  const onClose = () => setActiveCategory(undefined);

  return (
    <Grid
      display="flex"
      container
      padding={2}
      justifyContent="space-evenly"
      flexWrap="wrap"
      gap={2}
    >
      {categories.map((category: Category, idx: number) => (
        <>
          <Button
            variant="outlined"
            startIcon={<Icon className={`${category.options?.['icon']}`} />}
            key={category.label}
            onClick={() => setActiveCategory(idx)}
            sx={{
              width: '150px',
              height: '150px',
              flexDirection: 'column',
              textTransform: 'none',
              '& .MuiButton-startIcon': {
                paddingBottom: '8px',
              },
            }}
          >
            {category.label}
          </Button>
          <CategoryModal
            onClose={onClose}
            isOpen={activeCategory === idx}
            title={category.label}
            okButton={<DialogButton variant="ok" onClick={onClose} />}
            width={800}
          >
            <MaterialLayoutRenderer {...childProps} />
          </CategoryModal>
        </>
      ))}
    </Grid>
  );
};

export const CategorizationTabLayout = withJsonFormsLayoutProps(
  withAjvProps(UIComponent)
);
