import React from "react";
import { motion } from "framer-motion";
import PercentageBar from "../charts/PercentageBar";

interface ImpactSectionProps {
  impactData: {
    title: string;
    description: string;
    statistics: Array<{
      percentage: number;
      title: string;
      description: string;
      source: string;
    }>;
  };
}

const ImpactSection: React.FC<ImpactSectionProps> = ({ impactData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-10 bg-gradient-to-br from-white to-primary/5 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg"
    >
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="font-title text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center text-gray-800"
      >
        {impactData.title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="font-body text-sm sm:text-base text-gray-600 text-center mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto"
      >
        {impactData.description}
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-10">
        {impactData.statistics.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
            whileHover={{
              y: -5,
              boxShadow: "0 15px 30px -5px rgba(138, 103, 230, 0.2)",
              transition: { duration: 0.2 },
            }}
            className="bg-white rounded-xl p-4 sm:p-5 lg:p-6 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              className="relative mb-3 sm:mb-4 mx-auto w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 flex items-center justify-center"
            >
              <PercentageBar
                percentage={stat.percentage}
                mainColor="#8a67e6"
                delay={0.3 + index * 0.1}
              />
            </motion.div>
            <div className="font-title text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
              {stat.title}
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              {stat.description}
              <span className="block mt-1 sm:mt-2 text-xs text-gray-500">
                Source: {stat.source}
              </span>
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ImpactSection;
