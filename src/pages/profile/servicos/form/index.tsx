import React, { useState, useRef, MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import {
  Button,
  Input,
  Header,
  Container,
  Col,
  Row,
} from '../../../../components/UI-Elements';
import { ServicoForm } from './sryle';

const ServicoCad = () => {
  return (
    <>
      <ServicoForm>
        <Container>
          <Header>Cadastro de Novos Serviços</Header>
          <Row>
            <Col>
              <Input height="20px" label="Servico" />
            </Col>
            <Col>
              <Input label="Valor" />
            </Col>
            <Col>
              <Input label="Cliente" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input label="Email" />
            </Col>
            <Col>
              <Input label="Fone" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input label="Data Solicitação" />
            </Col>
            <Col>
              <Input label="Data Prevista Entrega" />
            </Col>
          </Row>
          <Row>
            <Input label="Observação" />
          </Row>
          <Row>
            <Button>Salvar Serviço</Button>
          </Row>
        </Container>
      </ServicoForm>
    </>
  );
};

export default ServicoCad;
