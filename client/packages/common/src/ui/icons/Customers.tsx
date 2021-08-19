import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export const Customers = (props: SvgIconProps): JSX.Element => {
  const combinedProps: SvgIconProps = { color: 'primary', ...props };
  return (
    <SvgIcon {...combinedProps} viewBox="0 0 20 20">
      <path d="M10.833 11.667c2.302 0 4.167 1.865 4.167 4.166V17.5c0 .46-.373.833-.833.833-.46 0-.834-.373-.834-.833v-1.667c0-1.38-1.119-2.5-2.5-2.5H4.167c-1.381 0-2.5 1.12-2.5 2.5V17.5c0 .46-.373.833-.834.833-.46 0-.833-.373-.833-.833v-1.667c0-2.3 1.865-4.166 4.167-4.166zm5.027.733c.115-.446.57-.714 1.015-.599 1.839.475 3.124 2.133 3.125 4.032V17.5c0 .46-.373.833-.833.833-.46 0-.834-.373-.834-.833v-1.666c0-1.14-.772-2.134-1.875-2.419-.445-.115-.713-.57-.598-1.015zM7.5 1.667c2.301 0 4.167 1.865 4.167 4.166C11.667 8.135 9.8 10 7.5 10c-2.301 0-4.167-1.865-4.167-4.167 0-2.3 1.866-4.166 4.167-4.166zm5.026.735c.114-.446.568-.715 1.014-.601 1.844.472 3.133 2.133 3.133 4.037 0 1.903-1.29 3.564-3.133 4.036-.446.114-.9-.155-1.014-.6-.114-.446.155-.9.6-1.015 1.107-.283 1.88-1.28 1.88-2.421 0-1.142-.773-2.14-1.88-2.422-.445-.115-.714-.569-.6-1.014zM7.5 3.333c-1.38 0-2.5 1.12-2.5 2.5 0 1.381 1.12 2.5 2.5 2.5s2.5-1.119 2.5-2.5c0-1.38-1.12-2.5-2.5-2.5z" />
    </SvgIcon>
  );
};