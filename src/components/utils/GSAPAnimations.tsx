import React, { ReactNode, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useMediaQuery, { breakpoints } from "../../hooks/useMediaQuery";

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

// Stagger1 component - Staggered content animation with mobile optimization
interface Stagger1Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  staggerAmount?: number;
  mobileOptimized?: boolean; // Whether to use simplified animations on mobile
  animateOnScroll?: boolean; // Whether to trigger on scroll or immediately
}

// TitleSectionAnimation component - Animated title section with staggered elements
interface TitleSectionAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const TitleSectionAnimation: React.FC<TitleSectionAnimationProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery(breakpoints.mobile);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Find the title, description, and image elements
    const title = container.querySelector("h2");
    const description = container.querySelector("p");
    const imageContainer = container.querySelector(".aspect-square");

    // Set initial states
    gsap.set(container, { opacity: 1 }); // Container is visible
    gsap.set(title, { opacity: 0, y: 30 });
    gsap.set(description, { opacity: 0, y: 20 });

    if (imageContainer) {
      gsap.set(imageContainer, { opacity: 0, scale: 0.9 });
    }

    // Create a timeline for the animation
    const tl = gsap.timeline({
      delay,
      defaults: { ease: "power2.out" },
      scrollTrigger: {
        trigger: container,
        start: "top bottom-=100",
        toggleActions: "play none none none",
      },
    });

    // Animate title
    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: isMobile ? 0.4 : 0.6,
    });

    // Animate description
    tl.to(
      description,
      {
        opacity: 1,
        y: 0,
        duration: isMobile ? 0.4 : 0.6,
      },
      "-=0.3" // Slight overlap with title animation
    );

    // Animate image container
    if (imageContainer) {
      tl.to(
        imageContainer,
        {
          opacity: 1,
          scale: 1,
          duration: isMobile ? 0.5 : 0.7,
          ease: "back.out(1.2)",
        },
        "-=0.4" // Overlap with description animation
      );
    }

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [delay, isMobile]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export const Stagger1: React.FC<Stagger1Props> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  staggerAmount = 0.05,
  mobileOptimized = true,
  animateOnScroll = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery(breakpoints.mobile);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Find all elements to animate
    const listItems = container.querySelectorAll("li");
    const headings = container.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const paragraphs = container.querySelectorAll("p");
    const infoBoxes = container.querySelectorAll(".bg-blue-50, .info-box");

    // Adjust duration based on device
    const baseDuration = isMobile ? Math.min(duration, 0.3) : duration;

    // Create a timeline for the animation
    const tl = gsap.timeline({
      defaults: {
        ease: isMobile ? "power1.out" : "power2.out",
        duration: baseDuration,
      },
      delay: delay,
    });

    // Set initial state for all elements
    gsap.set(container, { opacity: 0 });

    if (isMobile && mobileOptimized) {
      // MOBILE ANIMATION - Simplified staggered animation for better performance
      gsap.set(headings, { opacity: 0, y: 10 });
      gsap.set(paragraphs, { opacity: 0 });
      gsap.set(listItems, { opacity: 0, x: -5 });
      gsap.set(infoBoxes, { opacity: 0 });

      // Fade in content container
      tl.to(container, {
        opacity: 1,
        duration: baseDuration * 0.8,
      });

      // Animate headings with minimal stagger
      tl.to(headings, {
        opacity: 1,
        y: 0,
        stagger: staggerAmount,
      });

      // Animate paragraphs
      tl.to(
        paragraphs,
        {
          opacity: 1,
          stagger: staggerAmount,
        },
        "-=0.1"
      );

      // Animate list items with stagger
      tl.to(
        listItems,
        {
          opacity: 1,
          x: 0,
          stagger: Math.min(staggerAmount, 0.02), // Faster stagger for mobile
        },
        "-=0.1"
      );

      // Animate info boxes
      tl.to(
        infoBoxes,
        {
          opacity: 1,
          duration: baseDuration * 0.8,
        },
        "-=0.1"
      );
    } else {
      // DESKTOP ANIMATION - More sophisticated with staggered elements
      gsap.set(headings, { opacity: 0, y: 15 });
      gsap.set(paragraphs, { opacity: 0, y: 10 });
      gsap.set(listItems, { opacity: 0, y: 15 });
      gsap.set(infoBoxes, { opacity: 0, scale: 0.95 });

      // Fade in the content container first
      tl.to(container, {
        opacity: 1,
        duration: baseDuration * 0.5,
      });

      // Animate headings
      tl.to(
        headings,
        {
          opacity: 1,
          y: 0,
          duration: baseDuration * 0.6,
          stagger: staggerAmount * 2,
        },
        "-=0.1"
      );

      // Animate paragraphs
      tl.to(
        paragraphs,
        {
          opacity: 1,
          y: 0,
          duration: baseDuration * 0.6,
          stagger: staggerAmount * 2,
        },
        "-=0.2"
      );

      // Animate list items with stagger
      tl.to(
        listItems,
        {
          opacity: 1,
          y: 0,
          duration: baseDuration * 0.6,
          stagger: staggerAmount, // Faster stagger for smoother appearance
        },
        "-=0.2"
      );

      // Animate info boxes with a slight scale effect
      tl.to(
        infoBoxes,
        {
          opacity: 1,
          scale: 1,
          duration: baseDuration * 0.6,
        },
        "-=0.1"
      );
    }

    // Add scroll trigger if needed
    if (animateOnScroll) {
      tl.pause();

      const scrollTrigger = ScrollTrigger.create({
        trigger: container,
        start: "top bottom-=100",
        onEnter: () => tl.play(),
      });

      // Cleanup
      return () => {
        tl.kill();
        scrollTrigger.kill();
      };
    }

    // Cleanup if not scroll triggered
    return () => {
      tl.kill();
    };
  }, [
    children,
    delay,
    duration,
    staggerAmount,
    mobileOptimized,
    animateOnScroll,
    isMobile,
  ]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};
