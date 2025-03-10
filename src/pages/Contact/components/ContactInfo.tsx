import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Contact information component
 * Displays address, phone, and hours information
 */
const ContactInfo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const addressRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const hoursRef = useRef<HTMLDivElement>(null);

  // Create a timeline for animations
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (
      !containerRef.current ||
      !headerRef.current ||
      !addressRef.current ||
      !phoneRef.current ||
      !hoursRef.current
    )
      return;

    // Set initial state
    gsap.set(
      [
        headerRef.current,
        addressRef.current,
        phoneRef.current,
        hoursRef.current,
      ],
      {
        opacity: 0,
        y: 30,
        scale: 0.98,
      }
    );

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
      headerRef.current,
      { opacity: 0, y: 30, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1 }
    )
      .fromTo(
        addressRef.current,
        { opacity: 0, y: 30, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1 },
        "-=0.5"
      )
      .fromTo(
        phoneRef.current,
        { opacity: 0, y: 30, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1 },
        "-=0.6"
      )
      .fromTo(
        hoursRef.current,
        { opacity: 0, y: 30, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1 },
        "-=0.6"
      );

    // Create ScrollTrigger
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
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
    <div ref={containerRef} className="space-y-8">
      <div
        ref={headerRef}
        className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary"
      >
        <h2 className="font-title text-3xl font-semibold mb-6 text-gray-800">
          Get in Touch
        </h2>
        <p className="font-body text-lg text-gray-600">
          Have questions about our services? Need to refill a prescription? Our
          team is here to assist you.
        </p>
      </div>

      <div className="space-y-6">
        {/* Address Card */}
        <div
          ref={addressRef}
          className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary flex items-start"
        >
          <div className="text-primary text-2xl mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-title text-xl font-semibold text-gray-800 mb-1">
              Visit Us
            </h3>
            <p className="font-body text-gray-600">
              634 South Victory Blvd
              <br />
              Burbank, CA 91502
            </p>
            <a
              href="https://maps.google.com/?q=634+South+Victory+Blvd+Burbank+CA+91502"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold mt-2 inline-block hover:underline"
              aria-label="Get directions to our pharmacy on Google Maps"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* Phone Card */}
        <div
          ref={phoneRef}
          className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary flex items-start"
        >
          <div className="text-primary text-2xl mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-title text-xl font-semibold text-gray-800 mb-1">
              Call Us
            </h3>
            <p className="font-body text-gray-600">Main: (818) 467-9767</p>
            <a
              href="tel:+18184679767"
              className="text-primary font-semibold mt-2 inline-block hover:underline"
              aria-label="Call our pharmacy at (818) 467-9767"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Hours Card */}
        <div
          ref={hoursRef}
          className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary flex items-start"
        >
          <div className="text-primary text-2xl mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-title text-xl font-semibold text-gray-800 mb-1">
              Hours
            </h3>
            <div className="font-body text-gray-600 grid grid-cols-2 gap-x-4">
              <span>Monday:</span>
              <span>9:00 AM - 6:00 PM</span>
              <span>Tuesday:</span>
              <span>9:00 AM - 6:00 PM</span>
              <span>Wednesday:</span>
              <span>9:00 AM - 6:00 PM</span>
              <span>Thursday:</span>
              <span>9:00 AM - 6:00 PM</span>
              <span>Friday:</span>
              <span>9:00 AM - 6:00 PM</span>
              <span>Saturday:</span>
              <span>10:00 AM - 2:00 PM</span>
              <span>Sunday:</span>
              <span>Appointment Only</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
