import { NavigationItem, ContactInfo } from "../types";

/**
 * Main navigation links for footer
 */
export const MAIN_LINKS: NavigationItem[] = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Patient Hub", path: "/patient-hub" },
  { name: "For Providers", path: "/for-providers" },
  { name: "About Us", path: "/about-us" },
  { name: "Contact", path: "/contact" },
];

/**
 * Service links for footer
 */
export const SERVICE_LINKS: NavigationItem[] = [
  { name: "Pharmacy Services", path: "/services" },
  { name: "Clinical Services", path: "/services" },
  { name: "Wellness Services", path: "/services" },
  { name: "Medication Education", path: "/patient-hub" },
  { name: "Nutrition Education", path: "/patient-hub" },
];

/**
 * Social media links
 */
export const SOCIAL_LINKS = [
  { name: "Facebook", icon: "facebook", url: "https://facebook.com" },
  { name: "Twitter", icon: "twitter", url: "https://twitter.com" },
  { name: "Instagram", icon: "instagram", url: "https://instagram.com" },
  { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com" },
];

/**
 * Contact information
 */
export const CONTACT_INFO: ContactInfo = {
  address: "634 South Victory Blvd, Burbank, CA 91502",
  phone: "(818) 467-9767",
  email: "admin@healmedicrx.com",
};

/**
 * Business hours
 */
export const BUSINESS_HOURS = [
  { day: "Monday", hours: "9:00 AM - 6:00 PM" },
  { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
  { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
  { day: "Thursday", hours: "9:00 AM - 6:00 PM" },
  { day: "Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Appointment Only" },
];
