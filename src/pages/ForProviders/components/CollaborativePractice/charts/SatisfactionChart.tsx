import React, { useRef, useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";
import { useChartCleanup } from "./ChartConfig";

interface SatisfactionChartProps {
  delay: number;
}

const SatisfactionChart: React.FC<SatisfactionChartProps> = ({ delay }) => {
  const [animationProgress, setAnimationProgress] = useState(0);
  const chartRef = useRef<any>(null);

  // Use the chart cleanup hook
  useChartCleanup(chartRef);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimationProgress((prev) => {
          if (prev < 1) {
            return prev + 0.02;
          }
          clearInterval(interval);
          return 1;
        });
      }, 20);

      return () => clearInterval(interval);
    }, delay * 500);

    return () => clearTimeout(timer);
  }, [delay]);

  // Satisfaction data
  const satisfactionValue = 92;
  const animatedValue = Math.round(satisfactionValue * animationProgress);

  // Chart data
  const data = {
    datasets: [
      {
        data: [animatedValue, 100 - animatedValue],
        backgroundColor: [
          "rgba(138, 103, 230, 0.8)",
          "rgba(240, 240, 240, 0.4)",
        ],
        borderWidth: 0,
        borderRadius: 15, // Increased for smoother end caps
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  // Chart options
  const options = {
    cutout: "82%", // Increased to make the gauge thinner
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    events: [],
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Main chart container */}
      <div className="relative w-full h-36 sm:h-40 flex items-center justify-center">
        {/* Chart */}
        <div className="w-52 sm:w-56 h-26 sm:h-30">
          <Doughnut ref={chartRef} data={data} options={options} />
        </div>

        {/* Percentage display - perfectly centered */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          <div className="text-3xl sm:text-4xl font-bold text-primary mt-2">
            {animatedValue}%
          </div>
        </motion.div>
      </div>

      {/* Scale indicators - better aligned with gauge endpoints */}
      <div className="w-52 sm:w-56 flex justify-between -mt-3">
        <div className="text-xs text-gray-500 pl-1">0%</div>
        <div className="text-xs text-gray-500">50%</div>
        <div className="text-xs text-gray-500 pr-1">100%</div>
      </div>
    </div>
  );
};

export default SatisfactionChart;
