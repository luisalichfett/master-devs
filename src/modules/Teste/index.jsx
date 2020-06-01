import React, { useState } from 'react';
import Text from '../../core/components/Text';
import '../../core/components/Modal';
import Modal from '../../core/components/Modal';

const Teste = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className="Teste">
        <Modal.Rules/>
    </div>
  );
};

export default Teste;
