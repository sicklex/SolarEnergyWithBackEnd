import React from "react";
import { Toaster } from "react-hot-toast";
import { notify } from "../../utils/Functions/Functions";
import SubmitButton from "../../Components/SubmitButton/Button";
import logo from "../../utils/logo1.png";
import { useState } from "react";
import * as yup from "yup";

import {
  Container,
  Form,
  LoginContainer,
  LoginIcon,
  LogoContainer,
  MainImg,
  PasswordIcon,
} from "./styles";
import { InputType } from "./styles";
import { useNavigate } from "react-router-dom";

function Logon() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    if (user.email === "" && user.password === "") {
      notify("Preencha todos os campos", "error");
      return;
    }

    validate();
  };

  async function validate() {
    let schema = yup.object().shape({
      password: yup
        .string()
        .required("Senha é obrigatória")
        .min(6, "A senha deve ter no mínimo 6 caracteres"),
      email: yup
        .string("Insira um e-mail válido")
        .email(" Email Invalido ")
        .required("Email é obrigatório"),
    });

    try {
      await schema.validate(user);
      navigate("/dashboard");
      return true;
    } catch (err) {
      notify(err.message, "error");
      return false;
    }
  }

  return (
    <Container>
      <MainImg />
      <LoginContainer>
        <LogoContainer>
          <img src={logo} alt="logo" />
          <p> Seja bem vindo</p>
        </LogoContainer>
        <Form>
          <InputType
            type="text"
            name="email"
            placeholder="E-mail"
            onChange={e => setUser({ ...user, email: e.target.value })}
          />
          <LoginIcon />
          <InputType
            type="password"
            name="password"
            placeholder="Senha"
            onChange={e => setUser({ ...user, password: e.target.value })}
          />
          <PasswordIcon />
          <SubmitButton onClick={handleSubmit} />
        </Form>
      </LoginContainer>
      <Toaster />
    </Container>
  );
}

export default Logon;
