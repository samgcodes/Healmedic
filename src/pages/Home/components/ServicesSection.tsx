import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Pill,
  Stethoscope,
  HeartStraight,
  CheckCircle,
} from "@phosphor-icons/react";
import { gsap } from "gsap";

// Define ServiceCategory interface directly in the component
interface ServiceCategory {
  title: string;
  services: string[];
  icon: string;
}

// Services data embedded directly in the component
const servicesData = {
  headline: "Comprehensive Pharmacy & Wellness Services Tailored for You",
  categories: [
    {
      title: "Pharmacy Services",
      services: [
        "Prescription Dispensing",
        "Compounding",
        "Medication Synchronization",
        "Custom Medication Packaging",
        "Over-the-Counter & Premium Products",
        "Pet Medications",
      ],
      icon: "💊",
    },
    {
      title: "Clinical Services",
      services: [
        "Immunizations",
        "International Travel Health Clinic",
        "Medication Therapy Management (MTM)",
        "Chronic Disease Management",
        "Tobacco Cessation",
      ],
      icon: "🩺",
    },
    {
      title: "Health & Wellness Services",
      services: [
        "Health Screenings",
        "Point of Care Testing",
        "Pharmacogenomic (PGx) Testing",
        "Nutrigenomic Testing",
        "Health Education & Navigation",
        "Sports Pharmacy/Medicine",
      ],
      icon: "❤️",
    },
  ],
  ctaButton: {
    text: "View All Services",
    link: "/services",
  },
};

/**
 * Enhanced Service Icon component with animation and styling
 */
interface EnhancedServiceIconProps {
  icon: React.FC<any>;
  size?: number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  color?: string;
  isActive?: boolean;
}

const EnhancedServiceIcon: React.FC<EnhancedServiceIconProps> = ({
  icon: IconComponent,
  size = 24,
  weight = "regular",
  color = "#9a77f6",
  isActive = false,
}) => {
  return (
    <IconComponent
      size={size}
      weight={isActive ? "fill" : weight}
      color={isActive ? "#ffffff" : color}
    />
  );
};

/**
 * Enhanced Large Icon for details section
 */
interface EnhancedLargeIconProps {
  icon: React.FC<any>;
  size?: number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  color?: string;
}

const EnhancedLargeIcon: React.FC<EnhancedLargeIconProps> = ({
  icon: IconComponent,
  size = 96,
  weight = "duotone",
  color = "#9a77f6",
}) => {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only create the animation if we have a reference
    if (!iconRef.current) return;

    // Create floating animation
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { duration: 2, ease: "sine.inOut" },
    });

    tl.to(iconRef.current, {
      y: -8,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={iconRef}
      className="relative inline-flex items-center justify-center"
    >
      {/* Glow effect behind icon */}
      <div
        className="absolute rounded-full opacity-20"
        style={{
          width: size * 1.2,
          height: size * 1.2,
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        }}
      />

      <IconComponent
        size={size}
        weight={weight}
        color={color}
        className="relative z-10"
      />
    </div>
  );
};

/**
 * Get the appropriate icon component based on the category title
 */
const getCategoryIcon = (title: string, size = 24, isActive = false) => {
  switch (title) {
    case "Pharmacy Services":
      return (
        <EnhancedServiceIcon
          icon={Pill}
          size={size}
          weight="regular"
          isActive={isActive}
        />
      );
    case "Clinical Services":
      return (
        <EnhancedServiceIcon
          icon={Stethoscope}
          size={size}
          weight="regular"
          isActive={isActive}
        />
      );
    case "Health & Wellness Services":
      return (
        <EnhancedServiceIcon
          icon={HeartStraight}
          size={size}
          weight="regular"
          isActive={isActive}
        />
      );
    default:
      return <div className="text-5xl">{title.charAt(0)}</div>;
  }
};

/**
 * Get the appropriate large icon component for the details section
 */
const getLargeIcon = (title: string, size = 96) => {
  switch (title) {
    case "Pharmacy Services":
      return <EnhancedLargeIcon icon={Pill} size={size} />;
    case "Clinical Services":
      return <EnhancedLargeIcon icon={Stethoscope} size={size} />;
    case "Health & Wellness Services":
      return <EnhancedLargeIcon icon={HeartStraight} size={size} />;
    default:
      return <div className="text-5xl">{title.charAt(0)}</div>;
  }
};

/**
 * Service Category Card Component
 */
interface ServiceCardProps {
  category: ServiceCategory;
  isActive: boolean;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  category,
  isActive,
  onClick,
}) => {
  // Format the title to split "Services" onto a new line
  const formatTitle = (title: string) => {
    if (title.includes("Services")) {
      const parts = title.split(" Services");
      return (
        <>
          {parts[0]}
          <br />
          Services
        </>
      );
    }
    return title;
  };

  return (
    <div
      className={`service-card rounded-xl p-2 py-3 md:p-4 cursor-pointer transition-all duration-300 border-2 ${
        isActive
          ? "bg-primary text-white shadow-lg border-primary"
          : "bg-white text-gray-800 hover:shadow-md border-gray-200 hover:border-primary"
      }`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center h-full">
        <div className="mb-1 md:mb-3">
          {/* Use the enhanced icon */}
          <div>{getCategoryIcon(category.title, 24, isActive)}</div>
        </div>
        <h3 className="text-[16px] md:text-lg font-bold leading-tight">
          {formatTitle(category.title)}
        </h3>
      </div>
    </div>
  );
};

/**
 * Services Section Component
 *
 * Displays the comprehensive pharmacy and wellness services
 * Animations removed for troubleshooting
 */
const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-[#FDF8EC]">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-primary mb-6 font-title">
            {servicesData.headline}
          </h2>
          <p className="body-regular text-gray-700 max-w-3xl mx-auto">
            From prescription services to wellness programs, we offer a
            comprehensive range of healthcare solutions.
          </p>
        </div>

        {/* Service Categories - Side by side on all screens */}
        <div className="mb-12">
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {servicesData.categories.map((category, index) => (
              <ServiceCard
                key={category.title}
                category={category}
                isActive={activeCategory === index}
                onClick={() => setActiveCategory(index)}
              />
            ))}
          </div>
        </div>

        {/* Service Details */}
        <div className="bg-[#f8f4ff] rounded-2xl p-6 md:p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Mobile: Icon first, then content */}
            <div className="flex justify-center md:hidden order-first mb-6">
              <div className="relative">
                <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center shadow-lg">
                  <div className="text-primary">
                    {getCategoryIcon(
                      servicesData.categories[activeCategory].title,
                      64,
                      false
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Service content */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">
                {servicesData.categories[activeCategory].title}
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {servicesData.categories[activeCategory].services.map(
                  (service) => (
                    <li key={service} className="flex items-start">
                      <CheckCircle
                        className="text-primary mt-1 mr-2 flex-shrink-0"
                        size={16}
                        weight="fill"
                      />
                      <span className="text-sm md:text-base">{service}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Desktop: Icon on the right */}
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="bg-white rounded-full w-64 h-64 flex items-center justify-center shadow-lg">
                  <div className="text-primary">
                    {getLargeIcon(
                      servicesData.categories[activeCategory].title,
                      96
                    )}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 bg-[#9a77f6] rounded-full w-12 h-12" />
                <div className="absolute -bottom-4 -left-4 bg-[#9a77f6] rounded-full w-8 h-8" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to={servicesData.ctaButton.link} className="btn-primary">
            {servicesData.ctaButton.text}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
