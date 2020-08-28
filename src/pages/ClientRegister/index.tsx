import React, { useCallback, useRef } from 'react';
import { Form } from "@unform/web";
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Container } from './styles';
import validationErrors from '../../utils/getValidationErrors';
import { validateCPF } from 'validations-br';

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
        email: Yup.string(),
        birth: Yup.date().nullable().required('A data de nascimento é obrigatória').min(new Date(1900, 0, 1)),
        cpf: Yup.string().test("is-cpf", "CPF is not valid", (value: string | null | undefined) => validateCPF('')).required('O CPF é obrigatório')
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
        <Input name="birth" placeholder="Data de nascimento"/>
        <Input name="cpf" placeholder="CPF"/>
        <Input name="phone" placeholder="Fone/Whatsapp"/>
        <Input name="address" placeholder="Endereço"/>
        <Input name="obs" placeholder="Observação"/>
        <Input name="date" placeholder="Data"/>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default ClientRegister;
