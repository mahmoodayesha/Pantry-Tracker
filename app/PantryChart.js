import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const PantryChart = ({ pantryData }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Quantity',
        data: [],
        backgroundColor: '#d4b990',
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    if (pantryData && pantryData.length > 0) {
      const labels = pantryData.map(item => item.name);
      const data = pantryData.map(item => item.count);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Quantity',
            data: data,
            backgroundColor: '#d4b990',
            borderColor: 'black',
            borderWidth: 1,
          },
        ],
      });
    }
  }, [pantryData]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false, // This ensures the chart resizes with its container
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `${context.label}: ${context.raw}`;
                },
              },
            },
          },
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default PantryChart;
