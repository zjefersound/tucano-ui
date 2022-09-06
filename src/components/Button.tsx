import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import React from 'react';

export interface ButtonProps extends AntButtonProps {
  /** custom content */
  variant?: 'primary' | 'secondary';
}
/**
 * A custom Button component. Neat!
 */
function Button({ variant = 'primary', ...props }: ButtonProps) {
  return <AntButton {...props} />;
}

export default Button;
