import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './login.component';

export default () => (
  <Switch>
    <Route exact path='/auth/login' component={Login}/>
  </Switch>
)
