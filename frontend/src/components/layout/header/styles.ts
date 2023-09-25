import styled from 'styled-components';
import { Logo } from '../../logo/Logo';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const HeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  top: 0;
  width: 100%;
  height: 10vh;
  background: rgb(68, 193, 255);
`;

export const LogoStyled = styled(Logo)`
  height: 7vh;
  width: 7vh;
  padding: 0.2em 0.1em;
  cursor: pointer;

  @media (prefers-color-scheme: dark) {
    .logo {
      filter: invert(1) drop-shadow(0 0 0.3rem #ffffff70);
    }
  }
`;

export const Label = styled.h1`
  font-size: 5vh;
  line-height: 1.1;
  /* background-image: linear-gradient(to top left, #553c9a, #ee4b2b); */
  /* color: transparent; */
  /* background-clip: text; */
  /* -webkit-background-clip: text; */
`;
