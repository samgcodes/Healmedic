/**
 * Clinical Services data
 */
import { ServiceCategory } from "./index";

export const clinicalServices: ServiceCategory = {
  title: "Clinical Services",
  description:
    "Our clinical services extend beyond traditional pharmacy care, offering preventive health measures and specialized treatment support.",
  icon: "🩺",
  services: [
    {
      name: "Immunizations",
      description:
        "Protection against preventable diseases through a comprehensive range of vaccinations administered by our certified immunizing pharmacists. We offer both scheduled appointments and walk-in services.",
      benefits: [
        "Convenient scheduling options",
        "Most insurance plans accepted",
        "Digital vaccination records",
        "Travel vaccine consultations",
      ],
    },
    {
      name: "International Travel Health Clinic",
      description:
        "Comprehensive travel health services including destination-specific vaccinations, medication recommendations, and health advice for international travelers. Our pharmacists can help you prepare for healthy travel anywhere in the world.",
      benefits: [
        "Destination-specific health consultations",
        "Required and recommended vaccinations",
        "Preventive medication prescriptions",
        "Travel health supplies and kits",
      ],
    },
    {
      name: "Medication Therapy Management (MTM)",
      description:
        "Personalized consultations to optimize your medication regimen, identify potential issues, and ensure you're getting the maximum benefit from your medications while minimizing side effects.",
      benefits: [
        "Comprehensive medication review",
        "Identification of drug interactions",
        "Strategies to reduce medication costs",
        "Personalized action plan",
      ],
    },
    {
      name: "Chronic Disease Management",
      description:
        "Ongoing support and monitoring for conditions like diabetes, hypertension, asthma, and high cholesterol. Our pharmacists work alongside your healthcare providers to help you manage your condition effectively.",
      benefits: [
        "Regular health monitoring",
        "Medication optimization",
        "Lifestyle modification guidance",
        "Coordination with your healthcare team",
      ],
    },
    {
      name: "Tobacco Cessation",
      description:
        "Evidence-based support to help you quit smoking or using tobacco products. Our program combines medication therapy with behavioral strategies for the best chance of success.",
      benefits: [
        "Personalized quit plan",
        "Medication therapy options",
        "Regular check-ins and support",
        "Strategies to manage cravings and withdrawal",
      ],
    },
  ],
};
