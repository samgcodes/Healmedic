/**
 * Common TypeScript type definitions for the HealMedic application
 */

/**
 * Navigation item type
 */
export interface NavigationItem {
  name: string;
  path: string;
}

/**
 * Feature item type
 */
export interface Feature {
  title: string;
  description: string[];
  image: string;
}

/**
 * FAQ item type
 */
export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Contact information type
 */
export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

/**
 * Props for components with children
 */
export interface ChildrenProps {
  children: React.ReactNode;
}

/**
 * Props for components with a className
 */
export interface ClassNameProps {
  className?: string;
}

/**
 * Combined props for components with children and className
 */
export interface ComponentBaseProps extends ChildrenProps, ClassNameProps {}
