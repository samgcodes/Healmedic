import React from "react";
import { motion } from "framer-motion";
import { providerBenefitsData } from "../data";

const ProviderBenefits: React.FC = () => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary"
      >
        <h2 className="font-title text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
          {providerBenefitsData.title}
        </h2>
        <p className="font-body text-lg text-gray-600 mb-6 max-w-3xl">
          {providerBenefitsData.description}
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {providerBenefitsData.benefits.map((benefit: any, index: number) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.05 * index }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="font-title text-xl font-semibold mb-3 text-gray-800">
                {benefit.title}
              </h3>
              <p className="font-body text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Provider Types */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="bg-white rounded-xl p-8 shadow-lg"
      >
        <h3 className="font-title text-2xl font-semibold mb-8 text-center text-gray-800">
          Benefits for Different Provider Types
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {providerBenefitsData.providerTypes.map(
            (providerType: any, index: number) => (
              <motion.div
                key={providerType.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.05 * index + 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg overflow-hidden shadow-md h-full"
              >
                <div className="bg-primary p-4">
                  <h4 className="font-title text-xl font-semibold text-white text-center">
                    {providerType.type}
                  </h4>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {providerType.benefits.map(
                      (benefit: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2 mt-1">✓</span>
                          <span className="font-body text-gray-700">
                            {benefit}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </motion.div>
            )
          )}
        </div>
      </motion.div>

      {/* Why Working With Us Is Beneficial */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="bg-gradient-to-r from-primary/10 to-purple-100 rounded-xl p-8 shadow-md"
      >
        <h3 className="font-title text-2xl font-semibold mb-6 text-gray-800">
          Why Working With Us Is Beneficial
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h4 className="font-title text-xl font-semibold mb-4 text-primary">
              Advanced Practice Credentials
            </h4>
            <p className="font-body text-gray-600 mb-4">
              Our pharmacists hold Advanced Practice Pharmacist (APh) licensure,
              allowing them to provide a higher level of clinical care. This
              specialized credential enables our team to:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1 font-bold">✓</span>
                <span className="font-body text-gray-700">
                  Independently manage and adjust medications within
                  collaborative practice agreements
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1 font-bold">✓</span>
                <span className="font-body text-gray-700">
                  Order and interpret laboratory tests related to drug therapy
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1 font-bold">✓</span>
                <span className="font-body text-gray-700">
                  Provide more comprehensive clinical services than traditional
                  pharmacists
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h4 className="font-title text-xl font-semibold mb-4 text-primary">
              Measurable Outcomes
            </h4>
            <p className="font-body text-gray-600 mb-4">
              Our collaborative approach has demonstrated significant
              improvements in key healthcare metrics:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1 font-bold">✓</span>
                <span className="font-body text-gray-700">
                  30% improvement in medication adherence rates
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1 font-bold">✓</span>
                <span className="font-body text-gray-700">
                  25% reduction in medication-related adverse events
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1 font-bold">✓</span>
                <span className="font-body text-gray-700">
                  20% decrease in hospital readmissions for chronic disease
                  patients
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1 font-bold">✓</span>
                <span className="font-body text-gray-700">
                  Significant time savings for physicians through collaborative
                  medication management
                </span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProviderBenefits;
