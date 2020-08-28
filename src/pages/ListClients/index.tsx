import React, { useState } from 'react';

import api from '../../services/api';

interface listClientsProps {
  name: string;
  cpf: number;
  id: string;
}

const ListClients: React.FC = () => {
  const [listClients, setListClients] = useState<listClientsProps[]>([]);

  async function handleList() {
    const response = await api.get('/clients');
    setListClients(response.data);
  }

  return (
    <>
      <h1>List Clients</h1>
      <button onClick={handleList}>listar</button>
      <ul>
        {listClients.map(client => (
          <li key={client.id}>
            <p>{client.name}</p>
            <strong>{client.cpf}</strong>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListClients;
