import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

interface CoFounder {
  name: string;
  title: string;
  image: string;
  bio: string[];
}

interface CoFoundersSectionProps {
  founders: CoFounder[];
}

const CoFoundersSection: React.FC<CoFoundersSectionProps> = ({ founders }) => {
  // Create refs for animation
  const titleRef = useRef<HTMLHeadingElement>(null);
  const founderRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Setup intersection observer
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Only run animation when section comes into view
    if (!inView) return;

    // Ensure refs are attached
    if (!titleRef.current || founderRefs.current.length === 0) return;

    // Set initial state
    gsap.set(titleRef.current, {
      opacity: 0,
      y: 30,
    });

    gsap.set(founderRefs.current, {
      opacity: 0,
      y: 30,
    });

    // Create animation timeline
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
        duration: 0.8,
      },
    });

    // Add animations to timeline
    tl.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0 });

    // Animate each founder with staggered delay
    founderRefs.current.forEach((founder, index) => {
      if (founder) {
        tl.fromTo(
          founder,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0 },
          `-=${index === 0 ? 0.4 : 0.6}`
        );
      }
    });

    // Cleanup
    return () => {
      tl.kill();
    };
  }, [inView, founders.length]);

  return (
    <div className="container mx-auto mb-20" ref={inViewRef}>
      <h2
        ref={titleRef}
        className="font-title text-3xl md:text-4xl font-semibold mb-10 text-gray-800 text-center"
      >
        Meet Our Co-Founders
      </h2>

      {founders.map((founder, index) => (
        <div
          key={founder.name}
          ref={(el) => (founderRefs.current[index] = el)}
          className={`bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary ${
            index < founders.length - 1 ? "mb-8" : ""
          }`}
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image placeholder */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center shadow-md">
                {founder.image.includes("placeholder") ? (
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
                ) : (
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="font-title text-2xl font-semibold mb-4 text-gray-800">
                {founder.name} – {founder.title}
              </h3>
              <div className="space-y-6 font-body text-lg text-gray-600 leading-relaxed">
                {founder.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoFoundersSection;
