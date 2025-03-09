import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  // Create refs for elements to animate
  const pageRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const ourStoryRef = useRef(null);
  const ourMissionRef = useRef(null);
  const standoutSectionRef = useRef(null);
  const featureRefs = useRef([]);
  const coFoundersRef = useRef(null);
  const commitmentRef = useRef(null);
  const joinUsRef = useRef(null);

  // Reset featureRefs when standoutFeatures changes
  featureRefs.current = [];

  // Add to feature refs
  const addToFeatureRefs = (el) => {
    if (el && !featureRefs.current.includes(el)) {
      featureRefs.current.push(el);
    }
  };

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

  // Hero section animations - Matching Blog page animation
  useEffect(() => {
    if (!heroTitleRef.current || !heroSubtitleRef.current) return;

    // Create context for better memory management
    const ctx = gsap.context(() => {
      // Set initial state to prevent flash of unstyled content
      gsap.set([heroTitleRef.current, heroSubtitleRef.current], {
        opacity: 0,
        y: 20,
      });

      // Create a timeline for sequenced animations with a slight delay
      const heroTl = gsap.timeline({
        defaults: {
          ease: "power2.out",
          duration: 1,
        },
        delay: 0.2, // Small delay to ensure component is fully mounted
        onComplete: () => console.log("Hero animation complete"),
      });

      // Add animations to the timeline - matching Blog page animation
      heroTl
        .fromTo(
          heroTitleRef.current,
          {
            y: 30,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            onComplete: () => console.log("Title animation complete"),
          }
        )
        .fromTo(
          heroSubtitleRef.current,
          {
            y: 20,
            opacity: 0,
            scale: 0.98,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            onComplete: () => console.log("Subtitle animation complete"),
          },
          "-=0.5" // Start before the previous animation finishes
        );
    }, pageRef);

    // Cleanup
    return () => ctx.revert();
  }, []);

  // Scroll animations
  useEffect(() => {
    if (!ourStoryRef.current) return;

    // Create context for better memory management
    const ctx = gsap.context(() => {
      // Our Story section
      gsap.fromTo(
        ourStoryRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: ourStoryRef.current,
            start: "top 80%",
          },
        }
      );

      // Our Mission section
      gsap.fromTo(
        ourMissionRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: ourMissionRef.current,
            start: "top 80%",
          },
        }
      );

      // Why We Stand Out section
      gsap.fromTo(
        standoutSectionRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: standoutSectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Feature cards with staggered animation
      gsap.fromTo(
        featureRefs.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: standoutSectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Co-Founders section
      gsap.fromTo(
        coFoundersRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: coFoundersRef.current,
            start: "top 80%",
          },
        }
      );

      // Commitment section
      gsap.fromTo(
        commitmentRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: commitmentRef.current,
            start: "top 80%",
          },
        }
      );

      // Join Us section
      gsap.fromTo(
        joinUsRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: joinUsRef.current,
            start: "top 80%",
          },
        }
      );
    });

    // Cleanup
    return () => ctx.revert();
  }, []);

  // Setup hover animations for feature cards
  useEffect(() => {
    const cards = featureRefs.current;

    // Add hover animations to each card
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          duration: 0.3,
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          duration: 0.3,
        });
      });
    });

    // Cleanup event listeners
    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div ref={pageRef} className="bg-gradient-to-br from-primary to-[#7c5ae0]">
      {/* Hero Section - Redesigned with straight edge and more spacing */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 flex items-center justify-center text-white">
        <div className="container-narrow text-center z-10">
          <h1 ref={heroTitleRef} className="heading-2 mb-4">
            About Us
          </h1>
          <p ref={heroSubtitleRef} className="body-large">
            Your Community Pharmacy, Redefined
          </p>
        </div>

        {/* Straight edge instead of wavy */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#FDF8EC]"></div>
      </section>

      {/* Content Section - New content */}
      <section className="bg-[#FDF8EC] py-16">
        <div className="container mx-auto px-4">
          {/* Our Story */}
          <div ref={ourStoryRef} className="max-w-4xl mx-auto mb-20">
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
                      pharmacist, specializing in medication therapy management,
                      transitions of care, and chronic disease education. With a
                      passion for enhancing patient outcomes, she leads the
                      pharmacy's advanced clinical services, ensuring every
                      patient receives expert guidance and tailored healthcare
                      solutions.
                    </p>

                    <p>
                      Sargis, with a background spanning dentistry, software
                      development, and pharmacy operations, has played a crucial
                      role in building HealMedic Pharmacy's digital
                      infrastructure and ensuring seamless patient experiences.
                      His expertise in integrating technology into pharmacy
                      services has allowed for streamlined operations, efficient
                      medication management, and accessible healthcare solutions
                      for the community.
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
          </div>

          {/* Our Mission */}
          <div ref={ourMissionRef} className="max-w-4xl mx-auto mb-20">
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary">
              <h2 className="font-title text-3xl md:text-4xl font-semibold mb-8 text-gray-800 text-center">
                Our Mission
              </h2>
              <div className="space-y-6 font-body text-lg text-gray-600 leading-relaxed">
                <p>
                  To provide compassionate, expert-driven, and patient-focused
                  pharmacy care that goes beyond dispensing medications. We are
                  dedicated to offering innovative health solutions,
                  personalized consultations, and proactive wellness services to
                  support our patients in every stage of their health journey.
                </p>
              </div>
            </div>
          </div>

          {/* Why We Stand Out */}
          <div ref={standoutSectionRef} className="max-w-4xl mx-auto mb-20">
            <h2 className="font-title text-3xl md:text-4xl font-semibold mb-10 text-gray-800 text-center">
              Why We Stand Out
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {standoutFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  ref={addToFeatureRefs}
                  className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-title text-xl font-semibold mb-3 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="font-body text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Meet Our Co-Founders */}
          <div ref={coFoundersRef} className="max-w-4xl mx-auto mb-20">
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
                      her Doctor of Pharmacy degree from USC School of Pharmacy
                      and completed the PGY1 Community-Based Pharmacy Residency
                      at USC School of Pharmacy/CliniCare Pharmacy. Passionate
                      about advancing pharmacy practice, Helena has dedicated
                      her career to providing comprehensive patient care
                      services, including medication therapy management,
                      transitions of care, vaccine clinics, and diabetes
                      self-management education & support (DSMES).
                    </p>
                    <p>
                      Helena is an accomplished Clinical Pharmacist with a focus
                      on Medication Therapy Management (MTM) and Transitions of
                      Care (TOC). She excels in providing detailed medication
                      consultations both pre- and post-hospital discharge,
                      ensuring seamless medication reconciliation, patient
                      education, and physician coordination. As a recognized
                      leader in pharmacy innovation, she was honored with APhA's
                      2022 Incentive Grant for her research on pharmacist-led
                      diabetes self-management education and support programs.
                    </p>
                    <p>
                      Her expertise extends into digital strategies that improve
                      medication adherence and enhance Medicare star measures,
                      particularly for older adults. With a strong focus on
                      chronic disease management, she specializes in
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
                      Sargis Hgrighorian, Co-Founder and Pharmacy Technician at
                      HealMedic Pharmacy, brings a unique and diverse background
                      in healthcare, technology, and pharmacy operations. With
                      extensive experience in dentistry, Sargis developed a deep
                      understanding of patient care and the intricacies of
                      healthcare services. His passion for innovation led him to
                      transition into software development, where he honed his
                      skills in creating digital solutions for businesses.
                    </p>
                    <p>
                      As the visionary behind the development of HealMedic
                      Pharmacy's website and digital presence, Sargis played a
                      crucial role in integrating modern technology into the
                      pharmacy's operations. His commitment to enhancing patient
                      experiences through seamless digital interactions reflects
                      his expertise in both software development and healthcare
                      accessibility.
                    </p>
                    <p>
                      Driven by his dedication to pharmacy and patient care,
                      Sargis pursued formal education in pharmacy and became a
                      certified Pharmacy Technician through the Pharmacy
                      Technician Certification Board (PTCB). His
                      multidisciplinary background allows him to bridge the gap
                      between healthcare, technology, and operations, ensuring
                      that HealMedic Pharmacy remains at the forefront of
                      patient-centered, innovative pharmacy services. His
                      ability to merge technology with personalized care makes
                      him an invaluable asset to the pharmacy's mission of
                      improving healthcare outcomes for the community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Commitment to You */}
          <div ref={commitmentRef} className="max-w-4xl mx-auto mb-20">
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
                  <p className="font-body text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Join Our Pharmacy Family */}
          <div ref={joinUsRef} className="max-w-4xl mx-auto text-center">
            <h2 className="font-title text-3xl md:text-4xl font-semibold mb-6 text-gray-800">
              Join Our Pharmacy Family
            </h2>
            <p className="font-body text-lg text-gray-600 mb-8 leading-relaxed">
              We invite you to experience the difference at HealMedic Pharmacy.
              Whether you need expert medication management, wellness solutions,
              or specialized health services, our team is here to support you
              every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link to="/team" className="btn-secondary">
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
