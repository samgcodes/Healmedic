import React from "react";
import { Link } from "react-router-dom";
import { QUICK_LINKS, CONTACT_INFO } from "../../constants/footer.ts";
import { NavigationItem, ChildrenProps } from "../../types";

/**
 * FooterSection props
 */
interface FooterSectionProps extends ChildrenProps {
  title: string;
}

/**
 * FooterSection component for reusable footer sections
 */
const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => (
  <div>
    <h3 className="text-fluid-lg font-semibold mb-4 sm:mb-5">{title}</h3>
    {children}
  </div>
);

/**
 * Main Footer component
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#9a77f6] text-white relative" role="contentinfo">
      {/* Curved top edge */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-auto"
          aria-hidden="true"
        >
          <path
            fill="#FDF8EC"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-fluid-4 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Company info */}
          <FooterSection title="HealMedic Pharmacy">
            <p className="text-fluid-sm">
              Your trusted partner in health and wellness.
            </p>
          </FooterSection>

          {/* Quick links */}
          <FooterSection title="Quick Links">
            <nav aria-label="Footer Navigation">
              <ul className="space-y-3">
                {QUICK_LINKS.map((item: NavigationItem) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-fluid-sm block py-1 hover:underline focus:underline focus:outline-none transition-colors duration-200 touch-manipulation"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </FooterSection>

          {/* Contact info */}
          <FooterSection title="Contact Us">
            <address className="not-italic">
              <p className="text-fluid-sm mb-2">{CONTACT_INFO.address}</p>
              <p className="text-fluid-sm mb-2">
                Phone:{" "}
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, "")}`}
                  className="hover:underline focus:underline focus:outline-none transition-colors duration-200 py-1 inline-block touch-manipulation"
                >
                  {CONTACT_INFO.phone}
                </a>
              </p>
              <p className="text-fluid-sm">
                Email:{" "}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:underline focus:underline focus:outline-none transition-colors duration-200 py-1 inline-block touch-manipulation"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>
            </address>
          </FooterSection>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-white/20 text-fluid-xs text-center">
          © {currentYear} HealMedic Pharmacy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
