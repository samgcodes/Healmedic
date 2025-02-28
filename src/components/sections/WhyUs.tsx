import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FEATURES } from "../../constants/features.ts";
import { Feature } from "../../types";

/**
 * Animation variants for the FeatureCard component
 */
interface FeatureCardAnimations {
  card: {
    initial: object;
    animate: object;
    transition: object;
  };
  image: {
    initial: object;
    animate: object;
    transition: object;
  };
  overlay: {
    initial: object;
    animate: object;
    transition: object;
  };
  title: {
    initial: object;
    animate: object;
    transition: object;
  };
  description: {
    initial: object;
    animate: object;
    transition: object;
  };
}

/**
 * FeatureCard props
 */
interface FeatureCardProps extends Feature {
  /** Index of the feature (used for alternating layout) */
  index: number;
}

/**
 * FeatureCard component for displaying individual features
 */
const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
  index,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isEven = index % 2 === 0;

  // Animation variants
  const animations: FeatureCardAnimations = {
    card: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay: 0.2 },
    },
    image: {
      initial: { scale: 1.1 },
      animate: { scale: 1 },
      transition: { duration: 0.6 },
    },
    overlay: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.6, delay: 0.3 },
    },
    title: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay: 0.3 },
    },
    description: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay: 0.4 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={animations.card.initial}
      animate={inView ? animations.card.animate : {}}
      transition={animations.card.transition}
      className={`flex flex-col lg:flex-row items-stretch bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden mb-8 sm:mb-12 md:mb-16 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Image section */}
      <div className="h-[200px] xs:h-[240px] sm:h-[280px] md:h-[320px] lg:h-auto lg:w-1/2 relative overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          initial={animations.image.initial}
          animate={inView ? animations.image.animate : {}}
          transition={animations.image.transition}
          loading="lazy"
          width="600"
          height="400"
        />
        <motion.div
          className="absolute inset-0 bg-primary bg-opacity-30"
          initial={animations.overlay.initial}
          animate={inView ? animations.overlay.animate : {}}
          transition={animations.overlay.transition}
          aria-hidden="true"
        />
      </div>

      {/* Content section */}
      <div className="lg:w-1/2 p-fluid-4 lg:p-fluid-8 flex flex-col justify-between">
        <div>
          <motion.h3
            className="font-title text-fluid-2xl sm:text-fluid-3xl font-bold mb-4 sm:mb-6 text-primary"
            initial={animations.title.initial}
            animate={inView ? animations.title.animate : {}}
            transition={animations.title.transition}
          >
            {title}
          </motion.h3>
          <motion.ul
            className="font-body text-fluid-base sm:text-fluid-lg text-gray-600 leading-relaxed list-disc pl-5 mt-2 sm:mt-4"
            initial={animations.description.initial}
            animate={inView ? animations.description.animate : {}}
            transition={animations.description.transition}
          >
            {description.map((item: string, index: number) => (
              <li key={index} className="mb-2 sm:mb-3">
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * WhyUs props
 */
interface WhyUsProps {
  /** Section title */
  title?: string;
  /** Section subtitle/description */
  subtitle?: string;
  /** Array of feature objects */
  features?: Feature[];
}

/**
 * WhyUs section component
 *
 * Displays a list of features with alternating layouts and animations
 */
const WhyUs: React.FC<WhyUsProps> = ({
  title = "Why Choose HealMedic Pharmacy?",
  subtitle = "Discover the HealMedic difference. We're not just a pharmacy; we're your partner in health, committed to elevating your wellness journey through innovation, expertise, and compassionate care.",
  features = FEATURES,
}) => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#FDF8EC]">
      <div className="max-w-7xl mx-auto px-fluid-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16 md:mb-20"
        >
          <h2 className="font-title text-fluid-3xl sm:text-fluid-4xl font-bold text-primary mb-4 sm:mb-6">
            {title}
          </h2>
          <p className="font-body text-fluid-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Feature cards */}
        {features.map((feature: Feature, index: number) => (
          <FeatureCard key={index} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
