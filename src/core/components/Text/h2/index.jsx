import React from 'react';
import { PropTypes } from 'prop-types';

const h2 = (props) => <h2>{props.text}</h2>;

h2.propTypes = {
  text: PropTypes.string,
};

export default h2;
