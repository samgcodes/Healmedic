import React, { useRef, useEffect, useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimationContext } from "../../CollaborativePractice";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface Example {
  title: string;
  description: string;
}

interface ExamplesSectionProps {
  examples: Example[];
}

const ExamplesSection: React.FC<ExamplesSectionProps> = ({ examples }) => {
  const { isInitialLoad } = useContext(AnimationContext);
  const sectionRef = useRef<HTMLDivElement>(null);
  const exampleCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize example card refs array
  useEffect(() => {
    exampleCardRefs.current = exampleCardRefs.current.slice(0, examples.length);
  }, [examples.length]);

  // Set up GSAP animations
  useEffect(() => {
    if (!sectionRef.current) return;

    // Set initial state for the section
    gsap.set(sectionRef.current, { opacity: 1 });

    // Animate example cards with stagger
    if (exampleCardRefs.current.filter(Boolean).length > 0) {
      // Set initial state for example cards
      gsap.set(exampleCardRefs.current.filter(Boolean), {
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
        scrollTl.to(exampleCardRefs.current.filter(Boolean), {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out",
        });
      }

      // Add hover animations to example cards
      exampleCardRefs.current.filter(Boolean).forEach((card) => {
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
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });

      // Remove event listeners
      exampleCardRefs.current.filter(Boolean).forEach((card) => {
        if (!card) return;
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
    };
  }, [isInitialLoad]);

  return (
    <div ref={sectionRef} className="bg-white rounded-xl p-8 shadow-lg">
      <h3 className="font-title text-2xl font-semibold mb-6 text-center text-gray-800">
        Examples of Collaborative Practice
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {examples.map((example, index) => (
          <div
            key={example.title}
            ref={(el) => (exampleCardRefs.current[index] = el)}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary h-full"
          >
            <h4 className="font-title text-xl font-semibold mb-3 text-primary">
              {example.title}
            </h4>
            <p className="font-body text-gray-600">{example.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamplesSection;
