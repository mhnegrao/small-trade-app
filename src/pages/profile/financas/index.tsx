import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import { Card, Header, Button, Divider } from 'semantic-ui-react';
import HorizontalBarChart from '../../../components/chart/chart';
import Lancamentos from '../lancamentos';
import Mensalidades from '../mensalidades';

const items = [
  {
    header: 'Entradas',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'Valor: R$ 1.500,00',
  },
  {
    header: 'Saídas',
    description:
      'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'Saídas: R$ 710,00',
  },
];

const Financas = () => {
  const history = useHistory();
  const handleClick = (page: any) => {

    ReactDOM.render(page, document.getElementById('show-component'));
    
  };
  return (
    <>
      <Header as="h1">Finanças</Header>

      <Card.Group items={items} />
      <Divider />
      <Button
        color="green"
        label="Lançamento Financeiro"
        icon="list alternate outline"
        onClick={() => handleClick(<Lancamentos/>)}
      />
      <Button
        color="orange"
        label="Controle de Mensalidades"
        icon="calendar alternate outlines"
        onClick={() => handleClick(<Mensalidades/>)}
      />
      <h3>Demostrativo</h3>
      <HorizontalBarChart />
      <div id="show-component"></div>
    </>
  );
};

export default Financas;
