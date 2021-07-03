import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
    
    const data = {
        labels: [
          'Desktop',
          'Mobile',
          'Tablets'
        ],
        datasets: [{
          data: [40, 30, 25],
          backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
          ],
          hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
          ]
        }]
      };
    return (
        <div>
             <Doughnut data={data} />
        </div>
    );
};

export default DoughnutChart;