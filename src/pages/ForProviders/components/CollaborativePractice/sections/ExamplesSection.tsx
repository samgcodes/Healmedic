import React from "react";
import { motion } from "framer-motion";

interface Example {
  title: string;
  description: string;
}

interface ExamplesSectionProps {
  examples: Example[];
}

const ExamplesSection: React.FC<ExamplesSectionProps> = ({ examples }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="bg-white rounded-xl p-8 shadow-lg"
    >
      <h3 className="font-title text-2xl font-semibold mb-6 text-center text-gray-800">
        Examples of Collaborative Practice
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {examples.map((example, index) => (
          <motion.div
            key={example.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.05 * index + 0.2 }}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary h-full"
          >
            <h4 className="font-title text-xl font-semibold mb-3 text-primary">
              {example.title}
            </h4>
            <p className="font-body text-gray-600">{example.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExamplesSection;
