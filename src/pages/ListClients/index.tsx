import React, { useState, FormEvent, useEffect, ChangeEvent } from 'react';
/* import { Link } from 'react-router-dom';

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
} */

const ListClients: React.FC = () => {
  /* const [clients, setClients] = useState([]);
  const [search, setSearch] = useState('');

  async function handleClients(e: FormEvent) {
    e.preventDefault();
    const response = await api.get('/clients');
    setClients(response.data);
  }

  const fetchClients = async () => {
    let searching = '';

    if (search !== '') {
      const nameExist = await api.get(`clients/?name_like=${search}`);
      if (nameExist.data.length !== 0) searching = `/?name_like=${search}`;

      const emailExist = await api.get(`clients/?email_like=${search}`);
      if (emailExist.data.length !== 0) searching = `/?email_like=${search}`;

      const whatsappExist = await api.get(`clients/?whatsapp=${search}`);
      if (whatsappExist.data.length !== 0)
        searching = `/?whatsapp_like=${search}`;

      const birthExist = await api.get(`clients/?birth_like=${search}`);
      if (birthExist.data.length !== 0) searching = `/?birth_like=${search}`;

      const cpfExist = await api.get(`clients/?cpf_like=${search}`);
      if (cpfExist.data.length !== 0) searching = `/?cpf_like=${search}`;

      const addressExist = await api.get(`clients/?address_like=${search}`);
      if (addressExist.data.length !== 0)
        searching = `/?address_like=${search}`;
    }

    api
      .get(`clients${searching}`, {
        method: 'GET',
      })
      .then(response => {
        setClients(response.data);
      });
  };

  useEffect(() => {
    fetchClients();
  }, [search]);

  async function handlerDelete(id: number) {
    await api.delete(`clients/${id}`);
    fetchClients();
  }

  async function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setSearch(value);
  } */

  return <h1>Lista</h1>

  /* (
    <>
      <Title>Lista de Clientes</Title>
      <form onSubmit={handleClients}>
        <input
          type="text"
          placeholder="Buscar ..."
          onChange={handleInputChange}
        />
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
                <button
                  onClick={() => handlerDelete(client.id)}
                  className="deletButton"
                  type="button"
                >
                  Deletar
                </button>

                <button type="button">
                  <Link title="Editar Usuário" to={`/clientedit/${client.id}`}>
                    <span>
                      <span>Editar cliente</span>
                    </span>
                  </Link>
                </button>
              </li>
            );
          })}
        </ul>

        <button type="button">
          <Link title="Editar Usuário" to="/">
            <span>
              <span>Home</span>
            </span>
          </Link>
        </button>
      </main>
    </>
  ); */
};

export default ListClients;
