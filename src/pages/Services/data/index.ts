/**
 * Service data interfaces and exports
 */

// Interface for individual service details
export interface ServiceDetail {
  name: string;
  description: string;
  benefits?: string[];
  icon?: string;
}

// Interface for service category
export interface ServiceCategory {
  title: string;
  description: string;
  services: ServiceDetail[];
  icon: string;
}

// Re-export all service data
export * from "./pharmacyServices";
export * from "./clinicalServices";
export * from "./wellnessServices";

// Combined services data for use in components
export const servicesPageData = {
  headline: "Comprehensive Pharmacy & Wellness Services Tailored for You",
  subheadline:
    "From prescription services to wellness programs, we offer a comprehensive range of healthcare solutions designed to meet your unique needs.",
};
