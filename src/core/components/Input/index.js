import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Text from '../Text';
import './index.css'
import useLogin from '../../../modules/Login/hook';
import { useHistory } from 'react-router-dom';

const Input = (props) => {
    const history = useHistory();
    const {loadLogin, responseData} = useLogin();
    const { register, handleSubmit } = useForm();
    const [value, setValue] = useState('');


    useEffect(() => {
        if (value) {
            loadLogin(value)
        }
    }, [loadLogin, value])

    useEffect(() => {
        if (responseData) {
            history.replace('/game')
        }
    }, [responseData])

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