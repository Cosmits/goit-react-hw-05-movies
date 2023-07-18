import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Menu = {
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'center',
  justifyContent: 'center',
  gap: '24px',
  borderBottom: '1px solid #3f51b5',

}

export const HeaderNavLink = styled(NavLink)`
  position: relative;
  display: inline-block;

  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  padding: 8px 16px;
  color: black;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);


  @media screen and (min-width: 468px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 1280px) {
    font-size: 3rem;
  }

  
  :hover,
  :focus {
    color: #303f9f;
  }

  &.active {
    color: #3f51b5;
  }

  &.active::after  {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 2px;

    background-color: #3f51b5;
  }
`;

