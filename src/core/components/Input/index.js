import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Text from '../Text';
import './index.css'
import useLogin from '../../../modules/Login/hook';

const Input = (props) => {
    const {loadLogin} = useLogin();
    console.log(loadLogin)
    const { register, handleSubmit } = useForm();
    const [value, setValue] = useState('');


    useEffect(() => {
        if (value) {
            loadLogin(value)
        }
    }, [loadLogin, value])

    const onSubmit = (data) => setValue(data)

    return (
        <div className="wrapper">
            <Text.regular text={props.label} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name={props.name}
                    type={props.type}
                    ref={register({require: true})}
                    placeholder={props.placeholder}
                    maxLength={props.maxLength}
                />
            </form>
        </div>
    )
};

export default Input    