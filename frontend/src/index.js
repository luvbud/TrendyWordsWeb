import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import "./css/App.css";
import "./css/menu.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>, document.getElementById('root')
);
