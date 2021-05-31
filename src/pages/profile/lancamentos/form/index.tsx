import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Form,
  Container,
  Header,
  Button,
  Radio,
  Checkbox,
} from 'semantic-ui-react';
import { ILancamento } from '../../../../services/interfaces';
//@ts-ignore
const LancamentoCad = (props: ILancamento) => {
  const history = useHistory();
  const [lancamento, setLancamento] = useState<ILancamento>({} as ILancamento);

  const submitRef = useRef(null);
  useEffect(() => {
    // if (!!setSubmitFunc) {
    //   setSubmitFunc(submitRef);
    // }
  });

  const handleSubmit = () => {
    // Do whatever you need to retrieve form values and submit it
  };
  //@ts-ignore
  submitRef.current = handleSubmit;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLancamento({
      ...lancamento,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleClickCancel = (page: string) => {
    history.push(page);
  };

  return (
    <>
      <Container>
      
        <Form onSubmit={handleSubmit}>
          <Header color="blue">Informações do Lançamento</Header>
          <Form.Group>
            <Form.Input
              label="Descrição do Lançamento"
              name="descricao"
              placeholder="descrição do lançamento..."
              width={8}
              value={props.descricao}
              onChange={handleInputChange}
            />
            <Form.Input
              label="Valor"
              placeholder="valor do serviço..."
              width={4}
              onChange={handleInputChange}
            />
            <Form.Input
              label="Data do Lançamento"
              name="dataLancamento"
              type="date"
              placeholder="Middle Name"
              width={4}
              value={props.dataLancamento}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default LancamentoCad;
