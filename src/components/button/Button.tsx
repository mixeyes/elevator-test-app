import React, { FC } from 'react';
import { StyledButton } from './styles';
import { OnClickFunction } from '../../utils';

interface IButton {
  label: string;
  onClick: OnClickFunction;
}
export const Button: FC<IButton> = ({ label, onClick }) => {
  return (
    <StyledButton onClick={onClick} role="button">
      {label}
    </StyledButton>
  );
};
