import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ForProviders from "./pages/ForProviders";
import PatientHub from "./pages/PatientHub";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/for-providers" element={<ForProviders />} />
      <Route path="/patient-hub" element={<PatientHub />} />
    </Routes>
  );
};

export default Router;
