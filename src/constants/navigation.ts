import { NavigationItem } from "../types";

/**
 * Navigation menu items for the application
 */
export const MENU_ITEMS: NavigationItem[] = [
  { name: "Services", path: "/services", icon: "FirstAidKit" },
  { name: "Patient Hub", path: "/patient-hub", icon: "User" },
  { name: "Provider Hub", path: "/for-providers", icon: "Stethoscope" },
  { name: "Blog", path: "/blog", icon: "FileText" },
];

/**
 * Secondary navigation menu items for the application
 */
export const SECONDARY_MENU_ITEMS: NavigationItem[] = [
  { name: "About Us", path: "/about-us" },
  { name: "Contact", path: "/contact" },
];
