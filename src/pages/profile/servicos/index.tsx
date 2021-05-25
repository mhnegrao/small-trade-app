import React from 'react';
import ReactDOM from 'react-dom';
import { Panel, Header, Button, Input } from '../../../components/UI-Elements';
import { ServicoForm } from './form/sryle';

const Servicos = () => {
  function handleClick(page: JSX.Element): void {
    ReactDOM.render(page, document.getElementById('showhere'));
  }

  return (
    <div>
      <Panel>
        <Header>Serviços</Header>
        <Button
          color="#f9faf6"
          hoverColor="#7db9e0"
          fontsize="20px"
          border="none"
          radius="8px"
          backgroundColor="#100d24"
          onClick={() => handleClick(<ServicoForm />)}
        >
          Novo Serviço{' '}
        </Button>
        <section>
          - CLIENTE - DESCRIÇÃO DO SERVIÇO / VALOR(R$) / FINALIZADO(S/N) -
          CONTATO (EMAIL/FONE) - DATA (SOLICITAÇÃO/ENTREGA) - PAGO COM: (D///) -
          PAGO EM: 99/99/9999 - OBSERVAÇÃO
        </section>
      </Panel>
      <div id="showhere"></div>
    </div>
  );
};

export default Servicos;
