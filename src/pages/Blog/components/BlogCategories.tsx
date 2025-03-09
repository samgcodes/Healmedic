import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { BLOG_CATEGORIES } from "../data/blogData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const BlogCategories: React.FC = () => {
  // GSAP animation for category items
  useEffect(() => {
    const categoryItems = document.querySelectorAll(".category-item");

    gsap.fromTo(
      categoryItems,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".categories-section",
          start: "top 80%",
        },
      }
    );

    return () => {
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="categories-section relative py-16 sm:py-24 bg-[#FDF8EC] overflow-hidden">
      {/* Animated background dots */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 50 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full bg-primary"
              style={{
                width: Math.random() * 10 + 5 + "px",
                height: Math.random() * 10 + 5 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, Math.random() * 30 - 15],
                x: [0, Math.random() * 30 - 15],
                scale: [1, Math.random() * 0.5 + 0.8, 1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-title font-bold text-gray-800 mb-12 text-center"
        >
          Explore Topics
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {BLOG_CATEGORIES.map((category) => (
            <div key={category.id} className="category-item">
              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(138, 103, 230, 0.3)",
                }}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-2xl">
                    {/* Placeholder for icon */}
                    {category.icon === "heart" && "❤️"}
                    {category.icon === "pill" && "💊"}
                    {category.icon === "apple" && "🍎"}
                    {category.icon === "sun" && "☀️"}
                    {category.icon === "microscope" && "🔬"}
                  </span>
                </div>
                <h3 className="font-title font-semibold text-lg mb-2 text-gray-800">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;
