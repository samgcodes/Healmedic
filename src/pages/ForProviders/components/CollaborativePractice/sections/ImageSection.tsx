import React, { useRef, useEffect, useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimationContext } from "../../CollaborativePractice";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ImageSectionProps {
  imageDescription: string;
  imageUrl?: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({
  imageDescription,
  imageUrl,
}) => {
  const { isInitialLoad } = useContext(AnimationContext);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Set up GSAP animations
  useEffect(() => {
    if (!sectionRef.current) return;

    // Set initial state for the section
    gsap.set(sectionRef.current, {
      opacity: isInitialLoad ? 1 : 0,
      y: isInitialLoad ? 0 : 20,
    });

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

      // Add the animation to the timeline
      scrollTl.to(sectionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, [isInitialLoad]);

  return (
    <div ref={sectionRef} className="max-w-3xl mx-auto">
      <div className="bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center shadow-md aspect-video relative">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={imageDescription}
            className="w-full h-full object-cover"
          />
        ) : (
          <>
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
              Image: {imageDescription}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageSection;
