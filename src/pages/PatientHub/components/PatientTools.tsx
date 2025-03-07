import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TabNavigation from "../../../components/utils/TabNavigation";
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
        <div className="flex flex-col xl:flex-row items-start gap-6">
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
          <div className="w-full md:w-1/3 xl:w-1/4 aspect-square rounded-xl overflow-hidden mb-6 xl:mb-0">
            <img
              src="/assets/PatientHub/patient_tools_PH.png"
              alt="Patient Tools"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <TabNavigation
            items={tools}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
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
