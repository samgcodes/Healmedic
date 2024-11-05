import React from "react";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";

import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
const Home = () => {
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
