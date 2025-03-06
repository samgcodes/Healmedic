import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { welcomeData } from "../../constants/welcomeData";
import { FadeIn, AnimatedButton } from "../utils/AnimationComponents";

/**
 * Welcome Section Component
 *
 * Displays the welcome message and introduction for the homepage
 */
const WelcomeSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn className="welcome-content">
            <h2 className="heading-2 text-primary mb-6 font-title">
              {welcomeData.headline}
            </h2>
            <p className="body-large text-gray-700 mb-8">
              {welcomeData.subtext}
            </p>
            <Link to={welcomeData.ctaButton.link}>
              <AnimatedButton type="pulse" className="btn-primary">
                {welcomeData.ctaButton.text}
              </AnimatedButton>
            </Link>
          </FadeIn>

          <FadeIn
            className="welcome-illustration flex justify-center"
            delay={0.3}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div className="bg-[#f8f4ff] rounded-full w-96 h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f0e8ff] to-[#e0d4ff] opacity-50"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <img
                    src="/assets/pharmacist1.jpeg"
                    alt="Professional pharmacist"
                    className="w-80 h-80 object-cover rounded-full shadow-lg"
                  />
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
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
