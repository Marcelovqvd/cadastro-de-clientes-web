import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { uuid } from 'uuidv4';

import Input from '../../components/Input';

import api from '../../services/api';

import './styles';

const SignUp: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [birth, setBirth] = useState('');
  const [address, setAddress] = useState('');
  const [cpf, setCPF] = useState('');
  const [comments, setComments] = useState('');

  async function handleCreateClient(e: FormEvent) {
    e.preventDefault();

    const id = uuid();

    api
      .post('/', {
        id,
        name,
        email,
        whatsapp,
        birth,
        address,
        cpf,
        comments,
      })
      .then(() => {
        alert('Cadastro realizado com sucesso!');

        history.push('/listclients');
      })
      .catch(() => {
        alert('Erro no cadastro');
      });

    console.log({ id, name, email, whatsapp, birth, address, cpf, comments });
  }

  return (
    <form onSubmit={handleCreateClient}>
      <fieldset>
        <legend>Seus dados</legend>
        <Input
          name="name"
          label="Nome completo"
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
        />
        <Input
          name="email"
          label="email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <Input
          name="whatsapp"
          label="Whatsapp"
          value={whatsapp}
          onChange={e => {
            setWhatsapp(e.target.value);
          }}
        />
        <Input
          name="address"
          label="Endereço"
          value={address}
          onChange={e => {
            setAddress(e.target.value);
          }}
        />
        <Input
          name="birth"
          label="Data de nascimento completo"
          value={birth}
          onChange={e => {
            setBirth(e.target.value);
          }}
        />
        <Input
          name="cpf"
          label="Digite seu CPF"
          value={cpf}
          onChange={e => {
            setCPF(e.target.value);
          }}
        />
        <textarea
          name="observation"
          value={comments}
          onChange={e => {
            setComments(e.target.value);
          }}
          maxLength={200}
        />
      </fieldset>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default SignUp;
