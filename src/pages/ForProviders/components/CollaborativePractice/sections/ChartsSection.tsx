import React, { useRef, useEffect, useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimeChart from "../charts/TimeChart";
import CostSavingsChart from "../charts/CostSavingsChart";
import SatisfactionChart from "../charts/SatisfactionChart";
import { AnimationContext } from "../../CollaborativePractice";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ChartsSectionProps {
  timeSavingsSource: string;
  costSavingsSource: string;
  satisfactionSource: string;
}

const ChartsSection: React.FC<ChartsSectionProps> = ({
  timeSavingsSource,
  costSavingsSource,
  satisfactionSource,
}) => {
  const { isInitialLoad } = useContext(AnimationContext);

  // Refs for chart containers
  const sectionRef = useRef<HTMLDivElement>(null);
  const timeSavingsRef = useRef<HTMLDivElement>(null);
  const costSavingsRef = useRef<HTMLDivElement>(null);
  const satisfactionRef = useRef<HTMLDivElement>(null);
  const patientOutcomesRef = useRef<HTMLDivElement>(null);

  // Refs for chart content
  const timeChartRef = useRef<HTMLDivElement>(null);
  const costChartRef = useRef<HTMLDivElement>(null);
  const satisfactionChartRef = useRef<HTMLDivElement>(null);

  // Set up GSAP animations
  useEffect(() => {
    // Set initial states based on whether this is the initial load or not
    if (timeSavingsRef.current && timeChartRef.current) {
      gsap.set(timeSavingsRef.current, {
        opacity: isInitialLoad ? 1 : 0,
        x: isInitialLoad ? 0 : -20,
      });
      gsap.set(timeChartRef.current, { opacity: isInitialLoad ? 1 : 0 });
    }

    if (costSavingsRef.current && costChartRef.current) {
      gsap.set(costSavingsRef.current, {
        opacity: isInitialLoad ? 1 : 0,
        x: isInitialLoad ? 0 : 20,
      });
      gsap.set(costChartRef.current, { opacity: isInitialLoad ? 1 : 0 });
    }

    if (satisfactionRef.current && satisfactionChartRef.current) {
      gsap.set(satisfactionRef.current, {
        opacity: isInitialLoad ? 1 : 0,
        y: isInitialLoad ? 0 : 20,
      });
      gsap.set(satisfactionChartRef.current, {
        opacity: isInitialLoad ? 1 : 0,
      });
    }

    if (patientOutcomesRef.current) {
      gsap.set(patientOutcomesRef.current, {
        opacity: isInitialLoad ? 1 : 0,
        y: isInitialLoad ? 0 : 20,
      });
    }

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

      // Time Savings section animation
      if (timeSavingsRef.current && timeChartRef.current) {
        scrollTl
          .to(timeSavingsRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.4,
            ease: "power2.out",
          })
          .to(
            timeChartRef.current,
            {
              opacity: 1,
              duration: 0.4,
              ease: "power2.out",
            },
            "-=0.2" // Slight overlap
          );
      }

      // Cost Savings section animation
      if (costSavingsRef.current && costChartRef.current) {
        scrollTl
          .to(
            costSavingsRef.current,
            {
              opacity: 1,
              x: 0,
              duration: 0.4,
              ease: "power2.out",
            },
            "-=0.2" // Slight overlap
          )
          .to(
            costChartRef.current,
            {
              opacity: 1,
              duration: 0.4,
              ease: "power2.out",
            },
            "-=0.2" // Slight overlap
          );
      }

      // Patient Satisfaction section animation
      if (satisfactionRef.current && satisfactionChartRef.current) {
        scrollTl
          .to(
            satisfactionRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
            },
            "-=0.2" // Slight overlap
          )
          .to(
            satisfactionChartRef.current,
            {
              opacity: 1,
              duration: 0.4,
              ease: "power2.out",
            },
            "-=0.2" // Slight overlap
          );
      }

      // Patient Outcomes section animation
      if (patientOutcomesRef.current) {
        scrollTl.to(
          patientOutcomesRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2" // Slight overlap
        );
      }
    }

    // Add hover animations to chart containers
    const addHoverAnimation = (ref: React.RefObject<HTMLDivElement>) => {
      if (!ref.current) return;

      ref.current.addEventListener("mouseenter", () => {
        gsap.to(ref.current, {
          y: -5,
          boxShadow: "0 15px 30px -5px rgba(138, 103, 230, 0.2)",
          duration: 0.2,
          ease: "power2.out",
        });
      });

      ref.current.addEventListener("mouseleave", () => {
        gsap.to(ref.current, {
          y: 0,
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          duration: 0.2,
          ease: "power2.out",
        });
      });
    };

    addHoverAnimation(timeSavingsRef);
    addHoverAnimation(costSavingsRef);
    addHoverAnimation(satisfactionRef);
    addHoverAnimation(patientOutcomesRef);

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Remove event listeners
      const removeHoverListeners = (ref: React.RefObject<HTMLDivElement>) => {
        if (!ref.current) return;
        ref.current.removeEventListener("mouseenter", () => {});
        ref.current.removeEventListener("mouseleave", () => {});
      };

      removeHoverListeners(timeSavingsRef);
      removeHoverListeners(costSavingsRef);
      removeHoverListeners(satisfactionRef);
      removeHoverListeners(patientOutcomesRef);
    };
  }, [isInitialLoad]);

  return (
    <div
      className="grid grid-cols-1 gap-8 sm:gap-10 lg:gap-12 mb-12"
      ref={sectionRef}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {/* Provider Time Savings */}
        <div
          ref={timeSavingsRef}
          className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-md"
        >
          <h4 className="font-title text-xl font-semibold mb-6 text-gray-800 text-center">
            Provider Time Savings
          </h4>
          <div
            ref={timeChartRef}
            className="flex items-center justify-center min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] w-full"
          >
            <TimeChart delay={isInitialLoad ? 0 : 0.5} />
          </div>
          <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
            <p className="text-xs sm:text-sm text-gray-600 text-center">
              Physicians reported saving an average of 5-7 hours per week on
              medication management tasks when working with pharmacists under
              CPAs.
            </p>
            <p className="text-xs text-gray-500 text-center">
              Source: {timeSavingsSource}
            </p>
          </div>
        </div>

        {/* Cost Savings */}
        <div
          ref={costSavingsRef}
          className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-md"
        >
          <h4 className="font-title text-xl font-semibold mb-6 text-gray-800 text-center">
            Cost Savings
          </h4>
          <div
            ref={costChartRef}
            className="flex items-center justify-center min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] w-full"
          >
            <CostSavingsChart delay={isInitialLoad ? 0 : 0.5} />
          </div>
          <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
            <p className="text-xs sm:text-sm text-gray-600 text-center">
              Per-patient annual cost savings increased over time, reaching an
              average of $4,300 by the third year of CPA implementation.
            </p>
            <p className="text-xs text-gray-500 text-center">
              Source: {costSavingsSource}
            </p>
          </div>
        </div>
      </div>

      {/* Patient Satisfaction Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mt-6 sm:mt-4">
        {/* Patient Satisfaction Chart */}
        <div
          ref={satisfactionRef}
          className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-md"
        >
          <h4 className="font-title text-xl font-semibold mb-6 text-gray-800 text-center">
            Patient Satisfaction
          </h4>
          <div
            ref={satisfactionChartRef}
            className="flex items-center justify-center min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] w-full"
          >
            <SatisfactionChart delay={isInitialLoad ? 0 : 0.5} />
          </div>
          <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
            <p className="text-xs sm:text-sm text-gray-600 text-center">
              92% of patients report high satisfaction with pharmacist-managed
              care.
            </p>
            <p className="text-xs text-gray-500 text-center">
              Source: {satisfactionSource}
            </p>
          </div>
        </div>

        {/* Patient Outcomes */}
        <div
          ref={patientOutcomesRef}
          className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-md"
        >
          <h4 className="font-title text-xl font-semibold mb-6 text-gray-800 text-center">
            Patient Outcomes
          </h4>
          <div className="flex flex-col items-center justify-center min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] w-full space-y-3 sm:space-y-4 lg:space-y-6">
            <div className="w-full max-w-md bg-gray-50 rounded-lg p-3 sm:p-4 lg:p-6 shadow-sm">
              <h5 className="font-semibold text-lg text-primary mb-3 text-center">
                Medication Adherence
              </h5>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Before CPA</span>
                <span className="text-sm font-semibold">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-gray-400 h-2.5 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
              <div className="flex items-center justify-between mt-4 mb-2">
                <span className="text-sm text-gray-600">After CPA</span>
                <span className="text-sm font-semibold">89%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full"
                  style={{ width: "89%" }}
                ></div>
              </div>
            </div>
            <div className="w-full max-w-md bg-gray-50 rounded-lg p-3 sm:p-4 lg:p-6 shadow-sm">
              <h5 className="font-semibold text-lg text-primary mb-3 text-center">
                Clinical Outcomes
              </h5>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-primary mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-sm">
                    28% reduction in A1C levels in diabetic patients
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-primary mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-sm">
                    32% fewer emergency department visits
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-primary mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-sm">
                    41% improvement in medication-related quality measures
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
            <p className="text-xs text-gray-500 text-center">
              Source: American Journal of Health-System Pharmacy, 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsSection;
