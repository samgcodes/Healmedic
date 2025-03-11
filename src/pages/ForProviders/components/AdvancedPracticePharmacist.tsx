import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TitleSectionAnimation } from "../../../components/utils/GSAPAnimations";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AdvancedPracticePharmacist: React.FC = () => {
  // Refs for elements that need animations
  const certificationSectionRef = useRef<HTMLDivElement>(null);
  const certCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const clinicalCapabilitiesRef = useRef<HTMLDivElement>(null);
  const patientCareListRef = useRef<HTMLUListElement>(null);
  const medicationListRef = useRef<HTMLUListElement>(null);
  const impactSectionRef = useRef<HTMLDivElement>(null);
  const statCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const percentageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const quoteBoxRef = useRef<HTMLDivElement>(null);

  // Initialize refs arrays
  useEffect(() => {
    certCardRefs.current = certCardRefs.current.slice(0, 2);
    statCardRefs.current = statCardRefs.current.slice(0, 3);
    percentageRefs.current = percentageRefs.current.slice(0, 3);
  }, []);

  // Certification section animations
  useEffect(() => {
    if (!certificationSectionRef.current) return;

    // Animate the certification section
    gsap.fromTo(
      certificationSectionRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: certificationSectionRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate certification cards with stagger
    if (certCardRefs.current.filter(Boolean).length > 0) {
      gsap.fromTo(
        certCardRefs.current.filter(Boolean),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: certificationSectionRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
        }
      );

      // Add hover animations to certification cards
      certCardRefs.current.filter(Boolean).forEach((card) => {
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

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === certificationSectionRef.current) {
          trigger.kill();
        }
      });

      // Remove event listeners
      certCardRefs.current.filter(Boolean).forEach((card) => {
        if (!card) return;
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  // Clinical capabilities section animations
  useEffect(() => {
    if (
      !clinicalCapabilitiesRef.current ||
      !patientCareListRef.current ||
      !medicationListRef.current
    )
      return;

    // Animate the clinical capabilities section
    gsap.fromTo(
      clinicalCapabilitiesRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: clinicalCapabilitiesRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate list items with stagger
    const patientCareItems = patientCareListRef.current.querySelectorAll("li");
    const medicationItems = medicationListRef.current.querySelectorAll("li");

    gsap.fromTo(
      patientCareItems,
      { opacity: 0, x: -10 },
      {
        opacity: 1,
        x: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: patientCareListRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      medicationItems,
      { opacity: 0, x: -10 },
      {
        opacity: 1,
        x: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: medicationListRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none none",
        },
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (
          trigger.vars.trigger === clinicalCapabilitiesRef.current ||
          trigger.vars.trigger === patientCareListRef.current ||
          trigger.vars.trigger === medicationListRef.current
        ) {
          trigger.kill();
        }
      });
    };
  }, []);

  // Impact statistics section animations
  useEffect(() => {
    if (!impactSectionRef.current) return;

    // Animate the impact section
    gsap.fromTo(
      impactSectionRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: impactSectionRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate stat cards with stagger
    if (statCardRefs.current.filter(Boolean).length > 0) {
      gsap.fromTo(
        statCardRefs.current.filter(Boolean),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: impactSectionRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
        }
      );

      // Add hover animations to stat cards
      statCardRefs.current.filter(Boolean).forEach((card) => {
        if (!card) return;

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -5,
            boxShadow: "0 12px 25px -5px rgba(0, 0, 0, 0.1)",
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

    // Animate percentage numbers with scale effect
    if (percentageRefs.current.filter(Boolean).length > 0) {
      percentageRefs.current.filter(Boolean).forEach((percentage, index) => {
        if (!percentage) return;

        gsap.fromTo(
          percentage,
          { scale: 0.5, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            delay: 0.1 * (index + 1),
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: percentage,
              start: "top bottom-=50",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }

    // Animate quote box
    if (quoteBoxRef.current) {
      gsap.fromTo(
        quoteBoxRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: quoteBoxRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === impactSectionRef.current) {
          trigger.kill();
        }
      });

      // Remove event listeners
      statCardRefs.current.filter(Boolean).forEach((card) => {
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
              Advanced Practice Pharmacist
            </h2>
            <p className="font-body text-lg text-gray-600 mb-6">
              Our pharmacists hold Advanced Practice Pharmacist (APh) licensure,
              which represents the highest level of clinical pharmacy practice.
              This advanced credential enables our pharmacists to provide
              enhanced clinical services and work more autonomously within
              collaborative practice agreements.
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
                Image: Advanced Practice Pharmacist
              </p>
            </div>
          </div>
        </div>
      </TitleSectionAnimation>

      {/* APh Certification Requirements */}
      <div
        ref={certificationSectionRef}
        className="bg-white rounded-xl p-8 shadow-lg"
      >
        <h3 className="font-title text-2xl font-semibold mb-6 text-gray-800">
          Advanced Practice Certification
        </h3>
        <p className="font-body text-lg text-gray-600 mb-8 max-w-3xl">
          Advanced Practice Pharmacist (APh) is a specialized credential that
          requires rigorous training and experience beyond standard pharmacy
          licensure. To achieve this designation, pharmacists must meet the
          following requirements:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            ref={(el) => (certCardRefs.current[0] = el)}
            className="bg-white rounded-lg p-6 shadow-md border-l-4 border-primary h-full"
          >
            <div className="text-4xl mb-4">🎓</div>
            <h4 className="font-title text-xl font-semibold mb-3 text-gray-800">
              Advanced Education
            </h4>
            <p className="font-body text-gray-600">
              Completion of board-certified residencies, fellowships, or
              certification programs in specialized areas of pharmacy practice.
            </p>
          </div>

          <div
            ref={(el) => (certCardRefs.current[1] = el)}
            className="bg-white rounded-lg p-6 shadow-md border-l-4 border-primary h-full"
          >
            <div className="text-4xl mb-4">⏱️</div>
            <h4 className="font-title text-xl font-semibold mb-3 text-gray-800">
              Clinical Experience
            </h4>
            <p className="font-body text-gray-600">
              Extensive clinical experience in collaborative practice settings,
              including at least one year of experience providing clinical
              services to patients.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Clinical Capabilities (Legal Authority) */}
      <div
        ref={clinicalCapabilitiesRef}
        className="bg-white rounded-xl p-8 shadow-lg"
      >
        <h3 className="font-title text-2xl font-semibold mb-6 text-gray-800">
          Enhanced Clinical Capabilities
        </h3>
        <p className="font-body text-lg text-gray-600 mb-6 max-w-3xl">
          Advanced Practice Pharmacists are legally authorized to provide
          expanded clinical services:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-primary">
            <h4 className="font-title text-xl font-semibold mb-4 text-primary">
              Patient Care Services
            </h4>
            <ul ref={patientCareListRef} className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1 font-bold">✓</span>
                <span className="font-body text-gray-700">
                  Perform comprehensive patient assessments
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1 font-bold">✓</span>
                <span className="font-body text-gray-700">
                  Order and interpret drug therapy-related tests
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1 font-bold">✓</span>
                <span className="font-body text-gray-700">
                  Refer patients to other healthcare providers
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-primary">
            <h4 className="font-title text-xl font-semibold mb-4 text-primary">
              Medication Management
            </h4>
            <ul ref={medicationListRef} className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1 font-bold">✓</span>
                <span className="font-body text-gray-700">
                  Initiate, adjust, and discontinue drug therapy pursuant to a
                  collaborative practice agreement
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1 font-bold">✓</span>
                <span className="font-body text-gray-700">
                  Participate in the evaluation and management of diseases and
                  health conditions in collaboration with other healthcare
                  providers
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1 font-bold">✓</span>
                <span className="font-body text-gray-700">
                  Develop and implement medication therapy management plans
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* APh Impact Statistics */}
      <div
        ref={impactSectionRef}
        className="bg-gradient-to-r from-primary/10 to-purple-100 rounded-xl p-8 shadow-md"
      >
        <h3 className="font-title text-2xl font-semibold mb-6 text-center text-gray-800">
          Impact of Advanced Practice Pharmacists
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div
            ref={(el) => (statCardRefs.current[0] = el)}
            className="bg-white rounded-xl p-6 shadow-md text-center"
          >
            <div
              ref={(el) => (percentageRefs.current[0] = el)}
              className="text-5xl font-bold text-primary mb-2"
            >
              92%
            </div>
            <div className="font-title text-lg font-semibold text-gray-800 mb-2">
              Patient Satisfaction
            </div>
            <p className="text-sm text-gray-600">
              Patients report high satisfaction rates with APh-managed care
            </p>
          </div>

          <div
            ref={(el) => (statCardRefs.current[1] = el)}
            className="bg-white rounded-xl p-6 shadow-md text-center"
          >
            <div
              ref={(el) => (percentageRefs.current[1] = el)}
              className="text-5xl font-bold text-primary mb-2"
            >
              40%
            </div>
            <div className="font-title text-lg font-semibold text-gray-800 mb-2">
              Reduced Physician Workload
            </div>
            <p className="text-sm text-gray-600">
              Decrease in medication-related physician visits
            </p>
          </div>

          <div
            ref={(el) => (statCardRefs.current[2] = el)}
            className="bg-white rounded-xl p-6 shadow-md text-center"
          >
            <div
              ref={(el) => (percentageRefs.current[2] = el)}
              className="text-5xl font-bold text-primary mb-2"
            >
              45%
            </div>
            <div className="font-title text-lg font-semibold text-gray-800 mb-2">
              Better Medication Adherence
            </div>
            <p className="text-sm text-gray-600">
              Improvement in medication adherence rates
            </p>
          </div>
        </div>

        <div ref={quoteBoxRef} className="bg-white rounded-xl p-6 shadow-md">
          <p className="font-body text-center text-gray-600 italic">
            "Advanced Practice Pharmacists represent a significant evolution in
            pharmacy practice, enabling pharmacists to practice at the top of
            their license and serve as integral members of the healthcare team.
            Their expanded scope allows for more comprehensive patient care and
            better utilization of pharmacists' clinical expertise."
          </p>
          <p className="font-body text-center text-gray-500 mt-4">
            — American College of Clinical Pharmacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPracticePharmacist;
