import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { uuid } from 'uuidv4';

// import Input from '../../components/Input';

import api from '../../services/api';

import { Container, Title, Form } from './styles';

const SignUp: React.FC = () => {
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  function onSubmit(data) {
    api
      .post('/clients', data)
      .then(() => {
        alert('Cadastro realizado com sucesso!');

        history.push('/');
      })
      .catch(() => {
        alert('Erro no cadastro');
      });
  }

  return (
    <Container>
      <Title>Cadastre-se</Title>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <legend>Seus dados</legend>
        <label htmlFor="inputName">Nome</label>
        <input
          type="name"
          id="inputName"
          name="name"
          ref={register({
            required: 'Digite seu nome',
            pattern: {
              value: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/i,
              message: 'Caractere não aceito',
            },
          })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
        <label htmlFor="inputEmail">E-mail</label>
        <input
          type="email"
          id="inputEmail"
          name="email"
          ref={register({
            required: 'Enter your e-mail',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Enter a valid e-mail address',
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
        <label htmlFor="inputWhatsapp">whatsapp</label>
        <input
          type="whatsapp"
          id="whatsapp"
          name="whatsapp"
          ref={register({
            required: 'Enter your whatsapp',
            pattern: {
              value: /^([1-2][1-9]9\d{8})$/i,
              message: 'Enter a valid whatsapp number',
            },
          })}
        />
        {errors.whatsapp && <p className="error">{errors.whatsapp.message}</p>}
        <label htmlFor="inputBirth">Data de Nascimento</label>
        <input
          type="birth"
          id="birth"
          name="birth"
          ref={register({
            required: 'Campo obrigatório',
            pattern: {
              value: /[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/i,
              message: 'Insira uma data válida!',
            },
          })}
        />
        {errors.birth && <p className="error">{errors.birth.message}</p>}
        <label htmlFor="inputCPF">CPF</label>
        <input
          type="cpf"
          id="cpf"
          name="cpf"
          ref={register({
            required: 'Campo obrigatório',
            pattern: {
              value: /^\d{3}.\d{3}.\d{3}-\d{2}$/i,
              message: 'Insira um cpf válido',
            },
          })}
        />
        {errors.cpf && <p className="error">{errors.cpf.message}</p>}
        <label htmlFor="inputCPF">Endereço</label>
        <input
          type="address"
          id="address"
          name="address"
          ref={register({
            required: 'Campo obrigatório',
          })}
        />
        {errors.address && <p className="error">{errors.address.message}</p>}
        <label htmlFor="inputComments">Deixe sua mensagem</label>
        <textarea id="comments" name="comments" />
        {errors.comments && <p className="error">{errors.comments.message}</p>}

        <button type="submit">Cadastrar</button>
      </Form>
      <button type="button">
        <Link title="Editar Usuário" to="/listclients">
          <span>
            <span>Lista de clientes</span>
          </span>
        </Link>
      </button>
    </Container>
  );
};

export default SignUp;
