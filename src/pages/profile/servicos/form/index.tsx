import React, { useState, useRef, MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import {
  Button,
  Input,
  Header,
  Container,
} from '../../../../components/UI-Elements';
import { ServicoForm } from './sryle';

const ServicoCad = () => {
  return (
    <>
      <ServicoForm>
        <Container>
          <Header>Cadastro de Novos Serviços</Header>
          <Input label="Servico" />
          <Input label="Cliente" />
          <Input label="Email" />
          <Input label="Fone" />
          <Input label="Solicitação" />
          <Input label="Entrega" />
          <Input label="Valor" />
          <Input label="Observação" />

          <Button>Salvar</Button>
        </Container>
      </ServicoForm>
      ;
    </>
  );
};

export default ServicoCad;
