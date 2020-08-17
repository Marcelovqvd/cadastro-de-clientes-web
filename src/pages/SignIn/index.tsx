import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logoImg.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <form>
          <h1>Entre com seu login e senha</h1>
          <Input name="input" type="text" placeholder="Email" />
          <Input name="input" type="password" placeholder="Senha" />
          <Button type="submit">Entrar</Button>
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
