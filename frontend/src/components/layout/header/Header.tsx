import React from 'react';
import { Container, HeaderStyled, Label, LogoStyled } from './styles';
import { NavBar } from '../..';

export const Header = () => {
  return (
    <Container>
      <HeaderStyled>
        <LogoStyled src="/elevator-svgrepo-com.svg" alt="App Logo" width={100} height={50} />
        <Label>ELEVATOR CONTROL APP</Label>
        {/* <LogoStyled src="/elevator-svgrepo-com.svg" alt="App Logo" width={100} height={50} /> */}
        <NavBar />
      </HeaderStyled>
    </Container>
  );
};
