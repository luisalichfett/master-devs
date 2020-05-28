import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Text from "core/components/Text";
import Input from "core/components/Input";
import Background from "core/components/Background";
import useLogin from "./hooks";
import { generateGamePath } from "./helpers"
import "./index.css";

const Login = () => {
  const history = useHistory();
  const { loadLogin, responseData } = useLogin();
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value) {
      loadLogin(value);
    }
  }, [loadLogin, value]);

  useEffect(() => {
    if (responseData) {
      const id = responseData.content.id.toString();
      generateGamePath(history, id)
    }
  }, [responseData, history]);

  return (
    <div className="content-login">
      <Background opacity="opacity" />
      <div className="title">
        <Text.h1 text="Bug:" />
        <Text.h1 text="The Kingdom of Terror!" />
      </div>
      <div className="input">
        <Text.h1 text="Username:" />
        <Input
          name="nickName"
          maxLenght={10}
          placeholder="Player"
          onSubmit={(value) => setValue(value)}
        />
      </div>
    </div>
  );
};

export default Login;
