import React from 'react';
import { useForm } from 'react-hook-form';
import Text from '../../core/components/Text';
import Input from '../../core/components/Input';
import './index.css';

const Login = () => {
    const { register, handleSubmit, getValues } = useForm();

    const onSubmit = () => {
        const { values } = getValues();

        console.log(values)
    }

    return (
        <div className="title">
            <Text.h1 text="Login" color="blue" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input 
                    type="text"
                    ref={register({require: true})}
                    name="username"
                />
            </form>
        </div>
    )
};

export default Login;
