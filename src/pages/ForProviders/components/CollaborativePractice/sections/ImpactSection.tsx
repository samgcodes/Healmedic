import React, { useRef, useEffect, useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PercentageBar from "../charts/PercentageBar";
import { AnimationContext } from "../../CollaborativePractice";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ImpactSectionProps {
  impactData: {
    title: string;
    description: string;
    statistics: Array<{
      percentage: number;
      title: string;
      description: string;
      source: string;
    }>;
  };
}

const ImpactSection: React.FC<ImpactSectionProps> = ({ impactData }) => {
  const { isInitialLoad } = useContext(AnimationContext);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const statCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const statCards = statCardsRef.current.filter(Boolean);

    if (!section || !title || !description || statCards.length === 0) return;

    // Set initial states based on whether this is the initial load or not
    gsap.set(title, {
      opacity: isInitialLoad ? 1 : 0,
      y: isInitialLoad ? 0 : -10,
    });
    gsap.set(description, { opacity: isInitialLoad ? 1 : 0 });
    gsap.set(statCards, {
      opacity: isInitialLoad ? 1 : 0,
      scale: isInitialLoad ? 1 : 0.9,
    });

    // If it's not the initial load, set up scroll-triggered animations
    if (!isInitialLoad) {
      // Create a timeline for scroll-triggered animations
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
      });

      // Add animations to timeline
      scrollTl
        .to(title, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        })
        .to(
          description,
          {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.1"
        )
        .to(
          statCards,
          {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.1"
        );
    }

    // Add hover animations to stat cards
    statCards.forEach((card) => {
      if (!card) return;

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -5,
          boxShadow: "0 15px 30px -5px rgba(138, 103, 230, 0.2)",
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
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Remove event listeners
      statCards.forEach((card) => {
        if (!card) return;
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
    };
  }, [isInitialLoad, impactData]);

  return (
    <div
      ref={sectionRef}
      className="mb-10 bg-gradient-to-br from-white to-primary/5 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg"
    >
      <h3
        ref={titleRef}
        className="font-title text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center text-gray-800"
      >
        {impactData.title}
      </h3>
      <p
        ref={descriptionRef}
        className="font-body text-sm sm:text-base text-gray-600 text-center mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto"
      >
        {impactData.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-10">
        {impactData.statistics.map((stat, index) => (
          <div
            key={stat.title}
            ref={(el) => (statCardsRef.current[index] = el)}
            className="bg-white rounded-xl p-4 sm:p-5 lg:p-6 text-center"
          >
            <div className="relative mb-3 sm:mb-4 mx-auto w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 flex items-center justify-center">
              <PercentageBar
                percentage={stat.percentage}
                mainColor="#8a67e6"
                delay={isInitialLoad ? 0 : 0.3 + index * 0.1}
              />
            </div>
            <div className="font-title text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
              {stat.title}
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              {stat.description}
              <span className="block mt-1 sm:mt-2 text-xs text-gray-500">
                Source: {stat.source}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactSection;
