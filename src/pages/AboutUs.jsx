import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const features = [
    {
      title: "Expert Care",
      description:
        "Our team of experienced pharmacists provides personalized attention and expert guidance for all your health needs.",
      icon: "👨‍⚕️",
    },
    {
      title: "Quality Products",
      description:
        "We stock a comprehensive range of high-quality medications and health products from trusted manufacturers.",
      icon: "💊",
    },
    {
      title: "Fast Service",
      description:
        "Quick prescription processing and efficient delivery services to ensure you get your medications when you need them.",
      icon: "⚡",
    },
    {
      title: "Digital Solutions",
      description:
        "Modern online ordering system and digital health management tools for your convenience.",
      icon: "📱",
    },
  ];

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
            About Us
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="font-body text-lg md:text-xl lg:text-2xl"
          >
            Your Trusted Health Partner
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
          {/* Our Story */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-title text-3xl md:text-4xl font-semibold mb-6 text-gray-800">
              Our Story
            </h2>
            <p className="font-body text-lg text-gray-600 mb-8 leading-relaxed">
              Founded over three decades ago, HealMedic Pharmacy has been a
              cornerstone of healthcare in our community. What started as a
              small local pharmacy has grown into a trusted healthcare partner,
              combining traditional values of personal care with modern
              healthcare solutions. Our mission remains unchanged: to provide
              exceptional pharmaceutical care and support the health and
              wellness of our community members.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-title text-xl font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="font-body text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-title text-3xl md:text-4xl font-semibold mb-6 text-gray-800">
              Our Commitment
            </h2>
            <p className="font-body text-lg text-gray-600 mb-8 leading-relaxed">
              We're committed to being more than just a pharmacy. We're your
              partners in health, offering personalized care, expert advice, and
              comprehensive health solutions. Our team stays at the forefront of
              pharmaceutical advances while maintaining the personal touch that
              has made us a trusted name in community healthcare.
            </p>
            <div className="inline-block bg-primary text-white font-body px-8 py-3 rounded-full text-lg hover:bg-opacity-90 transition-colors duration-300 cursor-pointer">
              Learn More About Our Services
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
