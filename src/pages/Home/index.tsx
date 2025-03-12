import React from "react";
import {
  HeroSection,
  WelcomeSection,
  WhyChooseSection,
  ServicesSection,
  ResourcesSection,
  CallToActionSection,
  FAQSection,
} from "./components";

/**
 * Home page component
 *
 * Renders the main sections of the home page
 */
const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <WhyChooseSection />
      <ServicesSection />
      <ResourcesSection />
      <CallToActionSection />
      <FAQSection />
    </div>
  );
};

export default Home;
