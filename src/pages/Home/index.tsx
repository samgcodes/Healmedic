import React from "react";
import Hero from "../../components/sections/Hero.tsx";
import WhyUs from "../../components/sections/WhyUs.tsx";
import FAQ from "../../components/sections/FAQ.tsx";

/**
 * Home page component
 *
 * Renders the main sections of the home page
 */
const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <WhyUs />
      <FAQ />

      {/* Add other sections here */}
    </div>
  );
};

export default Home;
