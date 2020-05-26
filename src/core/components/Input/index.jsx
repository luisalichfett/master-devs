import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useForm } from 'react-hook-form';
import Text from 'core/components/Text';
import './index.css';
import useLogin from 'modules/Login/hook';
import { useHistory } from 'react-router-dom';

const Input = (props) => {
  const history = useHistory();
  const { loadLogin, responseData } = useLogin();
  const { register, handleSubmit } = useForm();
  const [value, setValue] = useState('');

  useEffect(() => {
    if (value) {
      loadLogin(value);
    }
  }, [loadLogin, value]);

  useEffect(() => {
    if (responseData) {
      history.replace('/game');
    }
  }, [responseData, history]);

  const onSubmit = (data) => setValue(data);

  return (
    <div className="wrapper">
      <Text.regular text={props.label} />
      <form onSubmit={handleSubmit(onSubmit)}>
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
