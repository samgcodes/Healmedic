import React from "react";
import WelcomeSection from "./WelcomeSection";
import WhyChooseSection from "./WhyChooseSection";
import ServicesSection from "./ServicesSection";
import ResourcesSection from "./ResourcesSection";
import CallToActionSection from "./CallToActionSection";

/**
 * Main WhyUs Component
 *
 * Container for all the homepage content sections
 */
const WhyUs: React.FC = () => {
  return (
    <>
      <WelcomeSection />
      <WhyChooseSection />
      <ServicesSection />
      <ResourcesSection />
      <CallToActionSection />
    </>
  );
};

export default WhyUs;
