import React from "react";
import { motion } from "framer-motion";
import TimeChart from "../charts/TimeChart";
import CostSavingsChart from "../charts/CostSavingsChart";
import SatisfactionChart from "../charts/SatisfactionChart";

interface ChartsSectionProps {
  timeSavingsSource: string;
  costSavingsSource: string;
  satisfactionSource: string;
}

const ChartsSection: React.FC<ChartsSectionProps> = ({
  timeSavingsSource,
  costSavingsSource,
  satisfactionSource,
}) => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:gap-12 mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {/* Provider Time Savings */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileHover={{
            y: -5,
            boxShadow: "0 15px 30px -5px rgba(138, 103, 230, 0.2)",
            transition: { duration: 0.2 },
          }}
          className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-md"
        >
          <h4 className="font-title text-xl font-semibold mb-6 text-gray-800 text-center">
            Provider Time Savings
          </h4>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex items-center justify-center min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] w-full"
          >
            <TimeChart delay={0.5} />
          </motion.div>
          <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
            <p className="text-xs sm:text-sm text-gray-600 text-center">
              Physicians reported saving an average of 5-7 hours per week on
              medication management tasks when working with pharmacists under
              CPAs.
            </p>
            <p className="text-xs text-gray-500 text-center">
              Source: {timeSavingsSource}
            </p>
          </div>
        </motion.div>

        {/* Cost Savings */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          whileHover={{
            y: -5,
            boxShadow: "0 15px 30px -5px rgba(138, 103, 230, 0.2)",
            transition: { duration: 0.2 },
          }}
          className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-md"
        >
          <h4 className="font-title text-xl font-semibold mb-6 text-gray-800 text-center">
            Cost Savings
          </h4>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex items-center justify-center min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] w-full"
          >
            <CostSavingsChart delay={0.5} />
          </motion.div>
          <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
            <p className="text-xs sm:text-sm text-gray-600 text-center">
              Per-patient annual cost savings increased over time, reaching an
              average of $4,300 by the third year of CPA implementation.
            </p>
            <p className="text-xs text-gray-500 text-center">
              Source: {costSavingsSource}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Patient Satisfaction Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mt-6 sm:mt-4">
        {/* Patient Satisfaction Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          whileHover={{
            y: -5,
            boxShadow: "0 15px 30px -5px rgba(138, 103, 230, 0.2)",
            transition: { duration: 0.2 },
          }}
          className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-md"
        >
          <h4 className="font-title text-xl font-semibold mb-6 text-gray-800 text-center">
            Patient Satisfaction
          </h4>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex items-center justify-center min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] w-full"
          >
            <SatisfactionChart delay={0.5} />
          </motion.div>
          <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
            <p className="text-xs sm:text-sm text-gray-600 text-center">
              92% of patients report high satisfaction with pharmacist-managed
              care.
            </p>
            <p className="text-xs text-gray-500 text-center">
              Source: {satisfactionSource}
            </p>
          </div>
        </motion.div>

        {/* Patient Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          whileHover={{
            y: -5,
            boxShadow: "0 15px 30px -5px rgba(138, 103, 230, 0.2)",
            transition: { duration: 0.2 },
          }}
          className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-md"
        >
          <h4 className="font-title text-xl font-semibold mb-6 text-gray-800 text-center">
            Patient Outcomes
          </h4>
          <div className="flex flex-col items-center justify-center min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] w-full space-y-3 sm:space-y-4 lg:space-y-6">
            <div className="w-full max-w-md bg-gray-50 rounded-lg p-3 sm:p-4 lg:p-6 shadow-sm">
              <h5 className="font-semibold text-lg text-primary mb-3 text-center">
                Medication Adherence
              </h5>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Before CPA</span>
                <span className="text-sm font-semibold">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-gray-400 h-2.5 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
              <div className="flex items-center justify-between mt-4 mb-2">
                <span className="text-sm text-gray-600">After CPA</span>
                <span className="text-sm font-semibold">89%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full"
                  style={{ width: "89%" }}
                ></div>
              </div>
            </div>
            <div className="w-full max-w-md bg-gray-50 rounded-lg p-3 sm:p-4 lg:p-6 shadow-sm">
              <h5 className="font-semibold text-lg text-primary mb-3 text-center">
                Clinical Outcomes
              </h5>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-primary mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-sm">
                    28% reduction in A1C levels in diabetic patients
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-primary mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-sm">
                    32% fewer emergency department visits
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-primary mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-sm">
                    41% improvement in medication-related quality measures
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
            <p className="text-xs text-gray-500 text-center">
              Source: American Journal of Health-System Pharmacy, 2023
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChartsSection;
