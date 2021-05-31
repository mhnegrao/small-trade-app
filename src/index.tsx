import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

import Home from './pages/home';
import Login from './pages/login';
// import NotFound from './pages/404';

import GlobalStyle from './styles/global';
import Profile from './pages/profile/index';
import Servicos from './pages/profile/servicos';
import Financas from './pages/profile/financas';
import Tarefas from './pages/profile/tarefas';
import Lancamentos from './pages/profile/lancamentos';
import ServicoCad from './pages/profile/servicos/form';
import LancamentoCad from './pages/profile/lancamentos/form';
import Mensalidades from './pages/profile/mensalidades';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/servicos" exact component={Servicos} />
        <Route path="/financas" exact component={Financas} />
        <Route path="/mensalidade" exact component={Mensalidades} />
        <Route path="/tarefas" exact component={Tarefas} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/servico-cad" exact component={ServicoCad} />
        <Route path="/lancamentos" exact component={Lancamentos} />
        <Route path="/lancamento-cad" exact component={LancamentoCad} />
      </Switch>
    </Router>

    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);

