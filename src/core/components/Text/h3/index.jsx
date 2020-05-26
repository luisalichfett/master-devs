import React from 'react';
import { PropTypes } from 'prop-types';

const h3 = (props) => <h3>{props.text}</h3>;

h3.propTypes = {
  text: PropTypes.string,
};

export default h3;
