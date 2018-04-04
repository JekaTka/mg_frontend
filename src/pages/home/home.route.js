import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home.component';

export default () => (
  <div>
    <h2>This is a home route!</h2>
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
  </div>
)
