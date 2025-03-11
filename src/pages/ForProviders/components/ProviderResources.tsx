import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProviderResources: React.FC = () => {
  const mainSectionRef = useRef<HTMLDivElement>(null);
  const formResourcesRef = useRef<(HTMLDivElement | null)[]>([]);
  const educationalResourcesRef = useRef<(HTMLDivElement | null)[]>([]);
  const customResourcesSectionRef = useRef<HTMLDivElement>(null);
  const downloadButtonsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const contactButtonRef = useRef<HTMLAnchorElement>(null);

  const resources = [
    {
      title: "Referral Form",
      description:
        "Standard form for referring patients to our pharmacy services",
      icon: "📄",
      downloadLink: "#",
    },
    {
      title: "CPA Template",
      description: "Sample Collaborative Practice Agreement template",
      icon: "📝",
      downloadLink: "#",
    },
    {
      title: "Patient Authorization Form",
      description: "HIPAA-compliant authorization for information sharing",
      icon: "🔒",
      downloadLink: "#",
    },
    {
      title: "Medication Review Request",
      description:
        "Form to request comprehensive medication review for patients",
      icon: "📋",
      downloadLink: "#",
    },
  ];

  const educationalResources = [
    {
      title: "Medication Management Guide",
      description: "Best practices for medication therapy management",
      icon: "📊",
      downloadLink: "#",
    },
    {
      title: "Patient Education Materials",
      description: "Printable education materials for common medications",
      icon: "📚",
      downloadLink: "#",
    },
    {
      title: "Clinical Guidelines",
      description: "Evidence-based guidelines for common conditions",
      icon: "📑",
      downloadLink: "#",
    },
    {
      title: "Pharmacy Services Overview",
      description: "Comprehensive guide to our pharmacy services",
      icon: "🏥",
      downloadLink: "#",
    },
  ];

  // Set up GSAP animations
  useEffect(() => {
    // Main section animation
    if (mainSectionRef.current) {
      gsap.fromTo(
        mainSectionRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mainSectionRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Form resources staggered animation
    if (formResourcesRef.current.filter(Boolean).length > 0) {
      gsap.fromTo(
        formResourcesRef.current.filter(Boolean),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mainSectionRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
        }
      );

      // Add hover animations to form resource cards
      formResourcesRef.current.filter(Boolean).forEach((card) => {
        if (!card) return;

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }

    // Educational resources staggered animation
    if (educationalResourcesRef.current.filter(Boolean).length > 0) {
      gsap.fromTo(
        educationalResourcesRef.current.filter(Boolean),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: educationalResourcesRef.current[0],
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
        }
      );

      // Add hover animations to educational resource cards
      educationalResourcesRef.current.filter(Boolean).forEach((card) => {
        if (!card) return;

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }

    // Custom resources section animation
    if (customResourcesSectionRef.current) {
      gsap.fromTo(
        customResourcesSectionRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: customResourcesSectionRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Download buttons hover animations
    downloadButtonsRef.current.filter(Boolean).forEach((button) => {
      if (!button) return;

      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      button.addEventListener("mousedown", () => {
        gsap.to(button, {
          scale: 0.95,
          duration: 0.1,
          ease: "power2.out",
        });
      });

      button.addEventListener("mouseup", () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.1,
          ease: "power2.out",
        });
      });
    });

    // Contact button hover animation
    if (contactButtonRef.current) {
      contactButtonRef.current.addEventListener("mouseenter", () => {
        gsap.to(contactButtonRef.current, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      contactButtonRef.current.addEventListener("mouseleave", () => {
        gsap.to(contactButtonRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      contactButtonRef.current.addEventListener("mousedown", () => {
        gsap.to(contactButtonRef.current, {
          scale: 0.95,
          duration: 0.1,
          ease: "power2.out",
        });
      });

      contactButtonRef.current.addEventListener("mouseup", () => {
        gsap.to(contactButtonRef.current, {
          scale: 1.05,
          duration: 0.1,
          ease: "power2.out",
        });
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Remove event listeners
      formResourcesRef.current.filter(Boolean).forEach((card) => {
        if (!card) return;
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });

      educationalResourcesRef.current.filter(Boolean).forEach((card) => {
        if (!card) return;
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });

      downloadButtonsRef.current.filter(Boolean).forEach((button) => {
        if (!button) return;
        button.removeEventListener("mouseenter", () => {});
        button.removeEventListener("mouseleave", () => {});
        button.removeEventListener("mousedown", () => {});
        button.removeEventListener("mouseup", () => {});
      });

      if (contactButtonRef.current) {
        contactButtonRef.current.removeEventListener("mouseenter", () => {});
        contactButtonRef.current.removeEventListener("mouseleave", () => {});
        contactButtonRef.current.removeEventListener("mousedown", () => {});
        contactButtonRef.current.removeEventListener("mouseup", () => {});
      }
    };
  }, []);

  return (
    <div className="space-y-8">
      <div
        ref={mainSectionRef}
        className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary"
      >
        <h2 className="font-title text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
          Provider Resources
        </h2>
        <p className="font-body text-lg text-gray-600 mb-6 max-w-3xl">
          Access a variety of resources designed to help you and your patients
          get the most out of our pharmacy services.
        </p>

        {/* Forms & Documents */}
        <h3 className="font-title text-xl font-semibold mb-6 text-gray-800">
          Forms & Documents
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => (
            <div
              key={resource.title}
              ref={(el) => (formResourcesRef.current[index] = el)}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="text-4xl mb-4">{resource.icon}</div>
              <h4 className="font-title text-xl font-semibold mb-3 text-gray-800">
                {resource.title}
              </h4>
              <p className="font-body text-gray-600 mb-4">
                {resource.description}
              </p>
              <div className="mt-auto pt-4">
                <a
                  ref={(el) => (downloadButtonsRef.current[index] = el)}
                  href={resource.downloadLink}
                  className="inline-block bg-primary text-white font-body px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Educational Resources */}
        <h3 className="font-title text-xl font-semibold mb-6 text-gray-800">
          Educational Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {educationalResources.map((resource, index) => (
            <div
              key={resource.title}
              ref={(el) => (educationalResourcesRef.current[index] = el)}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="text-4xl mb-4">{resource.icon}</div>
              <h4 className="font-title text-xl font-semibold mb-3 text-gray-800">
                {resource.title}
              </h4>
              <p className="font-body text-gray-600 mb-4">
                {resource.description}
              </p>
              <div className="mt-auto pt-4">
                <a
                  ref={(el) =>
                    (downloadButtonsRef.current[index + resources.length] = el)
                  }
                  href={resource.downloadLink}
                  className="inline-block bg-primary text-white font-body px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact for Custom Resources */}
      <div
        ref={customResourcesSectionRef}
        className="bg-gradient-to-r from-primary/10 to-purple-100 rounded-xl p-8 shadow-md"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3 xl:w-1/4 aspect-square rounded-xl overflow-hidden mb-6 xl:mb-0">
            <div className="bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center shadow-md aspect-square relative">
              <svg
                className="w-24 h-24 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="text-sm text-gray-500 absolute bottom-4">
                Image: Custom provider resources
              </p>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-title text-xl font-semibold mb-3 text-gray-800">
              Need Custom Resources?
            </h3>
            <p className="font-body text-gray-600 mb-4">
              We can develop customized resources tailored to your practice's
              specific needs. Whether you need specialized patient education
              materials, custom forms, or practice-specific protocols, our team
              is ready to help.
            </p>
            <a
              ref={contactButtonRef}
              href="/contact"
              className="inline-block bg-primary text-white font-body px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors duration-300 shadow-md"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderResources;
