import React from "react";
import { motion } from "framer-motion";

const ProviderResources: React.FC = () => {
  const resources = [
    {
      title: "Referral Form",
      description:
        "Standard form for referring patients to our pharmacy services",
      icon: "📄",
      downloadLink: "#",
    },
    {
      title: "CPA Template",
      description: "Sample Collaborative Practice Agreement template",
      icon: "📝",
      downloadLink: "#",
    },
    {
      title: "Patient Authorization Form",
      description: "HIPAA-compliant authorization for information sharing",
      icon: "🔒",
      downloadLink: "#",
    },
    {
      title: "Medication Review Request",
      description:
        "Form to request comprehensive medication review for patients",
      icon: "📋",
      downloadLink: "#",
    },
  ];

  const educationalResources = [
    {
      title: "Medication Management Guide",
      description: "Best practices for medication therapy management",
      icon: "📊",
      downloadLink: "#",
    },
    {
      title: "Patient Education Materials",
      description: "Printable education materials for common medications",
      icon: "📚",
      downloadLink: "#",
    },
    {
      title: "Clinical Guidelines",
      description: "Evidence-based guidelines for common conditions",
      icon: "📑",
      downloadLink: "#",
    },
    {
      title: "Pharmacy Services Overview",
      description: "Comprehensive guide to our pharmacy services",
      icon: "🏥",
      downloadLink: "#",
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
        <h2 className="font-title text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
          Provider Resources
        </h2>
        <p className="font-body text-lg text-gray-600 mb-6 max-w-3xl">
          Access a variety of resources designed to help you and your patients
          get the most out of our pharmacy services.
        </p>

        {/* Forms & Documents */}
        <h3 className="font-title text-xl font-semibold mb-6 text-gray-800">
          Forms & Documents
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="text-4xl mb-4">{resource.icon}</div>
              <h4 className="font-title text-xl font-semibold mb-3 text-gray-800">
                {resource.title}
              </h4>
              <p className="font-body text-gray-600 mb-4">
                {resource.description}
              </p>
              <div className="mt-auto pt-4">
                <motion.a
                  href={resource.downloadLink}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-primary text-white font-body px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300"
                >
                  Download
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Educational Resources */}
        <h3 className="font-title text-xl font-semibold mb-6 text-gray-800">
          Educational Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {educationalResources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="text-4xl mb-4">{resource.icon}</div>
              <h4 className="font-title text-xl font-semibold mb-3 text-gray-800">
                {resource.title}
              </h4>
              <p className="font-body text-gray-600 mb-4">
                {resource.description}
              </p>
              <div className="mt-auto pt-4">
                <motion.a
                  href={resource.downloadLink}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-primary text-white font-body px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300"
                >
                  Download
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact for Custom Resources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-r from-primary/10 to-purple-100 rounded-xl p-8 shadow-md"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3 xl:w-1/4 aspect-square rounded-xl overflow-hidden mb-6 xl:mb-0">
            <div className="bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center shadow-md aspect-square relative">
              <svg
                className="w-24 h-24 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="text-sm text-gray-500 absolute bottom-4">
                Image: Custom provider resources
              </p>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-title text-xl font-semibold mb-3 text-gray-800">
              Need Custom Resources?
            </h3>
            <p className="font-body text-gray-600 mb-4">
              We can develop customized resources tailored to your practice's
              specific needs. Whether you need specialized patient education
              materials, custom forms, or practice-specific protocols, our team
              is ready to help.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary text-white font-body px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors duration-300 shadow-md"
            >
              Contact Us
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProviderResources;
