import React from 'react';
import { Container } from '../../components/container';
import { IoEnterOutline } from 'react-icons/io5';
import { ButtonBar, TitleHeader } from './style.js';
import { useHistory } from 'react-router-dom';

/**home */
const Home = () => {
  const history = useHistory();

  const handleClickLogin = () => {
    history.push('../login/');
  };
  return (
    <div>
      <Container>
        <TitleHeader>
          <h2>Small Trade App</h2>
        </TitleHeader>

        <h3>Administração de pequenos comércios e Homeoffice</h3>
        <ButtonBar>
          <button onClick={handleClickLogin}>Acessar o Sistema </button>
        </ButtonBar>
        <span>
          <IoEnterOutline size={36} />
        </span>
      </Container>
    </div>
  );
};

export default Home;
