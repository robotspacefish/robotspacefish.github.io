import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <nav className='Nav'>
    <NavLink exact to='/' activeClassName='active'>About</NavLink>
    <NavLink exact to='/portfolio' activeClassName='active'>Portfolio</NavLink>
    <NavLink exact to='/contact' activeClassName='active'>Contact</NavLink>
  </nav>
);

export default Nav;
