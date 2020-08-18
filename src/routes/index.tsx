import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ListClients from '../pages/ListClients';
import Clientregister from '../pages/ClientRegister';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/listclients" component={ListClients} />
      <Route path="/clientregister" component={Clientregister} />
    </BrowserRouter>
  );
};

export default Routes;
