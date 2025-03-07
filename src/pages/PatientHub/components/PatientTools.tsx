import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BMICalculator from "./tools/BMICalculator.tsx";
import InsulinCalculator from "./tools/InsulinCalculator.tsx";

const PatientTools: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tools = [
    {
      title: "BMI Calculator",
      component: <BMICalculator />,
      icon: "📊",
      description:
        "Calculate your Body Mass Index (BMI) to assess your weight relative to your height.",
    },
    {
      title: "Insulin Dosing",
      component: <InsulinCalculator />,
      icon: "💉",
      description:
        "Calculate insulin doses based on carbohydrate intake and blood glucose levels.",
    },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary"
      >
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="flex-1">
            <h2 className="font-title text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
              Patient Tools
            </h2>
            <p className="font-body text-lg text-gray-600">
              Our interactive health tools are designed to help you monitor and
              manage your health. These calculators provide estimates and
              general guidance but should not replace professional medical
              advice from your healthcare provider.
            </p>
          </div>
          <div className="w-full md:w-1/4 aspect-square bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center">
            <svg
              className="w-16 h-16 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                clipRule="evenodd"
              ></path>
            </svg>
            {/* Image placeholder for patient tools section */}
          </div>
        </div>
      </motion.div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tools.map((tool, index) => (
              <button
                key={tool.title}
                onClick={() => setActiveTab(index)}
                className={`py-4 px-6 font-body text-sm md:text-base whitespace-nowrap flex items-center space-x-2 transition-colors duration-200 ${
                  activeTab === index
                    ? "text-primary border-b-2 border-primary font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <span>{tool.icon}</span>
                <span>{tool.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4">
                <p className="font-body text-gray-600">
                  {tools[activeTab].description}
                </p>
              </div>
              {tools[activeTab].component}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-gradient-to-r from-primary/10 to-purple-100 rounded-xl p-6 shadow-md"
      >
        <div className="flex items-center gap-4">
          <div className="text-3xl">⚠️</div>
          <div>
            <h3 className="font-title text-xl font-semibold text-gray-800">
              Important Disclaimer
            </h3>
            <p className="font-body text-gray-600">
              These tools provide estimates only and should not be used as a
              substitute for professional medical advice, diagnosis, or
              treatment. Always consult with your healthcare provider regarding
              any medical questions or decisions about your health.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PatientTools;
