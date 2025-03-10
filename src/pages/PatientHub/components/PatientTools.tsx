import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TabNavigation from "../../../components/utils/TabNavigation";
import BMICalculator from "./tools/BMICalculator.tsx";
import InsulinCalculator from "./tools/InsulinCalculator.tsx";
import {
  Stagger1,
  TitleSectionAnimation,
} from "../../../components/utils/GSAPAnimations";
import useMediaQuery, { breakpoints } from "../../../hooks/useMediaQuery";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const PatientTools: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [contentKey, setContentKey] = useState(0);
  const bottomSectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery(breakpoints.mobile);

  // Handle tab change with animation
  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  // Update content key when tab changes to trigger re-render and animation
  useEffect(() => {
    setContentKey((prev) => prev + 1);
  }, [activeTab]);

  // Bottom section animation - independent from tab content
  useEffect(() => {
    if (!bottomSectionRef.current) return;

    // Set initial state for bottom section
    gsap.set(bottomSectionRef.current, { opacity: 0, y: 20 });

    // Create a timeline for the bottom section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: bottomSectionRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none",
        once: false, // Allow it to replay when scrolled back into view
      },
    });

    // Add animations to the timeline
    tl.to(bottomSectionRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    // Animate the icon and text separately for more visual interest
    const icon = bottomSectionRef.current.querySelector(".bottom-icon");
    const textContent = bottomSectionRef.current.querySelector(
      ".bottom-text-content"
    );

    if (icon && textContent) {
      // Set initial states
      gsap.set([icon, textContent], { opacity: 0 });

      tl.to(
        icon,
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );

      tl.to(
        textContent,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }

    // Cleanup only this specific ScrollTrigger instance
    return () => {
      // Find and kill only the ScrollTrigger associated with this element
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === bottomSectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []); // Empty dependency array ensures this only runs once on mount

  const tools = [
    {
      title: "BMI Calculator",
      component: <BMICalculator />,
      icon: "📊",
      description:
        "Calculate your Body Mass Index (BMI) to assess your weight relative to your height.",
    },
    {
      title: "Insulin Dosing",
      component: <InsulinCalculator />,
      icon: "💉",
      description:
        "Calculate insulin doses based on carbohydrate intake and blood glucose levels.",
    },
  ];

  return (
    <div className="space-y-8">
      <TitleSectionAnimation className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary">
        <div className="flex flex-col xl:flex-row items-start gap-6">
          <div className="flex-1">
            <h2 className="font-title text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
              Patient Tools
            </h2>
            <p className="font-body text-lg text-gray-600">
              Our interactive health tools are designed to help you monitor and
              manage your health. These calculators provide estimates and
              general guidance but should not replace professional medical
              advice from your healthcare provider.
            </p>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 aspect-square rounded-xl overflow-hidden mb-6 xl:mb-0">
            <img
              src="/assets/PatientHub/patient_tools_PH.png"
              alt="Patient Tools"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </TitleSectionAnimation>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <TabNavigation
            items={tools}
            activeTab={activeTab}
            setActiveTab={handleTabChange}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <Stagger1
            key={contentKey}
            className="space-y-4"
            duration={isMobile ? 0.3 : 0.5}
            staggerAmount={isMobile ? 0.02 : 0.05}
            mobileOptimized={true}
          >
            <div className="mb-4">
              <p className="font-body text-gray-600">
                {tools[activeTab].description}
              </p>
            </div>
            <div className="calculator-container">
              {tools[activeTab].component}
            </div>
          </Stagger1>
        </div>
      </div>

      <div
        ref={bottomSectionRef}
        className="bg-gradient-to-r from-primary/10 to-purple-100 rounded-xl p-6 shadow-md"
      >
        <div className="flex items-center gap-4">
          <div className="text-3xl bottom-icon">⚠️</div>
          <div className="bottom-text-content">
            <h3 className="font-title text-xl font-semibold text-gray-800">
              Important Disclaimer
            </h3>
            <p className="font-body text-gray-600">
              These tools provide estimates only and should not be used as a
              substitute for professional medical advice, diagnosis, or
              treatment. Always consult with your healthcare provider regarding
              any medical questions or decisions about your health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientTools;
