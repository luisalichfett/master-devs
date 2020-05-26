import React from 'react';
import { PropTypes } from 'prop-types';

const Modal = ({ onClose = () => {}, children }) => {
  return (
    <div className="modal">
      <div className="container">
        <button className="close" onClose={onClose} />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.element,
};

export default Modal;
