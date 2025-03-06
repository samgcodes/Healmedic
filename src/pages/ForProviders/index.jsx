import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FadeIn,
  StaggeredList,
} from "../../components/utils/AnimationComponents";
import {
  forProvidersPageData,
  prescriptionMethodsData,
  providerBenefitsData,
  collaborativePracticeData,
} from "./data";

const ForProviders = () => {
  return (
    <div className="bg-gradient-to-br from-primary to-[#7c5ae0]">
      {/* Hero Section - Styled like AboutUs and Contact pages */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative pt-32 pb-16 md:pt-40 md:pb-20 flex items-center justify-center text-white"
      >
        <div className="container-narrow text-center z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="heading-2 mb-4"
          >
            Healthcare Providers
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="body-large"
          >
            Partner with us for better patient care
          </motion.p>
        </div>

        {/* Straight edge instead of wavy */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#FDF8EC]"></div>
      </motion.section>

      {/* Content Section */}
      <section className="bg-[#FDF8EC] py-16">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <FadeIn className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 text-left">
                  <h2 className="font-title text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
                    {forProvidersPageData.headline}
                  </h2>
                  <p className="font-body text-lg md:text-xl text-gray-600 mb-6">
                    {forProvidersPageData.subheadline}
                  </p>
                </div>

                {/* Image placeholder for Provider Collaboration */}
                <div className="md:w-1/2 w-full">
                  <div className="bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center shadow-md aspect-square md:aspect-video relative">
                    {/* This will be replaced with an actual image from assets folder */}
                    {/* Example: <img src="/assets/provider-collaboration.jpg" alt="Healthcare providers collaborating" className="w-full h-full object-cover" /> */}
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
                      Image: Healthcare providers collaborating with pharmacists
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Prescription Sending Section */}
          <FadeIn className="max-w-6xl mx-auto mb-20">
            <h2 className="font-title text-3xl md:text-4xl font-semibold mb-8 text-gray-800 text-center">
              {prescriptionMethodsData.title}
            </h2>
            <p className="font-body text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10">
              {prescriptionMethodsData.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {prescriptionMethodsData.methods.map((method) => (
                <motion.div
                  key={method.title}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary h-full"
                >
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="font-title text-xl font-semibold mb-3 text-gray-800">
                    {method.title}
                  </h3>
                  <p className="font-body text-gray-600 mb-4">
                    {method.description}
                  </p>
                  <ul className="space-y-2">
                    {method.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">✓</span>
                        <span className="font-body text-gray-700">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* EMR Integration - Improved design */}
          <FadeIn className="max-w-6xl mx-auto mb-20">
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center shadow-md">
                    {/* This will be replaced with an actual image from assets folder */}
                    {/* Example: <img src="/assets/emr-system.jpg" alt="Healthcare provider using EMR system" className="w-full h-full object-cover" /> */}
                    <div className="relative">
                      <svg
                        className="w-24 h-24 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <p className="text-sm text-gray-500 absolute bottom-4 left-0 right-0 text-center">
                        Image: Healthcare provider using EMR system
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-title text-2xl font-semibold mb-6 text-gray-800">
                    {prescriptionMethodsData.emrIntegration.title}
                  </h3>
                  <p className="font-body text-lg text-gray-600 mb-8">
                    {prescriptionMethodsData.emrIntegration.description}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {prescriptionMethodsData.emrIntegration.supportedSystems.map(
                      (system, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-[#8a67e6] to-[#9a77f6] rounded-lg p-4 text-center text-white shadow-md"
                        >
                          <span className="font-body">{system}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Provider Benefits Section */}
          <FadeIn className="max-w-6xl mx-auto mb-20">
            <h2 className="font-title text-3xl md:text-4xl font-semibold mb-8 text-gray-800 text-center">
              {providerBenefitsData.title}
            </h2>
            <p className="font-body text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10">
              {providerBenefitsData.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {providerBenefitsData.benefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary h-full"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="font-title text-xl font-semibold mb-3 text-gray-800">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* Provider Types */}
          <FadeIn className="max-w-6xl mx-auto mb-20">
            <h3 className="font-title text-2xl font-semibold mb-8 text-center text-gray-800">
              Benefits for Different Provider Types
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {providerBenefitsData.providerTypes.map((providerType) => (
                <motion.div
                  key={providerType.type}
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
                      {providerType.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2 mt-1">✓</span>
                          <span className="font-body text-gray-700">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* Collaborative Practice Agreements */}
          <FadeIn className="max-w-6xl mx-auto mb-20">
            <h2 className="font-title text-3xl md:text-4xl font-semibold mb-8 text-gray-800 text-center">
              {collaborativePracticeData.title}
            </h2>
            <p className="font-body text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10">
              {collaborativePracticeData.description}
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {collaborativePracticeData.benefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                  className="bg-white rounded-lg p-6 shadow-md border-l-4 border-primary h-full"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="font-title text-xl font-semibold mb-3 text-gray-800">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CPA Process */}
            <div className="bg-gradient-to-r from-[#8a67e6] to-[#9a77f6] rounded-xl overflow-hidden shadow-lg mb-16">
              <div className="p-8 text-white">
                <h3 className="font-title text-2xl font-semibold mb-6 text-center">
                  How the CPA Process Works
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {collaborativePracticeData.cpaProcess.map((step) => (
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
                      {step.step <
                        collaborativePracticeData.cpaProcess.length && (
                        <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-white bg-opacity-30 transform -translate-x-8"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CPA Examples */}
            <h3 className="font-title text-2xl font-semibold mb-6 text-center text-gray-800">
              Examples of Collaborative Practice
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {collaborativePracticeData.cpaExamples.map((example) => (
                <motion.div
                  key={example.title}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary h-full"
                >
                  <h4 className="font-title text-xl font-semibold mb-3 text-primary">
                    {example.title}
                  </h4>
                  <p className="font-body text-gray-600">
                    {example.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Image placeholder for CPA */}
            <div className="max-w-3xl mx-auto mb-16">
              <div className="bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center shadow-md aspect-video relative">
                {/* This will be replaced with an actual image from assets folder */}
                {/* Example: <img src="/assets/collaboration.jpg" alt="Pharmacist and physician collaborating" className="w-full h-full object-cover" /> */}
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
                  Image: Pharmacist and physician collaborating on patient care
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Forms & Documents Section */}
          <FadeIn className="max-w-6xl mx-auto">
            <h2 className="font-title text-3xl md:text-4xl font-semibold mb-8 text-gray-800 text-center">
              Provider Resources
            </h2>
            <p className="font-body text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Access a variety of resources designed to help you and your
              patients get the most out of our pharmacy services.
            </p>

            <h3 className="font-title text-2xl font-semibold mb-6 text-gray-800">
              Forms & Documents
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
              >
                <div className="text-4xl mb-4">📄</div>
                <h4 className="font-title text-xl font-semibold mb-3 text-gray-800">
                  Referral Form
                </h4>
                <p className="font-body text-gray-600 mb-4">
                  Standard form for referring patients to our pharmacy services
                </p>
                <div className="mt-auto pt-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-primary text-white font-body px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300"
                  >
                    Download
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
              >
                <div className="text-4xl mb-4">📝</div>
                <h4 className="font-title text-xl font-semibold mb-3 text-gray-800">
                  CPA Template
                </h4>
                <p className="font-body text-gray-600 mb-4">
                  Sample Collaborative Practice Agreement template
                </p>
                <div className="mt-auto pt-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-primary text-white font-body px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300"
                  >
                    Download
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
              >
                <div className="text-4xl mb-4">🔒</div>
                <h4 className="font-title text-xl font-semibold mb-3 text-gray-800">
                  Patient Authorization Form
                </h4>
                <p className="font-body text-gray-600 mb-4">
                  HIPAA-compliant authorization for information sharing
                </p>
                <div className="mt-auto pt-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-primary text-white font-body px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300"
                  >
                    Download
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
              >
                <div className="text-4xl mb-4">📋</div>
                <h4 className="font-title text-xl font-semibold mb-3 text-gray-800">
                  Medication Review Request
                </h4>
                <p className="font-body text-gray-600 mb-4">
                  Form to request comprehensive medication review for patients
                </p>
                <div className="mt-auto pt-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-primary text-white font-body px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300"
                  >
                    Download
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mobile Navigation removed as requested */}
    </div>
  );
};

export default ForProviders;
