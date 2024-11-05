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

  const bounceAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="relative bg-[#9a77f6] text-white overflow-hidden">
      {/* Main content container */}
      <div className="max-w-[1400px] mx-auto h-full px-4 sm:px-6 lg:px-8 pt-28">
        <div className="flex flex-col-reverse md:flex-row min-h-[calc(100vh-7rem)] items-center justify-center">
          {/* Text content */}
          <div className="w-full md:w-1/2 z-10 space-y-6 mt-8 md:mt-0 pl-4 md:pl-8 lg:pl-12">
            <div className="text-left max-w-2xl">
              <h1 className="font-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                Pharmacy{" "}
                <span className="inline-block w-full relative overflow-hidden h-20 sm:h-24 md:h-28">
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
              </h1>
              <p className="font-body text-lg md:text-xl lg:text-2xl mt-6 mb-10 opacity-90 max-w-xl leading-relaxed">
                Experience pharmacy care that puts you first. Transfer your
                prescriptions today.
              </p>
              <div className="inline-block">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/transfer"
                    className="font-body bg-white text-[#9a77f6] hover:bg-opacity-95 px-10 sm:px-14 py-5 rounded-full font-bold text-xl inline-block shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Transfer Now
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Image with bounce animation */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-12">
            <motion.img
              animate={bounceAnimation}
              src="/public/assets/heroimg.png"
              alt="Modern Pharmacy"
              className="max-w-[240px] md:max-w-[320px] lg:max-w-[400px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Slanted divider */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-transparent transform -skew-y-3 origin-left translate-y-16 -mb-1"></div>
    </div>
  );
};

export default Hero;
