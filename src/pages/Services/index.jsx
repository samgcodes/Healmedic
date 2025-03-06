import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  pharmacyServices,
  clinicalServices,
  wellnessServices,
  servicesPageData,
} from "./data";
import ServiceCategoryCard from "./components/ServiceCategoryCard";
import ServiceCategorySection from "./components/ServiceCategorySection";
import DeliveryChecker from "./components/DeliveryChecker";
import {
  FadeIn,
  AnimatedButton,
} from "../../components/utils/AnimationComponents";

/**
 * Services Page Component
 * Displays comprehensive information about all services offered
 */
const Services = () => {
  // All service categories
  const serviceCategories = [
    pharmacyServices,
    clinicalServices,
    wellnessServices,
  ];

  // State to track which category is active
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="bg-gradient-to-br from-primary to-[#7c5ae0]">
      {/* Hero Section */}
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="body-large"
          >
            Comprehensive Healthcare Solutions
          </motion.p>
        </div>

        {/* Straight edge instead of wavy */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#FDF8EC]"></div>
      </motion.section>

      {/* Content Section */}
      <section className="bg-[#FDF8EC] py-16">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="heading-3 text-primary mb-6">
              {servicesPageData.headline}
            </h2>
            <p className="body-regular text-gray-700 max-w-3xl mx-auto">
              {servicesPageData.subheadline}
            </p>
          </FadeIn>

          {/* Service Categories */}
          <div className="mb-12">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-6">
              {serviceCategories.map((category, index) => (
                <ServiceCategoryCard
                  key={category.title}
                  category={category}
                  isActive={activeCategory === index}
                  onClick={() => setActiveCategory(index)}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Service Category Sections */}
          {serviceCategories.map((category, index) => (
            <ServiceCategorySection
              key={category.title}
              category={category}
              isVisible={activeCategory === index}
            />
          ))}

          {/* Call to Action */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-[#8a67e6] to-[#9a77f6] rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Decorative elements */}
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full"
                style={{ top: "-2rem", right: "-2rem" }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full"
                style={{ bottom: "-1rem", left: "-1rem" }}
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
              />

              <div className="relative z-10 text-center">
                <motion.h2
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    yoyo: Infinity,
                    repeatDelay: 5,
                  }}
                  className="heading-2 text-white mb-6 font-bold tracking-wide"
                >
                  Ready to Experience Our Services?
                </motion.h2>
                <p className="body-regular text-white text-opacity-90 max-w-2xl mx-auto mb-8">
                  Whether you need prescription services, clinical
                  consultations, or wellness solutions, our team is here to
                  support your health journey. Contact us today to learn more or
                  schedule an appointment.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/contact">
                    <AnimatedButton type="scale" className="btn-secondary">
                      Contact Us
                    </AnimatedButton>
                  </Link>
                  <Link to="/about-us">
                    <AnimatedButton
                      type="scale"
                      className="btn-outline text-white"
                    >
                      Learn About Our Team
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Checker */}
          <div className="mt-16">
            <DeliveryChecker />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
