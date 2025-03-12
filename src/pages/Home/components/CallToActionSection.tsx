import React from "react";
import { Link } from "react-router-dom";

// CTA data embedded directly in the component
const ctaData = {
  headline: "Ready to Experience a Better Pharmacy?",
  text: "Join our family of satisfied patients and experience pharmacy care like never before. Whether you need a prescription refill, a clinical consultation, or wellness services, we are here to help.",
  buttons: [
    {
      text: "Transfer Your Prescription",
      link: "/transfer-prescription",
      isPrimary: true,
    },
    {
      text: "Contact Us",
      link: "/contact",
      isPrimary: false,
    },
  ],
};

/**
 * Call To Action Section Component
 *
 * Displays a call to action section with buttons to engage users
 * Animations removed for troubleshooting
 */
const CallToActionSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FDF8EC]">
      <div className="container-wide">
        <div className="bg-gradient-to-r from-[#8a67e6] to-[#9a77f6] rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full"
            style={{ top: "-2rem", right: "-2rem" }}
          />
          <div
            className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full"
            style={{ bottom: "-1rem", left: "-1rem" }}
          />

          <div className="relative z-10">
            <div className="text-center text-white mb-8">
              <h2 className="heading-2 mb-6 font-title">{ctaData.headline}</h2>
              <p className="body-large max-w-3xl mx-auto">{ctaData.text}</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              {ctaData.buttons.map((button) => (
                <Link
                  key={button.text}
                  to={button.link}
                  className={
                    button.isPrimary
                      ? "btn-secondary w-full sm:w-auto"
                      : "btn-outline text-white w-full sm:w-auto"
                  }
                >
                  {button.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
