import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });

  // Create a unique Formspree form ID - replace with your actual form ID after signing up
  const FORMSPREE_FORM_ID = "mldgqqwy"; // Example ID - you'll need to create your own

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, error: false, message: "Sending..." });

    try {
      // Send form data to Formspree
      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          body: new FormData(e.target),
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        // Show success message
        setFormStatus({
          submitted: true,
          error: false,
          message: "Thank you! Your message has been sent successfully.",
        });

        // Reset form
        e.target.reset();
      } else {
        // Handle error
        const data = await response.json();
        throw new Error(data.error || "Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({
        submitted: true,
        error: true,
        message:
          "There was an error sending your message. Please try again or call us directly.",
      });
    }
  };
  return (
    <div className="bg-gradient-to-br from-primary to-[#7c5ae0]">
      {/* Hero Section - Redesigned to match AboutUs style */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative pt-32 pb-16 md:pt-40 md:pb-20 flex items-center justify-center text-white"
      >
        <div className="container-narrow text-center z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="heading-2 mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="body-large"
          >
            We're Here to Help
          </motion.p>
        </div>

        {/* Straight edge instead of wavy */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#FDF8EC]"></div>
      </motion.section>

      {/* Content Section */}
      <section className="bg-[#FDF8EC] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {/* Contact Information - Enhanced with styled cards */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="space-y-8"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary">
                  <h2 className="font-title text-3xl font-semibold mb-6 text-gray-800">
                    Get in Touch
                  </h2>
                  <p className="font-body text-lg text-gray-600">
                    Have questions about our services? Need to refill a
                    prescription? Our team is here to assist you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary flex items-start">
                    <div className="text-primary text-2xl mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-title text-xl font-semibold text-gray-800 mb-1">
                        Visit Us
                      </h3>
                      <p className="font-body text-gray-600">
                        634 South Victory Blvd
                        <br />
                        Burbank, CA 91502
                      </p>
                      <a
                        href="https://maps.google.com/?q=634+South+Victory+Blvd+Burbank+CA+91502"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-semibold mt-2 inline-block hover:underline"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary flex items-start">
                    <div className="text-primary text-2xl mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-title text-xl font-semibold text-gray-800 mb-1">
                        Call Us
                      </h3>
                      <p className="font-body text-gray-600">
                        Main: (818) 467-9767
                      </p>
                      <a
                        href="tel:+18184679767"
                        className="text-primary font-semibold mt-2 inline-block hover:underline"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary flex items-start">
                    <div className="text-primary text-2xl mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-title text-xl font-semibold text-gray-800 mb-1">
                        Hours
                      </h3>
                      <div className="font-body text-gray-600 grid grid-cols-2 gap-x-4">
                        <span>Monday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                        <span>Tuesday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                        <span>Wednesday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                        <span>Thursday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                        <span>Friday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                        <span>Saturday:</span>
                        <span>10:00 AM - 2:00 PM</span>
                        <span>Sunday:</span>
                        <span>Appointment Only</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Contact Form - Shortened */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-primary"
              >
                <h2 className="font-title text-2xl font-semibold mb-6 text-gray-800">
                  Send Us a Message
                </h2>
                <form
                  className="space-y-4"
                  onSubmit={handleSubmit}
                  name="contact-form"
                  action={`https://formspree.io/f/${FORMSPREE_FORM_ID}`}
                  method="POST"
                >
                  {formStatus.submitted && (
                    <div
                      className={`p-4 rounded-md ${
                        formStatus.error
                          ? "bg-red-50 text-red-800"
                          : "bg-green-50 text-green-800"
                      }`}
                    >
                      {formStatus.message}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-body text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        aria-required="true"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary font-body"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block font-body text-sm font-medium text-gray-700 mb-1"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        aria-required="true"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary font-body"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block font-body text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary font-body"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="reason"
                        className="block font-body text-sm font-medium text-gray-700 mb-1"
                      >
                        Reason
                      </label>
                      <select
                        id="reason"
                        name="reason"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary font-body"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="prescription">
                          Prescription Transfer
                        </option>
                        <option value="appointment">Request Appointment</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-body text-sm font-medium text-gray-700 mb-1"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      required
                      aria-required="true"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary font-body"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        required
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="privacy"
                        className="font-body text-gray-600"
                      >
                        I agree that my data is being collected.
                        <span className="text-red-500">*</span>
                      </label>
                    </div>
                  </div>

                  {/* This will tell Formspree where to send the email */}
                  <input
                    type="hidden"
                    name="_replyto"
                    value="admin@healmedicrx.com"
                  />
                  <input
                    type="hidden"
                    name="_subject"
                    value="New contact form submission from HealMedic website"
                  />
                  {/* Redirect after submission - optional */}
                  <input
                    type="hidden"
                    name="_next"
                    value={window.location.href}
                  />

                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-body px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors duration-300 flex items-center justify-center"
                    disabled={formStatus.submitted && !formStatus.error}
                  >
                    {formStatus.submitted && !formStatus.error ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Sent
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Map Section - Full Width */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="max-w-6xl mx-auto mb-16"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary">
                <h3 className="font-title text-xl font-semibold text-gray-800 mb-4">
                  Find Us
                </h3>
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.4616173732747!2d-118.3462!3d34.1725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf5c9c7b5555%3A0x8f5c1f7c5d6c7d8d!2s634%20S%20Victory%20Blvd%2C%20Burbank%2C%20CA%2091502!5e0!3m2!1sen!2sus!4v1646168000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="HealMedic Pharmacy Location"
                  ></iframe>
                </div>
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-title text-3xl font-semibold mb-8 text-gray-800 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary">
                  <h3 className="font-title text-xl font-semibold text-gray-800 mb-2">
                    How do I transfer my prescription to HealMedic Pharmacy?
                  </h3>
                  <p className="font-body text-gray-600">
                    You can transfer your prescription by calling us at (818)
                    467-9767, using our contact form above, or by visiting us in
                    person. We'll need your current pharmacy information and
                    prescription details to process the transfer.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary">
                  <h3 className="font-title text-xl font-semibold text-gray-800 mb-2">
                    Do you offer medication delivery services?
                  </h3>
                  <p className="font-body text-gray-600">
                    Yes, we offer free local delivery for prescriptions within a
                    5-mile radius. For areas outside our free delivery zone, we
                    offer delivery for a small fee. Please contact us for more
                    details.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary">
                  <h3 className="font-title text-xl font-semibold text-gray-800 mb-2">
                    How can I schedule a consultation with a pharmacist?
                  </h3>
                  <p className="font-body text-gray-600">
                    You can schedule a consultation by calling us, using our
                    contact form, or visiting us in person. Our pharmacists are
                    available for medication reviews, health consultations, and
                    personalized wellness advice.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
