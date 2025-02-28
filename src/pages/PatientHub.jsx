import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const PatientHub = () => {
  const [activeTab, setActiveTab] = useState("disease");
  const [activeSubTab, setActiveSubTab] = useState(0);

  const educationCategories = [
    {
      id: "disease",
      title: "Disease Information",
      icon: "🏥",
      topics: [
        {
          title: "Diabetes Management",
          content:
            "Essential information about managing diabetes and blood sugar levels.",
          icon: "🩺",
        },
        {
          title: "Heart Health",
          content:
            "Guidelines for maintaining cardiovascular health and prevention.",
          icon: "❤️",
        },
        {
          title: "Respiratory Conditions",
          content:
            "Information about asthma, COPD, and other respiratory conditions.",
          icon: "🫁",
        },
        {
          title: "Mental Health",
          content: "Resources for mental health awareness and support.",
          icon: "🧠",
        },
      ],
    },
    {
      id: "wellness",
      title: "Wellness & Prevention",
      icon: "🌿",
      topics: [
        {
          title: "Nutrition Guidelines",
          content: "Healthy eating tips and dietary recommendations.",
          icon: "🥗",
        },
        {
          title: "Exercise Tips",
          content: "Safe and effective exercise recommendations.",
          icon: "🏃‍♂️",
        },
        {
          title: "Preventive Care",
          content: "Important screenings and preventive measures.",
          icon: "🔍",
        },
        {
          title: "Vaccination Schedules",
          content: "Recommended vaccination schedules and information.",
          icon: "💉",
        },
      ],
    },
    {
      id: "pharmacy",
      title: "Pharmacy Services",
      icon: "🏪",
      topics: [
        {
          title: "Prescription Refills",
          content: "How to request and manage your prescription refills.",
          icon: "📋",
        },
        {
          title: "Medication Reviews",
          content: "Understanding our medication review services.",
          icon: "📊",
        },
        {
          title: "Health Screenings",
          content: "Available health screening services.",
          icon: "🔬",
        },
        {
          title: "Immunizations",
          content: "Vaccine services and schedules.",
          icon: "💉",
        },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-br from-primary to-[#7c5ae0] h-64 md:h-80 flex items-center justify-center text-white overflow-hidden"
      >
        <div className="text-center z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Patient Hub
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="font-body text-lg md:text-xl lg:text-2xl"
          >
            Learn
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

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Welcome Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="font-title text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-gray-800">
                Health Education Resources
              </h2>
              <p className="font-body text-base sm:text-lg text-gray-600">
                Access comprehensive health information and educational
                resources curated by our expert pharmacists to support your
                wellness journey.
              </p>
            </motion.div>

            <div className="flex flex-col md:flex-row">
              {/* Vertical Tabs */}
              <div className="md:w-72 flex-shrink-0 md:pr-8 mb-8 md:mb-0">
                <div className="border-r border-gray-200">
                  {educationCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveTab(category.id);
                        setActiveSubTab(0);
                      }}
                      className={`w-full text-left py-4 pr-8 flex items-center space-x-4 border-l-2 transition-all duration-200
                        ${
                          activeTab === category.id
                            ? "border-primary text-primary"
                            : "border-transparent text-gray-600 hover:border-gray-200"
                        }`}
                    >
                      <span className="text-xl opacity-80">
                        {category.icon}
                      </span>
                      <span className="font-title text-base">
                        {category.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 min-w-0">
                <AnimatePresence mode="wait">
                  {educationCategories.map(
                    (category) =>
                      category.id === activeTab && (
                        <motion.div
                          key={category.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-8"
                        >
                          {/* Horizontal Tabs */}
                          <div className="border-b border-gray-200">
                            <div className="flex space-x-12 -mb-px overflow-x-auto scrollbar-hide">
                              {category.topics.map((topic, idx) => (
                                <button
                                  key={topic.title}
                                  onClick={() => setActiveSubTab(idx)}
                                  className={`py-4 relative whitespace-nowrap transition-colors duration-200
                                    ${
                                      activeSubTab === idx
                                        ? "text-primary border-b-2 border-primary"
                                        : "text-gray-600 hover:text-gray-900"
                                    }`}
                                >
                                  {topic.title}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Content */}
                          <AnimatePresence mode="wait">
                            {category.topics.map(
                              (topic, idx) =>
                                activeSubTab === idx && (
                                  <motion.div
                                    key={topic.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="space-y-6 px-1"
                                  >
                                    <div className="flex items-center space-x-4">
                                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50">
                                        <span className="text-2xl">
                                          {topic.icon}
                                        </span>
                                      </div>
                                      <h3 className="font-title text-xl text-gray-900">
                                        {topic.title}
                                      </h3>
                                    </div>
                                    <div className="pl-16">
                                      <p className="text-gray-600 leading-relaxed">
                                        {topic.content}
                                      </p>
                                    </div>
                                  </motion.div>
                                )
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Quick Access Tools */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="max-w-4xl mx-auto mt-24"
            >
              <h2 className="font-title text-2xl sm:text-3xl font-semibold mb-8 text-gray-800 text-center">
                Quick Access Tools
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  to="/contact"
                  className="group p-6 rounded-xl border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-2xl sm:text-3xl mb-4 text-primary/80 group-hover:scale-110 transition-transform duration-300">
                    📞
                  </div>
                  <h3 className="font-title text-lg sm:text-xl font-semibold mb-2 text-gray-900">
                    Contact a Pharmacist
                  </h3>
                  <p className="font-body text-sm sm:text-base text-gray-600">
                    Get expert advice from our healthcare team
                  </p>
                </Link>
                <div className="group p-6 rounded-xl border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <div className="text-2xl sm:text-3xl mb-4 text-primary/80 group-hover:scale-110 transition-transform duration-300">
                    📱
                  </div>
                  <h3 className="font-title text-lg sm:text-xl font-semibold mb-2 text-gray-900">
                    Medication Reminders
                  </h3>
                  <p className="font-body text-sm sm:text-base text-gray-600">
                    Set up personalized medication alerts
                  </p>
                </div>
                <div className="group p-6 rounded-xl border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <div className="text-2xl sm:text-3xl mb-4 text-primary/80 group-hover:scale-110 transition-transform duration-300">
                    📋
                  </div>
                  <h3 className="font-title text-lg sm:text-xl font-semibold mb-2 text-gray-900">
                    Health Resources
                  </h3>
                  <p className="font-body text-sm sm:text-base text-gray-600">
                    Access our library of health guides
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientHub;
