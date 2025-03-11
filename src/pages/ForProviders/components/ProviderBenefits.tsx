import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { providerBenefitsData } from "../data";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProviderBenefits: React.FC = () => {
  const mainSectionRef = useRef<HTMLDivElement>(null);
  const benefitCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const providerTypesSectionRef = useRef<HTMLDivElement>(null);
  const providerTypeCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const whyUsSectionRef = useRef<HTMLDivElement>(null);

  // Set up GSAP animations
  useEffect(() => {
    // Main section animation
    if (mainSectionRef.current) {
      gsap.fromTo(
        mainSectionRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mainSectionRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Benefit cards staggered animation
    if (benefitCardsRef.current.filter(Boolean).length > 0) {
      gsap.fromTo(
        benefitCardsRef.current.filter(Boolean),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mainSectionRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
        }
      );

      // Add hover animations to benefit cards
      benefitCardsRef.current.filter(Boolean).forEach((card) => {
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

    // Provider types section animation
    if (providerTypesSectionRef.current) {
      gsap.fromTo(
        providerTypesSectionRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: providerTypesSectionRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Provider type cards staggered animation
    if (providerTypeCardsRef.current.filter(Boolean).length > 0) {
      gsap.fromTo(
        providerTypeCardsRef.current.filter(Boolean),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: providerTypesSectionRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
        }
      );

      // Add hover animations to provider type cards
      providerTypeCardsRef.current.filter(Boolean).forEach((card) => {
        if (!card) return;

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -5,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }

    // Why us section animation
    if (whyUsSectionRef.current) {
      gsap.fromTo(
        whyUsSectionRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: whyUsSectionRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate the grid items
      const gridItems = whyUsSectionRef.current.querySelectorAll(".grid > div");
      gsap.fromTo(
        gridItems,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: whyUsSectionRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Remove event listeners
      benefitCardsRef.current.filter(Boolean).forEach((card) => {
        if (!card) return;
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });

      providerTypeCardsRef.current.filter(Boolean).forEach((card) => {
        if (!card) return;
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div className="space-y-8">
      <div
        ref={mainSectionRef}
        className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary"
      >
        <h2 className="font-title text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
          {providerBenefitsData.title}
        </h2>
        <p className="font-body text-lg text-gray-600 mb-6 max-w-3xl">
          {providerBenefitsData.description}
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {providerBenefitsData.benefits.map((benefit: any, index: number) => (
            <div
              key={benefit.title}
              ref={(el) => (benefitCardsRef.current[index] = el)}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="font-title text-xl font-semibold mb-3 text-gray-800">
                {benefit.title}
              </h3>
              <p className="font-body text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Provider Types */}
      <div
        ref={providerTypesSectionRef}
        className="bg-white rounded-xl p-8 shadow-lg"
      >
        <h3 className="font-title text-2xl font-semibold mb-8 text-center text-gray-800">
          Benefits for Different Provider Types
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {providerBenefitsData.providerTypes.map(
            (providerType: any, index: number) => (
              <div
                key={providerType.type}
                ref={(el) => (providerTypeCardsRef.current[index] = el)}
                className="bg-white rounded-lg overflow-hidden shadow-md h-full"
              >
                <div className="bg-primary p-4">
                  <h4 className="font-title text-xl font-semibold text-white text-center">
                    {providerType.type}
                  </h4>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {providerType.benefits.map(
                      (benefit: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2 mt-1">✓</span>
                          <span className="font-body text-gray-700">
                            {benefit}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Why Working With Us Is Beneficial */}
      <div
        ref={whyUsSectionRef}
        className="bg-gradient-to-r from-primary/10 to-purple-100 rounded-xl p-8 shadow-md"
      >
        <h3 className="font-title text-2xl font-semibold mb-6 text-gray-800">
          Why Working With Us Is Beneficial
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h4 className="font-title text-xl font-semibold mb-4 text-primary">
              Advanced Practice Credentials
            </h4>
            <p className="font-body text-gray-600 mb-4">
              Our pharmacists hold Advanced Practice Pharmacist (APh) licensure,
              allowing them to provide a higher level of clinical care. This
              specialized credential enables our team to:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1 font-bold">✓</span>
                <span className="font-body text-gray-700">
                  Independently manage and adjust medications within
                  collaborative practice agreements
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1 font-bold">✓</span>
                <span className="font-body text-gray-700">
                  Order and interpret laboratory tests related to drug therapy
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1 font-bold">✓</span>
                <span className="font-body text-gray-700">
                  Provide more comprehensive clinical services than traditional
                  pharmacists
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h4 className="font-title text-xl font-semibold mb-4 text-primary">
              Measurable Outcomes
            </h4>
            <p className="font-body text-gray-600 mb-4">
              Our collaborative approach has demonstrated significant
              improvements in key healthcare metrics:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1 font-bold">✓</span>
                <span className="font-body text-gray-700">
                  30% improvement in medication adherence rates
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1 font-bold">✓</span>
                <span className="font-body text-gray-700">
                  25% reduction in medication-related adverse events
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1 font-bold">✓</span>
                <span className="font-body text-gray-700">
                  20% decrease in hospital readmissions for chronic disease
                  patients
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1 font-bold">✓</span>
                <span className="font-body text-gray-700">
                  Significant time savings for physicians through collaborative
                  medication management
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderBenefits;
