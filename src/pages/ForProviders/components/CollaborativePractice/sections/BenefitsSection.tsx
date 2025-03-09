import React from "react";
import { motion } from "framer-motion";

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface BenefitsSectionProps {
  benefits: Benefit[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {benefits.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.05 * index }}
          whileHover={{
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.2 },
          }}
          className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary h-full"
        >
          <div className="text-4xl mb-4">{benefit.icon}</div>
          <h3 className="font-title text-xl font-semibold mb-3 text-gray-800">
            {benefit.title}
          </h3>
          <p className="font-body text-gray-600">{benefit.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default BenefitsSection;
