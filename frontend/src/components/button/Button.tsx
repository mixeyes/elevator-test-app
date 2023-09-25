import React, { FC } from 'react';
import { StyledButton } from './styles';
import { BUTTON_TYPES, OnClickFunction } from '../../utils';


interface IButton {
  label: string;
  onClick?: OnClickFunction;
  types?: BUTTON_TYPES;
  size?: {
    width?: string,
    height?: string
  }
}
export const Button: FC<IButton> = ({ label, onClick, types = BUTTON_TYPES.Button, size }) => {
  return (
    <StyledButton onClick={onClick} role="button" type={types} size={size}>
      {label}
    </StyledButton>
  );
};
