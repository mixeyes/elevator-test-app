import styled from 'styled-components';

export const FormControl = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.label`
  font-size: 1.5rem;
  color: #2196f3;
  font-weight: normal;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
`;

export const InputStyled = styled.input`
  background: none;
  color: #c6c6c6;
  font-size: 1rem;
  padding: 10px 10px 10px 5px;
  display: block;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #c6c6c6;

  &:focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.p`
font-size: 1rem;
color: red;
`
