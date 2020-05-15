import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import Routes from './routes'
import "./css/App.css";
import "./css/menu.css";

ReactDOM.render(
  <HashRouter>
    <Routes />
  </HashRouter>, document.getElementById('root')
);
