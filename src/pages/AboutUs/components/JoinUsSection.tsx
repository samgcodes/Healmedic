import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

interface Button {
  text: string;
  link: string;
  type: "primary" | "secondary";
}

interface JoinUsSectionProps {
  title: string;
  content: string;
  buttons: Button[];
}

const JoinUsSection: React.FC<JoinUsSectionProps> = ({
  title,
  content,
  buttons,
}) => {
  // Create refs for animation
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  // Setup intersection observer
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Only run animation when section comes into view
    if (!inView) return;

    // Ensure refs are attached
    if (!titleRef.current || !contentRef.current || !buttonsRef.current) return;

    // Set initial state
    gsap.set([titleRef.current, contentRef.current, buttonsRef.current], {
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
    tl.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
      .fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0 },
        "-=0.4"
      )
      .fromTo(
        buttonsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0 },
        "-=0.4"
      );

    // Cleanup
    return () => {
      tl.kill();
    };
  }, [inView]);

  return (
    <div className="container mx-auto text-center" ref={inViewRef}>
      <h2
        ref={titleRef}
        className="font-title text-3xl md:text-4xl font-semibold mb-6 text-gray-800"
      >
        {title}
      </h2>
      <p
        ref={contentRef}
        className="font-body text-lg text-gray-600 mb-8 leading-relaxed"
      >
        {content}
      </p>
      <div
        ref={buttonsRef}
        className="flex flex-col sm:flex-row justify-center gap-4"
      >
        {buttons.map((button, index) => (
          <Link key={index} to={button.link} className={`btn-${button.type}`}>
            {button.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JoinUsSection;
