/**
 * Comprehensive Services section data for the homepage
 */

export interface ServiceCategory {
  title: string;
  services: string[];
  icon: string;
}

export const servicesData = {
  headline: "Comprehensive Pharmacy & Wellness Services Tailored for You",
  categories: [
    {
      title: "Pharmacy Services",
      services: [
        "Prescription Dispensing",
        "Compounding",
        "Medication Synchronization",
        "Custom Medication Packaging",
        "Over-the-Counter & Premium Products",
        "Pet Medications",
      ],
      icon: "💊",
    },
    {
      title: "Clinical Services",
      services: [
        "Immunizations",
        "International Travel Health Clinic",
        "Medication Therapy Management (MTM)",
        "Chronic Disease Management",
        "Tobacco Cessation",
      ],
      icon: "🩺",
    },
    {
      title: "Health & Wellness Services",
      services: [
        "Health Screenings",
        "Point of Care Testing",
        "Pharmacogenomic (PGx) Testing",
        "Nutrigenomic Testing",
        "Health Education & Navigation",
        "Sports Pharmacy/Medicine",
      ],
      icon: "❤️",
    },
  ],
  ctaButton: {
    text: "View All Services",
    link: "/services",
  },
};
