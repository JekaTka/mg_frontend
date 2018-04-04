import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './app';

ReactDOM.render(
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ),
  document.getElementById('app')
);
