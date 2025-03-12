import React, { useState, useEffect, useRef } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { gsap } from "gsap";

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
  /** Whether the FAQ item is open */
  isOpen: boolean;
  /** Function to toggle the open state */
  onToggle: () => void;
}

/**
 * FAQItem component for individual FAQ items
 * Enhanced with GSAP animations
 */
const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  const answerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const prevIsOpenRef = useRef<boolean>(isOpen);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  // Initialize on mount
  useEffect(() => {
    const answerElement = answerRef.current;

    if (!answerElement) return;

    // Set initial state
    if (!isOpen) {
      gsap.set(answerElement, {
        height: 0,
        opacity: 0,
        display: "none",
      });
    }

    // Update ref for next render
    prevIsOpenRef.current = isOpen;
  }, []);

  // Handle animation when isOpen changes
  useEffect(() => {
    // Skip animation on initial render
    if (prevIsOpenRef.current === isOpen) return;

    const answerElement = answerRef.current;
    const contentElement = contentRef.current;
    const iconElement = iconRef.current;

    if (!answerElement || !contentElement || !iconElement) return;

    // Kill any existing animation
    if (animationRef.current) {
      animationRef.current.kill();
    }

    // Create a new timeline
    const tl = gsap.timeline();
    animationRef.current = tl;

    if (isOpen) {
      // Opening animation

      // First make it visible with 0 height
      gsap.set(answerElement, {
        display: "block",
        height: "auto",
        opacity: 0,
      });

      // Get the natural height
      const height = answerElement.offsetHeight;

      // Reset to 0 height
      gsap.set(answerElement, {
        height: 0,
      });

      // Animate opening
      tl.to(
        iconElement,
        {
          rotation: 180,
          duration: 0.3,
          ease: "back.out(1.7)",
        },
        0
      )
        .to(
          answerElement,
          {
            height: height,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          0
        )
        .fromTo(
          contentElement,
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3 },
          0.1
        );
    } else {
      // Closing animation

      // Animate closing
      tl.to(
        iconElement,
        {
          rotation: 0,
          duration: 0.3,
          ease: "back.out(1.7)",
        },
        0
      )
        .to(
          contentElement,
          {
            y: 10,
            opacity: 0,
            duration: 0.2,
          },
          0
        )
        .to(
          answerElement,
          {
            height: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
              gsap.set(answerElement, { display: "none" });
            },
          },
          0.1
        );
    }

    // Update ref for next render
    prevIsOpenRef.current = isOpen;
  }, [isOpen]);

  return (
    <div className="border-b border-gray-200 py-5 sm:py-6 hover:bg-[#faf6ff] transition-colors duration-200">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none rounded-md py-3 px-4 touch-manipulation group"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
      >
        <span className="font-title text-fluid-lg sm:text-fluid-xl text-gray-800 leading-relaxed pr-4 group-hover:text-[#7c4dff] transition-colors duration-200">
          {question}
        </span>
        <div
          ref={iconRef}
          className="flex-shrink-0 ml-2"
          style={{ transform: "rotate(0deg)" }}
        >
          <CaretDown
            className="text-[#9a77f6]"
            size={24}
            weight="bold"
            aria-hidden="true"
          />
        </div>
      </button>

      <div
        ref={answerRef}
        id={`faq-answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
        className="overflow-hidden"
      >
        <div className="mt-4 text-gray-600 pl-4 sm:pl-6 border-l-2 border-[#9a77f6]">
          <div
            ref={contentRef}
            className="bg-gradient-to-br from-[#f0e6ff] to-[#f8f4ff] p-4 sm:p-5 rounded-md shadow-inner"
          >
            <p className="font-body text-fluid-base sm:text-fluid-lg leading-relaxed text-gray-700">
              {answer}
            </p>
          </div>
        </div>
      </div>
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
const FAQSection: React.FC<FAQProps> = ({
  title = "Frequently Asked Questions",
  faqItems = FAQ_DATA,
  initialOpenIndex = -1, // -1 means all closed initially
}) => {
  const [expandedItems, setExpandedItems] = useState<number[]>(
    initialOpenIndex >= 0 ? [initialOpenIndex] : []
  );
  const [allExpanded, setAllExpanded] = useState<boolean>(false);
  const expandButtonRef = useRef<HTMLDivElement>(null);
  const prevAllExpandedRef = useRef<boolean>(allExpanded);

  // Toggle expand/collapse all
  const toggleExpandAll = () => {
    if (allExpanded) {
      setExpandedItems([]);
      setAllExpanded(false);
    } else {
      setExpandedItems(faqItems.map((_, index) => index));
      setAllExpanded(true);
    }
  };

  // Individual item toggle
  const toggleItem = (index: number) => {
    setExpandedItems((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  // Update allExpanded state when expandedItems changes
  useEffect(() => {
    setAllExpanded(expandedItems.length === faqItems.length);
  }, [expandedItems, faqItems.length]);

  // Animate the expand/collapse button when allExpanded changes
  useEffect(() => {
    if (prevAllExpandedRef.current === allExpanded) return;

    if (expandButtonRef.current) {
      gsap.to(expandButtonRef.current, {
        rotation: allExpanded ? 180 : 0,
        duration: 0.3,
        ease: "back.out(1.7)",
      });
    }

    prevAllExpandedRef.current = allExpanded;
  }, [allExpanded]);

  // Refs for entrance animation
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const faqItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Set up entrance animation with ScrollTrigger
  useEffect(() => {
    if (
      !sectionRef.current ||
      !titleRef.current ||
      !controlsRef.current ||
      !containerRef.current
    )
      return;

    // Set initial state (invisible)
    gsap.set(titleRef.current, { opacity: 0, y: 30 });
    gsap.set(controlsRef.current, { opacity: 0, y: 20 });
    gsap.set(containerRef.current, { opacity: 0, y: 30 });

    // Create a timeline for the entrance animation
    const sectionTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100", // Start animation when top of section is 100px from bottom of viewport
        toggleActions: "play none none none", // Play once when enters view
      },
    });

    // Animate title
    sectionTl.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    });

    // Animate controls
    sectionTl.to(
      controlsRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.3"
    ); // Slight overlap with previous animation

    // Animate FAQ container
    sectionTl.to(
      containerRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.2"
    );

    // Staggered animation for FAQ items
    const faqItems = faqItemsRef.current.filter((item) => item !== null);
    if (faqItems.length > 0) {
      sectionTl.fromTo(
        faqItems,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08, // 0.08s delay between each item
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }

    // Cleanup
    return () => {
      if (sectionTl.scrollTrigger) {
        sectionTl.scrollTrigger.kill();
      }
      sectionTl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 bg-[#FDF8EC]"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-7xl mx-auto px-fluid-4">
        <h2
          ref={titleRef}
          id="faq-heading"
          className="font-title text-fluid-3xl sm:text-fluid-4xl font-semibold text-center mb-8 sm:mb-12 text-gray-800"
        >
          {title}
        </h2>

        <div ref={controlsRef} className="flex justify-end mb-4">
          <button
            onClick={toggleExpandAll}
            className="text-[#9a77f6] hover:text-[#7c4dff] font-medium flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#f0e6ff] transition-colors duration-200"
          >
            <span>{allExpanded ? "Collapse All" : "Expand All"}</span>
            <div
              ref={expandButtonRef}
              className="text-sm"
              style={{ transform: "rotate(0deg)" }}
            >
              <CaretDown size={16} weight="bold" />
            </div>
          </button>
        </div>

        <div
          ref={containerRef}
          className="bg-white rounded-lg shadow-lg p-5 sm:p-7 md:p-9"
        >
          {faqItems.map((item: FAQItemType, index: number) => (
            <div key={index} ref={(el) => (faqItemsRef.current[index] = el)}>
              <FAQItem
                question={item.question}
                answer={item.answer}
                isOpen={expandedItems.includes(index)}
                onToggle={() => toggleItem(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
