import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-primary to-[#7c5ae0]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-64 md:h-80 flex items-center justify-center text-white overflow-hidden"
      >
        <div className="text-center z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="font-body text-lg md:text-xl lg:text-2xl"
          >
            We're Here to Help
          </motion.p>
        </div>

        {/* Decorative curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            className="w-full h-auto"
          >
            <path
              fill="#FDF8EC"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
            ></path>
          </svg>
        </div>
      </motion.section>

      {/* Content Section */}
      <section className="bg-[#FDF8EC] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="font-title text-3xl font-semibold mb-6 text-gray-800">
                    Get in Touch
                  </h2>
                  <p className="font-body text-lg text-gray-600 mb-8">
                    Have questions about our services? Need to refill a
                    prescription? Our team is here to assist you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📍</div>
                    <div>
                      <h3 className="font-title text-xl font-semibold text-gray-800 mb-1">
                        Visit Us
                      </h3>
                      <p className="font-body text-gray-600">
                        634 South Victory Blvd
                        <br />
                        Burbank, CA 91502
                        <br />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📞</div>
                    <div>
                      <h3 className="font-title text-xl font-semibold text-gray-800 mb-1">
                        Call Us
                      </h3>
                      <p className="font-body text-gray-600">
                        Main: (818) 467-9767
                        <br />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">⏰</div>
                    <div>
                      <h3 className="font-title text-xl font-semibold text-gray-800 mb-1">
                        Hours
                      </h3>
                      <p className="font-body text-gray-600">
                        Mon: 9:00 AM - 6:00 PM
                        <br />
                        Tue: 9:00 AM - 6:00 PM
                        <br />
                        Wed: 9:00 AM - 6:00 PM
                        <br />
                        Thu: 9:00 AM - 6:00 PM
                        <br />
                        Fri: 9:00 AM - 6:00 PM
                        <br />
                        Sat: 10:00 AM - 2:00 PM
                        <br />
                        Sun: Appointment Only
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="font-title text-2xl font-semibold mb-6 text-gray-800">
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-body text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary font-body"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-body text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary font-body"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-body text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
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
                      htmlFor="message"
                      className="block font-body text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary font-body"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-body px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
