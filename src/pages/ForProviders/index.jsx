import React from "react";
import { motion } from "framer-motion";

const ForProviders = () => {
  const features = [
    {
      title: "24/7 Support",
      description:
        "Round-the-clock access to our pharmacist team for urgent consultations",
      icon: "🌟",
    },
    {
      title: "Fast Turnaround",
      description:
        "Quick prescription processing and immediate patient notification",
      icon: "⚡",
    },
    {
      title: "EMR Integration",
      description:
        "Seamless integration with major Electronic Medical Record systems",
      icon: "💻",
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control and medication safety protocols",
      icon: "✓",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-primary to-[#7c5ae0]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-64 md:h-80 flex items-center justify-center text-white overflow-hidden"
      >
        <div className="text-center z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Healthcare Providers
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="font-body text-lg md:text-xl lg:text-2xl"
          >
            Partner with us for better patient care
          </motion.p>
        </div>

        {/* Decorative curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            className="w-full h-auto"
          >
            <path
              fill="#FDF8EC"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
            ></path>
          </svg>
        </div>
      </motion.section>

      {/* Content Sections */}
      <section className="bg-[#FDF8EC] py-16">
        <div className="container mx-auto px-4">
          {/* Prescription Sending Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="max-w-6xl mx-auto mb-20"
          >
            <h2 className="font-title text-3xl md:text-4xl font-semibold mb-8 text-gray-800 text-center">
              Sending Prescriptions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="font-title text-xl font-semibold mb-3 text-gray-800">
                  E-Prescribe
                </h3>
                <p className="font-body text-gray-600">
                  Send prescriptions directly through your EMR system using our
                  NCPDP ID: 1234567
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-3xl mb-4">📠</div>
                <h3 className="font-title text-xl font-semibold mb-3 text-gray-800">
                  Fax
                </h3>
                <p className="font-body text-gray-600">
                  Securely fax prescriptions to our dedicated provider line:
                  (555) 123-4567
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-3xl mb-4">💻</div>
                <h3 className="font-title text-xl font-semibold mb-3 text-gray-800">
                  Provider Portal
                </h3>
                <p className="font-body text-gray-600">
                  Use our secure provider portal for prescription management and
                  real-time updates
                </p>
              </div>
            </div>
          </motion.div>

          {/* Partner with Us Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="max-w-6xl mx-auto mb-20"
          >
            <h2 className="font-title text-3xl md:text-4xl font-semibold mb-8 text-gray-800 text-center">
              Partner with Us
            </h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8">
                  <h3 className="font-title text-2xl font-semibold mb-4 text-gray-800">
                    Why Partner with HealMedic?
                  </h3>
                  <ul className="space-y-4 font-body text-gray-600">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Dedicated provider support team
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Advanced medication therapy management
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Comprehensive patient education programs
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Regular medication adherence reports
                    </li>
                  </ul>
                </div>
                <div className="bg-primary p-8 text-white">
                  <h3 className="font-title text-2xl font-semibold mb-4">
                    Become a Partner
                  </h3>
                  <p className="font-body mb-6">
                    Join our network of healthcare providers and enhance your
                    patient care capabilities.
                  </p>
                  <button className="bg-white text-primary font-body px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors duration-300">
                    Request Partnership
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* How We Can Help Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="font-title text-3xl md:text-4xl font-semibold mb-12 text-gray-800 text-center">
              How We Can Help
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-title text-xl font-semibold mb-3 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="font-body text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ForProviders;
