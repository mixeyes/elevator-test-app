import styled from 'styled-components';
import { BUTTON_TYPES } from '../../utils';

export const StyledButton = styled.button<{
  size?: {
    width?: string;
    height?: string;
  };
  type?: BUTTON_TYPES;
}>`
  background: ${(props) =>
    props.type === BUTTON_TYPES.Submit
      ? 'linear-gradient(-180deg, #30a133 0%, #09790b 100%)'
      : 'linear-gradient(-180deg, #37aee2 0%, #1e96c8 100%)'};
  border-radius: 0.5rem;
  box-sizing: border-box;
  display: flex;
  font-size: 16px;
  justify-content: center;
  padding: 1rem 1.75rem;
  text-decoration: none;
  width: ${(props) => (props.size?.width ? props.size.width : '100%')};
  height: ${(props) => (props.size?.height ? props.size.height : null)};
  border: 0;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :hover {
    background: ${(props) =>
      props.type === BUTTON_TYPES.Submit
        ? 'linear-gradient(-180deg, #09790b 0%, #30a133 100%)'
        : 'linear-gradient(-180deg, #1d95c9 0%, #17759c 100%)'};
  }

  @media (min-width: 768px) {
    .button-43 {
      padding: 1rem 2rem;
    }
  }
`;
