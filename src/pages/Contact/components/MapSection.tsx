import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Map section component that displays a Google Maps embed
 */
const MapSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  // Create a timeline for animations
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (
      !sectionRef.current ||
      !titleRef.current ||
      !mapContainerRef.current ||
      !infoRef.current
    )
      return;

    // Set initial state
    gsap.set([titleRef.current, mapContainerRef.current, infoRef.current], {
      opacity: 0,
      y: 30,
      scale: 0.98,
    });

    // Create a new timeline
    const tl = gsap.timeline({
      paused: true,
      defaults: {
        ease: "power3.out",
        duration: 0.8,
      },
    });

    timeline.current = tl;

    // Add animations to the timeline with staggered effect
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 30, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1 }
    )
      .fromTo(
        mapContainerRef.current,
        { opacity: 0, y: 30, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1 },
        "-=0.5"
      )
      .fromTo(
        infoRef.current,
        { opacity: 0, y: 30, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1 },
        "-=0.6"
      );

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
  }, []);

  return (
    <div ref={sectionRef} className="max-w-6xl mx-auto mb-16">
      <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary">
        <h3
          ref={titleRef}
          className="font-title text-xl font-semibold text-gray-800 mb-4"
        >
          Find Us
        </h3>
        <div
          ref={mapContainerRef}
          className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative"
        >
          {/* Loading state placeholder */}
          <div
            className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10 opacity-0 transition-opacity duration-300"
            id="map-loading"
          >
            <svg
              className="animate-spin h-10 w-10 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span className="sr-only">Loading map...</span>
          </div>

          {/* Google Maps iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.4616173732747!2d-118.3462!3d34.1725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf5c9c7b5555%3A0x8f5c1f7c5d6c7d8d!2s634%20S%20Victory%20Blvd%2C%20Burbank%2C%20CA%2091502!5e0!3m2!1sen!2sus!4v1646168000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="HealMedic Pharmacy Location"
            aria-label="Google Maps showing HealMedic Pharmacy location at 634 South Victory Blvd, Burbank, CA 91502"
            onLoad={() => {
              const loadingElement = document.getElementById("map-loading");
              if (loadingElement) {
                loadingElement.style.opacity = "0";
              }
            }}
            onError={() => {
              const loadingElement = document.getElementById("map-loading");
              if (loadingElement) {
                loadingElement.innerHTML =
                  "Error loading map. Please refresh the page or visit our address: 634 South Victory Blvd, Burbank, CA 91502";
                loadingElement.style.opacity = "1";
                loadingElement.classList.remove("bg-gray-100");
                loadingElement.classList.add(
                  "bg-red-50",
                  "text-red-800",
                  "p-4"
                );
              }
            }}
          ></iframe>
        </div>
        <div ref={infoRef} className="mt-4 text-sm text-gray-600">
          <p>
            <strong>Address:</strong> 634 South Victory Blvd, Burbank, CA 91502
          </p>
          <p className="mt-1">
            <strong>Directions:</strong> Located on Victory Blvd between Cypress
            Ave and Magnolia Blvd, with convenient parking available in front of
            the pharmacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
