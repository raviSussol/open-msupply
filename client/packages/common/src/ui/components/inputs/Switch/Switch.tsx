import React from 'react';
import { FormControlLabel, Switch as MuiSwitch, Theme } from '@mui/material';

type LabelPlacement = 'bottom' | 'end' | 'start' | 'top';

interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  labelPlacement: LabelPlacement;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: 'medium' | 'small';
}

const getLabelStyle = (
  labelPlacement: LabelPlacement,
  size: 'medium' | 'small'
) => {
  const margin = size === 'medium' ? '0' : '3px';
  switch (labelPlacement) {
    case 'end':
      return { marginLeft: margin };
    case 'start':
      return { marginRight: margin };
    default:
      return {};
  }
};

export const Switch: React.FC<SwitchProps> = ({
  checked,
  disabled,
  label,
  labelPlacement = 'start',
  onChange,
  size = 'medium',
}) => {
  const isSmall = size === 'small';
  const switchStyle = {
    width: isSmall ? '40px' : '70px',
    padding: isSmall ? '1px' : '6px 12px',
    '& .MuiSwitch-switchBase': {
      paddingLeft: '3px',

      right: 'auto', // emotion is setting this and making a mess
    },
    '& .Mui-checked .MuiSwitch-thumb': {
      color: 'inherit',
    },
    '& .MuiSwitch-thumb': {
      color: 'gray.dark',
    },
    '& .MuiSwitch-track': {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'border',
      backgroundColor: '#fff',
      transition: (theme: Theme) =>
        theme.transitions.create(['background-color'], {
          duration: 500,
        }),
    },
  };

  const labelStyle = {
    '& .MuiFormControlLabel-label': getLabelStyle(labelPlacement, size),
  };

  const styledSwitch = (
    <MuiSwitch
      checked={checked}
      size={size}
      sx={switchStyle}
      onChange={onChange}
      focusVisibleClassName=".Mui-focusVisibles"
    />
  );
  return (
    <FormControlLabel
      control={styledSwitch}
      disabled={disabled}
      label={label}
      labelPlacement={labelPlacement}
      sx={labelStyle}
    />
  );
};
