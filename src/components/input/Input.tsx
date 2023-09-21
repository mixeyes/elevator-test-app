import React, { FC } from'react';
import { INPUT_TYPES } from '../../utils';
import { UseFormRegister } from 'react-hook-form';
import { FormControl, Label, InputStyled, ErrorMessage } from './styles';

interface IInput {
  label: string;
  required?: boolean;
  placeholder?: string;
  type: INPUT_TYPES;
  register?: UseFormRegister<any>;
  name: string;
  errorMessage?: string;
  value?: string | number;
}
export const Input: FC<IInput> = ({ label, required, type = INPUT_TYPES.Text, placeholder, register, name, errorMessage, value }) => {
  return (
    <FormControl>
      {register ? (
        <InputStyled type={type} required={required} {...register(name)} placeholder={placeholder} />
      ) : (
        <InputStyled type={type} required={required} value={value} placeholder={placeholder} />
      )}
      <Label>{label} </Label>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </FormControl>
  );
};

