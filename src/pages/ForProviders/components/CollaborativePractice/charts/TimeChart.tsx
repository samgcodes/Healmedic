import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeChartProps {
  delay: number;
}

const TimeChart: React.FC<TimeChartProps> = ({ delay }) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimatedValue((prev) => {
          if (prev < 100) {
            return prev + 2;
          }
          clearInterval(interval);
          return 100;
        });
      }, 10);

      return () => clearInterval(interval);
    }, delay * 500);

    return () => clearTimeout(timer);
  }, [delay]);

  // Time savings data
  const categories = [
    { name: "Patient Consultations", hours: 2.0, icon: "👨‍⚕️" },
    { name: "Medication Reviews", hours: 1.5, icon: "💊" },
    { name: "Documentation", hours: 1.0, icon: "📝" },
    { name: "Follow-ups", hours: 1.3, icon: "📞" },
  ];

  const totalHours = categories.reduce(
    (sum, category) => sum + category.hours,
    0
  );
  const animatedTotal = ((totalHours * animatedValue) / 100).toFixed(1);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Main time savings number */}
      <div className="text-center mb-3">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: delay }}
          className="text-4xl font-bold text-primary"
        >
          {animatedTotal}
        </motion.div>
        <div className="text-sm text-gray-600 font-medium">
          hours saved weekly
        </div>
      </div>

      {/* Categories */}
      <div className="w-full grid grid-cols-2 gap-2">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: delay + 0.1 + index * 0.1 }}
            className="flex items-center bg-gray-50 rounded-lg p-2"
          >
            <span className="text-lg mr-2">{category.icon}</span>
            <div className="flex-1">
              <div className="text-xs font-medium text-gray-700">
                {category.name}
              </div>
              <div className="text-xs text-primary font-semibold">
                {((category.hours * animatedValue) / 100).toFixed(1)} hrs
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Annual total */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.6 }}
        className="mt-3 text-xs text-gray-500 text-center"
      >
        That's over 300 hours saved annually!
      </motion.div>
    </div>
  );
};

export default TimeChart;
