import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      {/* <li>
        <a href="/order">Pickup</a>
      </li> */}
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
