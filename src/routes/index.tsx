import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ListClients from '../pages/ListClients';
import Register from '../pages/Register';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Register} />
      <Route path="/listclients" component={ListClients} />
    </Switch>
  );
}

export default Routes;
