import { NavigationItem } from "../types";

/**
 * Navigation menu items for the application
 */
export const MENU_ITEMS: NavigationItem[] = [
  { name: "Services", path: "/services" },
  { name: "Patient Hub", path: "/patient-hub" },
  { name: "For Providers", path: "/for-providers" },
];

/**
 * Secondary navigation menu items for the application
 */
export const SECONDARY_MENU_ITEMS: NavigationItem[] = [
  { name: "About Us", path: "/about-us" },
  { name: "Contact", path: "/contact" },
];
