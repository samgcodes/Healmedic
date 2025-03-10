import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * FAQ item interface
 */
interface FAQItem {
  question: string;
  answer: string;
}

/**
 * FAQ section component that displays frequently asked questions
 */
const FAQSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const faqItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const footerRef = useRef<HTMLDivElement>(null);

  // Create a timeline for animations
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !footerRef.current) return;

    // Set initial state
    gsap.set(titleRef.current, {
      opacity: 0,
      y: 30,
      scale: 0.98,
    });

    gsap.set(faqItemsRef.current, {
      opacity: 0,
      y: 30,
      scale: 0.98,
    });

    gsap.set(footerRef.current, {
      opacity: 0,
      y: 30,
      scale: 0.98,
    });

    // Create a new timeline
    const tl = gsap.timeline({
      paused: true,
      defaults: {
        ease: "power3.out",
        duration: 0.8,
      },
    });

    timeline.current = tl;

    // Add animations to the timeline with staggered effect
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 30, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1 }
    );

    // Animate each FAQ item with staggered delay
    faqItemsRef.current.forEach((item, index) => {
      if (item) {
        tl.fromTo(
          item,
          { opacity: 0, y: 30, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1 },
          `-=${index === 0 ? 0.4 : 0.6}`
        );
      }
    });

    // Animate footer
    tl.fromTo(
      footerRef.current,
      { opacity: 0, y: 30, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1 },
      "-=0.6"
    );

    // Create ScrollTrigger
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom-=100",
      toggleActions: "play none none none",
      animation: tl,
    });

    // Cleanup
    return () => {
      trigger.kill();
      tl.kill();
    };
  }, []);

  // FAQ data
  const faqItems: FAQItem[] = [
    {
      question: "How do I transfer my prescription to HealMedic Pharmacy?",
      answer:
        "You can transfer your prescription by calling us at (818) 467-9767, using our contact form above, or by visiting us in person. We'll need your current pharmacy information and prescription details to process the transfer.",
    },
    {
      question: "Do you offer medication delivery services?",
      answer:
        "Yes, we offer free local delivery for prescriptions within a 5-mile radius. For areas outside our free delivery zone, we offer delivery for a small fee. Please contact us for more details.",
    },
    {
      question: "How can I schedule a consultation with a pharmacist?",
      answer:
        "You can schedule a consultation by calling us, using our contact form, or visiting us in person. Our pharmacists are available for medication reviews, health consultations, and personalized wellness advice.",
    },
  ];

  // State to track which FAQ item is expanded
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  /**
   * Toggles the expanded state of an FAQ item
   * @param index - The index of the FAQ item to toggle
   */
  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div ref={sectionRef} className="max-w-4xl mx-auto">
      <h2
        ref={titleRef}
        className="font-title text-3xl font-semibold mb-8 text-gray-800 text-center"
      >
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => (faqItemsRef.current[index] = el)}
            className="bg-white rounded-xl shadow-md border-l-4 border-primary overflow-hidden"
          >
            <button
              className="w-full p-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              onClick={() => toggleExpanded(index)}
              aria-expanded={expandedIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <h3 className="font-title text-xl font-semibold text-gray-800">
                {item.question}
              </h3>
              <svg
                className={`h-6 w-6 text-primary transition-transform duration-200 ${
                  expandedIndex === index ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                expandedIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              aria-hidden={expandedIndex !== index}
            >
              <div className="p-6 pt-0 font-body text-gray-600">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div ref={footerRef} className="mt-8 text-center">
        <p className="text-gray-600">
          Don't see your question here?{" "}
          <a
            href="#contact-form"
            className="text-primary font-semibold hover:underline"
          >
            Contact us
          </a>{" "}
          and we'll be happy to help.
        </p>
      </div>
    </div>
  );
};

export default FAQSection;
