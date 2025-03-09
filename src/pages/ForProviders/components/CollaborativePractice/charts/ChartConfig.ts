import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Common animation hook for charts
export const useChartAnimation = (
  delay: number,
  targetValue: number = 1,
  step: number = 0.05
) => {
  const [animationProgress, setAnimationProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimationProgress((prev) => {
          if (prev < targetValue) {
            return prev + step;
          }
          clearInterval(interval);
          return targetValue;
        });
      }, 20);

      return () => clearInterval(interval);
    }, delay * 500);

    return () => clearTimeout(timer);
  }, [delay, targetValue, step]);

  return animationProgress;
};

// Common chart cleanup hook
export const useChartCleanup = (chartRef: React.RefObject<any>) => {
  React.useEffect(() => {
    return () => {
      if (chartRef.current && chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }
    };
  }, [chartRef]);
};
