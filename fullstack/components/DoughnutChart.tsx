"use client";

import {Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';

ChartJs.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts} : DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: [1250, 2500, 7650],
        backgroundColor: ['#021526', '#03346E', '#6EACDA']
      }
    ],
    labels: ['Bank 1', 'Bank 2', 'Bank 3']
  }
  return <Doughnut 
            data={data} 
            options={{
              cutout: '60%',
              plugins : {
                legend: {
                  display: false
                }
              }
            }}
          />
}

export default DoughnutChart
