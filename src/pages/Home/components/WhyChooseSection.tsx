import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  GraduationCap,
  Atom,
  Clock,
  UsersThree,
  FirstAid,
} from "@phosphor-icons/react";
import { gsap } from "gsap";

// Why Choose section data embedded directly in the component
const whyChooseData = {
  headline: "Why Choose HealMedic Pharmacy? – Your Local Health Partner",
  points: [
    {
      title: "Personalized Care",
      description:
        "We take the time to understand your health needs and offer tailored solutions.",
      icon: "🧠", // Will be replaced with actual icon component
    },
    {
      title: "Expert Guidance",
      description:
        "Our pharmacists and healthcare professionals provide expert advice and medication management.",
      icon: "👨‍⚕️", // Will be replaced with actual icon component
    },
    {
      title: "Innovative Services",
      description:
        "From compounding to pharmacogenomic testing, we offer cutting-edge services for optimal health.",
      icon: "🔬", // Will be replaced with actual icon component
    },
    {
      title: "Convenience & Accessibility",
      description:
        "Medication synchronization, custom packaging, and online refills make managing your health easier.",
      icon: "⚡", // Will be replaced with actual icon component
    },
    {
      title: "Collaborative Care",
      description:
        "We work closely with your healthcare providers to ensure a seamless and integrated approach to your treatment and well-being.",
      icon: "🤝", // Will be replaced with actual icon component
    },
    {
      title: "Clinical Expertise",
      description:
        "Our team includes specialists with advanced training in various therapeutic areas to provide expert clinical care.",
      icon: "🏥", // Will be replaced with actual icon component
    },
  ],
  ctaButton: {
    text: "Meet Our Team",
    link: "/about-us",
  },
};

/**
 * Enhanced Icon component with animation and styling
 */
interface EnhancedIconProps {
  icon: React.FC<any>;
  size?: number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  primaryColor?: string;
  secondaryColor?: string;
  className?: string;
}

const EnhancedIcon: React.FC<EnhancedIconProps> = ({
  icon: IconComponent,
  size = 64,
  weight = "regular",
  primaryColor = "#9a77f6",
  secondaryColor = "#e0d4ff",
  className = "",
}) => {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = iconRef.current;
    if (!el) return;

    // Simple hover animation
    el.addEventListener("mouseenter", () => {
      gsap.to(el.querySelector(".icon-inner"), {
        y: -5,
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(el.querySelector(".icon-bg"), {
        scale: 1.1,
        opacity: 0.8,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    el.addEventListener("mouseleave", () => {
      gsap.to(el.querySelector(".icon-inner"), {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(el.querySelector(".icon-bg"), {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    return () => {
      el.removeEventListener("mouseenter", () => {});
      el.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <div
      ref={iconRef}
      className={`relative flex items-center justify-center ${className}`}
    >
      {/* Background circle with gradient */}
      <div
        className="icon-bg absolute inset-0 rounded-full bg-gradient-to-br from-white to-purple-50"
        style={{
          boxShadow: `0 8px 32px -8px ${primaryColor}40`,
        }}
      />

      {/* Secondary decorative circle */}
      <div
        className="absolute rounded-full"
        style={{
          width: size * 0.85,
          height: size * 0.85,
          background: `radial-gradient(circle, ${secondaryColor}30 0%, transparent 70%)`,
        }}
      />

      {/* Phosphor Icon */}
      <div className="icon-inner relative z-10">
        <IconComponent size={size} weight={weight} color={primaryColor} />
      </div>

      {/* Optional decorative elements */}
      <div
        className="absolute rounded-full bg-white"
        style={{
          width: size * 0.1,
          height: size * 0.1,
          top: 0,
          right: size * 0.1,
          boxShadow: `0 4px 8px -2px ${primaryColor}30`,
        }}
      />
    </div>
  );
};

/**
 * Get the appropriate icon component based on the point title
 */
const getIconComponent = (title: string, size = 64) => {
  switch (title) {
    case "Personalized Care":
      return (
        <EnhancedIcon
          icon={Heart}
          size={size}
          weight="duotone"
          primaryColor="#9a77f6"
          secondaryColor="#e9e1ff"
        />
      );
    case "Expert Guidance":
      return <EnhancedIcon icon={GraduationCap} size={size} weight="duotone" />;
    case "Innovative Services":
      return <EnhancedIcon icon={Atom} size={size} weight="duotone" />;
    case "Convenience & Accessibility":
      return (
        <EnhancedIcon
          icon={Clock}
          size={size}
          weight="duotone"
          primaryColor="#9a77f6"
          secondaryColor="#e9e1ff"
        />
      );
    case "Collaborative Care":
      return <EnhancedIcon icon={UsersThree} size={size} weight="duotone" />;
    case "Clinical Expertise":
      return (
        <EnhancedIcon
          icon={FirstAid}
          size={size}
          weight="duotone"
          primaryColor="#9a77f6"
          secondaryColor="#e9e1ff"
        />
      );
    default:
      return <div className="text-4xl">{title.charAt(0)}</div>;
  }
};

/**
 * WhyChooseSection Component
 *
 * Displays the reasons to choose HealMedic Pharmacy
 * Animations removed for troubleshooting
 */
const WhyChooseSection: React.FC = () => {
  const dividerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  // Add scroll animation with GSAP for the wave divider
  useEffect(() => {
    if (!dividerRef.current || !pathRef.current) return;

    // Simple animation when scrolling to the divider
    gsap.fromTo(
      pathRef.current,
      {
        scaleY: 0.7,
        transformOrigin: "center",
      },
      {
        scaleY: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: dividerRef.current,
          start: "top bottom",
          end: "bottom center",
          scrub: 0.5, // Smooth animation tied to scroll position
        },
      }
    );

    // Add a slight parallax effect
    gsap.to(dividerRef.current, {
      y: -10,
      scrollTrigger: {
        trigger: dividerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8,
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === dividerRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section className="py-10 md:py-16 bg-[#f0ebff] relative rounded-t-3xl rounded-b-3xl">
      <div className="relative">
        <div className="py-6 md:py-8">
          <div className="container-wide mx-auto px-6 md:px-8">
            <div className="text-center mb-10">
              <h2 className="heading-2 text-primary mb-6 font-title">
                {whyChooseData.headline}
              </h2>
              <p className="body-regular text-gray-700 max-w-3xl mx-auto">
                We're more than just a pharmacy - we're your partner in health
                and wellness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {whyChooseData.points.map((point) => (
                <div
                  key={point.title}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 h-full"
                >
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="mb-6">{getIconComponent(point.title)}</div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {point.title}
                    </h3>
                    <p className="text-gray-700">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to={whyChooseData.ctaButton.link} className="btn-primary">
                {whyChooseData.ctaButton.text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
