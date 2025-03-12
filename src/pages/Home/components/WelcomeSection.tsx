import React from "react";
import { Link } from "react-router-dom";

// Welcome section data embedded directly in the component
const welcomeData = {
  headline:
    "Your Trusted Local Pharmacy – Personalized Care & Innovative Services",
  subtext:
    "At HealMedic Pharmacy, we provide expert prescription services, custom medication solutions, and innovative wellness programs designed for your unique health needs. From medication synchronization to travel health consultations, we prioritize convenience and care for our patients.",
  ctaButton: {
    text: "Explore Our Services",
    link: "/services",
  },
};

/**
 * Welcome Section Component
 *
 * Displays the welcome message and introduction for the homepage
 * Animations removed for troubleshooting
 */
const WelcomeSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FDF8EC]">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="welcome-content">
            <h2 className="heading-2 text-primary mb-6 font-title">
              {welcomeData.headline}
            </h2>
            <p className="body-large text-gray-700 mb-8">
              {welcomeData.subtext}
            </p>
            <Link
              to={welcomeData.ctaButton.link}
              className="btn-primary inline-block"
            >
              {welcomeData.ctaButton.text}
            </Link>
          </div>

          <div className="welcome-illustration flex justify-center">
            <div className="relative">
              <div className="bg-[#f8f4ff] rounded-full w-96 h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f0e8ff] to-[#e0d4ff] opacity-50"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <img
                    src="/assets/pharmacist1.jpeg"
                    alt="Professional pharmacist"
                    className="w-80 h-80 object-cover rounded-full shadow-lg"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 bg-[#9a77f6] rounded-full w-12 h-12" />
              <div className="absolute -bottom-4 -left-4 bg-[#9a77f6] rounded-full w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
