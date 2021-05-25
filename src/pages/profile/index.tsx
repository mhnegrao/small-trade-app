import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
// @ts-ignore
import {
  Container,
  Button,
  Header,
  BarHeader,
  Panel,
} from '../../components/UI-Elements/';
import Servicos from './servicos';
import Financas from './financas';
import Tarefas from './tarefas';
import { RiCurrencyFill } from 'react-icons/ri';
import { GrBusinessService } from 'react-icons/gr';
import { IoExitOutline } from 'react-icons/io5';

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
        <Header>
          <h2>Small Trade App - Painel de Controle</h2>
        </Header>
        <aside>
          <Button
            color="#f9faf6"
            hoverColor="#bb0909"
            fontsize="20px"
            border="none"
            radius="8px"
            backgroundColor="#ca2507"
            onClick={() => history.push('/')}
          >
            {/* <IoExitOutline size={42} /> */}
            Sair
          </Button>
          <Button
            color="#f9faf6"
            hoverColor="#7db9e0"
            fontsize="20px"
            border="none"
            radius="8px"
            backgroundColor="#100d24"
            onClick={() => handleClick(<Tarefas />)}
          >
            {/* <RiCurrencyFill size={40} /> */}
            Agenda
          </Button>
          <Button
            color="#f9faf6"
            hoverColor="#7db9e0"
            fontsize="20px"
            border="none"
            radius="8px"
            backgroundColor="#100d24"
            onClick={() => handleClick(<Servicos />)}
          >
            {/* <GrBusinessService size={32} /> */}
            Serviços
          </Button>
          <Button
            color="#f9faf6"
            hoverColor="#7db9e0"
            fontsize="20px"
            border="none"
            radius="8px"
            backgroundColor="#100d24"
            onClick={() => handleClick(<Financas />)}
          >
            {/* <RiCurrencyFill size={32} /> */}
            Finanças
          </Button>
        </aside>
      </Panel>
      <Container>
        <div id="showhere"></div>
      </Container>
    </>
  );
};

export default Profile;
