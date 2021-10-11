import React from 'react';
import { Grid } from '@mui/material';

export const PanelField: React.FC = props => (
  <Grid
    item
    flex={1}
    {...props}
    sx={{
      color: theme => theme.palette.form.field,
      fontSize: '12px',
    }}
  />
);
