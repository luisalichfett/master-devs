import React from 'react';
import { PropTypes } from 'prop-types';

const h4 = (props) => <h4>{props.text}</h4>;

h4.propTypes = {
  text: PropTypes.string,
};

export default h4;
