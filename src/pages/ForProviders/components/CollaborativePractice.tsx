import React, { useRef, useEffect, createContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { collaborativePracticeData } from "../data";
import {
  ImpactSection,
  ChartsSection,
  BenefitsSection,
  ProcessSection,
  ExamplesSection,
  ImageSection,
} from "./CollaborativePractice/index";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Create a context to pass animation state to child components
export const AnimationContext = createContext({
  isInitialLoad: true,
});

const CollaborativePractice: React.FC = () => {
  const mainSectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInitialLoadRef = useRef(true);

  // Extract data for impact section
  const impactData = {
    title: "Impact of Collaborative Practice Agreements",
    description:
      "Research shows that pharmacist involvement through Collaborative Practice Agreements leads to significant improvements in patient outcomes and practice efficiency.",
    statistics: [
      {
        percentage: 43,
        title: "Improvement in Blood Pressure Control",
        description:
          "Patients in pharmacist-physician collaborative care showed 43% better blood pressure control compared to usual care.",
        source: "Journal of the American College of Cardiology, 2021",
      },
      {
        percentage: 56,
        title: "Reduction in Medication Errors",
        description:
          "Practices with pharmacist CPAs experienced a 56% reduction in medication errors and adverse drug events.",
        source: "American Journal of Health-System Pharmacy, 2022",
      },
      {
        percentage: 35,
        title: "Decrease in Hospital Readmissions",
        description:
          "Patients managed under pharmacist-physician CPAs had 35% fewer hospital readmissions within 30 days.",
        source: "JAMA Internal Medicine, 2020",
      },
    ],
  };

  // Set up GSAP animations
  useEffect(() => {
    // Handle initial fade-in animation for the main content
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            // After initial animation completes, set isInitialLoad to false
            isInitialLoadRef.current = false;
          },
        }
      );
    }

    // Cleanup function to remove any ScrollTrigger instances when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <AnimationContext.Provider
      value={{ isInitialLoad: isInitialLoadRef.current }}
    >
      <div className="space-y-8" ref={contentRef}>
        <div
          ref={mainSectionRef}
          className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary"
        >
          <h2 className="font-title text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
            {collaborativePracticeData.title}
          </h2>
          <p className="font-body text-lg text-gray-600 mb-6 max-w-3xl">
            {collaborativePracticeData.description}
          </p>

          {/* CPA Impact Infographic */}
          <ImpactSection impactData={impactData} />

          {/* Charts Section */}
          <ChartsSection
            timeSavingsSource="American Medical Association Survey, 2023"
            costSavingsSource="Journal of Managed Care Pharmacy, 2022"
            satisfactionSource="American Medical Association Survey, 2023"
          />

          {/* Benefits Grid */}
          <BenefitsSection benefits={collaborativePracticeData.benefits} />
        </div>

        {/* CPA Process */}
        <div className="scroll-section">
          <ProcessSection steps={collaborativePracticeData.cpaProcess} />
        </div>

        {/* CPA Examples */}
        <div className="scroll-section">
          <ExamplesSection examples={collaborativePracticeData.cpaExamples} />
        </div>

        {/* Image placeholder for CPA */}
        <div className="scroll-section">
          <ImageSection imageDescription="Pharmacist and physician collaborating on patient care" />
        </div>
      </div>
    </AnimationContext.Provider>
  );
};

export default CollaborativePractice;
