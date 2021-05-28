import React, { useState, useEffect, MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/pt-br';

import {
  Button,
  Container,
  Header,
  Input,
  Divider,
  List,
} from 'semantic-ui-react';

interface ITask {
  id?: number;
  titulo?: string;
  descricao?: string;
  dataTarefa?: Date;
  completed?: boolean;
  completed_At?: Date;
  created_At?: Date;
}

const formatDate = (date: Date, format: string) => {
  let dateFormated = moment(date).format(format);
  return dateFormated;
};

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

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('tarefa',tarefa);
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
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    
    //tituloInputRef.focus()
  };
  return (
    <>
      <Container>
        <Header>Agenda de Compromissos</Header>

        <form onSubmit={handleSubmitForm}>
          <Input
            required
            id="titulo"
            name="titulo"
            label="Título"
            variant="primary"
            onChange={handleInputChange}
            
            
          />

          <Input
            required
            id="descricao"
            name="descricao"
            label="Descrição"
            onChange={handleInputChange}
          />
          <Input
            id="dataTarefa"
            name="dataTarefa"
            type="date"
            label="Data"
            onChange={handleInputChange}
          />

          <Button type="submit" primary>
            Agendar
          </Button>
        </form>
        <Divider />

        <Header>Compromissos Agendados</Header>

        {tasks.map((item, index) => (
          <div>
            <List key={index} divided relaxed>
              <List.Item>
                <List.Header>{item.titulo}</List.Header>
                <List.Content>{item.descricao}</List.Content>
                <List.Content>{item.dataTarefa}</List.Content>
                <List.Content floated="left">
                  <Button>Add</Button>
                </List.Content>
              </List.Item>
            </List>
          </div>
        ))}
      </Container>
    </>
  );
};

export default Tarefas;
