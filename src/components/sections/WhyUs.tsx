import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  JOURNEY_STEPS,
  HEALTH_METRICS,
  EXPERIENCE_COMPARISON,
  TESTIMONIALS,
  WELLNESS_PROGRAMS,
  PET_MEDICATION_SERVICES,
} from "../../constants/whyUsData";
import { JourneyStep, Metric, Testimonial } from "../../types";

/**
 * Animation variants
 */
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

/**
 * Section Header Component
 */
const SectionHeader: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      className="section-header bg-gradient-to-r from-[#8a67e6] to-[#9a77f6] text-white rounded-3xl p-fluid-8 mb-16"
    >
      <h2 className="font-title text-fluid-3xl sm:text-fluid-4xl font-bold text-center mb-4">
        Why Choose HealMedic Pharmacy?
      </h2>
      <p className="font-body text-fluid-lg text-center max-w-3xl mx-auto">
        Experience pharmacy care reimagined through innovation, expertise, and
        compassion.
      </p>
      <div className="flex justify-center mt-8">
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="relative w-20 h-20"
        >
          {/* Pill capsule animation - simplified with emoji for now */}
          <div className="text-5xl">💊</div>
        </motion.div>
      </div>
    </motion.div>
  );
};

/**
 * Prescription Journey Map Component
 */
const PrescriptionJourneyMap: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="journey-map mb-24"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
    >
      <h3 className="heading-3 text-center text-primary mb-12 font-title text-fluid-2xl sm:text-fluid-3xl font-bold">
        Your Prescription Journey
      </h3>

      <div className="relative">
        {/* SVG Path connecting steps - simplified version */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#8a67e6] to-[#9a77f6] transform -translate-y-1/2 z-0">
          <motion.div
            className="h-full bg-white"
            initial={{ width: "100%" }}
            animate={inView ? { width: "0%" } : { width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>

        <div className="journey-steps grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-2 lg:gap-4">
          {JOURNEY_STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              className="journey-step bg-white rounded-xl shadow-lg p-4 md:p-3 lg:p-4 relative z-10"
              custom={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: i * 0.2,
                    duration: 0.5,
                    ease: "easeOut",
                  },
                }),
              }}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="step-icon bg-primary bg-opacity-10 w-12 h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-xl md:text-lg lg:text-xl text-primary mb-3 mx-auto">
                {step.icon}
              </div>
              <h4 className="step-title text-lg md:text-base lg:text-lg font-bold text-primary text-center mb-2">
                {step.title}
              </h4>
              <p className="step-description text-gray-600 text-center text-sm md:text-xs lg:text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

/**
 * Health Impact Dashboard Component
 */
