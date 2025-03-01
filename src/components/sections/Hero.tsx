import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, Transition } from "framer-motion";

/**
 * Animation variants for the Hero component
 */
interface HeroAnimations {
  phraseAnimation: {
    initial: object;
    animate: object;
    exit: object;
    transition: Transition;
  };
  bounceAnimation: {
    y: number[];
    transition: Transition;
  };
  buttonHover: {
    scale: number;
  };
  buttonTap: {
    scale: number;
  };
}

// Animation variants
const animations: HeroAnimations = {
  phraseAnimation: {
    initial: { y: 40, opacity: 0, rotateX: -90 },
    animate: { y: 0, opacity: 1, rotateX: 0 },
    exit: { y: -40, opacity: 0, rotateX: 90 },
    transition: {
      y: { type: "spring", stiffness: 300, damping: 20 },
      opacity: { duration: 0.2 },
      rotateX: { duration: 0.5 },
    },
  },
  bounceAnimation: {
    y: [0, -20, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  buttonHover: {
    scale: 1.05,
  },
  buttonTap: {
    scale: 0.95,
  },
};

/**
 * MorphingText component for smooth text transitions
 */
interface MorphingTextProps {
  text: string;
  className?: string;
}

const MorphingText: React.FC<MorphingTextProps> = ({
  text,
  className = "",
}) => {
  // Split text into individual characters for animation
  const characters = Array.from(text);

  return (
    <div className={`flex ${className}`}>
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.4,
              delay: index * 0.04,
              ease: [0.2, 0.65, 0.3, 0.9], // Custom easing for smooth morphing effect
            },
          }}
          exit={{
            opacity: 0,
            y: -20,
            scale: 0.8,
            filter: "blur(8px)",
            transition: {
              duration: 0.3,
              delay: index * 0.02,
              ease: "easeInOut",
            },
          }}
          className="inline-block origin-center"
          style={{
            display: char === " " ? "inline-block" : "inline-block",
            minWidth: char === " " ? "0.5em" : "auto",
            position: "relative",
          }}
        >
          {char === " " ? "\u00A0" : char}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: 1,
              opacity: 0.5,
              transition: {
                duration: 0.3,
                delay: index * 0.04 + 0.2,
                ease: "easeOut",
              },
            }}
            exit={{
              scaleX: 0,
              opacity: 0,
              transition: {
                duration: 0.2,
                delay: index * 0.02,
                ease: "easeIn",
              },
            }}
            style={{ originX: 0 }}
          />
        </motion.span>
      ))}
    </div>
  );
};

/**
 * Hero component props
 */
interface HeroProps {
  /** Array of phrases to rotate through */
  phrases?: string[];
  /** Text for the call-to-action button */
  ctaText?: string;
  /** Link for the call-to-action button */
  ctaLink?: string;
  /** Path to the hero image */
  heroImage?: string;
  /** Interval in milliseconds between phrase changes */
  phraseInterval?: number;
}

/**
 * Hero component for the homepage
 *
 * Features an animated headline with rotating phrases and a call-to-action button
 */
