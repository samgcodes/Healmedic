import React from "react";
import { motion } from "framer-motion";

const AdvancedPracticePharmacist: React.FC = () => {
  const capabilities = [
    {
      title: "Medication Management",
      description:
        "Perform comprehensive medication management and adjust medications within the scope of a collaborative practice agreement.",
      icon: "💊",
    },
    {
      title: "Patient Assessment",
      description:
        "Conduct physical assessments, order and interpret laboratory tests to monitor and manage drug therapies.",
      icon: "🔬",
    },
    {
      title: "Disease Management",
      description:
        "Independently manage chronic diseases like diabetes, hypertension, and dyslipidemia through evidence-based protocols.",
      icon: "📊",
    },
    {
      title: "Immunizations",
      description:
        "Administer vaccines and provide comprehensive immunization services beyond standard pharmacy practice.",
      icon: "💉",
    },
    {
      title: "Health Education",
      description:
        "Deliver advanced patient education and counseling for complex medication regimens and health conditions.",
      icon: "📚",
    },
    {
      title: "Clinical Consultation",
      description:
        "Provide expert clinical consultation to healthcare providers on complex pharmacotherapy issues.",
      icon: "👨‍⚕️",
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
              Advanced Practice Pharmacist
            </h2>
            <p className="font-body text-lg text-gray-600 mb-6">
              Our pharmacists hold Advanced Practice Pharmacist (APh) licensure,
              which represents the highest level of clinical pharmacy practice.
              This advanced credential enables our pharmacists to provide
              enhanced clinical services and work more autonomously within
              collaborative practice agreements.
            </p>
          </div>
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
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="text-sm text-gray-500 absolute bottom-4">
                Image: Advanced Practice Pharmacist
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* APh Certification Requirements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-xl p-8 shadow-lg"
      >
        <h3 className="font-title text-2xl font-semibold mb-6 text-gray-800">
          Advanced Practice Certification
        </h3>
        <p className="font-body text-lg text-gray-600 mb-8 max-w-3xl">
          Advanced Practice Pharmacist (APh) is a specialized credential that
          requires rigorous training and experience beyond standard pharmacy
          licensure. To achieve this designation, pharmacists must meet the
          following requirements:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="bg-white rounded-lg p-6 shadow-md border-l-4 border-primary h-full"
          >
            <div className="text-4xl mb-4">🎓</div>
            <h4 className="font-title text-xl font-semibold mb-3 text-gray-800">
              Advanced Education
            </h4>
            <p className="font-body text-gray-600">
              Completion of board-certified residencies, fellowships, or
              certification programs in specialized areas of pharmacy practice.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="bg-white rounded-lg p-6 shadow-md border-l-4 border-primary h-full"
          >
            <div className="text-4xl mb-4">⏱️</div>
            <h4 className="font-title text-xl font-semibold mb-3 text-gray-800">
              Clinical Experience
            </h4>
            <p className="font-body text-gray-600">
              Extensive clinical experience in collaborative practice settings,
              including at least one year of experience providing clinical
              services to patients.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Clinical Capabilities (Legal Authority) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white rounded-xl p-8 shadow-lg"
      >
        <h3 className="font-title text-2xl font-semibold mb-6 text-gray-800">
          Enhanced Clinical Capabilities
        </h3>
        <p className="font-body text-lg text-gray-600 mb-6 max-w-3xl">
          Advanced Practice Pharmacists are legally authorized to provide
          expanded clinical services:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-primary">
            <h4 className="font-title text-xl font-semibold mb-4 text-primary">
              Patient Care Services
            </h4>
            <ul className="space-y-3">
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <span className="text-primary mr-2 mt-1 font-bold">✓</span>
                <span className="font-body text-gray-700">
                  Perform comprehensive patient assessments
                </span>
              </motion.li>
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <span className="text-primary mr-2 mt-1 font-bold">✓</span>
                <span className="font-body text-gray-700">
                  Order and interpret drug therapy-related tests
                </span>
              </motion.li>
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <span className="text-primary mr-2 mt-1 font-bold">✓</span>
                <span className="font-body text-gray-700">
                  Refer patients to other healthcare providers
                </span>
              </motion.li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-primary">
            <h4 className="font-title text-xl font-semibold mb-4 text-primary">
              Medication Management
            </h4>
            <ul className="space-y-3">
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <span className="text-primary mr-2 mt-1 font-bold">✓</span>
                <span className="font-body text-gray-700">
                  Initiate, adjust, and discontinue drug therapy pursuant to a
                  collaborative practice agreement
                </span>
              </motion.li>
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <span className="text-primary mr-2 mt-1 font-bold">✓</span>
                <span className="font-body text-gray-700">
                  Participate in the evaluation and management of diseases and
                  health conditions in collaboration with other healthcare
                  providers
                </span>
              </motion.li>
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <span className="text-primary mr-2 mt-1 font-bold">✓</span>
                <span className="font-body text-gray-700">
                  Develop and implement medication therapy management plans
                </span>
              </motion.li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* APh Impact Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gradient-to-r from-primary/10 to-purple-100 rounded-xl p-8 shadow-md"
      >
        <h3 className="font-title text-2xl font-semibold mb-6 text-center text-gray-800">
          Impact of Advanced Practice Pharmacists
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <motion.div
            className="bg-white rounded-xl p-6 shadow-md text-center"
            whileHover={{
              y: -5,
              boxShadow: "0 12px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="text-5xl font-bold text-primary mb-2"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              92%
            </motion.div>
            <div className="font-title text-lg font-semibold text-gray-800 mb-2">
              Patient Satisfaction
            </div>
            <p className="text-sm text-gray-600">
              Patients report high satisfaction rates with APh-managed care
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 shadow-md text-center"
            whileHover={{
              y: -5,
              boxShadow: "0 12px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="text-5xl font-bold text-primary mb-2"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              40%
            </motion.div>
            <div className="font-title text-lg font-semibold text-gray-800 mb-2">
              Reduced Physician Workload
            </div>
            <p className="text-sm text-gray-600">
              Decrease in medication-related physician visits
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 shadow-md text-center"
            whileHover={{
              y: -5,
              boxShadow: "0 12px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="text-5xl font-bold text-primary mb-2"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              45%
            </motion.div>
            <div className="font-title text-lg font-semibold text-gray-800 mb-2">
              Better Medication Adherence
            </div>
            <p className="text-sm text-gray-600">
              Improvement in medication adherence rates
            </p>
          </motion.div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="font-body text-center text-gray-600 italic">
            "Advanced Practice Pharmacists represent a significant evolution in
            pharmacy practice, enabling pharmacists to practice at the top of
            their license and serve as integral members of the healthcare team.
            Their expanded scope allows for more comprehensive patient care and
            better utilization of pharmacists' clinical expertise."
          </p>
          <p className="font-body text-center text-gray-500 mt-4">
            — American College of Clinical Pharmacy
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdvancedPracticePharmacist;
