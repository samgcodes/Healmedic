import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import useMediaQuery, { breakpoints } from "../../../hooks/useMediaQuery";

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery(breakpoints.mobile);

  useEffect(() => {
    // Adjust animation duration for mobile
    const duration = isMobile ? 0.4 : 0.6;

    // Create a fresh timeline for animations
    const tl = gsap.timeline({
      defaults: {
        ease: "power2.out",
        duration: duration,
      },
    });

    // Make sure we have the elements before proceeding
    if (!titleRef.current || !subtitleRef.current) {
      return;
    }

    // Set initial state for text elements
    gsap.set([titleRef.current, subtitleRef.current], {
      y: 20,
      opacity: 0,
    });

    // Simple fade-in animation for title (no character splitting)
    tl.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: duration * 0.8,
    });

    // Add subtitle animation
    tl.to(
      subtitleRef.current,
      {
        y: 0,
        opacity: 1,
        duration: duration * 0.6,
      },
      "-=0.3" // Start slightly before the previous animation ends
    );

    // Cleanup
    return () => {
      tl.kill();
    };
  }, [isMobile]);

  return (
    <div className="relative">
      {/* Purple background with straight bottom edge */}
      <div className="bg-gradient-to-br from-primary to-[#7c5ae0] pt-32 pb-16 md:pt-40 md:pb-20">
        <div
          ref={containerRef}
          className="container-narrow text-center text-white relative z-10"
        >
          <h1 ref={titleRef} className="heading-2 mb-4">
            Patient Hub
          </h1>
          <p ref={subtitleRef} className="body-large">
            Your Health Education Resource Center
          </p>
        </div>

        {/* Straight edge divider */}
        <div
          ref={dividerRef}
          className="absolute bottom-0 left-0 right-0 h-4 bg-[#FDF8EC] origin-left"
        ></div>
      </div>
    </div>
  );
};

export default HeroSection;
