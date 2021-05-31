import React, { useState, useEffect, MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/pt-br';

import {
  Form,
  Button,
  Container,
  Header,
  Divider,
  List,
  Grid,
} from 'semantic-ui-react';
import { Content } from './style';

interface ITask {
  id?: number;
  titulo?: string;
  descricao?: string;
  dataTarefa?: Date;
  prioridade?: string;
  completed?: boolean;
  completed_At?: Date;
  created_At?: Date;
}

const formatDate = (date: Date, format: string) => {
  let dateFormated = moment(date).format(format);
  return dateFormated;
};
const options = [
  { key: 'b', text: 'Baixa', value: 'baixa' },
  { key: 'n', text: 'Normal', value: 'normal' },
  { key: 'a', text: 'Alta', value: 'alta' },
  { key: 'u', text: 'Urgente!!!', value: 'urgente' },
];
const Tarefas: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [tarefa, setTarefa] = useState<ITask>({});

  useEffect(() => {
    loadTasks();
  });

  const loadTasks = () => {};

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTarefa({
      ...tarefa,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const handleSelectChange = (
    e: React.SyntheticEvent<HTMLDivElement>,
    data: any
  ) => {
    tarefa.prioridade = data.value;
  };
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('tarefa', tarefa);
    const newTask: ITask = {
      id: tasks.length + 1,
      titulo: tarefa.titulo,
      descricao: tarefa.descricao,
      dataTarefa: tarefa.dataTarefa,
      created_At: new Date(),
    };

    setTasks([...tasks, newTask]);
    resetFields();
  };
  const resetFields = () => {
    Array.from(document.querySelectorAll('input')).forEach(
      (input) => (input.value = '')
    );

    //tituloInputRef.focus()
  };
  return (
    <>
      <Content>
        <Container>
          <Header as="h1" icon="calendar">
            Agenda de Compromissos
          </Header>
          <Form onSubmit={handleSubmitForm}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                name="titulo"
                label="Título"
                placeholder="título para identificar"
                onChange={handleInputChange}
              />
              <Form.Input
                fluid
                name="descricao"
                label="Descrição"
                placeholder="descrição..."
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                name="dataTarefa"
                label="Data"
                type="date"
                placeholder="data qdo será executada..."
                onChange={handleInputChange}
              />
              <Form.Select
                fluid
                name="prioridade"
                label="Prioridade"
                options={options}
                placeholder="..."
                // onChange={(e:any, {value}) => handleSelectChange(e, value?.toString())}
              />
            </Form.Group>
            <Form.Button color="green">Agendar</Form.Button>
          </Form>
          <Divider />

          <Container>
            <Header size="large" block>
              Compromissos Agendados
            </Header>
            <Grid>
              {tasks.map((item, index) => (
                <>
                  <Grid.Row>
                    <Grid.Column>
                      <List key={index} divided relaxed>
                        <List.Item>
                          <List.Header>{item.titulo}</List.Header>
                          <List.Content>{item.descricao}</List.Content>
                          <List.Content>{item.dataTarefa}</List.Content>
                          <List.Content floated="left">
                            <Button>Finalizar</Button>
                          </List.Content>
                        </List.Item>
                      </List>
                    </Grid.Column>
                  </Grid.Row>
                </>
              ))}
            </Grid>
          </Container>
        </Container>
      </Content>
    </>
  );
};

export default Tarefas;
