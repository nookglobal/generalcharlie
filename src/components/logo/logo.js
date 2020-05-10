import React from 'react';
import { Link } from 'gatsby';
import { PageLogo } from './logo.css';
import fullLogo from '../../images/logo/white-logo.png';
import iconLogo from '../../images/logo/logo-icon.png';

// TODO check best way to store logo
const Logo = () => {
  return (
    <Link to="/">
      <PageLogo>
        <img src={fullLogo} alt="General Charlie Home" height={70}/>
        <img src={iconLogo} alt="General Charlie Home" height={70}/>
      </PageLogo>
    </Link>
  );
};

export default Logo;
