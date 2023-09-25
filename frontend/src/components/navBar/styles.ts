import styled from 'styled-components';
import { NavItem } from './NavItem';

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 1vw;
  height: 100%;

  a {
    font-size: 3vh;
  }
`;

export const NavItemStyled = styled(NavItem)`
  a {
    color: ${(props) => (props.isActive ? 'rgb(61, 144, 37)' : 'rgb(48, 62, 255)')};
  }
`;
