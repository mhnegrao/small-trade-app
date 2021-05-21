import React from 'react';
import { Container } from '../../components/container';
import { useHistory } from 'react-router-dom';
import { TitleHeader, Background, Button } from './style';

/**Profile */
const Profile = () => {
  const history = useHistory();

  const handleClick = (page: string) => {
    history.push(page);
  };
  return (
    <div>
      <Background>
        <TitleHeader>
          <h2>Small Trade App - Painel de Controle</h2>
          <Button>
            <button type="submit" onClick={() => handleClick('/')}>
              Sair
            </button>
          </Button>
        </TitleHeader>
      </Background>
    </div>
  );
};

export default Profile;
