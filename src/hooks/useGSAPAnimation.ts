import { useEffect, useRef, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Define our animation options type
type AnimationOptions = {
  trigger?: boolean;
  delay?: number;
  duration?: number;
  ease?: string;
  from?: gsap.TweenVars;
  to: gsap.TweenVars;
  // Use GSAP's own ScrollTrigger vars type
  scrollTriggerVars?: Omit<ScrollTrigger.Vars, "trigger">;
};

/**
 * Custom hook for GSAP animations with ScrollTrigger support
 *
 * @param options Animation options including ScrollTrigger configuration
 * @returns RefObject to attach to the element you want to animate
 *
 * @example
 * // Basic fade-in animation on scroll
 * const elementRef = useGSAPAnimation({
 *   trigger: true,
 *   from: { opacity: 0, y: 50 },
 *   to: { opacity: 1, y: 0 },
 *   duration: 0.8
 * });
 *
 * // Then in your JSX:
 * <div ref={elementRef}>Content to animate</div>
 */
export const useGSAPAnimation = <T extends HTMLElement>(
  options: AnimationOptions
): RefObject<T> => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state if 'from' is provided
    if (options.from) {
      gsap.set(element, options.from);
    }

    // Create animation
    let animation;

    if (options.trigger) {
      // ScrollTrigger animation
      animation = gsap.to(element, {
        ...options.to,
        duration: options.duration || 0.5,
        delay: options.delay || 0,
        ease: options.ease || "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=100",
          toggleActions: "play none none none",
          ...options.scrollTriggerVars,
        },
      });
    } else {
      // Regular animation
      animation = gsap.to(element, {
        ...options.to,
        duration: options.duration || 0.5,
        delay: options.delay || 0,
        ease: options.ease || "power2.out",
      });
    }

    // Cleanup
    return () => {
      animation.kill();
      if (options.trigger) {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.vars.trigger === element) {
            trigger.kill();
          }
        });
      }
    };
  }, [options]);

  return elementRef;
};

/**
 * Custom hook for creating staggered animations with GSAP
 *
 * @param options Animation options
 * @param staggerAmount Amount of delay between each child animation
 * @returns [containerRef, itemClass] - Ref for the container and class name for child items
 *
 * @example
 * // Staggered animation for a list
 * const [listRef, itemClass] = useGSAPStaggerAnimation({
 *   trigger: true,
 *   from: { opacity: 0, y: 20 },
 *   to: { opacity: 1, y: 0 },
 * }, 0.1);
 *
 * // Then in your JSX:
 * <ul ref={listRef}>
 *   <li className={itemClass}>Item 1</li>
 *   <li className={itemClass}>Item 2</li>
 *   <li className={itemClass}>Item 3</li>
 * </ul>
 */
export const useGSAPStaggerAnimation = <T extends HTMLElement>(
  options: AnimationOptions,
  staggerAmount: number = 0.1
): [RefObject<T>, string] => {
  const containerRef = useRef<T>(null);
  const itemClassName = "gsap-stagger-item";

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(`.${itemClassName}`);

    // Set initial state if 'from' is provided
    if (options.from) {
      gsap.set(items, options.from);
    }

    // Create animation
    let animation;

    if (options.trigger) {
      // ScrollTrigger animation with stagger
      animation = gsap.to(items, {
        ...options.to,
        duration: options.duration || 0.5,
        delay: options.delay || 0,
        stagger: staggerAmount,
        ease: options.ease || "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top bottom-=100",
          toggleActions: "play none none none",
          ...options.scrollTriggerVars,
        },
      });
    } else {
      // Regular animation with stagger
      animation = gsap.to(items, {
        ...options.to,
        duration: options.duration || 0.5,
        delay: options.delay || 0,
        stagger: staggerAmount,
        ease: options.ease || "power2.out",
      });
    }

    // Cleanup
    return () => {
      animation.kill();
      if (options.trigger) {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.vars.trigger === container) {
            trigger.kill();
          }
        });
      }
    };
  }, [options, staggerAmount]);

  return [containerRef, itemClassName];
};

/**
 * Custom hook for creating timeline-based GSAP animations
 *
 * @param timelineOptions GSAP timeline options
 * @param scrollTriggerOptions ScrollTrigger options (optional)
 * @returns [ref, timeline] - Ref for the container and the GSAP timeline
 *
 * @example
 * // Timeline animation triggered on scroll
 * const [sectionRef, timeline] = useGSAPTimeline(
 *   { defaults: { duration: 0.5, ease: "power2.out" } },
 *   { trigger: true, start: "top center" }
 * );
 *
 * // Add animations in useEffect
 * useEffect(() => {
 *   if (titleRef.current && textRef.current) {
 *     timeline
 *       .from(titleRef.current, { opacity: 0, y: 30 })
 *       .from(textRef.current, { opacity: 0, y: 20 }, "-=0.3");
 *   }
 * }, [timeline]);
 */
export const useGSAPTimeline = <T extends HTMLElement>(
  timelineOptions: gsap.TimelineVars = {},
  scrollTriggerOptions?: Omit<ScrollTrigger.Vars, "animation"> & {
    trigger?: boolean;
  }
): [RefObject<T>, gsap.core.Timeline] => {
  const containerRef = useRef<T>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Create timeline
    const timeline = gsap.timeline({
      paused: true,
      ...timelineOptions,
    });

    timelineRef.current = timeline;

    // Add ScrollTrigger if options provided
    if (scrollTriggerOptions?.trigger && containerRef.current) {
      // Create a new object without the 'trigger' property
      const { trigger, ...restOptions } = scrollTriggerOptions;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none",
        animation: timeline,
        ...restOptions,
      });
    } else {
      // Play timeline immediately if no ScrollTrigger
      timeline.play();
    }

    // Cleanup
    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.animation === timeline) {
          trigger.kill();
        }
      });
    };
  }, [timelineOptions, scrollTriggerOptions]);

  return [containerRef, timelineRef.current as gsap.core.Timeline];
};
