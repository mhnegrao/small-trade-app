import React, { useEffect, useState } from 'react';
import { IMensalidade } from '../../../../services/interfaces';
import { addMonths, format } from 'date-fns';
const ptBR = require('date-fns/locale/pt-BR');
import {
  Form,
  Container,
  Header,
  Button,
  Radio,
  Checkbox,
} from 'semantic-ui-react';

export const MensalidadeCad = (props: IMensalidade) => {

  const [lancamentos, setLancamentos] = useState([]);
  const [mensalidade, setMensalidade] = useState<IMensalidade>({});
  //@ts-ignore
  const novaEntrada=[{}];

  useEffect(() => {});
//@ts-ignore
  const updateMensalidadeList = async (mensalidade) => {
    //@ts-ignore
   const newlancto=lancamentos;
   //@ts-ignore
   newlancto.push(mensalidade);
   //console.log(...mensalidade);
     //@ts-ignore
     setLancamentos([...lancamentos,newlancto]);
    //@ts-ignore
   console.log(lancamentos[lancamentos.length-1]);

    
  };
  const gerarParcelas =async () => {
    let lanctos: Date[] = [];

    //lançamento inicial
    let start = new Date();
    let dia = mensalidade.diaVencimento;
    let mes = start.getMonth() + 1;
    let ano = start.getFullYear();
    let newDate = new Date(ano, mes, Number(dia));

    for (let i = 0; i < Number(mensalidade.qtdeParcelas); i++) {

      lanctos = [...lanctos, addMonths(newDate, i)];
      mensalidade.dataVencimento = lanctos[i];
      mensalidade.referencia = `${format(
        lanctos[i],
        'MMM'
      ).toUpperCase()}/${format(lanctos[i], 'yyyy')}`;
         
       await updateMensalidadeList(mensalidade);
    }
    //console.log(lancamentos)
     
  };


  const handleCloseClick = () => {};
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMensalidade({
      ...mensalidade,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    gerarParcelas();
  };

  return (
    <>
      <h3>Gerar Mensalidade</h3>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Input
            label="Prestação de Serviço"
            name="tipoPrestacao"
            onChange={handleInputChange}
          />
          <Form.Input
            label="Qtde parcelas"
            name="qtdeParcelas"
            value={props.qtdeParcelas}
            onChange={handleInputChange}
          />
          <Form.Input
            label="Valor das parcelas"
            name="valorParcela"
            value={props.valorParcela}
            onChange={handleInputChange}
          />
          <Form.Input
            label="Dia do vencimento"
            name="diaVencimento"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button type="submit" primary>
          Gerar Parcela
        </Button>
        <Button default onclick={handleCloseClick}>
          Fechar
        </Button>
      </Form>
    </>
  );
};
