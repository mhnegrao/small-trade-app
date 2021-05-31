import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
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
import LancamentoCad from './form';
import { ILancamento } from '../../../services/interfaces';



const Lancamentos = () => {
  const [open, setOpen] = useState(false);
  const [lancamento, setLancamento] = useState<ILancamento>({} as ILancamento);
  const [lancamentoList, setLancamentoList] = useState<ILancamento[]>([]);
  const [submitFunc, setSubmitFunc] = useState();
  const history = useHistory();

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
    // setServico(servico);
    // console.log(`Descrição: ${servico.valor}`);
    // setServicoList([...servicoList, servico]);
    setOpen(false);
  };
  function handleClick(page: JSX.Element): void {
    ReactDOM.render(page, document.getElementById('showhere'));
  }

  return (
    <div>
      <Header as="h1">Lançamentos</Header>
      <Modal
        as="form"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button icon="plus" color="green">
            Adicionar Novo Lançamento
          </Button>
        }
      >
       
        <Modal.Content>
          <LancamentoCad {...lancamento} />
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
     <section>

    
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Data</Table.HeaderCell>
              <Table.HeaderCell>Descrição</Table.HeaderCell>
              <Table.HeaderCell>Valor</Table.HeaderCell>
              <Table.HeaderCell>Tipo</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {lancamentoList.map((item, index) => (
              <>
                <Table.Row>
                  <Table.Cell>{item.dataLancamento}</Table.Cell>
                  <Table.Cell>{item.descricao}</Table.Cell>
                  <Table.Cell>{item.valor}</Table.Cell>
                  <Table.Cell>{item.tipoPlancamento}</Table.Cell>
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

export default Lancamentos;
