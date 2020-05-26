import React from 'react';
import { PropTypes } from 'prop-types';
import './index.css';

const Background = (props) => <div className={props.opacity} />;

Background.propTypes = {
  opacity: PropTypes.string,
};

export default Background;
