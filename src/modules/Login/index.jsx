import React from 'react';
import Text from '../../core/components/Text';
import Input from '../../core/components/Input';
import Background from '../../core/components/Background';
import './index.css';
import { useLogin } from './hook';

const Login = () => {
    const login = useLogin();

    return (
        <div className="content">
            <Background opacity="opacity" />
            <div className="title" >
                <Text.h1 text="Bug:" />
                <Text.h1 text="The Kingdom of Terror!" />
            </div>
            <div className="input">
                <Text.h1 text="Username:" />
                <Input name="username" maxLenght={10} />
            </div>
        </div>
    )
};

export default Login;
