import React from "react";
import HeroSection from "./components/HeroSection";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import MapSection from "./components/MapSection";
import FAQSection from "./components/FAQSection";

/**
 * Contact page component
 * Displays contact information, form, map, and FAQs
 */
const Contact = () => {
  return (
    <div>
      <div className="relative">
        <HeroSection />

        <section className="bg-[#FDF8EC] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <ContactInfo />
                <div id="contact-form">
                  <ContactForm />
                </div>
              </div>

              <MapSection />
              <FAQSection />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
