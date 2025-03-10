import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TabNavigation from "../../../components/utils/TabNavigation";
import {
  Stagger1,
  TitleSectionAnimation,
} from "../../../components/utils/GSAPAnimations";
import useMediaQuery, { breakpoints } from "../../../hooks/useMediaQuery";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const DiseaseManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const bottomSectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery(breakpoints.mobile);

  // Handle tab change with animation
  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  // We'll use a ref to track the current content element for animation
  const [contentKey, setContentKey] = useState(0);

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

  const diseaseCategories = [
    {
      title: "Diabetes Management",
      content: (
        <div className="space-y-4">
          <p className="font-body text-gray-600">
            Diabetes is a chronic condition that affects how your body processes
            blood sugar. Proper management is essential for preventing
            complications and maintaining quality of life.
          </p>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Key Management Strategies:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>Regular blood glucose monitoring</li>
            <li>Medication adherence (insulin or oral medications)</li>
            <li>Healthy eating habits and carbohydrate counting</li>
            <li>Regular physical activity</li>
            <li>Regular check-ups with healthcare providers</li>
          </ul>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Warning Signs to Watch For:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>Frequent urination and increased thirst</li>
            <li>Extreme hunger or unexplained weight loss</li>
            <li>Blurred vision or frequent infections</li>
            <li>Slow-healing sores or cuts</li>
            <li>Tingling or numbness in hands or feet</li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500 mt-4">
            <p className="font-body text-blue-700">
              <span className="font-semibold">Tip:</span> Keep a log of your
              blood sugar readings, medication timing, food intake, and physical
              activity to identify patterns and improve management.
            </p>
          </div>
        </div>
      ),
      icon: "🩸",
    },
    {
      title: "Heart Health",
      content: (
        <div className="space-y-4">
          <p className="font-body text-gray-600">
            Cardiovascular disease remains one of the leading causes of death
            worldwide. Understanding heart health and taking preventive measures
            can significantly reduce your risk.
          </p>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Risk Factors:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>High blood pressure</li>
            <li>High cholesterol levels</li>
            <li>Smoking</li>
            <li>Diabetes</li>
            <li>Obesity</li>
            <li>Physical inactivity</li>
            <li>Family history of heart disease</li>
          </ul>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Prevention Strategies:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>Regular blood pressure and cholesterol monitoring</li>
            <li>
              Heart-healthy diet (low in saturated fats, sodium, and added
              sugars)
            </li>
            <li>Regular physical activity (aim for 150 minutes per week)</li>
            <li>Maintaining a healthy weight</li>
            <li>Avoiding tobacco products</li>
            <li>Limiting alcohol consumption</li>
            <li>Managing stress effectively</li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500 mt-4">
            <p className="font-body text-blue-700">
              <span className="font-semibold">
                Warning Signs of Heart Attack:
              </span>{" "}
              Chest pain or discomfort, shortness of breath, pain in the arms,
              back, neck, or jaw, nausea, lightheadedness, or cold sweats. If
              you experience these symptoms, seek emergency medical attention
              immediately.
            </p>
          </div>
        </div>
      ),
      icon: "❤️",
    },
    {
      title: "Respiratory Conditions",
      content: (
        <div className="space-y-4">
          <p className="font-body text-gray-600">
            Respiratory conditions like asthma and COPD (Chronic Obstructive
            Pulmonary Disease) affect millions of people. Proper management can
            help control symptoms and improve quality of life.
          </p>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Asthma Management:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>Identifying and avoiding triggers</li>
            <li>Using controller medications as prescribed</li>
            <li>Having rescue medications readily available</li>
            <li>Following an asthma action plan</li>
            <li>Regular check-ups with healthcare providers</li>
          </ul>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            COPD Management:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>Smoking cessation (the most important step)</li>
            <li>Medication adherence</li>
            <li>Pulmonary rehabilitation</li>
            <li>Oxygen therapy if prescribed</li>
            <li>Avoiding respiratory irritants and infections</li>
            <li>Getting vaccinated against flu and pneumonia</li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500 mt-4">
            <p className="font-body text-blue-700">
              <span className="font-semibold">Proper Inhaler Technique:</span>{" "}
              Many patients don't use their inhalers correctly, which can reduce
              medication effectiveness. Ask your pharmacist to review your
              inhaler technique to ensure you're getting the full benefit of
              your medications.
            </p>
          </div>
        </div>
      ),
      icon: "🫁",
    },
    {
      title: "Mental Health",
      content: (
        <div className="space-y-4">
          <p className="font-body text-gray-600">
            Mental health is an essential component of overall wellness.
            Conditions like depression and anxiety are common and treatable with
            proper care and support.
          </p>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Common Mental Health Conditions:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>Depression</li>
            <li>Anxiety disorders</li>
            <li>Bipolar disorder</li>
            <li>Post-traumatic stress disorder (PTSD)</li>
            <li>Schizophrenia</li>
          </ul>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Self-Care Strategies:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>Regular physical activity</li>
            <li>Adequate sleep</li>
            <li>Healthy eating habits</li>
            <li>Stress management techniques (meditation, deep breathing)</li>
            <li>Maintaining social connections</li>
            <li>Limiting alcohol and avoiding recreational drugs</li>
            <li>Setting realistic goals and priorities</li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500 mt-4">
            <p className="font-body text-blue-700">
              <span className="font-semibold">Seeking Help:</span> If you're
              experiencing persistent feelings of sadness, anxiety, or other
              mental health concerns, don't hesitate to reach out to a
              healthcare provider. Mental health conditions are medical
              conditions that require proper treatment, just like physical
              health conditions.
            </p>
          </div>
        </div>
      ),
      icon: "🧠",
    },
  ];

  return (
    <div className="space-y-8">
      <TitleSectionAnimation className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary">
        <div className="flex flex-col xl:flex-row items-start gap-6">
          <div className="flex-1">
            <h2 className="font-title text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
              Disease Management
            </h2>
            <p className="font-body text-lg text-gray-600">
              Understanding your health condition is the first step toward
              effective management. Our disease management resources provide
              evidence-based information to help you navigate your health
              journey with confidence.
            </p>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 aspect-square rounded-xl overflow-hidden mb-6 xl:mb-0">
            <img
              src="/assets/PatientHub/disease_management_PH.png"
              alt="Disease Management"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </TitleSectionAnimation>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <TabNavigation
            items={diseaseCategories}
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
            {diseaseCategories[activeTab].content}
          </Stagger1>
        </div>
      </div>

      <div
        ref={bottomSectionRef}
        className="bg-gradient-to-r from-primary/10 to-purple-100 rounded-xl p-6 shadow-md"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="text-3xl mb-4 md:mb-0 bottom-icon">📚</div>
          <div className="bottom-text-content">
            <h3 className="font-title text-xl font-semibold mb-3 text-gray-800">
              Need More Information?
            </h3>
            <p className="font-body text-gray-600">
              Our pharmacists are available to discuss your specific health
              concerns and provide personalized guidance. Contact us for a
              consultation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseManagement;
