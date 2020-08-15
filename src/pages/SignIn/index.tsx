import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background, Form } from './styles';

import logo from '../../assets/logoImg.svg';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="logo" />
        <Form>
          <p>Entre com seu login e senha</p>
          <input type="text" />
          <input type="password" />
          <button type="submit">Entrar</button>
          <Link to="/register">
            <FiLogIn />
            Criar conta
          </Link>
        </Form>
        <p>Esqueceu sua senha?</p>
      </Content>
      <Background />
    </Container>
  );
};

export default SignUp;
