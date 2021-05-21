import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from '../../components/container';
import { LoginForm } from './style';

const Login = () => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleClickLogin = (page: string) => {
    history.push(page);
  };

  async function onFormSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
  }

  return (
    <div>
      <Container>
        <LoginForm onSubmit={onFormSubmit}>
          <h1>Login</h1>
          <input
            name="email"
            id="email"
            placeholder="Seu email..."
            onChange={handleInputChange}
          />
          <input
            name="password"
            id="password"
            placeholder="*******"
            onChange={handleInputChange}
          />
          <button type="submit" onClick={() => handleClickLogin('/')}>
            Sair
          </button>
          <button type="submit" onClick={() => handleClickLogin('/profile/')}>
            Acessar
          </button>
        </LoginForm>
      </Container>
    </div>
  );
};

export default Login;
