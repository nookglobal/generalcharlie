import React from 'react';
import posed from 'react-pose';
import { Container, Copy } from './footer.css';
import Logo from 'components/logo';
import Nav from 'components/footer/nav';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Footer = ({ title }) => (
  <AnimatedContainer>
    <Container>
      <Logo height={40}/>
      <Nav />
      <Copy>
      Copyright © 2019 General Charlie<br/>
      Filipino Restaurant / Cafe - All Rights Reserved.<br/>
      Shop 1, 10-12 Clarke Street, Crows Nest NSW 2065
      </Copy>
    </Container>
  </AnimatedContainer>
);

export default Footer;
