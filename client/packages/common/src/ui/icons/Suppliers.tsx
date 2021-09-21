import React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const Suppliers = (props: SvgIconProps): JSX.Element => {
  const combinedProps: SvgIconProps = { color: 'primary', ...props };
  return (
    <SvgIcon {...combinedProps} viewBox="0 0 20 20">
      <path d="M.89 10.532l.006-.016.01-.021 2.89-6.508c.402-.905 1.298-1.488 2.287-1.487h7.833c.99 0 1.887.583 2.287 1.487l2.892 6.508.006.015c.01.02.018.043.025.065l-.031-.08c.018.04.032.082.044.124l.011.049c.011.054.017.11.017.165V15c0 1.38-1.12 2.5-2.5 2.5H3.333c-1.38 0-2.5-1.12-2.5-2.5v-4.167l.007-.104c.005-.04.013-.08.023-.118l.002-.007.024-.072zM2.5 15c0 .46.373.833.833.833h13.334c.46 0 .833-.373.833-.833v-3.334h-3.72l-1.42 2.13c-.155.231-.415.37-.693.37H8.333c-.278 0-.538-.139-.693-.37l-1.42-2.13H2.5V15zM13.917 4.167H6.083c-.33 0-.63.194-.763.495L2.948 10h3.719c.238 0 .464.102.62.278l.073.093L8.78 12.5h2.44l1.42-2.129c.155-.232.415-.371.693-.371h3.717l-2.37-5.338c-.134-.301-.433-.496-.763-.495z" />
    </SvgIcon>
  );
};
