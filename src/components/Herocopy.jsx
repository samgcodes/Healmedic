import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const phrases = [
    "reimagined",
    "redefined",
    "revolutionized",
    "personalized",
    "simplified",
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative bg-gradient-to-br from-primary to-[#7c5ae0] text-white overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-screen pt-20 md:pt-0">
        {/* Text content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full md:w-2/3 p-6 md:p-12 lg:p-12 lg:ml-20 flex items-center justify-center md:justify-start z-10"
        >
          <div className="text-center  md:text-left">
            <motion.h1
              className="font-title text-6xl sm:text-5xl md:text-5xl lg:text-7xl font-extrabold  mb-8 leading-tight"
              variants={childVariants}
            >
              Pharmacy{" "}
              <span className="inline-block w-full relative overflow-hidden h-20 sm:h-24">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentPhrase}
                    className="absolute mt-2 left-0 right-0"
                    initial={{ y: 40, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -40, opacity: 0, rotateX: 90 }}
                    transition={{
                      y: { type: "spring", stiffness: 300, damping: 20 },
                      opacity: { duration: 0.2 },
                      rotateX: { duration: 0.5 },
                    }}
                  >
                    {phrases[currentPhrase]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>
            <motion.p
              className="font-body text-lg sm:text-xl md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto md:mx-0"
              variants={childVariants}
            >
              Discover a new era of personalized care at HealMedic Pharmacy.
              We're not just filling prescriptions; we're revolutionizing your
              health journey.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
              variants={childVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/transfer"
                  className="font-body bg-white text-primary hover:bg-opacity-90 px-8 py-3 rounded-full font-semibold text-lg transition duration-300 ease-in-out inline-block w-full sm:w-auto"
                >
                  Transfer
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/contact"
                  className="font-body bg-transparent border-2 border-white hover:bg-white hover:text-primary px-8 py-3 rounded-full font-semibold text-lg transition duration-300 ease-in-out inline-block w-full sm:w-auto"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-2/3 flex items-center justify-center mt-8 md:mt-0 p-4 md:p-12"
        >
          <img
            src="/src/assets/heroimg.png"
            alt="Modern Pharmacy"
            className="max-w-full max-h-[60vh] md:max-h-[80vh] object-contain rounded-lg "
          />
        </motion.div>
      </div>

      {/* Decorative curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
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
    </div>
  );
};

export default Hero;
