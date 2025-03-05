/**
 * Health & Wellness Services data
 */
import { ServiceCategory } from "./index";

export const wellnessServices: ServiceCategory = {
  title: "Health & Wellness Services",
  description:
    "Our wellness services focus on preventive care and personalized health solutions to help you achieve optimal health and well-being.",
  icon: "❤️",
  services: [
    {
      name: "Health Screenings",
      description:
        "Convenient and affordable screenings to monitor key health indicators and detect potential issues early. Our screenings include blood pressure, cholesterol, blood glucose, A1C, and more.",
      benefits: [
        "Quick results with professional interpretation",
        "No appointment necessary for most screenings",
        "Affordable pricing with some screenings covered by insurance",
        "Personalized recommendations based on results",
      ],
    },
    {
      name: "Point of Care Testing",
      description:
        "Rapid diagnostic testing for various conditions including strep throat, flu, COVID-19, and UTIs. Get results quickly and start appropriate treatment sooner.",
      benefits: [
        "Same-day results for most tests",
        "Convenient alternative to doctor's office visits",
        "Treatment recommendations or prescriptions when appropriate",
        "Follow-up care coordination",
      ],
    },
    {
      name: "Pharmacogenomic (PGx) Testing",
      description:
        "Genetic testing that helps determine how your body processes certain medications. This personalized approach can help identify which medications will work best for you with the fewest side effects.",
      benefits: [
        "Personalized medication recommendations",
        "Reduced trial-and-error in medication selection",
        "Potential reduction in adverse drug reactions",
        "One-time test with lifetime benefits",
      ],
    },
    {
      name: "Nutrigenomic Testing",
      description:
        "Genetic testing that provides insights into how your body responds to different nutrients and dietary factors. Our pharmacists can help you interpret results and develop a personalized nutrition plan.",
      benefits: [
        "Personalized dietary recommendations",
        "Identification of potential food sensitivities",
        "Targeted supplement recommendations",
        "Support for weight management goals",
      ],
    },
    {
      name: "Health Education & Navigation",
      description:
        "Guidance through the complex healthcare system with educational resources, referrals to specialists, and assistance understanding health information and treatment options.",
      benefits: [
        "Clear explanation of health conditions and treatments",
        "Assistance with healthcare decision-making",
        "Referrals to trusted healthcare providers",
        "Resources for continued health education",
      ],
    },
    {
      name: "Sports Pharmacy/Medicine",
      description:
        "Specialized services for athletes and active individuals, including performance optimization, injury prevention, and recovery support. Our team includes pharmacists with expertise in sports medicine.",
      benefits: [
        "Medication management for athletes",
        "Supplement evaluation and recommendations",
        "Recovery and performance optimization strategies",
        "Coordination with sports medicine providers",
      ],
    },
  ],
};
