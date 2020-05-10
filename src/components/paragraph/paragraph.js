import React from 'react';
import PropTypes from 'prop-types';
import { Copy } from './paragraph.css';

const Paragraph = ({ children, className }) => (<Copy className={className}>{children}</Copy>);

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Paragraph;
