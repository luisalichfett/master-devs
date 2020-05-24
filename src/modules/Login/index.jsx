import React from 'react';
import Text from '../../core/components/Text';
import Input from '../../core/components/Input';
import './index.css';

const Login = () => {

    return (
        <div className="content">
            <Text.h1 text="Login" />
            <Input label="username:" name="username" maxLenght="10" />
        </div>
    )
};

export default Login;
