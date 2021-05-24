import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import Home from './pages/home';
import Login from './pages/login';
// import NotFound from './pages/404';

import GlobalStyle from './styles/global';
import Profile from './pages/profile/index';
import Servicos from './pages/profile/servicos';
import Financas from './pages/profile/financas';
import Tarefas from './pages/profile/tarefas';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/servicos" exact component={Servicos} />
        <Route path="/financas" exact component={Financas} />
        <Route path="/tarefas" exact component={Tarefas} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </Router>

    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
