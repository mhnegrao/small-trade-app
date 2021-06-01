//Componente para validação de acesso às rotas do app
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';


const authorized=true;//performValidationHere(); //uma função de validação//useState
const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
}> = (props) => {
  const condition = authorized;

  return condition ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to="/login" />
  );
};
export default PrivateRoute;
