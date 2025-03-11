import React, { useRef, useEffect, useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimationContext } from "../../CollaborativePractice";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface BenefitsSectionProps {
  benefits: Benefit[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits }) => {
  const { isInitialLoad } = useContext(AnimationContext);
  const sectionRef = useRef<HTMLDivElement>(null);
  const benefitRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize benefit refs array
  useEffect(() => {
    benefitRefs.current = benefitRefs.current.slice(0, benefits.length);
  }, [benefits.length]);

  // Set up GSAP animations
  useEffect(() => {
    if (!sectionRef.current) return;

    // Set initial states based on whether this is the initial load or not
    gsap.set(benefitRefs.current.filter(Boolean), {
      opacity: isInitialLoad ? 1 : 0,
      y: isInitialLoad ? 0 : 20,
    });

    // If it's not the initial load, set up scroll-triggered animations
    if (!isInitialLoad) {
      // Create a timeline for scroll-triggered animations
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
      });

      // Add the staggered animation to the timeline
      scrollTl.to(benefitRefs.current.filter(Boolean), {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.out",
      });
    }

    // Add hover animations to benefit cards
    benefitRefs.current.filter(Boolean).forEach((card) => {
      if (!card) return;

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -5,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
          duration: 0.2,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          duration: 0.2,
          ease: "power2.out",
        });
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });

      // Remove event listeners
      benefitRefs.current.filter(Boolean).forEach((card) => {
        if (!card) return;
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
    };
  }, [isInitialLoad, benefits.length]);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      ref={sectionRef}
    >
      {benefits.map((benefit, index) => (
        <div
          key={benefit.title}
          ref={(el) => (benefitRefs.current[index] = el)}
          className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary h-full"
        >
          <div className="text-4xl mb-4">{benefit.icon}</div>
          <h3 className="font-title text-xl font-semibold mb-3 text-gray-800">
            {benefit.title}
          </h3>
          <p className="font-body text-gray-600">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BenefitsSection;
