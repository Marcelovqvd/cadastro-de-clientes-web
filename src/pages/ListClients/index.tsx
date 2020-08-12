import React, { useState, FormEvent } from 'react';

import api from '../../services/api';

import { Title } from './styles';

interface Client {
  id: number;
  name: string;
  email: string;
  birth: string;
  cpf: number;
  whatsapp: string;
  address: string;
  observation: string;
}

const ListClients: React.FC = () => {
  const [clients, setClients] = useState([]);

  async function handleClients(e: FormEvent) {
    e.preventDefault();
    const response = await api.get('/clients');
    setClients(response.data);
  }

  return (
    <>
      <Title>List</Title>
      <form onSubmit={handleClients}>
        <button type="submit">Mostrar clientes</button>
      </form>
      <main>
        <ul>
          {clients.map((client: Client) => {
            return (
              <li key={client.id}>
                <p>{client.name}</p>
                <p>{client.email}</p>
                <p>{client.birth}</p>
                <p>{client.cpf}</p>
                <p>{client.whatsapp}</p>
                <p>{client.address}</p>
                <p>{client.observation}</p>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default ListClients;
