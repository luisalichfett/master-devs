import React, { Children } from 'react';

const Modal = ({ onClose = () => {}, children }) => {
return(
  <div className="modal">
      <div className="container">
          <button className="close" onClose={onClose}/>
            <div className="content">{children}</div>
      </div>
</div>
)};

export default Modal;
