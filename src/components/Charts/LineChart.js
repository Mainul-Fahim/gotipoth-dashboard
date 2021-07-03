import React from 'react';
import { Line } from 'react-chartjs-2'

const LineChart = () => {
    
    const data = {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        datasets: [
          {
            label: 'Current Period',
            data: [21, 38,34, 40, 50, 40,57,40,32,40,76,40,36,40,36,40,57],
            borderColor: ['rgba(255, 206, 86, 0.2)'],
            backgroundColor: ['rgba(255, 206, 86, 0.2)'],
            pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
            pointBorderColor: 'rgba(255, 206, 86, 0.2)'
          },
          {
            label: 'Previous Period',
            data: [40, 55, 40, 38, 40,65,60,40,25,40,43,40,25],
            borderColor: ['rgba(54, 162, 235, 0.2)'],
            backgroundColor: ['rgba(54, 162, 235, 0.2)'],
            pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
            pointBorderColor: 'rgba(54, 162, 235, 0.2)'
          }
        ]
      }
    
      const options = {
        title: {
          display: true,
          text: 'Line Chart'
        },
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 80,
                stepSize: 20
              }
            }
          ]
        }
      }
    return (
        <Line data={data} options={options} />
    );
};

export default LineChart;