import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

interface CommitmentFeature {
  title: string;
  description: string;
}

interface CommitmentSectionProps {
  features: CommitmentFeature[];
}

const CommitmentSection: React.FC<CommitmentSectionProps> = ({ features }) => {
  // Create refs for animation
  const titleRef = useRef<HTMLHeadingElement>(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);

  // Setup intersection observer
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Only run animation when section comes into view
    if (!inView) return;

    // Ensure refs are attached
    if (!titleRef.current || featuresRef.current.length === 0) return;

    // Set initial state
    gsap.set(titleRef.current, {
      opacity: 0,
      y: 30,
    });

    gsap.set(featuresRef.current, {
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

    // Animate each feature with staggered delay
    featuresRef.current.forEach((feature, index) => {
      if (feature) {
        tl.fromTo(
          feature,
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
  }, [inView, features.length]);

  return (
    <div className="container mx-auto mb-20" ref={inViewRef}>
      <h2
        ref={titleRef}
        className="font-title text-3xl md:text-4xl font-semibold mb-8 text-gray-800 text-center"
      >
        Our Commitment to You
      </h2>

      <div className="space-y-6">
        {features.map((item, index) => (
          <div
            key={index}
            ref={(el) => (featuresRef.current[index] = el)}
            className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary"
          >
            <h3 className="font-title text-xl font-semibold mb-2 text-gray-800">
              {item.title}
            </h3>
            <p className="font-body text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommitmentSection;
