import React from 'react';
import { PropTypes } from 'prop-types';
import { useForm } from 'react-hook-form';
import Text from 'core/components/Text';
import './index.css';

const Input = (props) => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="wrapper">
      <Text.regular text={props.label} />
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <input
          name={props.name}
          type={props.type}
          ref={register({ require: true })}
          placeholder={props.placeholder}
          maxLength={props.maxLength}
        />
      </form>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
};

export default Input;
