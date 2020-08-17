import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

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
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="Nome" />
          <Input name="passsword" icon={FiLock} type="password" placeholder="Senha" />

          <Button type="submit">Cadastrar</Button>
        </form>

        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default SignUp;
