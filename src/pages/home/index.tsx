import React from 'react';

import { IoEnterOutline } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import { Container, Header, Button, Icon } from 'semantic-ui-react';
import { Start } from './style';
import { FcAreaChart } from 'react-icons/fc';
/**home */
const Home = () => {
  const history = useHistory();

  const handleClickLogin = () => {
    history.push('../profile/');
  };
  return (
    <div>
      <Container>
        <Start>
          <Header as="h1">
            Small Trade App
            <FcAreaChart size="50" />
          </Header>

          <h3>
            Plataforma para administração de pequenos comércios e homeoffice
          </h3>

          <h4>Acessar o Sistema</h4>
          <Icon.Group size="huge" className="sign-in-ico">
            <Icon loading size="big" name="circle notch" color="blue" />
            <Icon
              name="sign-in alternate"
              color="red"
              onClick={handleClickLogin}
            />
          </Icon.Group>
        </Start>
      </Container>
    </div>
  );
};

export default Home;
