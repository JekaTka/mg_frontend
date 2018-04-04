import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Home from './pages/home/home.route';
// import Auth from './pages/auth/auth.route';
import { AuthRouter, HomeRouter } from './pages';

export default () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomeRouter}/>
      <Route path='/auth' component={AuthRouter}/>
    </Switch>
  </main>
);
