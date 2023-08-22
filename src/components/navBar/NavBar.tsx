import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NavContainer, NavItemStyled } from './styles';

export const NavBar = () => {
  let location = useLocation();
  return (
    <NavContainer>
      <NavItemStyled isActive={location.pathname === '/'}>
        <NavLink to="/">Configure</NavLink>
      </NavItemStyled>
      <NavItemStyled isActive={location.pathname === '/elevators'}>
        <NavLink to="/elevators">Elevators</NavLink>
      </NavItemStyled>
      <NavItemStyled
        isActive={location.pathname === '/404' || location.pathname !== '/' && location.pathname !== '/elevators'}
      >
        <NavLink to="/404"> 404</NavLink>
      </NavItemStyled>
    </NavContainer>
  );
};
