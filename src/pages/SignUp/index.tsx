import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from "@unform/web";
import * as Yup from 'yup';
import validationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logoImg.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handlesubmit = useCallback( async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string(),
        email: Yup.string().required('O email é obrigatório').email('Digite um endereço de email válido'),
        password: Yup.string().required().min(6, 'A senha deve ter 6 dígitos no mínimo'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch(err) {

      const errors = validationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, [])

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />

        <Form ref={formRef} onSubmit={handlesubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="Email" />
          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

          <Button type="submit">Cadastrar</Button>
        </Form>

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
