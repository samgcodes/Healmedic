# GSAP Animation Guide

This guide explains how to use GSAP (GreenSock Animation Platform) for all animations in the HealMedic project, including scroll-triggered animations that replace Intersection Observer.

## Table of Contents

1. [Overview](#overview)
2. [Core GSAP API](#core-gsap-api)
3. [GSAP Animation Components](#gsap-animation-components)
4. [GSAP Animation Hooks](#gsap-animation-hooks)
5. [Timelines](#timelines)
6. [ScrollTrigger](#scrolltrigger)
7. [Easing Functions](#easing-functions)
8. [Plugins](#plugins)
9. [Utility Methods](#utility-methods)
10. [Control Methods](#control-methods)
11. [Performance Optimization](#performance-optimization)
12. [Migrating from Framer Motion](#migrating-from-framer-motion)
13. [Migrating from Intersection Observer](#migrating-from-intersection-observer)
14. [Advanced GSAP Techniques](#advanced-gsap-techniques)

## Overview

GSAP is a powerful animation library that offers more flexibility and control than Framer Motion or Intersection Observer. This project uses GSAP for all animations, including:

- Entrance animations
- Hover effects
- Scroll-triggered animations
- Complex animation sequences

## Core GSAP API

### Basic Tweens

```javascript
// "to" tween - animate to provided values
gsap.to(".selector", {
  // selector, text, Array, or object
  x: 100, // any properties (not limited to CSS)
  backgroundColor: "red", // camelCase
  duration: 1, // seconds
  delay: 0.5,
  ease: "power2.inOut",
  stagger: 0.1, // stagger start times
  paused: true, // default is false
  overwrite: "auto", // default is false
  repeat: 2, // number of repeats (-1 for infinity)
  repeatDelay: 1, // seconds between repeats
  repeatRefresh: true, // invalidates on each repeat
  yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
  yoyoEase: true, // or ease like "power2"
  immediateRender: false,
  onComplete: () => {
    console.log("finished");
  },
  // other callbacks:
  // onStart, onUpdate, onRepeat, onReverseComplete
});

// "from" tween - animate from provided values
gsap.from(".selector", { fromVars });

// "fromTo" tween (define both start and end values)
gsap.fromTo(".selector", { fromVars }, { toVars });
// special properties (duration, ease, etc.) go in toVars

// set values immediately (no animation)
gsap.set(".selector", { toVars });
```

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

### Stagger1

Staggered content animation with mobile optimization:

```jsx
import { Stagger1 } from "../../components/utils/GSAPAnimations";

<Stagger1
  className="space-y-4"
  delay={0.2}
  staggerAmount={0.05}
  mobileOptimized={true}
  animateOnScroll={false}
>
  <h4 className="font-title text-lg font-semibold">Section Title</h4>
  <p className="font-body text-gray-600">Paragraph content goes here...</p>
  <ul className="list-disc pl-5 space-y-2">
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </ul>
  <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
    <p>Additional information or callout</p>
  </div>
</Stagger1>;
```

#### Props

- `className`: Optional CSS classes
- `delay`: Delay before animation starts (default: 0)
- `duration`: Animation duration (default: 0.5)
- `staggerAmount`: Delay between each element's animation (default: 0.05)
- `mobileOptimized`: Whether to use simplified animations on mobile (default: true)
- `animateOnScroll`: Whether to trigger on scroll or immediately (default: false)

#### Element Types

Stagger1 automatically detects and animates:

- Headings (`h1` through `h6`)
- Paragraphs (`p`)
- List items (`li`)
- Info boxes (elements with class `.bg-blue-50` or `.info-box`)

#### Mobile vs Desktop

- **Mobile**: Uses simpler animations with horizontal movement for list items
- **Desktop**: Uses more sophisticated animations with vertical movement and scale effects

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

## Timelines

Timelines allow you to sequence multiple animations and control them as a group.

```javascript
// Create a timeline
let tl = gsap.timeline({
  delay: 0.5,
  paused: true, // default is false
  repeat: 2, // number of repeats (-1 for infinity)
  repeatDelay: 1, // seconds between repeats
  repeatRefresh: true, // invalidates on each repeat
  yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
  defaults: {
    // children inherit these defaults
    duration: 1,
    ease: "none",
  },
  smoothChildTiming: true,
  autoRemoveChildren: true,
  onComplete: () => {
    console.log("finished");
  },
  // other callbacks:
  // onStart, onUpdate, onRepeat, onReverseComplete
});

// Sequence multiple tweens
tl.to(".selector", { duration: 1, x: 50, y: 0 })
  .to("#id", { autoAlpha: 0 })
  .to("elem", { duration: 1, backgroundColor: "red" })
  .to([elem1, elem2], { duration: 3, x: 100 });

// Position parameter (controls placement)
tl.to(target, { toVars }, positionParameter);
0.7; // exactly 0.7 seconds into the timeline (absolute)
("+=0.7"); // 0.7 seconds after previous animation ends
("-=0.7"); // overlap with previous by 0.7 seconds
("myLabel"); // insert at "myLabel" position
("myLabel+=0.2"); // 0.2 seconds after "myLabel"
("<"); // align with start of most recently-added child
("<0.2"); // 0.2 seconds after ^^
("-=50%"); // overlap half of inserting animation's duration
("25%"); // 25% into the previous animation (from its start)
```

### Nesting Timelines

You can create modular animations by nesting timelines:

```javascript
// Create scene functions that return timelines
function scene1() {
  let tl = gsap.timeline();
  tl.to(...).to(...); // build scene 1
  return tl;
}

function scene2() {
  let tl = gsap.timeline();
  tl.to(...).to(...); // build scene 2
  return tl;
}

// Create master timeline
let master = gsap.timeline()
  .add(scene1())
  .add(scene2(), "-=0.5"); // overlap slightly
```

## ScrollTrigger

ScrollTrigger enables scroll-based animations:

```javascript
scrollTrigger: {
  trigger: ".selector", // selector or element
  start: "top center", // [trigger] [scroller] positions
  end: "20px 80%", // [trigger] [scroller] positions
  // or relative amount: "+=500"
  scrub: true, // or time (in seconds) to catch up
  pin: true, // or selector or element to pin
  markers: true, // only during development!
  toggleActions: "play pause resume reset",
  // play actions: complete reverse none
  toggleClass: "active",
  fastScrollEnd: true, // or velocity number
  containerAnimation: tween, // linear animation
  id: "my-id",
  anticipatePin: 1, // may help avoid jump
  snap: {
    snapTo: 1 / 10, // progress increment
    // or "labels" or function or Array
    duration: 0.5,
    directional: true,
    ease: "power3",
    onComplete: callback,
    // other callbacks: onStart, onInterrupt
  },
  pinReparent: true, // moves to documentElement during pin
  pinSpacing: false,
  pinType: "transform" // or "fixed"
  pinnedContainer: ".selector",
  preventOverlaps: true, // or arbitrary string
  once: true,
  endTrigger: ".selector", // selector or element
  horizontal: true, // switches mode
  invalidateOnRefresh: true, // clears start values on refresh
  refreshPriority: 1, // influence refresh order
  onEnter: callback,
  // other callbacks:
  // onLeave, onEnterBack, onLeaveBack, onUpdate,
  // onToggle, onRefresh, onRefreshInit, onScrubComplete
}
```

## Easing Functions

Easing functions control the rate of change during an animation:

```javascript
// See greensock.com/ease-visualizer
ease: "none"; // no ease (same as "linear")

// Basic core eases
"power1", "power2", "power3", "power4", "circ", "expo", "sine";
// Each has .in, .out, and .inOut extensions
// i.e. "power1.inOut"

// Expressive core eases
"elastic", "back", "bounce", "steps(n)";

// In EasePack plugin (not core)
"rough", "slow", "expoScale(1, 2)";

// Members-only expressive plugins
CustomEase, CustomWiggle, CustomBounce;
```

## Plugins

GSAP has a variety of plugins that extend its functionality:

```javascript
// Register GSAP plugins (once) before using them
gsap.registerPlugin(Draggable, TextPlugin);

// Available plugins
Draggable,
  DrawSVGPlugin,
  EaselPlugin,
  Flip,
  GSDevTools,
  InertiaPlugin,
  MorphSVGPlugin,
  MotionPathPlugin,
  MotionPathHelper,
  Observer,
  Physics2DPlugin,
  PhysicsPropsPlugin,
  PixiPlugin,
  ScrambleTextPlugin,
  ScrollToPlugin,
  ScrollTrigger,
  ScrollSmoother,
  SplitText,
  TextPlugin;
// * available to Club GSAP members: gsap.com/club
```

## Utility Methods

GSAP provides utility methods to help with common tasks:

```javascript
// Accessible through gsap.utils.toArray()
checkPrefix(); // get relevant browser prefix for property
clamp(); // clamp value to range
distribute(); // distribute value among array
getUnit(); // get unit of string
interpolate(); // interpolate between values
mapRange(); // map one range to another
normalize(); // map a range to the 0-1 range
pipe(); // sequence function calls
random(); // generates a random value
selector(); // get a scoped selector function
shuffle(); // shuffles an array in-place
snap(); // snap a value to either increment or array
splitColor(); // splits color into RGB array
toArray(); // convert array-like thing to array
unitize(); // adds specified unit to function results
wrap(); // place number in range, wrapping to start
wrapYoyo(); // place number in range, wrapping in reverse
```

## Control Methods

Control methods allow you to manipulate animations after they've been created:

```javascript
// Retain animation reference to control later
let anim = gsap.to(...); // or gsap.timeline(...);

// Most methods can be used as getters or setters
anim.play() // plays forward
    .pause()
    .resume() // respects direction
    .reverse()
    .restart()
    .timeScale(2) // 2 = double speed, 0.5 = half speed
    .seek(1.5) // jump to a time (in seconds) or label
    .progress(0.5) // jump to halfway
    .totalProgress(0.8) // includes repeats

// When used as setter, returns animation (chaining)

// Other useful methods (tween and timeline)
    .kill() // immediately destroy
    .isActive() // true if currently animating
    .then() // Promise
    .invalidate() // clear recorded start/end values
    .eventCallback() // get/set an event callback

// Timeline-specific methods
// Add label, tween, timeline, or callback
    .add(thing, position)
// Calls function at given point
    .call(func, params, position)
// Get an Array of the timeline's children
    .getChildren()
// Empties the timeline
    .clear()
// Animate playhead to a position linearly
    .tweenTo(timeOrLabel, {vars})
// ^^ with both start and end positions
    .tweenFromTo(from, to, {vars})
```

## Performance Optimization

GSAP provides tools for optimizing animation performance:

```javascript
// Add listener with gsap.ticker
gsap.ticker.add(myFunction);
function myFunction(time, deltaTime, frame) {
  // Executes on every tick after
  // the core engine updates
}
// To remove the listener later...
gsap.ticker.remove(myFunction);

// Faster way to repeatedly set property than .set()
let setX = gsap.quickSetter("#id", "x", "px");
document.addEventListener("mousemove", (e) => setX(e.clientX));

// quickTo - for animation!
let xTo = gsap.quickTo("#id", "x", { duration: 0.4, ease: "power3" });
document.addEventListener("mousemove", (e) => xTo(e.pageX));
```

### Effects

Register reusable effects to simplify your code:

```javascript
// Register an effect for reuse
gsap.registerEffect({
  name: "fade",
  effect: (targets, config) => {
    return gsap.to(targets, {
      duration: config.duration,
      opacity: 0,
    });
  },
  defaults: { duration: 2 },
  extendTimeline: true,
});

// Now we can use it like this
gsap.effects.fade(".box");
// Or directly on timelines
tl.fade(".box", { duration: 3 });
```

### Configuration

Configure GSAP's global settings:

```javascript
// Configure GSAP's non-tween-related settings
gsap.config({
  autoSleep: 60,
  force3D: false,
  nullTargetWarn: false,
  trialWarn: false,
  units: { left: "%", top: "%", rotation: "rad" },
});

// Set GSAP's global tween defaults
gsap.defaults({ ease: "power2.in", duration: 1 });
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
