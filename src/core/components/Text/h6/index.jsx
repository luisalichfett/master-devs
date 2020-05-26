import React from 'react';
import { PropTypes } from 'prop-types';

const h6 = (props) => <h6>{props.text}</h6>;

h6.propTypes = {
  text: PropTypes.string,
};

export default h6;
