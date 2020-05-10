import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">Facebook</Link>
      </li>
      <li>
        <a href="/order">Instagram</a>
      </li>
      <li>
        <Link to="/about">Yelp</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
