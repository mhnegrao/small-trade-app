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
import { IServico } from '../../../../services/interfaces';
//@ts-ignore
const ServicoCad = (props: IServico) => {

  const history = useHistory();
  const [servico, setServico] = useState<IServico>({});

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
    setServico({
      ...servico,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleClickCancel = (page: string) => {
    history.push(page);
  };

  return (
    <>
      <Container>
        {/* <Header as="h1">Cadastro de Serviço</Header> */}
        <Form onSubmit={handleSubmit}>
          <Header color="blue">Serviço <strong>Finalizado</strong></Header>
          <Form.Group>
            <Form.Input
              label="Serviço"
              name="descricao"
              placeholder="descrição do serviço..."
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
              label="Previsão Entrega"
              name="dataPrevista"
              type="date"
              placeholder="Middle Name"
              width={4}
              value={props.dataPrevista}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Header>Informações do Cliente</Header>
          <Form.Group>
            <Form.Input
              label="Cliente"
              name="cliente"
              placeholder="nome do cliente..."
              width={8}
              value={props.cliente}
              onChange={handleInputChange}
            />
            <Form.Input
              label="Fone/Celular"
              name="fone"
              placeholder="nome do cliente..."
              width={3}
              value={props.fone}
              onChange={handleInputChange}
            />
            <Form.Input
              type="email"
              label="Email"
              name="email"
              placeholder="nome do cliente..."
              width={5}
              value={props.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Header>Informações de Pagamento</Header>
          <Form.Group>
            <Checkbox label="Serviço Pago" value={props.pago ? 1 : 0} />
            <Form.Input
              label="Data do Pagamento"
              name="dataPagamento"
              placeholder="Middle Name"
              width={4}
              value={props.dataPagamento}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Field>
              <Radio
                label="Dinheiro"
                name="tipoPagamento"
                value={props.tipoPagamento}
                // checked={this.state.value === 'this'}
                // onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="Cartão de Débito"
                name="tipoPagamento"
                value={props.tipoPagamento}
                // checked={this.state.value === 'that'}
                // onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="Cartão de Crédito"
                name="tipoPagamento"
                value={props.tipoPagamento}
                // checked={this.state.value === 'that'}
                // onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="PIX"
                name="tipoPagamento"
                value={props.tipoPagamento}
                // checked={this.state.value === 'that'}
                // onChange={this.handleChange}
              />
            </Form.Field>
          </Form.Group>

          <Header>Notas e Observações</Header>
          <Form.Group>
            <Form.TextArea
              name="observacao"
              placeholder="informações complementares aqui..."
              width={16}
              value={props.observacao}
              //onChange={handleInputChange}
            />
          </Form.Group>
          {/* 
      <Form.Group>
        <Button  onClick={()=>handleClickCancel('/servicos/')} secondary size="large">
          Cancelar
        </Button>
        <Button primary size="large">
          Salvar
        </Button>
      </Form.Group> */}
        </Form>
      </Container>
    </>
  );
};

export default ServicoCad;
