import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

import logoImg from '../../assets/logoImg.svg';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <form>
          <h1>Entre com seu login e senha</h1>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
          <a href="/forgot">Esqueceu sua senha?</a>
        </form>
        <Link to="/register">
          <FiLogIn />
          Criar conta
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default SignUp;
