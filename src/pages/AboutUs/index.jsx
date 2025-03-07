import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const standoutFeatures = [
    {
      title: "Independent & Patient-Centered",
      description:
        "As a locally owned pharmacy, we prioritize patient relationships and personalized care over corporate policies.",
      icon: "🏠",
    },
    {
      title: "Expert-Led Services",
      description:
        "Our team specializes in advanced clinical care, sports medicine, medication therapy management, and integrative health solutions.",
      icon: "👨‍⚕️",
    },
    {
      title: "Cutting-Edge Healthcare",
      description:
        "We offer pharmacogenomic testing, health screenings, compounding, and custom medication packaging tailored to individual needs.",
      icon: "🧬",
    },
    {
      title: "Community-Focused",
      description:
        "We collaborate with local healthcare providers, sports teams, and wellness experts to create a seamless and supportive healthcare network.",
      icon: "🤝",
    },
  ];

  const commitmentFeatures = [
    {
      title: "Convenience & Accessibility",
      description:
        "Medication synchronization, home delivery options, and easy prescription transfers ensure a seamless experience.",
    },
    {
      title: "Health Education & Empowerment",
      description:
        "We provide valuable resources, workshops, and consultations to help our patients make informed health decisions.",
    },
    {
      title: "Collaboration & Trust",
      description:
        "We work closely with healthcare professionals to deliver integrated and coordinated care for optimal patient outcomes.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section with purple gradient background */}
      <div className="relative">
        {/* Purple background with wave bottom */}
        <div className="bg-gradient-to-br from-primary to-[#7c5ae0] pt-32 pb-32 md:pt-40 md:pb-40">
          <div className="container-narrow text-center text-white relative z-10">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="heading-2 mb-4"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="body-large"
            >
              Your Community Pharmacy, Redefined
            </motion.p>
          </div>

          {/* Straight edge divider */}
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#FDF8EC]"></div>
        </div>

        {/* Content with cream background */}
        <div className="bg-[#FDF8EC] pt-16 pb-16">
          <div className="container mx-auto px-4">
            {/* Our Story */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="max-w-4xl mx-auto mb-20"
            >
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary">
                <h2 className="font-title text-3xl md:text-4xl font-semibold mb-8 text-gray-800 text-center">
                  Our Story – The Vision Behind HealMedic Pharmacy
                </h2>

                <div className="flex flex-col md:flex-row gap-8">
                  {/* Content */}
                  <div className="flex-1">
                    <div className="space-y-6 font-body text-lg text-gray-600 leading-relaxed">
                      <p>
                        HealMedic Pharmacy was founded by husband-and-wife team{" "}
                        <span className="font-semibold text-primary">
                          Helena Mahsaradjian, PharmD
                        </span>
                        , and{" "}
                        <span className="font-semibold text-primary">
                          Sargis Hgrighorian
                        </span>
                        , PTCB-Certified Pharmacy Technician. Their combined
                        expertise in pharmacy, healthcare, and technology has
                        shaped HealMedic Pharmacy into a modern, patient-focused
                        pharmacy dedicated to innovation and personalized care.
                      </p>

                      <p>
                        Helena brings her extensive experience as a clinical
                        pharmacist, specializing in medication therapy
                        management, transitions of care, and chronic disease
                        education. With a passion for enhancing patient
                        outcomes, she leads the pharmacy's advanced clinical
                        services, ensuring every patient receives expert
                        guidance and tailored healthcare solutions.
                      </p>

                      <p>
                        Sargis, with a background spanning dentistry, software
                        development, and pharmacy operations, has played a
                        crucial role in building HealMedic Pharmacy's digital
                        infrastructure and ensuring seamless patient
                        experiences. His expertise in integrating technology
                        into pharmacy services has allowed for streamlined
                        operations, efficient medication management, and
                        accessible healthcare solutions for the community.
                      </p>

                      <p>
                        Together, Helena and Sargis have created a pharmacy that
                        goes beyond simply filling prescriptions. HealMedic
                        Pharmacy is a trusted healthcare hub, offering
                        cutting-edge wellness solutions, personalized
                        consultations, and a commitment to helping every patient
                        lead a healthier life.
                      </p>
                    </div>
                  </div>

                  {/* Pharmacy Images - Right Side */}
                  <div className="w-full md:w-1/3 flex-shrink-0 flex flex-col gap-4">
                    {/* Image 1 */}
                    <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-md flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>

                    {/* Image 2 */}
                    <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-md flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>

                    {/* Image 3 */}
                    <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-md flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Our Mission */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="max-w-4xl mx-auto mb-20"
            >
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary">
                <h2 className="font-title text-3xl md:text-4xl font-semibold mb-8 text-gray-800 text-center">
                  Our Mission
                </h2>
                <div className="space-y-6 font-body text-lg text-gray-600 leading-relaxed">
                  <p>
                    To provide compassionate, expert-driven, and patient-focused
                    pharmacy care that goes beyond dispensing medications. We
                    are dedicated to offering innovative health solutions,
                    personalized consultations, and proactive wellness services
                    to support our patients in every stage of their health
                    journey.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Why We Stand Out */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="max-w-4xl mx-auto mb-20"
            >
              <h2 className="font-title text-3xl md:text-4xl font-semibold mb-10 text-gray-800 text-center">
                Why We Stand Out
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {standoutFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                    className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="font-title text-xl font-semibold mb-3 text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="font-body text-gray-600">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Meet Our Co-Founders */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="max-w-4xl mx-auto mb-20"
            >
              <h2 className="font-title text-3xl md:text-4xl font-semibold mb-10 text-gray-800 text-center">
                Meet Our Co-Founders
              </h2>

              {/* Helena Mahsaradjian */}
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary mb-8">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Image placeholder */}
                  <div className="w-full md:w-1/3 flex-shrink-0">
                    <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center shadow-md">
                      <svg
                        className="w-24 h-24 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-title text-2xl font-semibold mb-4 text-gray-800">
                      Helena Mahsaradjian, PharmD – Co-Founder &
                      Pharmacist-In-Charge
                    </h3>
                    <div className="space-y-6 font-body text-lg text-gray-600 leading-relaxed">
                      <p>
                        Helena Mahsaradjian, PharmD, APh, is the Co-Founder and
                        Pharmacist-In-Charge of HealMedic Pharmacy. She received
                        her Doctor of Pharmacy degree from USC School of
                        Pharmacy and completed the PGY1 Community-Based Pharmacy
                        Residency at USC School of Pharmacy/CliniCare Pharmacy.
                        Passionate about advancing pharmacy practice, Helena has
                        dedicated her career to providing comprehensive patient
                        care services, including medication therapy management,
                        transitions of care, vaccine clinics, and diabetes
                        self-management education & support (DSMES).
                      </p>
                      <p>
                        Helena is an accomplished Clinical Pharmacist with a
                        focus on Medication Therapy Management (MTM) and
                        Transitions of Care (TOC). She excels in providing
                        detailed medication consultations both pre- and
                        post-hospital discharge, ensuring seamless medication
                        reconciliation, patient education, and physician
                        coordination. As a recognized leader in pharmacy
                        innovation, she was honored with APhA's 2022 Incentive
                        Grant for her research on pharmacist-led diabetes
                        self-management education and support programs.
                      </p>
                      <p>
                        Her expertise extends into digital strategies that
                        improve medication adherence and enhance Medicare star
                        measures, particularly for older adults. With a strong
                        focus on chronic disease management, she specializes in
                        comprehensive medication reviews for diabetes and
                        cardiovascular conditions, helping patients achieve
                        optimal therapeutic outcomes. Helena's commitment to
                        personalized, high-quality care drives the mission of
                        HealMedic Pharmacy, ensuring every patient receives the
                        attention and expertise they deserve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sargis Hgrighorian */}
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Image placeholder */}
                  <div className="w-full md:w-1/3 flex-shrink-0">
                    <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center shadow-md">
                      <svg
                        className="w-24 h-24 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-title text-2xl font-semibold mb-4 text-gray-800">
                      Sargis Hgrighorian – Co-Founder, Pharmacy Technician &
                      Software Engineer
                    </h3>
                    <div className="space-y-6 font-body text-lg text-gray-600 leading-relaxed">
                      <p>
                        Sargis Hgrighorian, Co-Founder and Pharmacy Technician
                        at HealMedic Pharmacy, brings a unique and diverse
                        background in healthcare, technology, and pharmacy
                        operations. With extensive experience in dentistry,
                        Sargis developed a deep understanding of patient care
                        and the intricacies of healthcare services. His passion
                        for innovation led him to transition into software
                        development, where he honed his skills in creating
                        digital solutions for businesses.
                      </p>
                      <p>
                        As the visionary behind the development of HealMedic
                        Pharmacy's website and digital presence, Sargis played a
                        crucial role in integrating modern technology into the
                        pharmacy's operations. His commitment to enhancing
                        patient experiences through seamless digital
                        interactions reflects his expertise in both software
                        development and healthcare accessibility.
                      </p>
                      <p>
                        Driven by his dedication to pharmacy and patient care,
                        Sargis pursued formal education in pharmacy and became a
                        certified Pharmacy Technician through the Pharmacy
                        Technician Certification Board (PTCB). His
                        multidisciplinary background allows him to bridge the
                        gap between healthcare, technology, and operations,
                        ensuring that HealMedic Pharmacy remains at the
                        forefront of patient-centered, innovative pharmacy
                        services. His ability to merge technology with
                        personalized care makes him an invaluable asset to the
                        pharmacy's mission of improving healthcare outcomes for
                        the community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Our Commitment to You */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="max-w-4xl mx-auto mb-20"
            >
              <h2 className="font-title text-3xl md:text-4xl font-semibold mb-8 text-gray-800 text-center">
                Our Commitment to You
              </h2>

              <div className="space-y-6">
                {commitmentFeatures.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary"
                  >
                    <h3 className="font-title text-xl font-semibold mb-2 text-gray-800">
                      {item.title}
                    </h3>
                    <p className="font-body text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Join Our Pharmacy Family */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="font-title text-3xl md:text-4xl font-semibold mb-6 text-gray-800">
                Join Our Pharmacy Family
              </h2>
              <p className="font-body text-lg text-gray-600 mb-8 leading-relaxed">
                We invite you to experience the difference at HealMedic
                Pharmacy. Whether you need expert medication management,
                wellness solutions, or specialized health services, our team is
                here to support you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="btn-primary">
                  Get in Touch
                </Link>
                <Link to="/team" className="btn-secondary">
                  Meet Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
