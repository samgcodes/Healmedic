import React, { ReactNode } from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * Props for animation components
 */
interface AnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

/**
 * FadeIn component - Fades in elements when they come into view
 */
export const FadeIn: React.FC<AnimationProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  // If user prefers reduced motion, simply show the element without animation
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Props for staggered list animation
 */
interface StaggeredListProps extends AnimationProps {
  staggerDelay?: number;
}

/**
 * StaggeredList component - Animates list items with a staggered delay
 */
export const StaggeredList: React.FC<StaggeredListProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  staggerDelay = 0.1,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: "easeOut",
      },
    },
  };

  // If user prefers reduced motion, simply show the elements without animation
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
};

/**
 * Props for animated button
 */
interface AnimatedButtonProps extends AnimationProps {
  onClick?: () => void;
  type?: "pulse" | "shake" | "scale";
}

/**
 * AnimatedButton component - Button with hover animation
 */
export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  className = "",
  onClick,
  type = "scale",
}) => {
  const prefersReducedMotion = useReducedMotion();

  // If user prefers reduced motion, return a regular button
  if (prefersReducedMotion) {
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  }

  // Different animation types based on type prop
  if (type === "pulse") {
    return (
      <motion.button
        className={className}
        onClick={onClick}
        whileHover={{
          scale: 1.05,
        }}
        animate={{
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse" as const,
        }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.button>
    );
  }

  if (type === "shake") {
    return (
      <motion.button
        className={className}
        onClick={onClick}
        whileHover={{
          x: [0, -5, 5, -5, 5, 0],
        }}
        transition={{
          duration: 0.6,
        }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.button>
    );
  }

  // Default scale animation
  return (
    <motion.button
      className={className}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.button>
  );
};

/**
 * Props for animated card
 */
interface AnimatedCardProps extends AnimationProps {
  onClick?: () => void;
}

/**
 * AnimatedCard component - Card with hover animation
 */
export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = "",
  onClick,
  delay = 0,
  duration = 0.5,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  // If user prefers reduced motion, simply show the card without animation
  if (prefersReducedMotion) {
    return (
      <div className={className} onClick={onClick}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      }}
      variants={variants}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

/**
 * Props for section title
 */
interface SectionTitleProps {
  title: string;
  className?: string;
}

/**
 * SectionTitle component - Animated section title
 */
export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  className = "",
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // If user prefers reduced motion, simply show the title without animation
  if (prefersReducedMotion) {
    return (
      <h2 className={`heading-3 text-primary mb-6 ${className}`}>{title}</h2>
    );
  }

  return (
    <motion.h2
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={`heading-3 text-primary mb-6 ${className}`}
    >
      {title}
    </motion.h2>
  );
};
