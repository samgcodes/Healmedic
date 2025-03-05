import React from "react";
import { motion } from "framer-motion";
import { ServiceDetail } from "../data";

interface ServiceDetailCardProps {
  service: ServiceDetail;
  index: number;
}

/**
 * Service Detail Card Component
 * Displays detailed information about a specific service
 */
const ServiceDetailCard: React.FC<ServiceDetailCardProps> = ({
  service,
  index,
}) => {
  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.1 + 0.2 },
      }}
    >
      <h3 className="font-title text-xl font-semibold mb-3 text-gray-800">
        {service.name}
      </h3>
      <p className="font-body text-gray-600 mb-4">{service.description}</p>

      {service.benefits && service.benefits.length > 0 && (
        <div>
          <h4 className="font-title text-md font-semibold mb-2 text-gray-700">
            Benefits:
          </h4>
          <ul className="space-y-1">
            {service.benefits.map((benefit, i) => (
              <motion.li
                key={i}
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: i * 0.05 + index * 0.1 + 0.3 },
                }}
              >
                <span className="text-primary mr-2 flex-shrink-0 mt-1">✓</span>
                <span className="text-sm md:text-base text-gray-600">
                  {benefit}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default ServiceDetailCard;
