import React from 'react';
// @ts-ignore
import {
  Button,
  Header,
  BarHeader,
  Panel,
} from '../../components/UI-Elements/';
import { useHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Servicos from './servicos';
import Financas from './financas';

/**Profile */
const Profile = () => {
  const history = useHistory();

  const handleClick = (page: any) => {
    //
    ReactDOM.render(page, document.getElementById('showhere'));
  };
  return (
    <>
      <Panel>
        <BarHeader color="navy">
          <Header>
            <h2>Small Trade App - Painel de Controle</h2>
          </Header>
          <Button
            color="#bbbdb0cc"
            hoverColor="#bb0909"
            fontsize="20px"
            border="none"
            radius="8px"
            background="#610785"
            onClick={() => history.push('/')}
          >
            Sair
          </Button>
          <Button
            color="#bbbdb0cc"
            hoverColor="#bb0909"
            fontsize="20px"
            border="none"
            radius="8px"
            background="#610785"
            onClick={() => handleClick(<Servicos />)}
          >
            Serviços
          </Button>
          <Button
            color="#bbbdb0cc"
            hoverColor="#bb0909"
            fontsize="20px"
            border="none"
            radius="8px"
            background="#610785"
            onClick={() => handleClick(<Financas />)}
          >
            Finanças
          </Button>
        </BarHeader>
      </Panel>
      <div id="showhere"></div>
    </>
  );
};

export default Profile;
