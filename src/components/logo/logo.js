import React from 'react';
import { Link } from 'gatsby';
import image from '../../images/logo/white-logo.png';

// TODO check best way to store logo
const Logo = () => {
  return (
    <Link to="generalcharlie">
      <img src={image} alt="General Charlie Home" height={70}/>
    </Link>
  );
};

export default Logo;
