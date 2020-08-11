import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';

import api from '../../services/api';

import './styles';

const SignUp: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [address, setAddress] = useState('');
  const [birth, setBirth] = useState('');

  function handleCreateClient(e: FormEvent) {
    e.preventDefault();

    console.log(name, email, whatsapp, address, birth);

    /* api
      .post('/classes', {
        name,
        email,
        whatsapp,
        address,
        birth,
      })
      .then(() => {
        alert('Cadastro realizado com sucesso!');

        history.push('/');
      })
      .catch(() => {
        alert('Erro no cadastro');
      }); */
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
      </fieldset>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default SignUp;
