// About Us page data

export const standoutFeatures = [
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

export const commitmentFeatures = [
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

export const coFounders = [
  {
    name: "Helena Mahsaradjian, PharmD",
    title: "Co-Founder & Pharmacist-In-Charge",
    image: "/assets/placeholders/avatar.jpg", // Placeholder, replace with actual image
    bio: [
      "Helena Mahsaradjian, PharmD, APh, is the Co-Founder and Pharmacist-In-Charge of HealMedic Pharmacy. She received her Doctor of Pharmacy degree from USC School of Pharmacy and completed the PGY1 Community-Based Pharmacy Residency at USC School of Pharmacy/CliniCare Pharmacy. Passionate about advancing pharmacy practice, Helena has dedicated her career to providing comprehensive patient care services, including medication therapy management, transitions of care, vaccine clinics, and diabetes self-management education & support (DSMES).",
      "Helena is an accomplished Clinical Pharmacist with a focus on Medication Therapy Management (MTM) and Transitions of Care (TOC). She excels in providing detailed medication consultations both pre- and post-hospital discharge, ensuring seamless medication reconciliation, patient education, and physician coordination. As a recognized leader in pharmacy innovation, she was honored with APhA's 2022 Incentive Grant for her research on pharmacist-led diabetes self-management education and support programs.",
      "Her expertise extends into digital strategies that improve medication adherence and enhance Medicare star measures, particularly for older adults. With a strong focus on chronic disease management, she specializes in comprehensive medication reviews for diabetes and cardiovascular conditions, helping patients achieve optimal therapeutic outcomes. Helena's commitment to personalized, high-quality care drives the mission of HealMedic Pharmacy, ensuring every patient receives the attention and expertise they deserve.",
    ],
  },
  {
    name: "Sargis Hgrighorian",
    title: "Co-Founder, Pharmacy Technician & Software Engineer",
    image: "/assets/placeholders/avatar.jpg", // Placeholder, replace with actual image
    bio: [
      "Sargis Hgrighorian, Co-Founder and Pharmacy Technician at HealMedic Pharmacy, brings a unique and diverse background in healthcare, technology, and pharmacy operations. With extensive experience in dentistry, Sargis developed a deep understanding of patient care and the intricacies of healthcare services. His passion for innovation led him to transition into software development, where he honed his skills in creating digital solutions for businesses.",
      "As the visionary behind the development of HealMedic Pharmacy's website and digital presence, Sargis played a crucial role in integrating modern technology into the pharmacy's operations. His commitment to enhancing patient experiences through seamless digital interactions reflects his expertise in both software development and healthcare accessibility.",
      "Driven by his dedication to pharmacy and patient care, Sargis pursued formal education in pharmacy and became a certified Pharmacy Technician through the Pharmacy Technician Certification Board (PTCB). His multidisciplinary background allows him to bridge the gap between healthcare, technology, and operations, ensuring that HealMedic Pharmacy remains at the forefront of patient-centered, innovative pharmacy services. His ability to merge technology with personalized care makes him an invaluable asset to the pharmacy's mission of improving healthcare outcomes for the community.",
    ],
  },
];

export const ourStory = {
  title: "Our Story – The Vision Behind HealMedic Pharmacy",
  content: [
    "HealMedic Pharmacy was founded by husband-and-wife team Helena Mahsaradjian, PharmD, and Sargis Hgrighorian, PTCB-Certified Pharmacy Technician. Their combined expertise in pharmacy, healthcare, and technology has shaped HealMedic Pharmacy into a modern, patient-focused pharmacy dedicated to innovation and personalized care.",
    "Helena brings her extensive experience as a clinical pharmacist, specializing in medication therapy management, transitions of care, and chronic disease education. With a passion for enhancing patient outcomes, she leads the pharmacy's advanced clinical services, ensuring every patient receives expert guidance and tailored healthcare solutions.",
    "Sargis, with a background spanning dentistry, software development, and pharmacy operations, has played a crucial role in building HealMedic Pharmacy's digital infrastructure and ensuring seamless patient experiences. His expertise in integrating technology into pharmacy services has allowed for streamlined operations, efficient medication management, and accessible healthcare solutions for the community.",
    "Together, Helena and Sargis have created a pharmacy that goes beyond simply filling prescriptions. HealMedic Pharmacy is a trusted healthcare hub, offering cutting-edge wellness solutions, personalized consultations, and a commitment to helping every patient lead a healthier life.",
  ],
  images: [
    "/assets/placeholders/blog-card.svg",
    "/assets/placeholders/blog-card.svg",
    "/assets/placeholders/blog-card.svg",
  ],
};

export const ourMission = {
  title: "Our Mission",
  content:
    "To provide compassionate, expert-driven, and patient-focused pharmacy care that goes beyond dispensing medications. We are dedicated to offering innovative health solutions, personalized consultations, and proactive wellness services to support our patients in every stage of their health journey.",
};

export const joinUs = {
  title: "Join Our Pharmacy Family",
  content:
    "We invite you to experience the difference at HealMedic Pharmacy. Whether you need expert medication management, wellness solutions, or specialized health services, our team is here to support you every step of the way.",
  buttons: [
    {
      text: "Get in Touch",
      link: "/contact",
      type: "primary",
    },
    {
      text: "Meet Our Team",
      link: "/team",
      type: "secondary",
    },
  ],
};

export default {
  standoutFeatures,
  commitmentFeatures,
  coFounders,
  ourStory,
  ourMission,
  joinUs,
};
