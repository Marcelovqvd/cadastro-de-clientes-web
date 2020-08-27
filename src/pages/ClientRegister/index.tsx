import React, { useCallback, useRef } from 'react';
import { Form } from "@unform/web";
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Container } from './styles';
import validationErrors from '../../utils/getValidationErrors';

import Button from '../../components/Button';
import Input from '../../components/Input';

const ClientRegister: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback( async (data: object) => {
    console.log(data)
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
      <Form initialData={{name: 'nome do usuário', email: 'email do usuário'}} ref={formRef} onSubmit={handleSubmit}>
        <h1>Client Register</h1>
        <Input name="name" />
        <Input name="email" />
        <Input name="birth" placeholder="birth"/>
        <Input name="cpf" placeholder="cpf"/>
        <Input name="phone" placeholder="phone"/>
        <Input name="address" placeholder="address"/>
        <Input name="obs" placeholder="obs"/>
        <Input name="date" placeholder="date"/>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default ClientRegister;
