import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ServiceCategory } from "../data";
import ServiceDetailCard from "./ServiceDetailCard";
import { SectionTitle } from "../../../components/utils/AnimationComponents";

interface ServiceCategorySectionProps {
  category: ServiceCategory;
  isVisible: boolean;
}

/**
 * Service Category Section Component
 * Displays a section for a service category with all its service details
 */
const ServiceCategorySection: React.FC<ServiceCategorySectionProps> = ({
  category,
  isVisible,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden"
        >
          <div className="py-8 md:py-12">
            <SectionTitle title={category.title} className="text-center" />
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              {category.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.services.map((service, index) => (
                <ServiceDetailCard
                  key={service.name}
                  service={service}
                  index={index}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceCategorySection;
