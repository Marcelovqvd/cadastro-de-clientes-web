import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import api from '../../services/api';

interface Clientmatch {
  id: string;
}

const ClientEdit: React.FC = ({ match }: RouteComponentProps<Clientmatch>) => {
  const userId = match.params.id;

  useEffect(() => {
    api.get(`clients/${userId}`);
    console.log(userId);
  });

  return (
    <>
      <h1>Editar client</h1>
      <button type="button">
        <Link title="Editar Usuário" to="/">
          <span>
            <span>Home</span>
          </span>
        </Link>
      </button>
    </>
  );
};

export default ClientEdit;
