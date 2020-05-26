import React from 'react';
import { PropTypes } from 'prop-types';

const regular = (props) => <div className="regular">{props.text}</div>;

regular.propTypes = {
  text: PropTypes.string,
};

export default regular;
