import React, { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import SideMenu from "./components/SideMenu";
import HomePage from "./components/HomePage";
import DiseaseManagement from "./components/DiseaseManagement";
import MedicationEducation from "./components/MedicationEducation";
import VitaminsSupplements from "./components/VitaminsSupplements";
import NutritionEducation from "./components/NutritionEducation";
import PatientTools from "./components/PatientTools";

const PatientHub = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Function to render the appropriate content based on the active section
  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <HomePage />;
      case "disease-management":
        return <DiseaseManagement />;
      case "medication-education":
        return <MedicationEducation />;
      case "vitamins-supplements":
        return <VitaminsSupplements />;
      case "nutrition-education":
        return <NutritionEducation />;
      case "patient-tools":
        return <PatientTools />;
      default:
        return <HomePage />;
    }
  };

  // Function to get the title based on the active section
  const getSectionTitle = () => {
    switch (activeSection) {
      case "home":
        return "Patient Hub";
      case "disease-management":
        return "Disease Management";
      case "medication-education":
        return "Medication Education";
      case "vitamins-supplements":
        return "Vitamins & Supplements";
      case "nutrition-education":
        return "Nutrition Education";
      case "patient-tools":
        return "Patient Tools";
      default:
        return "Patient Hub";
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Content Section */}
      <section className="bg-[#FDF8EC] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col xl:flex-row gap-8">
              {/* Side Menu */}
              <SideMenu
                activeSection={activeSection}
                setActiveSection={setActiveSection}
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

export default PatientHub;
