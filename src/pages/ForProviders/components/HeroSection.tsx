import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <div className="relative">
      {/* Purple background with straight bottom edge */}
      <div className="bg-gradient-to-br from-primary to-[#7c5ae0] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-narrow text-center text-white relative z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="heading-2 mb-4"
          >
            Provider Hub
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

        {/* Straight edge divider */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#FDF8EC]"></div>
      </div>
    </div>
  );
};

export default HeroSection;
