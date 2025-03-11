import React, { useState, useRef, useCallback, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useMediaQuery from "../../hooks/useMediaQuery";
import { breakpoints } from "../../hooks/useMediaQuery";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

import HeroSection from "./components/HeroSection";
import SideMenu from "./components/SideMenu";
import HomePage from "./components/HomePage";
import AdvancedPracticePharmacist from "./components/AdvancedPracticePharmacist";
import CollaborativePractice from "./components/CollaborativePractice";
import ProviderBenefits from "./components/ProviderBenefits";
import ProviderResources from "./components/ProviderResources";
import ProviderFAQ from "./components/ProviderFAQ";

const ForProviders = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [previousSection, setPreviousSection] = useState("home");
  const contentSectionRef = useRef(null);
  const contentAreaRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const isMobile = useMediaQuery(breakpoints.mobile);

  // Function to scroll to the content section
  const scrollToContentSection = useCallback(() => {
    if (contentSectionRef.current) {
      // Get the position of the content section
      const yPosition = contentSectionRef.current.offsetTop;

      // Apply a fixed offset to account for the navbar height
      const offset = isMobile ? 60 : 80;

      // Scroll to that position
      window.scrollTo({
        top: yPosition - offset,
        behavior: "smooth",
      });
    }
  }, [isMobile]);

  // Handle section change
  const handleSectionChange = (section) => {
    setPreviousSection(activeSection);
    setActiveSection(section);
    // Small timeout to ensure the DOM has updated
    setTimeout(() => {
      scrollToContentSection();
    }, 10);
  };

  // Initialize ScrollTrigger for content section
  useEffect(() => {
    // Create a scroll trigger for the content section
    if (contentSectionRef.current) {
      ScrollTrigger.create({
        trigger: contentSectionRef.current,
        start: "top center+=100",
        end: "bottom bottom",
        toggleClass: {
          targets: contentSectionRef.current,
          className: "active",
        },
        onEnter: () => {
          gsap.to(contentSectionRef.current, {
            backgroundColor: "#FDF8EC",
            duration: 0.5,
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(contentSectionRef.current, {
            backgroundColor: "#FDF8EC",
            duration: 0.5,
            ease: "power2.out",
          });
        },
      });
    }

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Animate content transition when activeSection changes
  useEffect(() => {
    if (contentAreaRef.current) {
      // Adjust animation duration for mobile
      const duration = isMobile ? 0.2 : 0.3;
      const direction = activeSection === "home" ? 1 : -1;

      // Create a timeline for the transition
      const tl = gsap.timeline();

      // Fade out and slide current content
      tl.to(contentAreaRef.current, {
        opacity: 0,
        y: -10 * direction,
        duration: duration * 0.7,
        ease: "power2.in",
        onComplete: () => {
          // Reset position for the new content
          gsap.set(contentAreaRef.current, {
            y: 10 * direction,
          });

          // Fade in and slide new content
          gsap.to(contentAreaRef.current, {
            opacity: 1,
            y: 0,
            duration: duration,
            ease: "power2.out",
          });
        },
      });
    }
  }, [activeSection, isMobile]);

  // Function to render the appropriate content based on the active section
  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <HomePage />;
      case "advanced-practice-pharmacist":
        return <AdvancedPracticePharmacist />;
      case "collaborative-practice":
        return <CollaborativePractice />;
      case "provider-benefits":
        return <ProviderBenefits />;
      case "provider-resources":
        return <ProviderResources />;
      case "provider-faq":
        return <ProviderFAQ />;
      default:
        return <HomePage />;
    }
  };

  // Function to get the title based on the active section
  const getSectionTitle = () => {
    switch (activeSection) {
      case "home":
        return "Provider Hub";
      case "advanced-practice-pharmacist":
        return "Advanced Practice Pharmacist";
      case "collaborative-practice":
        return "Collaborative Practice";
      case "provider-benefits":
        return "Provider Benefits";
      case "provider-resources":
        return "Provider Resources";
      case "provider-faq":
        return "Provider FAQ";
      default:
        return "Provider Hub";
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Content Section */}
      <section
        ref={contentSectionRef}
        className="bg-[#FDF8EC] py-12 transition-colors duration-500"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div
              ref={contentWrapperRef}
              className="flex flex-col xl:flex-row gap-8"
            >
              {/* Side Menu */}
              <SideMenu
                activeSection={activeSection}
                setActiveSection={handleSectionChange}
              />

              {/* Content Area */}
              <div className="flex-1">
                <div
                  ref={contentAreaRef}
                  key={activeSection}
                  className="transition-all duration-300"
                >
                  {renderContent()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForProviders;
