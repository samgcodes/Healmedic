import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData, ServiceCategory } from "../../constants/servicesData";
import {
  FadeIn,
  AnimatedButton,
  SectionTitle,
} from "../utils/AnimationComponents";
import {
  PharmacyServicesIcon,
  ClinicalServicesIcon,
  WellnessServicesIcon,
} from "../utils/SvgIcons";

/**
 * Get the appropriate icon component based on the category title
 */
const getCategoryIcon = (title: string, size = 64) => {
  const color = "#9a77f6";

  switch (title) {
    case "Pharmacy Services":
      return <PharmacyServicesIcon size={size} color={color} />;
    case "Clinical Services":
      return <ClinicalServicesIcon size={size} color={color} />;
    case "Health & Wellness Services":
      return <WellnessServicesIcon size={size} color={color} />;
    default:
      return <div className="text-5xl">{title.charAt(0)}</div>;
  }
};

/**
 * Service Category Card Component
 */
interface ServiceCardProps {
  category: ServiceCategory;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  category,
  isActive,
  onClick,
  index,
}) => {
  return (
    <motion.div
      className={`service-card rounded-xl p-3 md:p-4 cursor-pointer transition-all duration-300 border-2 ${
        isActive
          ? "bg-primary text-white shadow-lg border-primary"
          : "bg-white text-gray-800 hover:shadow-md border-gray-200 hover:border-primary"
      }`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.1 + 0.2 },
      }}
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-2 md:mb-3">
          {/* Create a clone of the icon with the appropriate color */}
          <div className={isActive ? "text-white" : "text-primary"}>
            {React.cloneElement(
              getCategoryIcon(category.title, 32) as React.ReactElement,
              {
                color: isActive ? "#ffffff" : "#9a77f6",
              }
            )}
          </div>
        </div>
        <h3 className="text-sm md:text-lg font-bold">{category.title}</h3>
      </div>
    </motion.div>
  );
};

/**
 * Services Section Component
 *
 * Displays the comprehensive pharmacy and wellness services
 */
const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-wide">
        <FadeIn className="text-center mb-16">
          <SectionTitle title={servicesData.headline} className="text-center" />
          <p className="body-regular text-gray-700 max-w-3xl mx-auto">
            From prescription services to wellness programs, we offer a
            comprehensive range of healthcare solutions.
          </p>
        </FadeIn>

        {/* Service Categories - Horizontal scrollable on mobile */}
        <div className="mb-12 overflow-x-auto pb-4 -mx-4 px-4 md:overflow-visible md:pb-0 md:mx-0 md:px-0">
          <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 min-w-max md:min-w-0">
            {servicesData.categories.map((category, index) => (
              <ServiceCard
                key={category.title}
                category={category}
                isActive={activeCategory === index}
                onClick={() => setActiveCategory(index)}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Service Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-[#f8f4ff] rounded-2xl p-6 md:p-8 mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Mobile: Icon first, then content */}
              <div className="flex justify-center md:hidden order-first mb-6">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="relative"
                >
                  <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center shadow-lg">
                    <div className="text-primary">
                      {getCategoryIcon(
                        servicesData.categories[activeCategory].title,
                        64
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Service content */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">
                  {servicesData.categories[activeCategory].title}
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  {servicesData.categories[activeCategory].services.map(
                    (service, index) => (
                      <motion.li
                        key={service}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          transition: { delay: index * 0.1 },
                        }}
                      >
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-sm md:text-base">{service}</span>
                      </motion.li>
                    )
                  )}
                </ul>
              </div>

              {/* Desktop: Icon on the right */}
              <div className="hidden md:flex justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, 0, -2, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="relative"
                >
                  <div className="bg-white rounded-full w-64 h-64 flex items-center justify-center shadow-lg">
                    <div className="text-primary">
                      {getCategoryIcon(
                        servicesData.categories[activeCategory].title,
                        96
                      )}
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 bg-[#9a77f6] rounded-full w-12 h-12"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 1,
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 bg-[#9a77f6] rounded-full w-8 h-8"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 0.5,
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="text-center">
          <Link to={servicesData.ctaButton.link}>
            <AnimatedButton type="scale" className="btn-primary">
              {servicesData.ctaButton.text}
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
