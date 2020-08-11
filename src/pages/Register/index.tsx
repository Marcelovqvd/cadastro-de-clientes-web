import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Title } from './styles';

import Input from '../../components/Input';

const Register: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um email válido'),
        birth: Yup.string().required('Data de nascimento obrigatória'),
        cpf: Yup.number().required('CPF obrigatório'),
        whatsapp: Yup.number().required('whatsapp obrigatório'),
        address: Yup.string().required('Endereço obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <Title>Faça seu cadastro</Title>
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Digite seu nome" />
        <Input name="email" placeholder="Digite seu email" />
        <Input
          type="text"
          name="birth"
          placeholder="Digite sua data de nascimento"
        />
        <Input name="cpf" placeholder="Digite seu cpf" />
        <Input name="whatsapp" placeholder="Digite seu whatsapp" />
        <Input name="address" placeholder="Digite seu endereço" />
        <textarea name="obs" placeholder="Deixe sua mensagem" />
        <button type="submit">Cadastrar</button>
      </Form>
    </>
  );
};

export default Register;
