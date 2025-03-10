import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BlogPost } from "../types";
import { getCategoryById } from "../data/blogData";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const category = getCategoryById(post.categoryId);

  // GSAP animation on hover
  useEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const image = card.querySelector(".card-image");
    const content = card.querySelector(".card-content");
    const title = card.querySelector(".card-title");

    // Create hover animation timeline
    const timeline = gsap.timeline({ paused: true });

    timeline
      .to(image, { scale: 1.1, duration: 0.4, ease: "power2.out" })
      .to(title, { color: "#8a67e6", duration: 0.3, ease: "power1.out" }, 0)
      .to(content, { y: -5, duration: 0.3, ease: "power1.out" }, 0);

    // Add event listeners
    card.addEventListener("mouseenter", () => timeline.play());
    card.addEventListener("mouseleave", () => timeline.reverse());

    // Cleanup
    return () => {
      card.removeEventListener("mouseenter", () => timeline.play());
      card.removeEventListener("mouseleave", () => timeline.reverse());
      timeline.kill();
    };
  }, []);

  // Add ScrollTrigger animation
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Set initial state
    gsap.set(card, { opacity: 0, y: 30 });

    // Create animation with ScrollTrigger
    const animation = gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: index * 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=100",
        toggleActions: "play none none none",
        once: true,
      },
    });

    // Cleanup
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === card) {
          trigger.kill();
        }
      });
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src="/assets/placeholders/blog-card.svg"
          alt={post.title}
          className="card-image w-full h-full object-cover transition-transform duration-300"
        />

        {/* Category badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary">
          {category?.name || post.categoryId}
        </div>
      </div>

      {/* Content */}
      <div className="card-content p-5">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-gray-500">
            {new Date(post.publishDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <span className="text-xs text-gray-500">
            {post.readTime} min read
          </span>
        </div>

        <h3 className="card-title text-lg font-title font-semibold text-gray-800 mb-2 transition-colors duration-300">
          {post.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Author */}
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
            <img
              src="/assets/placeholders/avatar.svg"
              alt={post.author.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-medium text-gray-800">
              {post.author.name}
            </p>
            <p className="text-xs text-gray-500">{post.author.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
