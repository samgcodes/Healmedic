import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TabNavigation from "../../../components/utils/TabNavigation";
import {
  Stagger1,
  TitleSectionAnimation,
} from "../../../components/utils/GSAPAnimations";
import useMediaQuery, { breakpoints } from "../../../hooks/useMediaQuery";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const VitaminsSupplements: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [contentKey, setContentKey] = useState(0);
  const bottomSectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery(breakpoints.mobile);

  // Handle tab change with animation
  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  // Update content key when tab changes to trigger re-render and animation
  useEffect(() => {
    setContentKey((prev) => prev + 1);
  }, [activeTab]);

  // Bottom section animation - independent from tab content
  useEffect(() => {
    if (!bottomSectionRef.current) return;

    // Set initial state for bottom section
    gsap.set(bottomSectionRef.current, { opacity: 0, y: 20 });

    // Create a timeline for the bottom section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: bottomSectionRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none",
        once: false, // Allow it to replay when scrolled back into view
      },
    });

    // Add animations to the timeline
    tl.to(bottomSectionRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    // Animate the icon and text separately for more visual interest
    const icon = bottomSectionRef.current.querySelector(".bottom-icon");
    const textContent = bottomSectionRef.current.querySelector(
      ".bottom-text-content"
    );

    if (icon && textContent) {
      // Set initial states
      gsap.set([icon, textContent], { opacity: 0 });

      tl.to(
        icon,
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );

      tl.to(
        textContent,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }

    // Cleanup only this specific ScrollTrigger instance
    return () => {
      // Find and kill only the ScrollTrigger associated with this element
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === bottomSectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []); // Empty dependency array ensures this only runs once on mount

  const supplementTopics = [
    {
      title: "Essential Vitamins",
      content: (
        <div className="space-y-4">
          <p className="font-body text-gray-600">
            Vitamins are essential nutrients that your body needs in small
            amounts to function properly. While a balanced diet is the best way
            to get vitamins, supplements may be beneficial for some individuals
            with specific needs or deficiencies.
          </p>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Key Vitamins and Their Functions:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>
              <span className="font-semibold">Vitamin A:</span> Important for
              vision, immune function, and cell growth
            </li>
            <li>
              <span className="font-semibold">Vitamin B Complex:</span> Includes
              B1, B2, B3, B5, B6, B7, B9, and B12, which help convert food into
              energy and support nervous system function
            </li>
            <li>
              <span className="font-semibold">Vitamin C:</span> Supports immune
              function, collagen production, and acts as an antioxidant
            </li>
            <li>
              <span className="font-semibold">Vitamin D:</span> Essential for
              calcium absorption and bone health; also supports immune function
            </li>
            <li>
              <span className="font-semibold">Vitamin E:</span> Acts as an
              antioxidant, protecting cells from damage
            </li>
            <li>
              <span className="font-semibold">Vitamin K:</span> Necessary for
              blood clotting and bone health
            </li>
          </ul>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Common Deficiencies:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>
              <span className="font-semibold">Vitamin D:</span> Common in people
              with limited sun exposure, older adults, and those with darker
              skin
            </li>
            <li>
              <span className="font-semibold">Vitamin B12:</span> More common in
              older adults, vegetarians, and vegans
            </li>
            <li>
              <span className="font-semibold">Vitamin B9 (Folate):</span>{" "}
              Important for pregnant women to prevent birth defects
            </li>
            <li>
              <span className="font-semibold">Vitamin C:</span> May be deficient
              in smokers and those with limited fruit and vegetable intake
            </li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500 mt-4">
            <p className="font-body text-blue-700">
              <span className="font-semibold">Important Note:</span> More is not
              always better with vitamins. Fat-soluble vitamins (A, D, E, K) can
              accumulate in the body and potentially reach toxic levels if taken
              in excess. Always consult with a healthcare provider before
              starting any supplement regimen.
            </p>
          </div>
        </div>
      ),
      icon: "🍊",
    },
    {
      title: "Supplement Safety",
      content: (
        <div className="space-y-4">
          <p className="font-body text-gray-600">
            While dietary supplements can be beneficial, they are not regulated
            as strictly as prescription medications. Understanding how to choose
            and use supplements safely is important for your health.
          </p>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Choosing Quality Supplements:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>
              Look for products certified by third-party organizations (USP,
              NSF, ConsumerLab)
            </li>
            <li>Choose supplements from reputable manufacturers</li>
            <li>Check for clear labeling of ingredients and dosages</li>
            <li>Be wary of exaggerated health claims</li>
            <li>
              Consider the form (tablet, capsule, liquid) that works best for
              you
            </li>
          </ul>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Potential Risks:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>Interactions with prescription medications</li>
            <li>Side effects from high doses</li>
            <li>Allergic reactions to ingredients</li>
            <li>Contamination or mislabeling</li>
            <li>Substituting supplements for prescribed medications</li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500 mt-4">
            <p className="font-body text-blue-700">
              <span className="font-semibold">Safety Tips:</span> Always inform
              your healthcare providers about all supplements you're taking.
              Keep a list of your supplements along with your medications. Stop
              taking supplements at least two weeks before surgery unless your
              doctor approves. Be especially cautious with supplements if you're
              pregnant, nursing, or have chronic health conditions.
            </p>
          </div>
        </div>
      ),
      icon: "🛡️",
    },
    {
      title: "Natural Remedies",
      content: (
        <div className="space-y-4">
          <p className="font-body text-gray-600">
            Natural remedies have been used for centuries in various traditional
            medicine systems. While some have scientific evidence supporting
            their use, others may lack substantial research. It's important to
            approach natural remedies with both an open mind and healthy
            skepticism.
          </p>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Common Natural Remedies with Some Evidence:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>
              <span className="font-semibold">Ginger:</span> May help with
              nausea, motion sickness, and digestive issues
            </li>
            <li>
              <span className="font-semibold">Turmeric:</span> Contains
              curcumin, which has anti-inflammatory properties
            </li>
            <li>
              <span className="font-semibold">Peppermint:</span> May help with
              irritable bowel syndrome and headaches
            </li>
            <li>
              <span className="font-semibold">Honey:</span> Can soothe coughs
              and sore throats (not for children under 1 year)
            </li>
            <li>
              <span className="font-semibold">Chamomile:</span> May help with
              sleep and anxiety
            </li>
          </ul>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Considerations:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>
              Natural doesn't always mean safe - many potent drugs come from
              plants
            </li>
            <li>Dosage and preparation methods matter</li>
            <li>Quality and purity can vary widely</li>
            <li>Natural remedies can interact with medications</li>
            <li>Effectiveness may vary from person to person</li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500 mt-4">
            <p className="font-body text-blue-700">
              <span className="font-semibold">Consult First:</span> Always
              discuss natural remedies with your healthcare provider before
              trying them, especially if you have chronic health conditions, are
              pregnant or nursing, or are taking medications. Natural remedies
              should complement, not replace, conventional medical care when
              needed.
            </p>
          </div>
        </div>
      ),
      icon: "🌿",
    },
    {
      title: "Herbal Supplements",
      content: (
        <div className="space-y-4">
          <p className="font-body text-gray-600">
            Herbal supplements are derived from plants and have been used in
            traditional medicine for thousands of years. Today, they're popular
            as complementary approaches to health, but they should be used with
            knowledge and caution.
          </p>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Common Herbal Supplements:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>
              <span className="font-semibold">Echinacea:</span> Often used for
              immune support and cold prevention
            </li>
            <li>
              <span className="font-semibold">St. John's Wort:</span> Used for
              mild to moderate depression (interacts with many medications)
            </li>
            <li>
              <span className="font-semibold">Ginkgo Biloba:</span> Claimed to
              support memory and brain function
            </li>
            <li>
              <span className="font-semibold">Saw Palmetto:</span> Used for
              urinary symptoms associated with benign prostatic hyperplasia
            </li>
            <li>
              <span className="font-semibold">Valerian Root:</span> Used as a
              sleep aid and for anxiety
            </li>
            <li>
              <span className="font-semibold">Black Cohosh:</span> Used for
              menopausal symptoms
            </li>
          </ul>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Important Considerations:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>Herbal supplements can have significant drug interactions</li>
            <li>Quality and potency vary widely between products and brands</li>
            <li>
              Some herbs can cause liver damage or other serious side effects
            </li>
            <li>
              Herbs may not be appropriate for people with certain medical
              conditions
            </li>
            <li>Many herbs should be discontinued before surgery</li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500 mt-4">
            <p className="font-body text-blue-700">
              <span className="font-semibold">Pharmacist Consultation:</span>{" "}
              Our pharmacists can provide guidance on potential interactions
              between herbal supplements and your medications. We recommend
              scheduling a consultation before starting any herbal supplement,
              especially if you take prescription medications or have chronic
              health conditions.
            </p>
          </div>
        </div>
      ),
      icon: "🌱",
    },
  ];

  return (
    <div className="space-y-8">
      <TitleSectionAnimation className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary">
        <div className="flex flex-col xl:flex-row items-start gap-6">
          <div className="flex-1">
            <h2 className="font-title text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
              Vitamins & Supplements
            </h2>
            <p className="font-body text-lg text-gray-600">
              Navigating the world of vitamins and supplements can be
              overwhelming. Our resources provide evidence-based information to
              help you make informed decisions about which supplements may be
              appropriate for your health needs.
            </p>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 aspect-square rounded-xl overflow-hidden mb-6 xl:mb-0">
            <img
              src="/assets/PatientHub/vitamins_supplements_PH.png"
              alt="Vitamins & Supplements"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </TitleSectionAnimation>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <TabNavigation
            items={supplementTopics}
            activeTab={activeTab}
            setActiveTab={handleTabChange}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <Stagger1
            key={contentKey}
            className="space-y-4"
            duration={isMobile ? 0.3 : 0.5}
            staggerAmount={isMobile ? 0.02 : 0.05}
            mobileOptimized={true}
          >
            {supplementTopics[activeTab].content}
          </Stagger1>
        </div>
      </div>

      <div
        ref={bottomSectionRef}
        className="bg-gradient-to-r from-primary/10 to-purple-100 rounded-xl p-6 shadow-md"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="text-3xl mb-4 md:mb-0 bottom-icon">🌿</div>
          <div className="bottom-text-content">
            <h3 className="font-title text-xl font-semibold mb-3 text-gray-800">
              Supplement Consultations
            </h3>
            <p className="font-body text-gray-600">
              Our pharmacists can provide personalized guidance on vitamins and
              supplements based on your health needs, current medications, and
              health goals. Schedule a consultation to discuss which supplements
              might be right for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VitaminsSupplements;
