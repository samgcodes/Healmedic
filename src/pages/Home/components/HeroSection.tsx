import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Hero section data embedded directly in the component
const heroData = {
  phrases: ["Better", "Fresh", "Smart", "Fast", "Easy"],
  ctaText: "Transfer Now",
  ctaLink: "/contact",
  heroImage: "/assets/heroimg.png",
  phraseInterval: 3500,
};

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Props for the MorphingText component
interface MorphingTextProps {
  text: string;
  className?: string;
}

/**
 * MorphingText component for smooth text transitions
 * Reimplemented with GSAP instead of Framer Motion
 */
const MorphingText: React.FC<MorphingTextProps> = ({
  text,
  className = "",
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    // Clear any existing animations
    gsap.killTweensOf(element.children);

    // Split text into individual characters
    const characters = Array.from(element.children);

    // Set initial state
    gsap.set(characters, { opacity: 0, y: 20, scale: 0.8 });

    // Animate each character
    gsap.to(characters, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.4,
      stagger: 0.04,
      ease: "power2.out",
    });

    // Optional cleanup
    return () => {
      gsap.killTweensOf(characters);
    };
  }, [text]);

  // Split text into individual characters for animation
  const characters = Array.from(text);

  return (
    <div ref={textRef} className={`flex ${className}`}>
      {characters.map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="inline-block origin-center"
          style={{
            display: char === " " ? "inline-block" : "inline-block",
            minWidth: char === " " ? "0.5em" : "auto",
            position: "relative",
            marginRight: "0.15em", // Add space between characters
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

/**
 * Hero component for the homepage
 * Reimplemented with GSAP instead of Framer Motion
 */
const HeroSection: React.FC = () => {
  const { phrases, ctaText, ctaLink, heroImage, phraseInterval } = heroData;
  const [currentPhrase, setCurrentPhrase] = useState<number>(0);

  // Refs for elements to animate
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const phraseContainerRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);

  // Refs for decorative elements
  const backgroundCircle1Ref = useRef<HTMLDivElement>(null);
  const backgroundCircle2Ref = useRef<HTMLDivElement>(null);
  const backgroundCircle3Ref = useRef<HTMLDivElement>(null);
  const floatingPill1Ref = useRef<HTMLDivElement>(null);
  const floatingPill2Ref = useRef<HTMLDivElement>(null);
  const decorCircle1Ref = useRef<HTMLDivElement>(null);
  const decorCircle2Ref = useRef<HTMLDivElement>(null);

  // Rotate through phrases at the specified interval
  useEffect(() => {
    // Start cycling phrases
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, phraseInterval);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [phrases, phraseInterval]);

  // Run entrance animations immediately on mount
  useEffect(() => {
    // Create a timeline with immediate render
    const tl = gsap.timeline({
      defaults: { duration: 0.6, ease: "power2.out" },
      immediateRender: true,
      overwrite: "auto",
    });

    // Set initial states for elements (opacity 0)
    tl.set(titleRef.current, { opacity: 0, y: 30 })
      .set(phraseContainerRef.current, { opacity: 0, y: 30 })
      .set(paragraphRef.current, { opacity: 0, y: 20 })
      .set(buttonRef.current, { opacity: 0, y: 20 })
      .set(imageContainerRef.current, { opacity: 0, scale: 0.9 })
      .set(
        [
          floatingPill1Ref.current,
          floatingPill2Ref.current,
          decorCircle1Ref.current,
          decorCircle2Ref.current,
        ],
        { opacity: 0 }
      )
      // Animate title
      .to(titleRef.current, { opacity: 1, y: 0 })
      // Animate phrase container
      .to(phraseContainerRef.current, { opacity: 1, y: 0 }, "-=0.3")
      // Animate paragraph
      .to(paragraphRef.current, { opacity: 1, y: 0 }, "-=0.2")
      // Animate buttons
      .to(buttonRef.current, { opacity: 1, y: 0 }, "-=0.1")
      // Animate image
      .to(imageContainerRef.current, { opacity: 1, scale: 1 }, "-=0.4")
      // Animate decorative elements
      .to(
        [
          floatingPill1Ref.current,
          floatingPill2Ref.current,
          decorCircle1Ref.current,
          decorCircle2Ref.current,
        ],
        { opacity: 1, stagger: 0.1 },
        "-=0.3"
      );

    // Force play immediately
    tl.play(0);

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, []); // Empty dependency array to run only once on mount

  // Setup ongoing animations
  useEffect(() => {
    // Animate hero image bounce
    if (heroImageRef.current) {
      gsap.to(heroImageRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    // Animate background circles
    if (backgroundCircle1Ref.current) {
      gsap.to(backgroundCircle1Ref.current, {
        y: -30,
        x: 20,
        scale: 1.1,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    if (backgroundCircle2Ref.current) {
      gsap.to(backgroundCircle2Ref.current, {
        y: 40,
        x: -20,
        scale: 1.2,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    if (backgroundCircle3Ref.current) {
      gsap.to(backgroundCircle3Ref.current, {
        y: 30,
        x: 15,
        scale: 1.1,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    // Animate floating pills
    if (floatingPill1Ref.current) {
      gsap.to(floatingPill1Ref.current, {
        y: -15,
        rotate: 10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    if (floatingPill2Ref.current) {
      gsap.to(floatingPill2Ref.current, {
        y: 10,
        rotate: -15,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    // Animate decorative circles
    if (decorCircle1Ref.current) {
      // Create a timeline for the scale animation
      const tl1 = gsap.timeline({ repeat: -1, ease: "linear" });
      tl1
        .to(decorCircle1Ref.current, {
          rotate: 360,
          duration: 20,
        })
        .to(decorCircle1Ref.current, { scale: 1.1, duration: 10 }, 0)
        .to(decorCircle1Ref.current, { scale: 1, duration: 10 }, 10);
    }

    if (decorCircle2Ref.current) {
      // Create a timeline for the scale animation
      const tl2 = gsap.timeline({ repeat: -1, ease: "linear" });
      tl2
        .to(decorCircle2Ref.current, {
          rotate: -360,
          duration: 15,
        })
        .to(decorCircle2Ref.current, { scale: 1.2, duration: 7.5 }, 0)
        .to(decorCircle2Ref.current, { scale: 1, duration: 7.5 }, 7.5);
    }

    // Hover animations for buttons
    if (buttonRef.current) {
      const buttons = buttonRef.current.querySelectorAll("a");

      // Add hover event listeners to each button
      buttons.forEach((button) => {
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
      });
    }

    // Clean up animations when component unmounts
    return () => {
      gsap.killTweensOf(heroImageRef.current);
      gsap.killTweensOf(backgroundCircle1Ref.current);
      gsap.killTweensOf(backgroundCircle2Ref.current);
      gsap.killTweensOf(backgroundCircle3Ref.current);
      gsap.killTweensOf(floatingPill1Ref.current);
      gsap.killTweensOf(floatingPill2Ref.current);
      gsap.killTweensOf(decorCircle1Ref.current);
      gsap.killTweensOf(decorCircle2Ref.current);

      if (buttonRef.current) {
        const buttons = buttonRef.current.querySelectorAll("a");
        buttons.forEach((button) => {
          gsap.killTweensOf(button);
        });
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-[#9a77f6] to-[#8a67e6] text-white overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={backgroundCircle1Ref}
          className="absolute top-[10%] left-[5%] w-24 h-24 rounded-full bg-white opacity-10"
        />
        <div
          ref={backgroundCircle2Ref}
          className="absolute top-[40%] right-[10%] w-16 h-16 rounded-full bg-white opacity-10"
        />
        <div
          ref={backgroundCircle3Ref}
          className="absolute bottom-[20%] left-[15%] w-20 h-20 rounded-full bg-white opacity-10"
        />
      </div>
      {/* Main content container */}
      <div className="max-w-[1400px] mx-auto h-full px-fluid-4 pt-24 sm:pt-28 md:pt-32">
        <div className="flex flex-col-reverse md:flex-row min-h-[calc(100vh-7rem)] items-center justify-center">
          {/* Text content - centered on mobile */}
          <div className="w-full md:w-3/5 z-10 space-y-fluid-4 -mt-4 sm:mt-0 md:mt-0 px-fluid-2 md:pl-fluid-16">
            <div className="text-center md:text-left mx-auto md:mx-0 max-w-2xl">
              <h1 className="font-title font-bold tracking-tight flex flex-col">
                <span
                  ref={titleRef}
                  className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-widest text-center md:text-left"
                >
                  Pharmacy
                </span>
                <div ref={phraseContainerRef} className="w-full py-4">
                  <MorphingText
                    text={phrases[currentPhrase]}
                    className="justify-center md:justify-start text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold"
                  />
                </div>
              </h1>
              <p
                ref={paragraphRef}
                className="font-body text-fluid-lg md:text-fluid-xl mt-6 mb-8 opacity-90 max-w-xl leading-relaxed relative z-10"
              >
                <span className=" px-2 py-1 rounded-lg">
                  More than a pharmacy—your partner in health and recovery.
                </span>{" "}
                Personalized care, seamless transfers, and expert guidance.
                Start your healing journey today!
              </p>
              <div
                ref={buttonRef}
                className="flex space-x-4 items-center justify-center md:justify-start"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-white opacity-20 blur-md rounded-full transform scale-110"></div>
                  <Link
                    to={ctaLink}
                    className="font-body bg-white text-[#9a77f6] hover:bg-opacity-95 px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-fluid-lg inline-block shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:-translate-y-1"
                    aria-label={ctaText}
                  >
                    {ctaText}
                  </Link>
                </div>

                <div>
                  <Link
                    to="/services"
                    className="font-body border-2 border-white text-white hover:bg-white hover:text-[#9a77f6] px-6 py-3 rounded-full font-bold text-fluid-base inline-block transition-all duration-300 transform hover:-translate-y-1"
                    aria-label="Learn More"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Spacer for consistent layout */}
              <div className="mt-8"></div>
            </div>
          </div>

          {/* Image with enhanced presentation - centered on mobile */}
          <div className="w-full md:w-2/5 flex items-center justify-center p-fluid-4 pb-0 mb-0 sm:mb-2 md:mb-0 relative text-center md:text-left">
            {/* Decorative elements */}
            <div
              ref={decorCircle1Ref}
              className="absolute -top-10 -right-5 w-20 h-20 rounded-full border-4 border-white opacity-20"
            />

            <div
              ref={decorCircle2Ref}
              className="absolute -bottom-5 -left-10 w-16 h-16 rounded-full border-2 border-white opacity-15"
            />

            {/* Main image with enhanced container - centered on mobile */}
            <div
              ref={imageContainerRef}
              className="relative z-10 mx-auto md:mx-0"
            >
              <img
                ref={heroImageRef}
                src={heroImage}
                alt="Modern Pharmacy"
                className="w-[50%] xs:w-[45%] sm:w-[40%] md:w-[65%] lg:w-[70%] max-w-[400px] mx-auto object-contain relative z-10"
                loading="lazy"
                width="400"
                height="400"
              />
            </div>

            {/* Floating pill elements */}
            <div
              ref={floatingPill1Ref}
              className="absolute top-1/4 right-1/4 w-8 h-3 bg-white rounded-full opacity-40"
            />

            <div
              ref={floatingPill2Ref}
              className="absolute bottom-1/3 left-1/4 w-6 h-2 bg-white rounded-full opacity-30"
            />
          </div>
        </div>
      </div>

      {/* Enhanced slanted divider with gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 bg-gradient-to-r from-white/10 via-white/5 to-transparent transform -skew-y-3 origin-left translate-y-16 -mb-1 backdrop-blur-sm"></div>

      {/* Additional decorative elements for the bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full h-auto"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 50L60 45.7C120 41.3 240 32.7 360 27.5C480 22.3 600 20.7 720 25.2C840 29.7 960 40.3 1080 43.3C1200 46.3 1320 41.7 1380 39.3L1440 37V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z"
            fill="white"
            fillOpacity="0.05"
          />
          <path
            d="M0 70L60 65.7C120 61.3 240 52.7 360 47.5C480 42.3 600 40.7 720 45.2C840 49.7 960 60.3 1080 63.3C1200 66.3 1320 61.7 1380 59.3L1440 57V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V70Z"
            fill="white"
            fillOpacity="0.08"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
