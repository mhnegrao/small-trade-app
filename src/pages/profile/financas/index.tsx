import React from 'react';
import { Card, Header } from 'semantic-ui-react';

const items = [
  {
    header: 'Entradas',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
  },
  {
    header: 'Saídas',
    description:
      'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
  {
    header: 'Movimento Contábil',
    description:
      'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: 'ROI: 27%',
  },
];

const Financas = () => {
  return (
    <>
      <Header as ='h1'>Finanças</Header>
      <Card.Group items={items} />
    </>
  );
};

export default Financas;
