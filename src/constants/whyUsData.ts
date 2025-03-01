import {
  JourneyStep,
  Metric,
  ExperienceComparison,
  Testimonial,
  TechFeature,
  Hotspot,
} from "../types";

/**
 * Prescription journey steps data
 */
export const JOURNEY_STEPS: JourneyStep[] = [
  {
    title: "Prescription",
    description:
      "Your doctor sends your prescription directly to our secure system",
    icon: "📝", // This will be replaced with an actual SVG/component
  },
  {
    title: "Processing",
    description:
      "Our AI system checks for interactions and prepares your medication",
    icon: "⚙️", // This will be replaced with an actual SVG/component
  },
  {
    title: "Verification",
    description: "Licensed pharmacists review and approve your prescription",
    icon: "✓", // This will be replaced with an actual SVG/component
  },
  {
    title: "Fulfillment",
    description:
      "Automated systems precisely measure and package your medication",
    icon: "💊", // This will be replaced with an actual SVG/component
  },
  {
    title: "Consultation",
    description:
      "Expert medication consultation answering all your questions for new medications",
    icon: "👨‍⚕️", // This will be replaced with an actual SVG/component
  },
  {
    title: "Pickup/Delivery",
    description: "Choose convenient pickup or free same-day delivery",
    icon: "🚚", // This will be replaced with an actual SVG/component
  },
];

/**
 * Clinical services with proven health impacts
 */
export const HEALTH_METRICS: Metric[] = [
  {
    title: "Medication Therapy Management",
    value: "30%",
    icon: "💊", // This will be replaced with an actual SVG/component
    description: "Reduction in medication-related problems",
    trend: {
      value: 30,
      isPositive: true,
    },
  },
  {
    title: "Immunization Services",
    value: "85%",
    icon: "💉", // This will be replaced with an actual SVG/component
    description: "Increased protection against preventable diseases",
    trend: {
      value: 15,
      isPositive: true,
    },
  },
  {
    title: "Chronic Disease Management",
    value: "40%",
    icon: "❤️", // This will be replaced with an actual SVG/component
    description: "Improvement in patient health outcomes",
    trend: {
      value: 25,
      isPositive: true,
    },
  },
];

/**
 * Pet medication services
 */
export const PET_MEDICATION_SERVICES = [
  {
    title: "Specialized Pet Medications",
    description: "Custom-compounded medications for your furry family members",
    icon: "🐾",
  },
  {
    title: "Veterinary Collaboration",
    description: "Direct communication with your vet for seamless care",
    icon: "🩺",
  },
  {
    title: "Pet-Friendly Formulations",
    description: "Flavored medications that pets actually enjoy taking",
    icon: "🦴",
  },
  {
    title: "Home Delivery",
    description: "Convenient delivery of pet medications to your doorstep",
    icon: "📦",
  },
];

/**
 * Wellness programs data to replace Innovation Spotlight
 */
export const WELLNESS_PROGRAMS = [
  {
    title: "Nutrition Counseling",
    description: "Personalized guidance for dietary needs and supplements",
    details: [
      "One-on-one consultations with nutrition experts",
      "Medication and supplement interaction checks",
      "Customized nutrition plans for health conditions",
    ],
    icon: "🥗",
  },
  {
    title: "Preventive Screenings",
    description: "Early detection services for better health outcomes",
    details: [
      "Blood pressure and cholesterol monitoring",
      "Diabetes risk assessments",
      "Bone density screenings",
    ],
    icon: "🔬",
  },
  {
    title: "Health Education",
    description: "Workshops and resources for better health management",
    details: [
      "Monthly health seminars on common conditions",
      "Digital resources and health tracking tools",
      "Medication management education",
    ],
    icon: "📚",
  },
];

/**
 * Experience comparison data
 */
export const EXPERIENCE_COMPARISON: ExperienceComparison = {
  traditional: {
    title: "Traditional Pharmacy",
    points: [
      {
        icon: "⏱️",
        text: "Long wait times for prescriptions (30-60 minutes)",
      },
      {
        icon: "🔄",
        text: "Multiple trips for refills and adjustments",
      },
      {
        icon: "❓",
        text: "Limited consultation time with pharmacists",
      },
      {
        icon: "📱",
        text: "Outdated communication methods",
      },
      {
        icon: "💰",
        text: "Unexpected costs and pricing surprises",
      },
    ],
  },
  healMedic: {
    title: "HealMedic Experience",
    points: [
      {
        icon: "⚡",
        text: "Express prescription service with mobile alerts",
      },
      {
        icon: "🔄",
        text: "Automatic refills and medication management",
      },
      {
        icon: "👨‍⚕️",
        text: "Extended pharmacist consultations available 24/7",
      },
      {
        icon: "📱",
        text: "Modern app with real-time updates and reminders",
      },
      {
        icon: "💰",
        text: "Transparent pricing and cost-saving recommendations",
      },
    ],
  },
};

/**
 * Patient testimonials data
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Patient since 2022",
    quote:
      "HealMedic has transformed how I manage my family's medications. The app reminders and automatic refills mean we never run out of essential prescriptions.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Chronic care patient",
    quote:
      "As someone with multiple prescriptions, HealMedic's medication management system has been life-changing. Their pharmacists take the time to answer all my questions.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "New patient",
    quote:
      "Switching to HealMedic was incredibly easy. Their transfer process took care of everything, and their prices are better than my previous pharmacy.",
    rating: 4,
  },
];

/**
 * Technology features data
 */
export const TECH_FEATURES: TechFeature[] = [
  {
    title: "Safety",
    description: "Triple Verification System",
    details: [
      "AI-powered image recognition",
      "Pharmacist expert review",
      "Barcode confirmation scan",
    ],
    icon: "🛡️",
  },
  {
    title: "Efficiency",
    description: "Smart Workflow Optimization",
    details: [
      "Predictive inventory management",
      "Automated dispensing systems",
      "Priority-based processing",
    ],
    icon: "⚡",
  },
  {
    title: "Integration",
    description: "Connected Health Ecosystem",
    details: [
      "Seamless EHR/EMR integration",
      "Doctor-pharmacy direct communication",
      "Insurance real-time verification",
    ],
    icon: "🔄",
  },
];

/**
 * 3D model hotspots data
 */
export const TECH_HOTSPOTS: Hotspot[] = [
  {
    x: 20,
    y: 30,
    title: "Automated Dispensing",
    description: "99.99% accuracy with triple verification",
  },
  {
    x: 60,
    y: 40,
    title: "Robotic Sorting",
    description: "Handles 500+ prescriptions per hour",
  },
  {
    x: 80,
    y: 70,
    title: "Safety Scanner",
    description: "Checks for 25,000+ potential interactions",
  },
];
