import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SignUp from '../pages/signUp';
import ListClients from '../pages/ListClients';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SignUp} />
      <Route path="/listclients" component={ListClients} />
    </BrowserRouter>
  );
}

export default Routes;
