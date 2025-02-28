import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FAQ_DATA } from "../../constants/faq.ts";
import { FAQItem as FAQItemType } from "../../types";

/**
 * FAQItem props
 */
interface FAQItemProps {
  /** The question text */
  question: string;
  /** The answer text */
  answer: string;
  /** Whether the FAQ item should be initially open */
  isInitiallyOpen?: boolean;
}

/**
 * FAQItem component for individual FAQ items
 */
const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isInitiallyOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(isInitiallyOpen);

  // Animation variants
  const contentVariants: Variants = {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    expanded: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="border-b border-gray-200 py-4 sm:py-5">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none focus:ring-2 focus:ring-[#9a77f6] focus:ring-opacity-50 rounded-md py-2 px-1 touch-manipulation"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
      >
        <span className="font-title text-fluid-lg sm:text-fluid-xl text-gray-700 leading-relaxed pr-4">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[#9a77f6] text-2xl flex-shrink-0 ml-2"
          aria-hidden="true"
        >
          ▼
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={contentVariants}
            className="mt-4 text-gray-600 pl-3 sm:pl-4 border-l-2 border-[#9a77f6] overflow-hidden"
          >
            <div className="bg-[#f0e6ff] p-3 sm:p-4 rounded-md shadow-inner">
              <p className="font-body text-fluid-base sm:text-fluid-lg leading-relaxed text-gray-700">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/**
 * FAQ props
 */
interface FAQProps {
  /** Section title */
  title?: string;
  /** Array of FAQ items */
  faqItems?: FAQItemType[];
  /** Index of the FAQ item that should be initially open (-1 for all closed) */
  initialOpenIndex?: number;
}

/**
 * FAQ section component
 *
 * Displays a list of frequently asked questions in an accordion format
 */
const FAQ: React.FC<FAQProps> = ({
  title = "Frequently Asked Questions",
  faqItems = FAQ_DATA,
  initialOpenIndex = -1, // -1 means all closed initially
}) => {
  return (
    <section
      className="py-12 sm:py-16 bg-[#FDF8EC]"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-6xl mx-auto px-fluid-4">
        <h2
          id="faq-heading"
          className="font-title text-fluid-3xl sm:text-fluid-4xl font-semibold text-center mb-8 sm:mb-12 text-gray-800"
        >
          {title}
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          {faqItems.map((item: FAQItemType, index: number) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isInitiallyOpen={index === initialOpenIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
