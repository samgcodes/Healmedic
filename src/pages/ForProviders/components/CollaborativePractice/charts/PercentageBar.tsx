import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface PercentageBarProps {
  percentage: number;
  label: string;
  mainColor: string;
  delay: number;
}

const PercentageBar: React.FC<PercentageBarProps> = ({
  percentage,
  label,
  mainColor,
  delay,
}) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimatedPercentage((prev) => {
          if (prev < percentage) {
            return prev + 2; // Faster animation
          }
          clearInterval(interval);
          return percentage;
        });
      }, 10); // Faster animation

      return () => clearInterval(interval);
    }, delay * 500); // Faster delay

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">
        {animatedPercentage}%
      </div>
      <div className="w-full h-4 sm:h-5 lg:h-6 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${animatedPercentage}%` }}
          transition={{ duration: 0.5, delay: delay * 0.5 }}
          className="h-full rounded-full"
          style={{ backgroundColor: mainColor }}
        />
      </div>
      <div className="w-full flex justify-between mt-1 text-[10px] sm:text-xs text-gray-500">
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
    </div>
  );
};

export default PercentageBar;
