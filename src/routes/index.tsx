import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ListClients from '../pages/ListClients';
import SignUp from '../pages/signUp';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignUp} />
      <Route path="/listclients" component={ListClients} />
    </Switch>
  );
}

export default Routes;
