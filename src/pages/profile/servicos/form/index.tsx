import React, { useState, useRef, MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import { Button, Input, Header } from '../../../../components/UI-Elements';
import { ServicoForm } from './sryle';

const ServicoCad = () => {
  return (
    <>
      <ServicoForm>
        <Header>Cadastro de Novo Serviços</Header>
        <Input label="Descrição do Servico" />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Button>Salvar</Button>
      </ServicoForm>
      ;
    </>
  );
};

export default ServicoCad;
