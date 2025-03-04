import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ctaData } from "../../constants/ctaData";
import { FadeIn, AnimatedButton } from "../utils/AnimationComponents";

/**
 * Call To Action Section Component
 *
 * Displays a call to action section with buttons to engage users
 */
const CallToActionSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-wide">
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

          <div className="relative z-10">
            <FadeIn className="text-center text-white mb-8">
              <motion.h2
                className="heading-2 mb-6 font-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {ctaData.headline}
              </motion.h2>
              <motion.p
                className="body-large max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {ctaData.text}
              </motion.p>
            </FadeIn>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              {ctaData.buttons.map((button, index) => (
                <Link key={button.text} to={button.link}>
                  <AnimatedButton
                    type={index === 0 ? "shake" : "scale"}
                    className={
                      button.isPrimary
                        ? "btn-secondary w-full sm:w-auto"
                        : "btn-outline text-white w-full sm:w-auto"
                    }
                    delay={index * 0.1}
                  >
                    {button.text}
                  </AnimatedButton>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
