import React from 'react';
import { PropTypes } from 'prop-types';

const h5 = (props) => <h5>{props.text}</h5>;

h5.propTypes = {
  text: PropTypes.string,
};

export default h5;
