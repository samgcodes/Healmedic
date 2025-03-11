import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { forProvidersPageData, prescriptionMethodsData } from "../data";
import { TitleSectionAnimation } from "../../../components/utils/GSAPAnimations";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HomePage: React.FC = () => {
  const prescriptionSectionRef = useRef<HTMLDivElement>(null);
  const emrSectionRef = useRef<HTMLDivElement>(null);
  const methodCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Set up GSAP animations
  useEffect(() => {
    // Prescription section animation
    if (prescriptionSectionRef.current) {
      gsap.fromTo(
        prescriptionSectionRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: prescriptionSectionRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Method cards staggered animation
    if (methodCardsRef.current.filter(Boolean).length > 0) {
      gsap.fromTo(
        methodCardsRef.current.filter(Boolean),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: prescriptionSectionRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
        }
      );

      // Add hover animations to method cards
      methodCardsRef.current.filter(Boolean).forEach((card) => {
        if (!card) return;

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }

    // EMR section animation
    if (emrSectionRef.current) {
      gsap.fromTo(
        emrSectionRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: emrSectionRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Remove event listeners
      methodCardsRef.current.filter(Boolean).forEach((card) => {
        if (!card) return;
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div className="space-y-8">
      <TitleSectionAnimation className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary">
        <div className="flex flex-col xl:flex-row items-start gap-6">
          <div className="flex-1">
            <h2 className="font-title text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
              {forProvidersPageData.headline}
            </h2>
            <p className="font-body text-lg text-gray-600 mb-6">
              {forProvidersPageData.subheadline}
            </p>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 aspect-square rounded-xl overflow-hidden mb-6 xl:mb-0">
            <div className="bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center shadow-md aspect-square relative">
              <svg
                className="w-24 h-24 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="text-sm text-gray-500 absolute bottom-4">
                Image: Healthcare providers collaborating with pharmacists
              </p>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md mt-6">
          <p className="font-body text-blue-700">
            <span className="font-semibold">How to use this hub:</span> Select
            any topic from the menu on the left to view detailed information and
            resources. Each section contains valuable content designed to help
            you collaborate effectively with our pharmacy team and enhance
            patient care.
          </p>
        </div>
      </TitleSectionAnimation>

      <div
        ref={prescriptionSectionRef}
        className="bg-white rounded-xl p-8 shadow-lg"
      >
        <h3 className="font-title text-2xl font-semibold mb-6 text-gray-800">
          {prescriptionMethodsData.title}
        </h3>
        <p className="font-body text-lg text-gray-600 mb-8 max-w-3xl">
          {prescriptionMethodsData.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prescriptionMethodsData.methods.map((method: any, index: number) => (
            <div
              key={method.title}
              ref={(el) => (methodCardsRef.current[index] = el)}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary h-full"
            >
              <div className="text-4xl mb-4">{method.icon}</div>
              <h4 className="font-title text-xl font-semibold mb-3 text-gray-800">
                {method.title}
              </h4>
              <p className="font-body text-gray-600 mb-4">
                {method.description}
              </p>
              <ul className="space-y-2">
                {method.details.map((detail: string, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-2 mt-1">✓</span>
                    <span className="font-body text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={emrSectionRef}
        className="bg-gradient-to-r from-primary/10 to-purple-100 rounded-xl p-6 shadow-md"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/3 xl:w-1/4 aspect-square rounded-xl overflow-hidden mb-6 xl:mb-0">
            <div className="bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center shadow-md aspect-square relative">
              <svg
                className="w-24 h-24 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="text-sm text-gray-500 absolute bottom-4">
                Image: EMR Integration
              </p>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-title text-xl font-semibold mb-3 text-gray-800">
              {prescriptionMethodsData.emrIntegration.title}
            </h3>
            <p className="font-body text-gray-600 mb-4">
              {prescriptionMethodsData.emrIntegration.description}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
              {prescriptionMethodsData.emrIntegration.supportedSystems
                .slice(0, 6)
                .map((system: string, index: number) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-[#8a67e6] to-[#9a77f6] rounded-lg p-2 text-center text-white text-sm shadow-md"
                  >
                    <span className="font-body">{system}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
