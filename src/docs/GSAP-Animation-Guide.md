# GSAP Animation Guide

This guide explains how to use GSAP (GreenSock Animation Platform) for all animations in the HealMedic project, including scroll-triggered animations that replace Intersection Observer.

## Table of Contents

1. [Overview](#overview)
2. [GSAP Animation Components](#gsap-animation-components)
3. [GSAP Animation Hooks](#gsap-animation-hooks)
4. [Migrating from Framer Motion](#migrating-from-framer-motion)
5. [Migrating from Intersection Observer](#migrating-from-intersection-observer)
6. [Advanced GSAP Techniques](#advanced-gsap-techniques)

## Overview

GSAP is a powerful animation library that offers more flexibility and control than Framer Motion or Intersection Observer. This project uses GSAP for all animations, including:

- Entrance animations
- Hover effects
- Scroll-triggered animations
- Complex animation sequences

## GSAP Animation Components

The project includes reusable GSAP animation components in `src/components/utils/GSAPAnimations.tsx`:

### FadeIn

Fades in elements when they enter the viewport:

```jsx
import { FadeIn } from "../../components/utils/GSAPAnimations";

<FadeIn delay={0.2} duration={0.5}>
  <p>This content will fade in when scrolled into view</p>
</FadeIn>;
```

### StaggeredList

Animates list items with a staggered delay:

```jsx
import { StaggeredList } from "../../components/utils/GSAPAnimations";

<StaggeredList delay={0.2} staggerDelay={0.1}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</StaggeredList>;
```

### AnimatedButton

Button with hover animation:

```jsx
import { AnimatedButton } from "../../components/utils/GSAPAnimations";

<AnimatedButton
  type="pulse" // Options: "pulse", "shake", "scale" (default)
  onClick={handleClick}
  className="bg-primary text-white px-4 py-2 rounded"
>
  Click Me
</AnimatedButton>;
```

### AnimatedCard

Card with entrance and hover animations:

```jsx
import { AnimatedCard } from "../../components/utils/GSAPAnimations";

<AnimatedCard
  delay={0.3}
  className="bg-white p-4 rounded shadow"
  onClick={handleCardClick}
>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</AnimatedCard>;
```

### SectionTitle

Animated section title:

```jsx
import { SectionTitle } from "../../components/utils/GSAPAnimations";

<SectionTitle title="Our Services" className="mb-8" />;
```

## GSAP Animation Hooks

For more complex animations, use the custom hooks in `src/hooks/useGSAPAnimation.ts`:

### useGSAPAnimation

Basic hook for creating GSAP animations with ScrollTrigger:

```jsx
import { useGSAPAnimation } from "../../hooks/useGSAPAnimation";

const MyComponent = () => {
  const elementRef = useGSAPAnimation({
    trigger: true, // Enable ScrollTrigger
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    duration: 0.8,
    scrollTriggerVars: {
      start: "top center", // When to start the animation
      scrub: true, // Link animation progress to scroll position
    },
  });

  return (
    <div ref={elementRef} className="my-element">
      Content to animate
    </div>
  );
};
```

### useGSAPStaggerAnimation

Hook for creating staggered animations:

```jsx
import { useGSAPStaggerAnimation } from "../../hooks/useGSAPAnimation";

const MyList = () => {
  const [listRef, itemClass] = useGSAPStaggerAnimation(
    {
      trigger: true,
      from: { opacity: 0, y: 20 },
      to: { opacity: 1, y: 0 },
    },
    0.1
  ); // 0.1s delay between each item

  return (
    <ul ref={listRef}>
      <li className={itemClass}>Item 1</li>
      <li className={itemClass}>Item 2</li>
      <li className={itemClass}>Item 3</li>
    </ul>
  );
};
```

### useGSAPTimeline

Hook for creating complex animation sequences:

```jsx
import { useGSAPTimeline } from "../../hooks/useGSAPAnimation";
import { useRef } from "react";

const MySection = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  // Create a timeline that triggers on scroll
  const [sectionRef, timeline] = useGSAPTimeline(
    { defaults: { duration: 0.5, ease: "power2.out" } },
    { trigger: true, start: "top center" }
  );

  // Add animations to the timeline
  useEffect(() => {
    if (titleRef.current && textRef.current && imageRef.current) {
      // Set initial state
      gsap.set([titleRef.current, textRef.current, imageRef.current], {
        opacity: 0,
        y: 30,
      });

      // Add animations to timeline
      timeline
        .to(titleRef.current, { opacity: 1, y: 0 })
        .to(textRef.current, { opacity: 1, y: 0 }, "-=0.3") // Start 0.3s before previous animation ends
        .to(imageRef.current, { opacity: 1, y: 0 }, "-=0.3");
    }
  }, [timeline]);

  return (
    <section ref={sectionRef}>
      <h2 ref={titleRef}>Section Title</h2>
      <p ref={textRef}>Section text content</p>
      <img ref={imageRef} src="/image.jpg" alt="Description" />
    </section>
  );
};
```

## Migrating from Framer Motion

### Before (Framer Motion):

```jsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Content
</motion.div>;
```

### After (GSAP):

```jsx
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const elementRef = useRef(null);

useEffect(() => {
  const element = elementRef.current;
  if (!element) return;

  // Set initial state
  gsap.set(element, { opacity: 0, y: 30 });

  // Create animation with ScrollTrigger
  const animation = gsap.to(element, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top bottom-=100",
      toggleActions: "play none none none",
      once: true,
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
}, []);

<div ref={elementRef}>Content</div>;
```

Or using our custom hook:

```jsx
import { useGSAPAnimation } from "../../hooks/useGSAPAnimation";

const elementRef = useGSAPAnimation({
  trigger: true,
  from: { opacity: 0, y: 30 },
  to: { opacity: 1, y: 0 },
  duration: 0.6,
  scrollTriggerVars: { once: true },
});

<div ref={elementRef}>Content</div>;
```

## Migrating from Intersection Observer

### Before (Intersection Observer):

```jsx
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { gsap } from "gsap";

const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.1,
});

useEffect(() => {
  if (!inView) return;

  // GSAP animations...
  gsap.to(element, { opacity: 1, y: 0 });
}, [inView]);

<div ref={ref}>Content</div>;
```

### After (GSAP ScrollTrigger):

```jsx
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const elementRef = useRef(null);

useEffect(() => {
  const element = elementRef.current;
  if (!element) return;

  // Set initial state
  gsap.set(element, { opacity: 0, y: 30 });

  // Create animation with ScrollTrigger
  const animation = gsap.to(element, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top bottom-=100", // Adjust this to match your threshold
      toggleActions: "play none none none",
      once: true, // Similar to triggerOnce
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
}, []);

<div ref={elementRef}>Content</div>;
```

Or using our custom hook:

```jsx
import { useGSAPAnimation } from "../../hooks/useGSAPAnimation";

const elementRef = useGSAPAnimation({
  trigger: true,
  from: { opacity: 0, y: 30 },
  to: { opacity: 1, y: 0 },
  duration: 0.6,
  scrollTriggerVars: {
    once: true,
    start: "top bottom-=100", // Adjust this to match your threshold
  },
});

<div ref={elementRef}>Content</div>;
```

## Advanced GSAP Techniques

### Parallax Effects

```jsx
import { useGSAPAnimation } from "../../hooks/useGSAPAnimation";

const parallaxRef = useGSAPAnimation({
  trigger: true,
  to: { y: -100 }, // Move up as user scrolls down
  scrollTriggerVars: {
    scrub: true, // Links animation progress to scroll position
    start: "top bottom",
    end: "bottom top",
  },
});

<div className="relative h-screen">
  <div ref={parallaxRef} className="absolute inset-0">
    <img
      src="/background.jpg"
      alt="Parallax Background"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="relative z-10 container mx-auto">Content</div>
</div>;
```

### Pin Elements During Scroll

```jsx
import { useGSAPAnimation } from "../../hooks/useGSAPAnimation";

const pinnedRef = useGSAPAnimation({
  trigger: true,
  to: { opacity: 1 }, // Simple animation
  scrollTriggerVars: {
    pin: true, // Pin the element during scroll
    start: "top top",
    end: "+=500", // Pin for 500px of scrolling
    scrub: true,
  },
});

<div ref={pinnedRef} className="bg-primary text-white p-8">
  This section will be pinned during scroll
</div>;
```

### Scroll-Linked Animations

```jsx
import { useGSAPAnimation } from "../../hooks/useGSAPAnimation";

const progressRef = useGSAPAnimation({
  trigger: true,
  from: { width: "0%" },
  to: { width: "100%" },
  scrollTriggerVars: {
    scrub: 0.5, // Smooth scrubbing
    start: "top top",
    end: "bottom bottom",
  },
});

<div className="h-2 bg-gray-200 fixed top-0 left-0 right-0 z-50">
  <div ref={progressRef} className="h-full bg-primary"></div>
</div>;
```

### Reveal Text Character by Character

```jsx
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText"; // Requires GSAP Club membership

gsap.registerPlugin(ScrollTrigger, SplitText);

const TextReveal = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitText(textRef.current, { type: "chars" });

    gsap.from(split.chars, {
      opacity: 0,
      y: 20,
      stagger: 0.02,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none",
      },
    });

    return () => {
      split.revert();
    };
  }, []);

  return <h2 ref={textRef}>{text}</h2>;
};
```

For more advanced techniques, refer to the [GSAP documentation](https://greensock.com/docs/).
