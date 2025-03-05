/**
 * Pharmacy Services data
 */
import { ServiceCategory } from "./index";

export const pharmacyServices: ServiceCategory = {
  title: "Pharmacy Services",
  description:
    "Our comprehensive pharmacy services are designed to make medication management simple, convenient, and personalized to your needs.",
  icon: "💊",
  services: [
    {
      name: "Prescription Dispensing",
      description:
        "Fast, accurate prescription filling with personalized counseling from our expert pharmacists. We work with most insurance plans and offer competitive pricing for those without coverage.",
      benefits: [
        "Same-day filling for most prescriptions",
        "Automatic refill reminders",
        "Insurance billing and assistance",
        "Prescription transfer service",
      ],
    },
    {
      name: "Compounding",
      description:
        "Custom-made medications tailored to your specific needs. Our compounding services provide alternatives when commercial medications aren't suitable due to allergies, dosage requirements, or delivery method preferences.",
      benefits: [
        "Customized medication formulations",
        "Alternative delivery methods (creams, gels, lozenges)",
        "Flavor options for improved palatability",
        "Preservative-free formulations available",
      ],
    },
    {
      name: "Medication Synchronization",
      description:
        "Coordinate all your prescription refills to be ready on the same day each month. This service simplifies your medication routine and reduces trips to the pharmacy.",
      benefits: [
        "Fewer pharmacy visits",
        "Reduced chance of missed doses",
        "Proactive refill management",
        "Comprehensive medication review with each sync",
      ],
    },
    {
      name: "Custom Medication Packaging",
      description:
        "Medications organized by date and time in easy-to-open packages. Our packaging solutions help improve medication adherence and simplify complex medication regimens.",
      benefits: [
        "Pre-sorted doses by day and time",
        "Clearly labeled packages",
        "Reduced risk of medication errors",
        "Ideal for multiple daily medications",
      ],
    },
    {
      name: "Over-the-Counter & Premium Products",
      description:
        "Carefully selected health and wellness products, including premium vitamins, supplements, and personal care items. Our pharmacists can help you choose the right products for your needs.",
      benefits: [
        "Curated selection of high-quality products",
        "Expert guidance on product selection",
        "Special orders available for specific needs",
        "Natural and organic options",
      ],
    },
    {
      name: "Pet Medications",
      description:
        "Prescription and over-the-counter medications for your furry family members. We offer competitive pricing and can often compound medications into forms that are easier to administer to pets.",
      benefits: [
        "Flavored medication options",
        "Compounding for difficult-to-medicate pets",
        "Competitive pricing",
        "Guidance on proper administration",
      ],
    },
  ],
};
