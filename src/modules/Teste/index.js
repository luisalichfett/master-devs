import React, { useState } from 'react';
import Text from '../../core/components/Text';
import '../../core/components/Modal';
import Modal from '../../core/components/Modal';

const Teste = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
        <div className="Teste">
            <button onClick={() => 
            setIsModalVisible(true)}>Teste</button>
            {isModalVisible ? (
            <Modal onClose={() => setIsModalVisible(false)}> <h2>Modal Teste</h2>
            </Modal> ) : null}
        </div>
    )
};

export default Teste;
