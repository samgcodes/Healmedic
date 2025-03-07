import React from "react";
import { motion } from "framer-motion";

const HomePage: React.FC = () => {
  const features = [
    {
      title: "Disease Management",
      description:
        "Learn about managing chronic conditions and preventive care",
      icon: "🏥",
    },
    {
      title: "Medication Education",
      description:
        "Understand your medications, their effects, and proper usage",
      icon: "💊",
    },
    {
      title: "Vitamins & Supplements",
      description:
        "Explore information about vitamins, supplements, and natural remedies",
      icon: "🌿",
    },
    {
      title: "Nutrition Education",
      description:
        "Discover healthy eating guidelines and dietary recommendations",
      icon: "🥗",
    },
    {
      title: "Patient Tools",
      description:
        "Access helpful calculators and tools for managing your health",
      icon: "🔧",
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
              Welcome to the Patient Hub
            </h2>
            <p className="font-body text-lg text-gray-600 mb-6">
              Our Patient Hub is designed to provide you with comprehensive
              health education resources and tools to support your wellness
              journey. Browse through our various sections using the menu on the
              left to access information about disease management, medications,
              nutrition, and more.
            </p>
          </div>
          <div className="w-full md:w-1/4 aspect-square bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center mb-4">
            <svg
              className="w-16 h-16 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              ></path>
            </svg>
            {/* Image placeholder for home section */}
          </div>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md">
          <p className="font-body text-blue-700">
            <span className="font-semibold">How to use this hub:</span> Select
            any topic from the menu on the left to view detailed information and
            resources. Each section contains educational content curated by our
            healthcare professionals to help you make informed decisions about
            your health.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="font-title text-xl font-semibold mb-6 text-gray-800">
          Available Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h4 className="font-title text-lg font-semibold mb-2 text-gray-800">
                {feature.title}
              </h4>
              <p className="font-body text-gray-600 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gradient-to-r from-primary/10 to-purple-100 rounded-xl p-6 shadow-md"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/4 aspect-square bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center">
            <svg
              className="w-16 h-16 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-title text-xl font-semibold mb-3 text-gray-800">
              Personalized Health Education
            </h3>
            <p className="font-body text-gray-600 mb-4">
              Our team of pharmacists and healthcare professionals has curated
              this information to help you better understand your health
              conditions and treatment options. We believe that informed
              patients make better health decisions.
            </p>
            <p className="font-body text-gray-600">
              If you have specific questions about your health or medications,
              please don't hesitate to contact our pharmacy team directly.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
