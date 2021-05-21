import React from 'react';
import {
  Container,
  Panel,
  Header,
  Input,
} from '../../../components/UI-Elements';

const Servicos = () => {
  return (
    <div>
      <Panel>
        <Header>Serviços</Header>
        <Input
          type="text"
          fontsize="20px"
          placeholder="Digite seu texto aqui"
          radius="3px"
          background="#c1d2d4"
          height="40px"
          width="400px"
          border="1px"
          borderColor="#13023b"
          hoverColor="#ffffaf"
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          radius="3px"
          background="#c1d2d4"
          height="40px"
          border="1px"
          borderColor="#e41f0d"
        />
      </Panel>
    </div>
  );
};

export default Servicos;
