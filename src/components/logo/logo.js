import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { PageLogo } from './logo.css';
import fullLogo from '../../images/logo/white-logo.png';
import iconLogo from '../../images/logo/logo-icon.png';

// TODO check best way to store logo
const Logo = ({ height }) => {
  return (
    <Link to="/">
      <PageLogo>
        <img src={fullLogo} alt="General Charlie Home" height={height}/>
        <img src={iconLogo} alt="General Charlie Home" height={height}/>
      </PageLogo>
    </Link>
  );
};

Logo.defaultProps = {
  height: 70
};

Logo.propTypes = {
  height: PropTypes.string
};

export default Logo;
