import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
    
    const data = {
        labels: ['', '', '', '', ''],
        datasets: [
          {
            label: '',
            data: [3, 2, 2, 6, 4],
            borderColor: [
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            backgroundColor: [
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ]
          },
          
        ]
      }
    
      const options = {
        title: {
          display: true,
          text: 'Bar Chart'
        },
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 4,
                stepSize: 1
              }
            }
          ]
        }
      }
    return (
        <Bar height={'100%'} data={data} options={{ maintainAspectRatio: false }} />
    );
};

export default BarChart;