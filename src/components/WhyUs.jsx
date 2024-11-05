import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Card component for displaying features
const FeatureCard = ({ title, description, image, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`flex flex-col lg:flex-row items-stretch bg-white rounded-2xl shadow-xl overflow-hidden mb-16 h-[400px] ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Image section */}
      <div className="lg:w-1/2 relative overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          className="absolute inset-0 bg-primary bg-opacity-30"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
      </div>

      {/* Content section */}
      <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
        <div>
          <motion.h3
            className="font-title text-3xl font-bold mb-6 text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {title}
          </motion.h3>
          <motion.ul
            className="font-body text-lg text-gray-600 leading-relaxed list-disc pl-5 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {description.map((item, index) => (
              <li key={index} className="mb-3">
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
};

// Main WhyUs component
const WhyUs = () => {
  const features = [
    {
      title: "Personalized Care",
      description: [
        "Expert pharmacists dedicated to your unique health profile",
        "Tailored advice and care plans for your lifestyle",
        "Focused approach to achieve your wellness goals faster",
        "Prioritized individual well-being for your peace of mind",
      ],
      image: "/assets/img1.png",
    },
    {
      title: "Cutting-edge Technology",
      description: [
        "State-of-the-art tech for unparalleled accuracy",
        "Advanced systems to maximize your safety",
        "Intuitive health tracking tools for informed decisions",
        "Seamless health data integration for comprehensive care",
      ],
      image: "/assets/tech1.png",
    },
    {
      title: "Comprehensive Health Services",
      description: [
        "Full spectrum of services under one roof",
        "Proactive health protection with vaccinations and screenings",
        "Expert medication therapy management",
        "Holistic approach for long-term health success",
      ],
      image: "/assets/healthserv.png",
    },
    {
      title: "Community Wellness Hub",
      description: [
        "Regular workshops on latest health trends",
        "Support for local health initiatives",
        "Access to cutting-edge health innovations",
        "Join a community supporting your wellness journey",
      ],
      image: "/assets/commwell.png",
    },
  ];

  return (
    <section className="py-24 bg-[#FDF8EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-title text-4xl md:text-5xl font-bold text-primary mb-6">
            Why Choose HealMedic Pharmacy?
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the HealMedic difference. We're not just a pharmacy; we're
            your partner in health, committed to elevating your wellness journey
            through innovation, expertise, and compassionate care.
          </p>
        </motion.div>

        {/* Feature cards */}
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
