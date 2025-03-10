import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FadeIn,
  Stagger1,
  TitleSectionAnimation,
} from "../../../components/utils/GSAPAnimations";
import useMediaQuery, { breakpoints } from "../../../hooks/useMediaQuery";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HomePage: React.FC = () => {
  const isMobile = useMediaQuery(breakpoints.mobile);
  const features = [
    {
      title: "Disease Management",
      description:
        "Learn about managing chronic conditions and preventive care",
      icon: "🏥",
    },
    {
      title: "Medication Education",
      description:
        "Understand your medications, their effects, and proper usage",
      icon: "💊",
    },
    {
      title: "Vitamins & Supplements",
      description:
        "Explore information about vitamins, supplements, and natural remedies",
      icon: "🌿",
    },
    {
      title: "Nutrition Education",
      description:
        "Discover healthy eating guidelines and dietary recommendations",
      icon: "🥗",
    },
    {
      title: "Patient Tools",
      description:
        "Access helpful calculators and tools for managing your health",
      icon: "🔧",
    },
  ];

  const resourcesTitleRef = useRef<HTMLHeadingElement>(null);
  const bottomSectionRef = useRef<HTMLDivElement>(null);
  const bottomImageRef = useRef<HTMLImageElement>(null);
  const bottomTextRef = useRef<HTMLDivElement>(null);
  const featureCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tipBoxRef = useRef<HTMLDivElement>(null);

  // Initialize feature card refs array
  useEffect(() => {
    featureCardRefs.current = featureCardRefs.current.slice(0, features.length);
  }, [features.length]);

  // Add hover animations to feature cards
  useEffect(() => {
    featureCardRefs.current.forEach((card) => {
      if (card) {
        // Hover animation
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -5,
            scale: 1.02,
            boxShadow:
              "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            duration: 0.3,
            ease: "power2.out",
          });

          // Animate the icon
          const icon = card.querySelector(".feature-icon");
          if (icon) {
            gsap.to(icon, {
              scale: 1.1,
              duration: 0.3,
              ease: "back.out(1.7)",
            });
          }
        });

        // Mouse leave animation
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            duration: 0.3,
            ease: "power2.out",
          });

          // Reset icon animation
          const icon = card.querySelector(".feature-icon");
          if (icon) {
            gsap.to(icon, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });
      }
    });

    // Cleanup
    return () => {
      // Remove event listeners from feature cards
      featureCardRefs.current.forEach((card) => {
        if (card) {
          card.replaceWith(card.cloneNode(true));
        }
      });
    };
  }, []);

  // Bottom section animation - independent from other content
  useEffect(() => {
    if (!bottomSectionRef.current) return;

    // Adjust animation duration for mobile
    const duration = isMobile ? 0.4 : 0.5;

    // Set initial state for bottom section
    gsap.set(bottomSectionRef.current, { opacity: 0, y: 20 });

    // Create a timeline for the bottom section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: bottomSectionRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none",
        once: false, // Allow it to replay when scrolled back into view
      },
    });

    // Main container animation
    tl.to(bottomSectionRef.current, {
      opacity: 1,
      y: 0,
      duration: duration,
      ease: "power2.out",
    });

    // Image and text animation
    if (bottomImageRef.current && bottomTextRef.current) {
      // Set initial states
      gsap.set(bottomImageRef.current, { opacity: 0, scale: 0.9 });

      const textElements = bottomTextRef.current.querySelectorAll("h3, p");
      gsap.set(textElements, { opacity: 0, y: 15 });

      // Image animation
      tl.to(
        bottomImageRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: duration * 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );

      // Text content animation
      tl.to(
        textElements,
        {
          opacity: 1,
          y: 0,
          duration: duration * 0.7,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }

    // Cleanup only this specific ScrollTrigger instance
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === bottomSectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, [isMobile]); // Include isMobile in dependencies since we use it for duration

  return (
    <div className="space-y-8">
      <TitleSectionAnimation className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary">
        <div className="flex flex-col xl:flex-row items-start gap-6">
          <div className="flex-1">
            <h2 className="font-title text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
              Welcome to the Patient Hub
            </h2>
            <p className="font-body text-lg text-gray-600 mb-6">
              Our Patient Hub is designed to provide you with comprehensive
              health education resources and tools to support your wellness
              journey. Browse through our various sections using the menu on the
              left to access information about disease management, medications,
              nutrition, and more.
            </p>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 aspect-square rounded-xl overflow-hidden mb-6 xl:mb-0">
            <img
              src="/assets/PatientHub/home_PH.png"
              alt="Patient Hub Home"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div
          ref={tipBoxRef}
          className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md mt-6"
        >
          <p className="font-body text-blue-700">
            <span className="font-semibold">How to use this hub:</span> Select
            any topic from the menu on the left to view detailed information and
            resources. Each section contains educational content curated by our
            healthcare professionals to help you make informed decisions about
            your health.
          </p>
        </div>
      </TitleSectionAnimation>

      <FadeIn>
        <h3
          ref={resourcesTitleRef}
          className="font-title text-xl font-semibold mb-6 text-gray-800"
        >
          Available Resources
        </h3>
        <Stagger1
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          duration={isMobile ? 0.4 : 0.5}
          staggerAmount={isMobile ? 0.08 : 0.1}
          mobileOptimized={true}
          animateOnScroll={true}
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => (featureCardRefs.current[index] = el)}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="text-3xl mb-4 feature-icon">{feature.icon}</div>
              <h4 className="font-title text-lg font-semibold mb-2 text-gray-800">
                {feature.title}
              </h4>
              <p className="font-body text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </Stagger1>
      </FadeIn>

      <div
        ref={bottomSectionRef}
        className="bg-gradient-to-r from-primary/10 to-purple-100 rounded-xl p-6 shadow-md"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/3 xl:w-1/4 aspect-square rounded-xl overflow-hidden mb-6 xl:mb-0">
            <img
              ref={bottomImageRef}
              src="/assets/PatientHub/home_PH.png"
              alt="Health Education"
              className="w-full h-full object-cover"
            />
          </div>
          <div ref={bottomTextRef} className="flex-1">
            <h3 className="font-title text-xl font-semibold mb-3 text-gray-800">
              Personalized Health Education
            </h3>
            <p className="font-body text-gray-600 mb-4">
              Our team of pharmacists and healthcare professionals has curated
              this information to help you better understand your health
              conditions and treatment options. We believe that informed
              patients make better health decisions.
            </p>
            <p className="font-body text-gray-600">
              If you have specific questions about your health or medications,
              please don't hesitate to contact our pharmacy team directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
