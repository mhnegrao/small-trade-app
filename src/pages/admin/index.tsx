import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import { Card, Header, Button, Divider } from 'semantic-ui-react';




const items = [
  {
    header: 'Usuários',
    description:
      'Controle de Usuários da Plataforma',
    meta: 'Ver aqui',
  },
  {
    header: 'Base de Dados',
    description:
      'Ver os dados',
    meta: 'Ver aqui',
  },
];

const Admin = () => {
  const history = useHistory();
  const handleClick = (page: any) => {

    ReactDOM.render(page, document.getElementById('show-component'));
    
  };
  return (
    <>
      <Header as="h1">Painel de Controle Administrativo</Header>

      <Card.Group items={items} />
      <Divider />
      {/* <Button
        color="green"
        label="Lançamento Financeiro"
        icon="list alternate outline"
        
      />
      <Button
        color="orange"
        label="Controle de Mensalidades"
        icon="calendar alternate outlines"
        o
      /> */}
      
      <div id="show-component"></div>
    </>
  );
};

export default Admin;
