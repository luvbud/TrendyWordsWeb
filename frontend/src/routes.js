import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/App';

const Routes = () => (
    <Switch>
      <Route path='/' component={App} exact={true}/>
    </Switch>
);

export default Routes;
