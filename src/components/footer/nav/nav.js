import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = ({ className }) => (
  <Container className={className}>
    <ul>
      <li>
        <Link to="https://www.facebook.com/generalcharliecrowsnest">Facebook</Link>
      </li>
      <li>
        <a href="https://www.instagram.com/cafegeneralcharlie/?hl=en">Instagram</a>
      </li>
      <li>
        <Link to="https://www.ubereats.com/au/feed?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkdlbmVyYWwlMjBDaGFybGllJTIwQ2FmZSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUpDd29XRzlxdkVtc1J5ODBvMUZNaWt3QSUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0EtMzMuODI1ODg4MSUyQyUyMmxvbmdpdHVkZSUyMiUzQTE1MS4xOTk2NjkyJTdE">UberEats</Link>
      </li>
      <li>
        <Link to="https://deliveroo.com.au/menu/sydney/crowsnest/general-charlie-cafe?day=today&geohash=r3gx8feyvvrh&time=ASAP">Deliveroo</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
