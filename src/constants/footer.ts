import { NavigationItem, ContactInfo } from "../types";

/**
 * Footer quick links
 */
export const QUICK_LINKS: NavigationItem[] = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about-us" },
  { name: "Contact", path: "/contact" },
];

/**
 * Contact information
 */
export const CONTACT_INFO: ContactInfo = {
  address: "123 Health Street, Wellness City",
  phone: "(123) 456-7890",
  email: "info@healmedic.com",
};
