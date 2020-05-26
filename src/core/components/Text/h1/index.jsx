import React from 'react';
import { PropTypes } from 'prop-types';

const h1 = (props) => <h1>{props.text}</h1>;

h1.propTypes = {
  text: PropTypes.string,
};

export default h1;
