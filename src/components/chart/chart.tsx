import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';

const styles = {
  height: '450px',
  width: '450px',
  Display:'flex',
  FlexDirection: 'row',
  flex:1
  
};
const data = {
  labels: ['Saídas', 'Entradas'],
  datasets: [
    {
      //label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        
      ],
      borderWidth: 0,
    },
  ],
};

const options = {
  indexAxis: 'y',
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    // legend: {
    //   position: 'right',

    // },
    title: {
      display: true,
      text: 'Movimento',
    },
  },
};

//@ts-ignore
const HorizontalBarChart = () => {
  return (
    <>
    <div style={styles}>
      <Bar type="bar" data={data} options={options} />
      </div>
     
    </>
  );
};

export default HorizontalBarChart;
