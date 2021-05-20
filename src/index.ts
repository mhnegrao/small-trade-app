import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import NotFound from './pages/404';
import CreateUser from './pages/create-user';
import CreateChocolate from './pages/create-chocolate';
import GlobalStyle from './styles/global';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/create-user" exact component={CreateUser} />
      <Route path="/create-chocolate" exact component={CreateChocolate} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>

  <GlobalStyle />
</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