const HealthImpactDashboard: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="impact-dashboard bg-white rounded-3xl shadow-xl p-fluid-8 mb-24"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
    >
      <h3 className="heading-3 text-center text-primary mb-12 font-title text-fluid-2xl sm:text-fluid-3xl font-bold">
        Clinical Services with Proven Health Impact
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {HEALTH_METRICS.map((metric, index) => (
          <motion.div
            key={metric.title}
            className="metric-card text-center bg-primary bg-opacity-5 rounded-xl p-6"
            custom={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: (i) => ({
                opacity: 1,
                y: 0,
                transition: {
                  delay: i * 0.2,
                  duration: 0.5,
                  ease: "easeOut",
                },
              }),
            }}
          >
            <div className="metric-icon text-4xl mb-4">{metric.icon}</div>
            <div className="counter-animation">
              <span className="text-4xl font-bold text-primary">
                {metric.value}
              </span>
            </div>
            <h4 className="metric-title text-xl font-bold mt-2 mb-2">
              {metric.title}
            </h4>
            <p className="text-gray-600">{metric.description}</p>
            {metric.trend && (
              <div
                className={`mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm ${
                  metric.trend.isPositive
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                <span className="mr-1">
                  {metric.trend.isPositive ? "↑" : "↓"}
                </span>
                {metric.trend.value}%{" "}
                {metric.trend.isPositive ? "increase" : "decrease"}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-700 max-w-3xl mx-auto">
          Our clinical services are designed to improve patient outcomes through
          evidence-based practices, personalized care plans, and continuous
          monitoring. We work closely with healthcare providers to ensure
          comprehensive care for all our patients.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-primary text-white hover:bg-opacity-90 px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1"
        >
          Learn More About Our Clinical Services
        </motion.button>
      </div>
    </motion.div>
  );
};

/**
 * Personalized Care Showcase Component
 */
const PersonalizedCareShowcase: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <motion.div
      ref={ref}
      className="care-showcase mb-24"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
    >
      <h3 className="heading-3 text-center text-primary mb-12 font-title text-fluid-2xl sm:text-fluid-3xl font-bold">
        Personalized Care Experience
      </h3>

      <div className="experience-comparison">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traditional Experience */}
          <motion.div
            className="experience-card bg-gray-100 rounded-2xl p-6 relative"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.2 },
              },
            }}
          >
            <div className="experience-label bg-gray-500 text-white px-4 py-1 rounded-full absolute -top-3 left-6">
              {EXPERIENCE_COMPARISON.traditional.title}
            </div>
            <ul className="experience-list mt-6">
              {EXPERIENCE_COMPARISON.traditional.points.map((point, index) => (
                <li key={index} className="flex items-start mb-4">
                  <span className="icon text-gray-500 mr-3">{point.icon}</span>
                  <span className="text-gray-700">{point.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* HealMedic Experience */}
          <motion.div
            className="experience-card bg-primary bg-opacity-10 rounded-2xl p-6 relative"
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.4 },
              },
            }}
          >
            <div className="experience-label bg-primary text-white px-4 py-1 rounded-full absolute -top-3 left-6">
              {EXPERIENCE_COMPARISON.healMedic.title}
            </div>
            <ul className="experience-list mt-6">
              {EXPERIENCE_COMPARISON.healMedic.points.map((point, index) => (
                <li key={index} className="flex items-start mb-4">
                  <span className="icon text-primary mr-3">{point.icon}</span>
                  <span>{point.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Testimonial Carousel */}
      <div className="testimonial-carousel mt-16 bg-white rounded-2xl shadow-lg p-8">
        <h4 className="text-center text-2xl font-bold mb-8">
          What Our Patients Say
        </h4>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center px-8 md:px-16"
            >
              <div className="mb-4">
                {[...Array(TESTIMONIALS[activeTestimonial].rating)].map(
                  (_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  )
                )}
              </div>
              <p className="text-gray-700 text-lg italic mb-6">
                "{TESTIMONIALS[activeTestimonial].quote}"
              </p>
              <div className="font-bold text-primary">
                {TESTIMONIALS[activeTestimonial].name}
              </div>
              <div className="text-sm text-gray-500">
                {TESTIMONIALS[activeTestimonial].role}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full ${
                  activeTestimonial === index
                    ? "bg-primary"
                    : "bg-gray-300 hover:bg-gray-400"
                } transition-colors duration-200`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * Wellness Programs Component
 */
const WellnessPrograms: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState(0);

  return (
    <motion.div
      ref={ref}
      className="wellness-programs bg-gradient-to-br from-[#f8f4ff] to-[#eee6ff] rounded-3xl p-fluid-8 mb-24"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
    >
      <h3 className="heading-3 text-center text-primary mb-12 font-title text-fluid-2xl sm:text-fluid-3xl font-bold">
        Wellness Programs
      </h3>

      <div className="wellness-showcase grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="wellness-image relative">
          <div className="wellness-image-container h-[400px] bg-white rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f0e8ff] to-[#e0d4ff] opacity-50"></div>
            <div className="grid grid-cols-2 gap-4 p-8 relative z-10">
              <motion.div
                className="wellness-icon-container bg-white rounded-lg p-4 shadow-md flex flex-col items-center justify-center text-center"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="text-4xl mb-2">🥗</div>
                <div className="font-bold text-primary">Nutrition</div>
                <div className="text-xs text-gray-600 mt-1">
                  Personalized Plans
                </div>
              </motion.div>

              <motion.div
                className="wellness-icon-container bg-white rounded-lg p-4 shadow-md flex flex-col items-center justify-center text-center"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="text-4xl mb-2">🔬</div>
                <div className="font-bold text-primary">Screenings</div>
                <div className="text-xs text-gray-600 mt-1">
                  Early Detection
                </div>
              </motion.div>

              <motion.div
                className="wellness-icon-container bg-white rounded-lg p-4 shadow-md flex flex-col items-center justify-center text-center"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="text-4xl mb-2">📚</div>
                <div className="font-bold text-primary">Education</div>
                <div className="text-xs text-gray-600 mt-1">
                  Health Resources
                </div>
              </motion.div>

              <motion.div
                className="wellness-icon-container bg-white rounded-lg p-4 shadow-md flex flex-col items-center justify-center text-center"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="text-4xl mb-2">❤️</div>
                <div className="font-bold text-primary">Monitoring</div>
                <div className="text-xs text-gray-600 mt-1">
                  Ongoing Support
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="wellness-features">
          <h4 className="text-2xl font-bold mb-6">
            Comprehensive Wellness Services
          </h4>
          <p className="mb-6 text-gray-700">
            Our wellness programs go beyond medication to support your overall
            health and wellbeing through education, prevention, and personalized
            care.
          </p>

          <div className="feature-tabs">
            {/* Tab navigation */}
            <div className="tabs-nav flex mb-4 border-b border-gray-200">
              {WELLNESS_PROGRAMS.map((program, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`tab-btn py-2 px-4 font-medium transition-colors duration-200 ${
                    activeTab === index
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {program.title}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="tab-content bg-white rounded-xl p-6 shadow-md"
              >
                <div className="feature-detail">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl text-primary mr-3">
                      {WELLNESS_PROGRAMS[activeTab].icon}
                    </span>
                    <h5 className="text-xl font-bold">
                      {WELLNESS_PROGRAMS[activeTab].description}
                    </h5>
                  </div>
                  <ol className="ml-5 mt-2 list-decimal text-gray-700">
                    {WELLNESS_PROGRAMS[activeTab].details.map(
                      (detail, index) => (
                        <li key={index} className="mb-2">
                          {detail}
                        </li>
                      )
                    )}
                  </ol>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * Pet Medication Section Component
 */
const PetMedicationSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="pet-medication mb-24 bg-white rounded-3xl shadow-xl overflow-hidden"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-fluid-8">
          <h3 className="heading-3 text-primary mb-6 font-title text-fluid-2xl sm:text-fluid-3xl font-bold">
            Pet Medication Services
          </h3>
          <p className="text-gray-700 mb-8">
            We care for all members of your family, including the furry ones.
            Our specialized pet medication services ensure your pets receive the
            same level of care and attention as you do.
          </p>

          <div className="space-y-6">
            {PET_MEDICATION_SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                className="flex items-start"
                custom={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: (i) => ({
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: i * 0.1 + 0.3,
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  }),
                }}
              >
                <div className="bg-primary bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center text-xl text-primary mr-4 flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-primary text-white hover:bg-opacity-90 px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1"
          >
            Learn More About Pet Medications
          </motion.button>
        </div>

        <div className="bg-[#f8f4ff] relative min-h-[300px] md:min-h-full flex items-center justify-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-[10%] left-[20%] w-16 h-16 rounded-full border-4 border-primary"></div>
            <div className="absolute bottom-[20%] right-[15%] w-24 h-24 rounded-full border-4 border-primary"></div>
            <div className="absolute top-[60%] left-[10%] w-20 h-20 rounded-full border-4 border-primary"></div>
          </div>

          <div className="relative z-10 p-8 flex flex-col items-center">
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-8xl mb-6"
            >
              🐾
            </motion.div>
            <div className="text-center">
              <div className="font-bold text-2xl text-primary mb-2">
                Pets Are Family Too
              </div>
              <p className="text-gray-600 max-w-xs">
                Specialized care for your furry, feathered, and scaly family
                members
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * Call To Action Component
 */
const CallToAction: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="cta-container text-center mb-16"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
    >
      <h3 className="heading-3 text-primary mb-6 font-title text-fluid-2xl sm:text-fluid-3xl font-bold">
        Ready to Experience the Difference?
      </h3>
      <p className="body-large mb-8 max-w-2xl mx-auto text-gray-700 text-fluid-lg">
        Join thousands of satisfied customers who have made the switch to
        HealMedic Pharmacy.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary bg-[#9a77f6] text-white hover:bg-opacity-90 px-8 py-3 rounded-full font-bold shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1"
        >
          Transfer Prescriptions
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-outline bg-transparent border-2 border-[#9a77f6] text-[#9a77f6] hover:bg-[#9a77f6] hover:text-white px-8 py-3 rounded-full font-bold transform transition-all duration-300 hover:-translate-y-1"
        >
          Schedule Consultation
        </motion.button>
      </div>
    </motion.div>
  );
};

/**
 * Main WhyUs Component
 */
const WhyUs: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#FDF8EC]">
      <div className="max-w-7xl mx-auto px-fluid-4">
        <SectionHeader />
        <PrescriptionJourneyMap />
        <HealthImpactDashboard />
        <PersonalizedCareShowcase />
        <WellnessPrograms />
        <PetMedicationSection />
        <CallToAction />
      </div>
    </section>
  );
};

export default WhyUs;
