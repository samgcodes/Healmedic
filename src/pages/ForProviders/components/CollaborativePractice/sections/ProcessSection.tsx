import React, { useRef, useEffect, useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimationContext } from "../../CollaborativePractice";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  steps: ProcessStep[];
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ steps }) => {
  const { isInitialLoad } = useContext(AnimationContext);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stepCircleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize refs arrays
  useEffect(() => {
    stepRefs.current = stepRefs.current.slice(0, steps.length);
    stepCircleRefs.current = stepCircleRefs.current.slice(0, steps.length);
    lineRefs.current = lineRefs.current.slice(0, steps.length - 1);
  }, [steps.length]);

  // Set up GSAP animations
  useEffect(() => {
    if (!sectionRef.current) return;

    // Set initial opacity for the section
    gsap.set(sectionRef.current, { opacity: 1 });

    // Add hover animations to step items
    stepRefs.current.filter(Boolean).forEach((step, index) => {
      if (!step || !stepCircleRefs.current[index]) return;

      const stepCircle = stepCircleRefs.current[index];

      step.addEventListener("mouseenter", () => {
        // Glow effect on hover
        gsap.to(stepCircle, {
          boxShadow: "0 0 15px 5px rgba(255, 255, 255, 0.7)",
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      step.addEventListener("mouseleave", () => {
        gsap.to(stepCircle, {
          boxShadow: "0 0 0px 0px rgba(255, 255, 255, 0)",
          scale: 1,
          duration: 0.3,
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
      stepRefs.current.filter(Boolean).forEach((step) => {
        if (!step) return;
        step.removeEventListener("mouseenter", () => {});
        step.removeEventListener("mouseleave", () => {});
      });
    };
  }, [isInitialLoad]);

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-r from-[#8a67e6] to-[#9a77f6] rounded-xl overflow-hidden shadow-lg"
    >
      <div className="p-8 text-white">
        <h3 className="font-title text-2xl font-semibold mb-6 text-center">
          How the CPA Process Works
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <div
              key={step.step}
              ref={(el) => (stepRefs.current[index] = el)}
              className="relative"
            >
              <div className="flex flex-col items-center">
                <div
                  ref={(el) => (stepCircleRefs.current[index] = el)}
                  className="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center text-2xl font-bold mb-4 transition-shadow duration-300 z-10 relative"
                >
                  {step.step}
                </div>
                <h4 className="font-title text-xl font-semibold mb-2 text-center">
                  {step.title}
                </h4>
                <p className="font-body text-white text-opacity-90 text-center">
                  {step.description}
                </p>
              </div>

              {/* Connecting line between steps - only on desktop */}
              {index < steps.length - 1 && (
                <div
                  ref={(el) => (lineRefs.current[index] = el)}
                  className="hidden lg:block absolute top-8 h-0.5 bg-white bg-opacity-50 z-0"
                  style={{
                    left: "calc(50% + 16px)",
                    width: "calc(100% - 32px)",
                    right: "auto",
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
