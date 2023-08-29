import React, { ReactNode } from 'react';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { Container, Content } from './layoutStyles';

export const Layout = ({ children }: {children: ReactNode}) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </ Container>
  );
};
