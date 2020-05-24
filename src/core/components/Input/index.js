import React from 'react';
import { useForm } from 'react-hook-form';
import Text from '../Text';

const Input = (props) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data)

    return (
        <>
            <Text.p text={props.label} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name={props.name}
                    type={props.type}
                    ref={register({require: true})}
                    placeholder={props.placeholder}
                    maxLength={props.maxLength}
                />
            </form>
        </>
    )
};

export default Input    