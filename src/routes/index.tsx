import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SignUp from '../pages/signUp';
import ListClients from '../pages/ListClients';
import ClientEdit from '../pages/EditClients';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SignUp} />
      <Route path="/listclients" component={ListClients} />
      <Route path="/clientedit/:id" component={ClientEdit} />
    </BrowserRouter>
  );
}

export default Routes;
