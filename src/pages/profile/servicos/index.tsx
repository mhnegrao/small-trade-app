import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Table,
  Image,
  Modal,
} from 'semantic-ui-react';
import ServicoCad from './form';
import { IServico } from '../../../services/interfaces';
import ServicoContext from '../../../contexts/profile';

const Servicos = () => {
  const [open, setOpen] = useState(false);
  const [esteServico, setServico] = useState<IServico>({} as IServico);
  const [servicoList, setServicoList] = useState<IServico[]>([]);
  const [submitFunc, setSubmitFunc] = useState();
  const { servico } = useContext(ServicoContext);

  const submitForm = () => {
    if (submitFunc) {
      //@ts-ignore
      submitFunc.current();
    }
  };
  const handleSubmitForm = () => {
    // const newTask: ITask = {
    //   id: tasks.length + 1,
    //   titulo: tarefa.titulo,
    //   descricao: tarefa.descricao,
    //   dataTarefa: tarefa.dataTarefa,
    //   created_At: new Date(),
    // };
    setServico(servico);
    console.log(`Descrição: ${servico.valor}`);
    setServicoList([...servicoList, servico]);
    setOpen(false);
  };
  function handleClick(page: JSX.Element): void {
    ReactDOM.render(page, document.getElementById('showhere'));
  }

  return (
    <div>
      <Header as="h1">Serviços</Header>
      <Modal
        as="form"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button icon="plus" color="green">
            Adicionar Novo Serviço
          </Button>
        }
      >
        {/* <Modal.Header>Serviço Novo</Modal.Header> */}
        <Modal.Content>
          <ServicoCad {...servico} />
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button
            content="Salvar"
            labelPosition="right"
            icon="checkmark"
            onClick={handleSubmitForm}
            positive
          />
        </Modal.Actions>
      </Modal>
      {console.log(servico)}
      <section>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Serviço</Table.HeaderCell>
              <Table.HeaderCell>Cliente</Table.HeaderCell>
              <Table.HeaderCell>Fone</Table.HeaderCell>
              <Table.HeaderCell>Pago</Table.HeaderCell>
              <Table.HeaderCell>Data Pagamento</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {servicoList.map((item, index) => (
              <>
                <Table.Row>
                  <Table.Cell>{item.servico}</Table.Cell>
                  <Table.Cell>{item.cliente}</Table.Cell>
                  <Table.Cell>{item.fone}</Table.Cell>
                  <Table.Cell>{item.pago}</Table.Cell>
                  <Table.Cell>{item.dataPagamento}</Table.Cell>
                  <Table.Cell>Uma Ação</Table.Cell>
                </Table.Row>
              </>
            ))}
          </Table.Body>
        </Table>
      </section>
      <br />
    </div>
  );
};

export default Servicos;
