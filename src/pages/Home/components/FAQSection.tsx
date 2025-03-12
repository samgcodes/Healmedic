import React, { useState } from "react";

// Define FAQItem type directly in the component
interface FAQItemType {
  question: string;
  answer: string;
}

// FAQ data embedded directly in the component
const FAQ_DATA: FAQItemType[] = [
  {
    question: "What services does your pharmacy offer?",
    answer:
      "We offer a comprehensive range of services including prescription filling, personalized medication counseling, various immunizations, health screenings, and convenient delivery services to ensure all your healthcare needs are met.",
  },
  {
    question: "Do you accept my insurance?",
    answer:
      "We accept most major insurance plans to make your healthcare more accessible. For specific information about your insurance coverage, please contact us with your insurance details, and we'll be happy to verify and explain your benefits.",
  },
  {
    question: "Can you transfer my prescription from another pharmacy?",
    answer:
      "Absolutely! We can easily transfer your prescriptions from another pharmacy. Simply provide us with the name and phone number of your previous pharmacy, and we'll handle the entire transfer process for you, ensuring a seamless transition of your medications.",
  },
  {
    question: "Do you offer home delivery for medications?",
    answer:
      "Yes, we provide free home delivery for medications within our local service area. This convenient service ensures you receive your essential medications without leaving your home, perfect for those with mobility issues or busy schedules.",
  },
  {
    question: "Can I get my prescriptions refilled automatically?",
    answer:
      "Certainly! We offer an auto-refill program for eligible prescriptions. This service helps you stay on track with your medication regimen by automatically refilling your prescriptions before you run out. Speak with our pharmacist to enroll and learn more about this convenient option.",
  },
  {
    question: "Do you provide medication synchronization services?",
    answer:
      "Yes, we offer medication synchronization to simplify your prescription routine. This service aligns all your regular medications to be refilled on the same day each month, reducing multiple pharmacy visits and helping you manage your medications more effectively.",
  },
  {
    question: "Can I get vaccinations at your pharmacy?",
    answer:
      "Absolutely! We offer a wide range of vaccinations, including annual flu shots, shingles vaccines, and travel immunizations. Our trained pharmacists can administer these vaccines safely and conveniently, often without an appointment.",
  },
  {
    question: "Do you compound medications?",
    answer:
      "Yes, we provide compounding services for customized medications. This specialized service allows us to create tailored medications for patients with specific needs that can't be met by commercially available drugs. Consult with our pharmacist to discuss your unique medication requirements.",
  },
  {
    question: "Can I consult with a pharmacist about my medications?",
    answer:
      "Absolutely! Our knowledgeable pharmacists are always available for medication consultations. Whether you have questions about side effects, drug interactions, or how to take your medications properly, we're here to provide expert advice and ensure you understand your treatment plan.",
  },
  {
    question: "Do you offer any health screening services?",
    answer:
      "Yes, we provide various health screening services to help you monitor and maintain your well-being. These include blood pressure checks, cholesterol testing, diabetes screenings, and more. Regular health screenings can help detect potential issues early, supporting better overall health outcomes.",
  },
];

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
 * Animations removed for troubleshooting
 */
const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isInitiallyOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(isInitiallyOpen);

  // Toggle question open/closed
  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="border-b border-gray-200 py-4 sm:py-5">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none focus:ring-2 focus:ring-[#9a77f6] focus:ring-opacity-50 rounded-md py-2 px-1 touch-manipulation"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
      >
        <span className="font-title text-fluid-lg sm:text-fluid-xl text-gray-700 leading-relaxed pr-4">
          {question}
        </span>
        <span
          className="text-[#9a77f6] text-2xl flex-shrink-0 ml-2"
          aria-hidden="true"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <div
          id={`faq-answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
          className="mt-4 text-gray-600 pl-3 sm:pl-4 border-l-2 border-[#9a77f6]"
        >
          <div className="bg-[#f0e6ff] p-3 sm:p-4 rounded-md shadow-inner">
            <p className="font-body text-fluid-base sm:text-fluid-lg leading-relaxed text-gray-700">
              {answer}
            </p>
          </div>
        </div>
      )}
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
 * Animations removed for troubleshooting
 */
const FAQSection: React.FC<FAQProps> = ({
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

export default FAQSection;
