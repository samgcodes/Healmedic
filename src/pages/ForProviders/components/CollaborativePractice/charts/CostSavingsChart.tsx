import React, { useRef, useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useChartCleanup } from "./ChartConfig";

interface CostSavingsChartProps {
  delay: number;
}

const CostSavingsChart: React.FC<CostSavingsChartProps> = ({ delay }) => {
  const chartRef = useRef<any>(null);
  const [animationValues, setAnimationValues] = useState([0, 0, 0]);
  const targetValues = [1.2, 2.8, 4.3];

  // Use the chart cleanup hook
  useChartCleanup(chartRef);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimationValues((prev) => {
          const newValues = [...prev];
          let allDone = true;

          for (let i = 0; i < 3; i++) {
            if (newValues[i] < targetValues[i]) {
              newValues[i] = Math.min(newValues[i] + 0.2, targetValues[i]); // Faster animation
              allDone = false;
            }
          }

          if (allDone) {
            clearInterval(interval);
          }

          return newValues;
        });
      }, 20); // Faster animation

      return () => clearInterval(interval);
    }, delay * 500); // Faster delay

    return () => clearTimeout(timer);
  }, [delay]);

  const data = {
    labels: ["Year 1", "Year 2", "Year 3"],
    datasets: [
      {
        label: "Cost Savings (in thousands $)",
        data: animationValues.map((v) => parseFloat(v.toFixed(1))),
        backgroundColor: [
          "rgba(209, 193, 246, 0.8)",
          "rgba(181, 157, 240, 0.8)",
          "rgba(138, 103, 230, 0.8)",
        ],
        borderColor: [
          "rgb(209, 193, 246)",
          "rgb(181, 157, 240)",
          "rgb(138, 103, 230)",
        ],
        borderWidth: 1,
        borderRadius: 6,
        hoverBackgroundColor: [
          "rgba(209, 193, 246, 1)",
          "rgba(181, 157, 240, 1)",
          "rgba(138, 103, 230, 1)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        labels: {
          font: {
            family: "Mulish, sans-serif",
            size: 11,
          },
          padding: 15,
          usePointStyle: true,
          boxWidth: 10,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `$${context.raw}K per patient`;
          },
        },
        padding: 12,
        backgroundColor: "rgba(138, 103, 230, 0.9)",
      },
      title: {
        display: true,
        text: "Annual Cost Savings Per Patient",
        font: {
          family: "Mulish, sans-serif",
          size: 15,
          weight: "bold" as const,
        },
        padding: {
          bottom: 12,
        },
        color: "#333",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          font: {
            size: 10,
          },
          padding: 8,
          callback: function (value: any) {
            return "$" + value + "K";
          },
        },
        title: {
          display: true,
          text: "Savings (thousands $)",
          font: {
            size: 11,
          },
          padding: 10,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 10,
          },
          padding: 8,
        },
      },
    },
    animation: {
      duration: 800,
    },
  };

  return <Bar ref={chartRef} data={data} options={options} />;
};

export default CostSavingsChart;