const Hero: React.FC<HeroProps> = ({
  phrases = [
    "reimagined",
    "redefined",
    "revolutionized",
    "personalized",
    "simplified",
  ],
  ctaText = "Transfer Now",
  ctaLink = "/transfer",
  heroImage = "/assets/heroimg.png",
  phraseInterval = 3500,
}) => {
  const [currentPhrase, setCurrentPhrase] = useState<number>(0);

  // Rotate through phrases at the specified interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, phraseInterval);

    return () => clearInterval(interval);
  }, [phrases, phraseInterval]);

  return (
    <section className="relative bg-gradient-to-br from-[#9a77f6] to-[#8a67e6] text-white overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[10%] left-[5%] w-24 h-24 rounded-full bg-white opacity-10"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[40%] right-[10%] w-16 h-16 rounded-full bg-white opacity-10"
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[15%] w-20 h-20 rounded-full bg-white opacity-10"
          animate={{
            y: [0, 30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      {/* Main content container */}
      <div className="max-w-[1400px] mx-auto h-full px-fluid-4 pt-20 sm:pt-24 md:pt-28">
        <div className="flex flex-col-reverse md:flex-row min-h-[calc(100vh-7rem)] items-center justify-center">
          {/* Text content - centered on mobile */}
          <div className="w-full md:w-3/5 z-10 space-y-fluid-4 mt-6 md:mt-0 px-fluid-2 md:pl-fluid-16">
            <div className="text-center md:text-left mx-auto md:mx-0 max-w-2xl">
              <h1 className="font-title font-bold tracking-tight">
                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                  Pharmacy
                </span>{" "}
                <div className="inline-block w-full relative overflow-hidden h-[90px] xs:h-[100px] sm:h-[110px] md:h-[130px] text-fluid-4xl sm:text-fluid-5xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentPhrase}
                      className="absolute mt-2 left-0 right-0 block"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <MorphingText
                        text={phrases[currentPhrase]}
                        className="justify-center md:justify-start"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </h1>
              <p className="font-body text-fluid-lg md:text-fluid-xl mt-6 mb-8 opacity-90 max-w-xl leading-relaxed relative z-10">
                <span className="bg-[#8a67e6] px-2 py-1 rounded-lg">
                  Experience pharmacy care
                </span>{" "}
                that puts you first. Transfer your prescriptions today and join
                thousands of satisfied customers.
              </p>
              <div className="flex space-x-4 items-center justify-center md:justify-start">
                <motion.div
                  whileHover={animations.buttonHover}
                  whileTap={animations.buttonTap}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-white opacity-20 blur-md rounded-full transform scale-110"></div>
                  <Link
                    to={ctaLink}
                    className="font-body bg-white text-[#9a77f6] hover:bg-opacity-95 px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-fluid-lg inline-block shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:-translate-y-1"
                    aria-label={ctaText}
                  >
                    {ctaText}
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/learn-more"
                    className="font-body border-2 border-white text-white hover:bg-white hover:text-[#9a77f6] px-6 py-3 rounded-full font-bold text-fluid-base inline-block transition-all duration-300 transform hover:-translate-y-1"
                    aria-label="Learn More"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>

              {/* Spacer for consistent layout */}
              <div className="mt-8"></div>
            </div>
          </div>

          {/* Image with enhanced presentation - centered on mobile */}
          <div className="w-full md:w-2/5 flex items-center justify-center p-fluid-4 relative text-center md:text-left">
            {/* No background glow effect as per feedback */}

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-10 -right-5 w-20 h-20 rounded-full border-4 border-white opacity-20"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
            />

            <motion.div
              className="absolute -bottom-5 -left-10 w-16 h-16 rounded-full border-2 border-white opacity-15"
              animate={{
                rotate: -360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
            />

            {/* Main image with enhanced container - centered on mobile */}
            <div className="relative z-10 mx-auto md:mx-0">
              <motion.img
                animate={animations.bounceAnimation}
                src={heroImage}
                alt="Modern Pharmacy"
                className="w-[50%] xs:w-[45%] sm:w-[40%] md:w-[65%] lg:w-[70%] max-w-[400px] mx-auto object-contain relative z-10"
                loading="lazy"
                width="400"
                height="400"
              />
            </div>

            {/* Floating pill elements */}
            <motion.div
              className="absolute top-1/4 right-1/4 w-8 h-3 bg-white rounded-full opacity-40"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute bottom-1/3 left-1/4 w-6 h-2 bg-white rounded-full opacity-30"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -15, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </div>
        </div>
      </div>

      {/* Enhanced slanted divider with gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 bg-gradient-to-r from-white/10 via-white/5 to-transparent transform -skew-y-3 origin-left translate-y-16 -mb-1 backdrop-blur-sm"></div>

      {/* Additional decorative elements for the bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full h-auto"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 50L60 45.7C120 41.3 240 32.7 360 27.5C480 22.3 600 20.7 720 25.2C840 29.7 960 40.3 1080 43.3C1200 46.3 1320 41.7 1380 39.3L1440 37V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z"
            fill="white"
            fillOpacity="0.05"
          />
          <path
            d="M0 70L60 65.7C120 61.3 240 52.7 360 47.5C480 42.3 600 40.7 720 45.2C840 49.7 960 60.3 1080 63.3C1200 66.3 1320 61.7 1380 59.3L1440 57V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V70Z"
            fill="white"
            fillOpacity="0.08"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
