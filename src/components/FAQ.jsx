import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-title text-xl text-gray-700 leading-relaxed">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[#9a77f6] text-2xl"
        >
          ▼
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-4 text-gray-600 pl-4 border-l-2 border-[#9a77f6]"
          >
            <div className="bg-[#f0e6ff] p-4 rounded-md shadow-inner">
              <p className="font-body text-lg leading-relaxed text-gray-700">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqData = [
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

  return (
    <section className="py-16 bg-[#FDF8EC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-title text-4xl font-semibold text-center mb-12 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
