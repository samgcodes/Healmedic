import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface OurStorySectionProps {
  title: string;
  content: string[];
  images: string[];
}

const OurStorySection: React.FC<OurStorySectionProps> = ({
  title,
  content,
  images,
}) => {
  // Create refs for elements we want to animate
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Create a timeline for animations
  const timeline = useRef<gsap.core.Timeline | null>(null);

  // Set up the timeline animations and ScrollTrigger
  useEffect(() => {
    if (
      !titleRef.current ||
      !contentRef.current ||
      !imagesRef.current ||
      !sectionRef.current
    )
      return;

    // Create a new timeline
    const tl = gsap.timeline({
      paused: true,
      defaults: {
        ease: "power3.out",
        duration: 0.8,
      },
    });

    timeline.current = tl;

    // Set initial state
    gsap.set([titleRef.current, contentRef.current, imagesRef.current], {
      opacity: 0,
      y: 30,
    });

    // Add animations to the timeline
    tl.to(titleRef.current, { opacity: 1, y: 0 })
      .to(contentRef.current, { opacity: 1, y: 0 }, "-=0.4")
      .to(imagesRef.current, { opacity: 1, y: 0 }, "-=0.4");

    // Create ScrollTrigger
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom-=100",
      toggleActions: "play none none none",
      animation: tl,
    });

    // Cleanup
    return () => {
      trigger.kill();
      tl.kill();
    };
  }, []); // Run only once on mount

  return (
    <div className="container mx-auto mb-20" ref={sectionRef}>
      <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary">
        <h2
          ref={titleRef}
          className="font-title text-3xl md:text-4xl font-semibold mb-8 text-gray-800 text-center"
        >
          {title}
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Content */}
          <div className="flex-1" ref={contentRef}>
            <div className="space-y-6 font-body text-lg text-gray-600 leading-relaxed">
              {content.map((paragraph, index) => {
                // Check if paragraph contains names to highlight
                const highlightHelena = paragraph.includes(
                  "Helena Mahsaradjian"
                );
                const highlightSargis =
                  paragraph.includes("Sargis Hgrighorian");

                if (highlightHelena || highlightSargis) {
                  // Split the paragraph to highlight names
                  return (
                    <p key={index}>
                      {paragraph
                        .split("Helena Mahsaradjian, PharmD")
                        .map((part, i, arr) => {
                          if (i === 0 && arr.length > 1) {
                            return (
                              <React.Fragment key={i}>
                                {part}
                                <span className="font-semibold text-primary">
                                  Helena Mahsaradjian, PharmD
                                </span>
                              </React.Fragment>
                            );
                          }
                          if (part.includes("Sargis Hgrighorian")) {
                            const sargisArr = part.split("Sargis Hgrighorian");
                            return (
                              <React.Fragment key={i}>
                                {sargisArr[0]}
                                <span className="font-semibold text-primary">
                                  Sargis Hgrighorian
                                </span>
                                {sargisArr[1]}
                              </React.Fragment>
                            );
                          }
                          return part;
                        })}
                    </p>
                  );
                }

                return <p key={index}>{paragraph}</p>;
              })}
            </div>
          </div>

          {/* Pharmacy Images - Right Side */}
          <div
            className="w-full md:w-1/3 flex-shrink-0 flex flex-col gap-4"
            ref={imagesRef}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-md flex items-center justify-center"
              >
                {image.includes("placeholder") ? (
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
                ) : (
                  <img
                    src={image}
                    alt={`Pharmacy image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStorySection;
