import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Logo = styled.img`
  width: 200px;
  height: 200px;
  cursor: pointer;
`;

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      return alert("이메일과 비밀번호를 채워주세요");
    }

    axios
      .post(
        "http://localhost:3000/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        props.setLogin(true);
      })
      .catch((err) => alert(err));
  };

  return <></>;
};

export default Login;
