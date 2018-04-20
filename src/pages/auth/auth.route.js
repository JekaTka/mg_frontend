import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginComponent from './login.component';
import RegisterComponent from './register.component';

export default () => (
  <Switch>
    <Route exact path='/auth/login' component={LoginComponent} />
    <Route exact path='/auth/register' component={RegisterComponent} />
  </Switch>
)
