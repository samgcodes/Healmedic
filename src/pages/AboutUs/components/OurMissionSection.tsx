import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

interface OurMissionSectionProps {
  title: string;
  content: string;
}

const OurMissionSection: React.FC<OurMissionSectionProps> = ({
  title,
  content,
}) => {
  // Create refs for animation
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Setup intersection observer
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Only run animation when section comes into view
    if (!inView) return;

    // Ensure refs are attached
    if (!titleRef.current || !contentRef.current) return;

    // Set initial state
    gsap.set([titleRef.current, contentRef.current], {
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
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0 }
    ).fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0 },
      "-=0.4"
    );

    // Cleanup
    return () => {
      tl.kill();
    };
  }, [inView]); // Re-run when inView changes

  return (
    <div className="container mx-auto mb-20" ref={inViewRef}>
      <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary">
        <h2
          ref={titleRef}
          className="font-title text-3xl md:text-4xl font-semibold mb-8 text-gray-800 text-center"
        >
          {title}
        </h2>
        <div
          ref={contentRef}
          className="space-y-6 font-body text-lg text-gray-600 leading-relaxed"
        >
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default OurMissionSection;
