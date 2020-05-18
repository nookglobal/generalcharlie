import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = ({ className }) => (
  <Container className={className}>
    <ul>
      <li>
        <a href="https://www.facebook.com/generalcharliecrowsnest" target="_blank" rel="noreferrer noopener">Facebook</a>
      </li>
      <li>
        <a href="https://www.instagram.com/cafegeneralcharlie/?hl=en" target="_blank" rel="noreferrer noopener">Instagram</a>
      </li>
      <li>
      <a href="https://www.ubereats.com/au/feed?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkdlbmVyYWwlMjBDaGFybGllJTIwQ2FmZSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUpDd29XRzlxdkVtc1J5ODBvMUZNaWt3QSUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0EtMzMuODI1ODg4MSUyQyUyMmxvbmdpdHVkZSUyMiUzQTE1MS4xOTk2NjkyJTdE" target="_blank" rel="noreferrer noopener">UberEats</a>
      </li>
      <li>
        <a href="https://deliveroo.com.au/menu/sydney/crowsnest/general-charlie-cafe?day=today&geohash=r3gx8feyvvrh&time=ASAP" target="_blank" rel="noreferrer noopener">Deliveroo</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
