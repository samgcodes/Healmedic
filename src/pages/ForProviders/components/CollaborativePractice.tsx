import React from "react";
import { motion } from "framer-motion";
import { collaborativePracticeData } from "../data";
import {
  ImpactSection,
  ChartsSection,
  BenefitsSection,
  ProcessSection,
  ExamplesSection,
  ImageSection,
} from "./CollaborativePractice/index";

const CollaborativePractice: React.FC = () => {
  // Extract data for impact section
  const impactData = {
    title: "Impact of Collaborative Practice Agreements",
    description:
      "Research shows that pharmacist involvement through Collaborative Practice Agreements leads to significant improvements in patient outcomes and practice efficiency.",
    statistics: [
      {
        percentage: 43,
        title: "Improvement in Blood Pressure Control",
        description:
          "Patients in pharmacist-physician collaborative care showed 43% better blood pressure control compared to usual care.",
        source: "Journal of the American College of Cardiology, 2021",
      },
      {
        percentage: 56,
        title: "Reduction in Medication Errors",
        description:
          "Practices with pharmacist CPAs experienced a 56% reduction in medication errors and adverse drug events.",
        source: "American Journal of Health-System Pharmacy, 2022",
      },
      {
        percentage: 35,
        title: "Decrease in Hospital Readmissions",
        description:
          "Patients managed under pharmacist-physician CPAs had 35% fewer hospital readmissions within 30 days.",
        source: "JAMA Internal Medicine, 2020",
      },
    ],
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary"
      >
        <h2 className="font-title text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
          {collaborativePracticeData.title}
        </h2>
        <p className="font-body text-lg text-gray-600 mb-6 max-w-3xl">
          {collaborativePracticeData.description}
        </p>

        {/* CPA Impact Infographic */}
        <ImpactSection impactData={impactData} />

        {/* Charts Section */}
        <ChartsSection
          timeSavingsSource="American Medical Association Survey, 2023"
          costSavingsSource="Journal of Managed Care Pharmacy, 2022"
          satisfactionSource="American Medical Association Survey, 2023"
        />

        {/* Benefits Grid */}
        <BenefitsSection benefits={collaborativePracticeData.benefits} />
      </motion.div>

      {/* CPA Process */}
      <ProcessSection steps={collaborativePracticeData.cpaProcess} />

      {/* CPA Examples */}
      <ExamplesSection examples={collaborativePracticeData.cpaExamples} />

      {/* Image placeholder for CPA */}
      <ImageSection imageDescription="Pharmacist and physician collaborating on patient care" />
    </div>
  );
};

export default CollaborativePractice;
