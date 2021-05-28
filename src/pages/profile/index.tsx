import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
// @ts-ignore
// import {
//   Container,
//   Button,
//   Header,
//   BarHeader,
//   Panel,
// } from '../../components/UI-Elements/';

import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react';
import Servicos from './servicos';
import Financas from './financas';
import Tarefas from './tarefas';
import { FcAreaChart } from 'react-icons/fc';
import { RiCurrencyFill } from 'react-icons/ri';
import { GrBusinessService } from 'react-icons/gr';
import { IoExitOutline } from 'react-icons/io5';

/**Profile */
// const Profile = () => {
//   const history = useHistory();

//   const handleClick = (page: any) => {
//     //
//     ReactDOM.render(page, document.getElementById('showhere'));
//   };
//   return (
//     <>
//       <Panel>
//         <Header>
//           <h2>Small Trade App - Painel de Controle</h2>
//         </Header>
//         <aside>
//           <Button
//             color="#f9faf6"
//             hoverColor="#bb0909"
//             fontsize="20px"
//             border="none"
//             radius="8px"
//             backgroundColor="#ca2507"
//             onClick={() => history.push('/')}
//           >
//             {/* <IoExitOutline size={42} /> */}
//             Sair
//           </Button>
//           <Button
//             color="#f9faf6"
//             hoverColor="#7db9e0"
//             fontsize="20px"
//             border="none"
//             radius="8px"
//             backgroundColor="#100d24"
//             onClick={() => handleClick(<Tarefas />)}
//           >
//             {/* <RiCurrencyFill size={40} /> */}
//             Agenda
//           </Button>
//           <Button
//             color="#f9faf6"
//             hoverColor="#7db9e0"
//             fontsize="20px"
//             border="none"
//             radius="8px"
//             backgroundColor="#100d24"
//             onClick={() => handleClick(<Servicos />)}
//           >
//             {/* <GrBusinessService size={32} /> */}
//             Serviços
//           </Button>
//           <Button
//             color="#f9faf6"
//             hoverColor="#7db9e0"
//             fontsize="20px"
//             border="none"
//             radius="8px"
//             backgroundColor="#100d24"
//             onClick={() => handleClick(<Financas />)}
//           >
//             {/* <RiCurrencyFill size={32} /> */}
//             Finanças
//           </Button>
//         </aside>
//       </Panel>
//       <Container>
//         <div id="showhere"></div>
//       </Container>
//     </>
//   );
// };

const Profile = () => {
  const [visible, setVisible] = React.useState(true);
  const history = useHistory();

  const handleClick = (page: any) => {
    //
    ReactDOM.render(page, document.getElementById('showhere'));
  };
  return (
    <Grid columns={2} divided>
   
      <Grid.Column width={2}>
        <Sidebar.Pusher>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            // onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width="thin"
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

      <Grid.Column>
        <Sidebar.Pushable>
          <Segment basic>
            {/* <Header as="h3">Application Content</Header>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" /> */}
            <div id="showhere"></div>
          </Segment>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
};

export default Profile;
