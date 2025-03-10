import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BlogPost } from "../types";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  // Create refs for animated elements
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pulseCircleRef = useRef<HTMLDivElement>(null);

  // Set up animations
  useEffect(() => {
    // Title animation
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 0, y: 20 });

      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none",
          once: true,
        },
      });
    }

    // Image container animation
    if (imageContainerRef.current) {
      gsap.set(imageContainerRef.current, { opacity: 0, x: -30 });

      gsap.to(imageContainerRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none",
          once: true,
        },
      });
    }

    // Content animation
    if (contentRef.current) {
      gsap.set(contentRef.current, { opacity: 0, x: 30 });

      gsap.to(contentRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none",
          once: true,
        },
      });
    }

    // Pulse animation for circle
    if (pulseCircleRef.current) {
      gsap.to(pulseCircleRef.current, {
        scale: 1.2,
        opacity: 0.5,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-[#FDF8EC]">
      <div className="container mx-auto px-4">
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl font-title font-bold text-gray-800 mb-12 text-center"
        >
          Featured Article
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Image with animation overlay */}
          <div
            ref={imageContainerRef}
            className="relative rounded-2xl overflow-hidden shadow-xl h-full"
          >
            <img
              src="/assets/placeholders/blog-featured.svg"
              alt={post.title}
              className="object-cover w-full h-full"
            />

            {/* Framer Motion animation overlay */}
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
              <div
                ref={pulseCircleRef}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full"
              />
            </div>
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center mb-4">
              <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                {post.categoryId}
              </span>
              <span className="ml-3 text-gray-500 text-sm">
                {new Date(post.publishDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-title font-bold text-gray-800 mb-4">
              {post.title}
            </h3>

            <p className="text-gray-600 mb-6 text-lg">{post.excerpt}</p>

            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img
                  src="/assets/placeholders/avatar.svg"
                  alt={post.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-gray-800">{post.author.name}</p>
                <p className="text-sm text-gray-500">{post.author.role}</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                {post.readTime} min read
              </span>
              <button className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-5 rounded-full transition-all duration-300 read-button">
                Read Article
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add button hover animation when component is mounted
const addButtonHoverEffects = () => {
  const buttons = document.querySelectorAll(".read-button");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      gsap.to(button, { scale: 1.05, duration: 0.3 });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(button, { scale: 1, duration: 0.3 });
    });

    button.addEventListener("mousedown", () => {
      gsap.to(button, { scale: 0.95, duration: 0.1 });
    });

    button.addEventListener("mouseup", () => {
      gsap.to(button, { scale: 1.05, duration: 0.1 });
    });
  });
};

// Run once after initial render
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", addButtonHoverEffects);
}

export default FeaturedPost;
