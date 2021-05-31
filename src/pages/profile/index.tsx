import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';

import { Grid, Icon, Menu, Sidebar } from 'semantic-ui-react';

import Servicos from './servicos';
import Financas from './financas';
import Tarefas from './tarefas';
//import { ServicoProvider } from '../../contexts/profile';

let style = {
  height: '700px',
  width: '800px',
  paddingLeft: '80px',
  marginTop: '30px',
};
/**Profile */

const Profile = () => {
  // const [visible, setVisible] = React.useState(true);
  const history = useHistory();

  const handleClick = (page: any) => {
    //
    ReactDOM.render(page, document.getElementById('show-component'));
  };
  return (
    // <ServicoProvider>
      <Grid>
        <Grid.Column width={2}>
          <Sidebar.Pusher>
            <Sidebar
              as={Menu}
              animation="overlay"
              icon="labeled"
              inverted
              visible
              vertical
            >
              <Menu.Item>
                <h3>Menu</h3>
              </Menu.Item>
              <Menu.Item as="a" onClick={() => handleClick(<Tarefas />)}>
                <Icon name="calendar alternate outline" color="orange" />
                Agenda Compromissos
              </Menu.Item>
              <Menu.Item as="a" onClick={() => handleClick(<Servicos />)}>
                <Icon name="briefcase" />
                Serviços
              </Menu.Item>
              <Menu.Item as="a" onClick={() => handleClick(<Financas />)}>
                <Icon name="currency" color="olive" />
                Finanças
              </Menu.Item>
              <Menu.Item as="a">
                <Icon
                  name="sign-out"
                  color="red"
                  onClick={() => history.push('/')}
                />
                Logout/Sair
              </Menu.Item>
            </Sidebar>
          </Sidebar.Pusher>
        </Grid.Column>

        <Grid.Column width={12}>
          <Grid.Row stretched>
            <div id="show-component" style={style}></div>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    //</ServicoProvider>
  );
};

export default Profile;
