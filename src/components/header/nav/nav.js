import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">Menu</Link>
      </li>
      <li>
        <a href="/order">Pickup</a>
      </li>
      <li>
        <Link to="/about">Contact</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
