import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import ListClients from '../pages/ListClients';
// import ClientEdit from '../pages/EditClients';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={Register} />
      <Route path="/listclients" component={ListClients} />
    </BrowserRouter>
  );
};

export default Routes;
