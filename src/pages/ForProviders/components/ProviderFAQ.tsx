import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const ProviderFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "How do I set up a Collaborative Practice Agreement?",
      answer:
        "To set up a Collaborative Practice Agreement (CPA), start by contacting our pharmacy team through the Provider Hub. We'll schedule an initial consultation to discuss your practice needs and goals. Our team will then work with you to develop a customized CPA that defines roles, responsibilities, and protocols. Once the agreement is drafted, we'll collaborate on implementation strategies and establish communication channels for ongoing collaboration.",
    },
    {
      question: "What EMR systems do you integrate with?",
      answer:
        "We integrate with all major Electronic Medical Record systems including Epic, Cerner, Allscripts, NextGen, eClinicalWorks, Athenahealth, Practice Fusion, Meditech, and many others. Our technical team can work with your IT department to ensure seamless integration with your specific EMR system. If you use a custom or less common EMR, please contact us to discuss integration options.",
    },
    {
      question: "How can I refer patients to your pharmacy services?",
      answer:
        "You can refer patients to our pharmacy services through several methods: 1) E-prescribe directly through your EMR system using our NCPDP ID, 2) Complete our online referral form available in the Provider Resources section, 3) Fax a completed referral form to our dedicated provider line, or 4) Call our provider hotline for immediate assistance. We'll confirm receipt of all referrals and keep you updated on your patient's care.",
    },
    {
      question: "What clinical services can pharmacists provide under a CPA?",
      answer:
        "Under a Collaborative Practice Agreement, our pharmacists can provide a wide range of clinical services including medication therapy management, disease state monitoring, medication adjustments based on lab values and clinical parameters, point-of-care testing, immunizations, and patient education. The specific services can be customized based on your practice needs and state regulations. We can also develop specialized protocols for specific disease states such as diabetes, hypertension, and dyslipidemia.",
    },
    {
      question: "How do you handle prior authorizations?",
      answer:
        "Our pharmacy team provides comprehensive prior authorization support. When a prescription requires prior authorization, our dedicated staff will gather all necessary clinical information, complete the required forms, and submit them to the insurance company. We'll follow up directly with the insurance provider and keep both you and your patient informed throughout the process. This service helps reduce administrative burden on your practice while ensuring patients receive their medications in a timely manner.",
    },
    {
      question: "What patient education resources do you offer?",
      answer:
        "We offer a wide range of patient education resources including medication guides, disease management materials, lifestyle modification resources, and medication adherence tools. These materials are available in multiple languages and can be customized to align with your practice's approach to patient care. You can access these resources in the Provider Resources section of this hub, or contact us to request specialized materials for your patient population.",
    },
    {
      question: "How do you handle medication adherence issues?",
      answer:
        "We address medication adherence through a multi-faceted approach including medication synchronization programs, adherence packaging options, refill reminder systems, and regular medication reviews. Our pharmacists identify barriers to adherence and work directly with patients to develop personalized solutions. We provide regular adherence reports to prescribers and collaborate on intervention strategies when needed. This comprehensive approach has demonstrated significant improvements in medication adherence rates.",
    },
    {
      question: "Can you provide medication therapy management services?",
      answer:
        "Yes, our pharmacists provide comprehensive Medication Therapy Management (MTM) services. These include thorough medication reviews to identify and resolve drug therapy problems, medication reconciliation during care transitions, targeted interventions for specific conditions, and ongoing monitoring of medication effectiveness and safety. We document all interventions and provide detailed recommendations to prescribers. These services can be provided under a Collaborative Practice Agreement or as a standalone service.",
    },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary"
      >
        <h2 className="font-title text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
          Frequently Asked Questions
        </h2>
        <p className="font-body text-lg text-gray-600 mb-8 max-w-3xl">
          Find answers to common questions about working with our pharmacy team
          and utilizing our provider services.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left p-5 flex items-center justify-between transition-colors duration-200 ${
                  openIndex === index
                    ? "bg-primary/5 text-primary"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <span className="font-title font-semibold text-lg">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl"
                >
                  ↓
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 bg-gray-50 border-t border-gray-200">
                      <p className="font-body text-gray-700">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Still Have Questions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-r from-primary/10 to-purple-100 rounded-xl p-8 shadow-md"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="font-title text-xl font-semibold mb-3 text-gray-800">
            Still Have Questions?
          </h3>
          <p className="font-body text-gray-600 mb-6">
            Our pharmacy team is ready to assist with any additional questions
            you may have about our services, collaborative practice
            opportunities, or how we can support your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary text-white font-body px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors duration-300 shadow-md"
            >
              Contact Us
            </motion.a>
            <motion.a
              href="tel:+15551234567"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary font-body px-6 py-3 rounded-md hover:bg-gray-50 transition-colors duration-300 shadow-md border border-primary/20"
            >
              Call Provider Hotline
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProviderFAQ;
