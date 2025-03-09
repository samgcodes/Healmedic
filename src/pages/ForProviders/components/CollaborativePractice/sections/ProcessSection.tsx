import React from "react";
import { motion } from "framer-motion";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  steps: ProcessStep[];
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ steps }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="bg-gradient-to-r from-[#8a67e6] to-[#9a77f6] rounded-xl overflow-hidden shadow-lg"
    >
      <div className="p-8 text-white">
        <h3 className="font-title text-2xl font-semibold mb-6 text-center">
          How the CPA Process Works
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.step} className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h4 className="font-title text-xl font-semibold mb-2 text-center">
                  {step.title}
                </h4>
                <p className="font-body text-white text-opacity-90 text-center">
                  {step.description}
                </p>
              </div>
              {step.step < steps.length && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-white bg-opacity-30 transform -translate-x-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProcessSection;
