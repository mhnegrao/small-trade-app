import React, { useState, useRef, MouseEvent } from 'react';
import ReactDOM from 'react-dom';

import {
  Container,
  Panel,
  Header,
  MaskInput,
  Input,
  Button,
  ListItens,
} from '../../../components/UI-Elements';

interface ITask {
  id: number;
  descricao?: string;
  completed?: boolean;
  createdAt?: string | Date;
}

const Tarefas: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [value, setValue] = useState<string>('');
  const [valueDate, setValueDate] = useState<string>('');

  // const useFocus = () => {
  //   const htmlElRef = useRef();
  //   const setFocus = () => {
  //     htmlElRef.current && htmlElRef.current.focus();
  //   };

  //   return [htmlElRef, setFocus];
  // };
  // const [inputRef, setInputFocus] = useFocus();

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask: ITask = {
      id: tasks.length + 1,
      descricao: value,
      completed: false,
      createdAt: new Date(),
    };

    setTasks([...tasks, newTask]);
    setValue('');
  };

  return (
    <div>
      <Panel>
        <Header>Agenda de Compromissos</Header>

        <form onSubmit={handleSubmitForm}>
          <Input
            name="descricao"
            label="Descrição do Compromisso"
            type="text"
            value={value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setValue(event.target.value)
            }
          />
          <MaskInput
            name="dataCompromisso"
            placeholder="Data do Compromisso/Agenda"
            type="date"
            mask="99/99/9999"
            value={valueDate}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setValueDate(event.target.value)
            }
          />
          <br />
          <Button
            type="submit"
            height="40"
            fontsize="20px"
            border="none"
            radius="8px"
            backgroundColor="#5faf87"
          >
            Adicionar
          </Button>
        </form>

        <ListItens>
          <h5>Tarefas/Compromissos</h5>

          {tasks.map((task: ITask) => (
            <li key={task.id}>
              <div>
                <h5>{task.descricao}</h5>

                <p>Completada: {task.completed}</p>
              </div>
            </li>
          ))}
        </ListItens>
      </Panel>
    </div>
  );
};

export default Tarefas;
