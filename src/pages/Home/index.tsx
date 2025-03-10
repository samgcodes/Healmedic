import React from "react";
import Hero from "../../components/sections/Hero";
import WhyUs from "../../components/sections/WhyUs";
import FAQ from "../../components/sections/FAQ";

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
