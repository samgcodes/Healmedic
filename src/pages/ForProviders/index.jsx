import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
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
  const contentSectionRef = useRef(null);

  // Function to scroll to the content section
  const scrollToContentSection = useCallback(() => {
    if (contentSectionRef.current) {
      // Get the position of the content section
      const yPosition = contentSectionRef.current.offsetTop;

      // Apply a fixed offset to account for the navbar height
      const offset = 80;

      // Scroll to that position
      window.scrollTo({
        top: yPosition - offset,
        behavior: "smooth",
      });
    }
  }, []);

  // Handle section change
  const handleSectionChange = (section) => {
    setActiveSection(section);
    // Small timeout to ensure the DOM has updated
    setTimeout(() => {
      scrollToContentSection();
    }, 10);
  };

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
      <section ref={contentSectionRef} className="bg-[#FDF8EC] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col xl:flex-row gap-8">
              {/* Side Menu */}
              <SideMenu
                activeSection={activeSection}
                setActiveSection={handleSectionChange}
              />

              {/* Content Area */}
              <div className="flex-1">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderContent()}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForProviders;
