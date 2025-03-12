import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Main component
const BlogHero: React.FC = () => {
  // Create refs for the elements we want to animate
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  // Text animation effect
  useEffect(() => {
    // Ensure refs are attached before animating
    if (!titleRef.current || !subtitleRef.current) return;

    // Set initial state to prevent flash of unstyled content
    gsap.set([titleRef.current, subtitleRef.current], {
      opacity: 0,
      y: 20,
    });

    // Create a timeline for sequenced animations with a slight delay
    const tl = gsap.timeline({
      defaults: {
        ease: "power2.out",
        duration: 1,
      },
      delay: 0.2, // Small delay to ensure component is fully mounted
    });

    // Add animations to the timeline
    tl.fromTo(
      titleRef.current,
      {
        y: 30,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        onComplete: () => console.log("Title animation complete"),
      }
    ).fromTo(
      subtitleRef.current,
      {
        y: 20,
        opacity: 0,
        scale: 0.98,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        onComplete: () => console.log("Subtitle animation complete"),
      },
      "-=0.5" // Start before the previous animation finishes
    );

    // Cleanup function
    return () => {
      // Kill all GSAP animations for these elements
      gsap.killTweensOf([titleRef.current, subtitleRef.current]);
      tl.kill(); // Kill the timeline when component unmounts
    };
  }, []);

  return (
    <div className="relative">
      {/* Purple background with straight edge bottom */}
      <div className="bg-gradient-to-br from-primary to-[#7c5ae0] pt-32 pb-16 md:pt-40 md:pb-20 flex items-center justify-center">
        {/* Content container */}
        <div className="container-narrow text-center text-white relative z-10">
          <h1 ref={titleRef} className="heading-2 mb-4">
            Health & Wellness Blog
          </h1>
          <p ref={subtitleRef} className="body-large">
            Insights, research, and advice from healthcare professionals
          </p>
        </div>

        {/* Straight edge divider */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#FDF8EC]"></div>
      </div>
    </div>
  );
};

export default BlogHero;
