import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ForProviders from "./pages/ForProviders";
import PatientHub from "./pages/PatientHub";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/for-providers" element={<ForProviders />} />
      <Route path="/patient-hub" element={<PatientHub />} />
    </Routes>
  );
};

export default Router;
