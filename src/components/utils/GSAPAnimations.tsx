import React, { ReactNode, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface AnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

// FadeIn component using GSAP ScrollTrigger
export const FadeIn: React.FC<AnimationProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state
    gsap.set(element, { opacity: 0, y: 20 });

    // Create animation with ScrollTrigger
    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top bottom-=100",
        toggleActions: "play none none none",
      },
    });

    // Cleanup
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [delay, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

// StaggeredList component using GSAP
export const StaggeredList: React.FC<
  AnimationProps & { staggerDelay?: number }
> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  staggerDelay = 0.1,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const childElements = Array.from(container.children);

    // Set initial state
    gsap.set(childElements, { opacity: 0, y: 20 });

    // Create staggered animation with ScrollTrigger
    const animation = gsap.to(childElements, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger: staggerDelay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: "top bottom-=100",
        toggleActions: "play none none none",
      },
    });

    // Cleanup
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [delay, duration, staggerDelay, children]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

// AnimatedButton component using GSAP
export const AnimatedButton: React.FC<
  AnimationProps & {
    onClick?: () => void;
    type?: "pulse" | "shake" | "scale";
  }
> = ({ children, className = "", onClick, type = "scale" }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    // Different animation types
    if (type === "pulse") {
      const pulseAnimation = gsap
        .timeline({ repeat: -1, yoyo: true })
        .to(button, { scale: 1.03, duration: 0.75, ease: "sine.inOut" });

      // Hover effect
      button.addEventListener("mouseenter", () => {
        gsap.to(button, { scale: 1.05, duration: 0.3 });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, { scale: 1, duration: 0.3 });
      });

      // Cleanup
      return () => {
        pulseAnimation.kill();
        button.removeEventListener("mouseenter", () => {});
        button.removeEventListener("mouseleave", () => {});
      };
    }

    if (type === "shake") {
      // Hover effect with shake
      button.addEventListener("mouseenter", () => {
        // Create a timeline for the shake effect
        const shakeTl = gsap.timeline();
        shakeTl
          .to(button, { x: -5, duration: 0.1, ease: "power1.inOut" })
          .to(button, { x: 5, duration: 0.1, ease: "power1.inOut" })
          .to(button, { x: -5, duration: 0.1, ease: "power1.inOut" })
          .to(button, { x: 5, duration: 0.1, ease: "power1.inOut" })
          .to(button, { x: 0, duration: 0.1, ease: "power1.inOut" });
      });

      // Cleanup
      return () => {
        button.removeEventListener("mouseenter", () => {});
      };
    }

    // Default scale animation
    button.addEventListener("mouseenter", () => {
      gsap.to(button, { scale: 1.05, duration: 0.3 });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(button, { scale: 1, duration: 0.3 });
    });

    button.addEventListener("mousedown", () => {
      gsap.to(button, { scale: 0.95, duration: 0.1 });
    });

    button.addEventListener("mouseup", () => {
      gsap.to(button, { scale: 1.05, duration: 0.1 });
    });

    // Cleanup
    return () => {
      button.removeEventListener("mouseenter", () => {});
      button.removeEventListener("mouseleave", () => {});
      button.removeEventListener("mousedown", () => {});
      button.removeEventListener("mouseup", () => {});
    };
  }, [type]);

  return (
    <button ref={buttonRef} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

// AnimatedCard component using GSAP
export const AnimatedCard: React.FC<
  AnimationProps & { onClick?: () => void }
> = ({ children, className = "", onClick, delay = 0, duration = 0.5 }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Set initial state
    gsap.set(card, { opacity: 0, y: 20 });

    // Create animation with ScrollTrigger
    const animation = gsap.to(card, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=100",
        toggleActions: "play none none none",
      },
    });

    // Hover effect
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
        duration: 0.3,
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        duration: 0.3,
      });
    });

    // Cleanup
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === card) {
          trigger.kill();
        }
      });
      card.removeEventListener("mouseenter", () => {});
      card.removeEventListener("mouseleave", () => {});
    };
  }, [delay, duration]);

  return (
    <div ref={cardRef} className={className} onClick={onClick}>
      {children}
    </div>
  );
};

// SectionTitle component using GSAP
export const SectionTitle: React.FC<{ title: string; className?: string }> = ({
  title,
  className = "",
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    if (!titleElement) return;

    // Set initial state
    gsap.set(titleElement, { opacity: 0, y: 20 });

    // Create animation with ScrollTrigger
    const animation = gsap.to(titleElement, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleElement,
        start: "top bottom-=100",
        toggleActions: "play none none none",
      },
    });

    // Cleanup
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === titleElement) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <h2 ref={titleRef} className={`heading-3 text-primary mb-6 ${className}`}>
      {title}
    </h2>
  );
};
