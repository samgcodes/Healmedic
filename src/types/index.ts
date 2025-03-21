/**
 * Common TypeScript type definitions for the HealMedic application
 */

/**
 * Navigation item type
 */
export interface NavigationItem {
  name: string;
  path: string;
  icon?: string; // Optional icon name from Phosphor icons
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
 * Journey step type for prescription process
 */
export interface JourneyStep {
  title: string;
  description: string;
  icon: string;
  stat?: {
    value: string;
    label: string;
  };
}

/**
 * Metric type for health impact dashboard
 */
export interface Metric {
  title: string;
  value: string;
  icon: string;
  description: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

/**
 * Experience comparison type
 */
export interface ExperienceComparison {
  traditional: {
    title: string;
    points: Array<{
      icon: string;
      text: string;
    }>;
  };
  healMedic: {
    title: string;
    points: Array<{
      icon: string;
      text: string;
    }>;
  };
}

/**
 * Testimonial type
 */
export interface Testimonial {
  name: string;
  role?: string;
  image?: string;
  quote: string;
  rating?: number;
}

// Tech feature and hotspot types have been removed as they are no longer used

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
