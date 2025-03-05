import React from "react";
import { motion } from "framer-motion";
import { ServiceCategory } from "../data";
import {
  PharmacyServicesIcon,
  ClinicalServicesIcon,
  WellnessServicesIcon,
} from "../../../components/utils/SvgIcons";

interface ServiceCategoryCardProps {
  category: ServiceCategory;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

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
 * Displays a card for a service category that can be clicked to show details
 */
const ServiceCategoryCard: React.FC<ServiceCategoryCardProps> = ({
  category,
  isActive,
  onClick,
  index,
}) => {
  // Format the title to split "Services" onto a new line
  const formatTitle = (title: string) => {
    if (title.includes("Services")) {
      const parts = title.split(" Services");
      return (
        <>
          {parts[0]}
          <br />
          Services
        </>
      );
    }
    return title;
  };

  return (
    <motion.div
      className={`service-card rounded-xl cursor-pointer transition-all duration-300 border-2 ${
        isActive
          ? "bg-primary text-white shadow-lg border-primary"
          : "bg-white text-gray-800 hover:shadow-md border-gray-200 hover:border-primary"
      } p-3 md:p-6`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.1 + 0.2 },
      }}
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col items-center text-center h-full">
        <div className="mb-2 md:mb-4">
          {/* Create a clone of the icon with the appropriate color */}
          <div className={isActive ? "text-white" : "text-primary"}>
            {React.cloneElement(
              getCategoryIcon(category.title, 36) as React.ReactElement,
              {
                color: isActive ? "#ffffff" : "#9a77f6",
                size: window.innerWidth < 768 ? 32 : 48,
              }
            )}
          </div>
        </div>
        <h3 className="text-base md:text-xl lg:text-2xl font-bold leading-tight mb-1 md:mb-2">
          {formatTitle(category.title)}
        </h3>
        <p className="text-xs md:text-sm lg:text-base hidden md:block">
          {category.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCategoryCard;
