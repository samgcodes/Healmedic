import { NavigationItem } from "../types";

/**
 * Navigation menu items for the application
 */
export const MENU_ITEMS: NavigationItem[] = [
  { name: "Services", path: "/services" },
  { name: "Patient Hub", path: "/patient-hub" },
  { name: "Provider Hub", path: "/for-providers" },
  { name: "Blog", path: "/blog" },
];

/**
 * Secondary navigation menu items for the application
 */
export const SECONDARY_MENU_ITEMS: NavigationItem[] = [
  { name: "About Us", path: "/about-us" },
  { name: "Contact", path: "/contact" },
];
