import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { BlogPost } from "../types";

// Import a sample Lottie animation
// This is a placeholder animation - in a real app, you'd use a specific animation file
const pulseAnimation = {
  v: "5.7.8",
  fr: 30,
  ip: 0,
  op: 60,
  w: 300,
  h: 300,
  nm: "Pulse Animation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Circle",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [100], e: [50] },
            { t: 30, s: [50], e: [100] },
            { t: 60, s: [100] },
          ],
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [150, 150, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [100, 100, 100], e: [120, 120, 100] },
            { t: 30, s: [120, 120, 100], e: [100, 100, 100] },
            { t: 60, s: [100, 100, 100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { a: 0, k: [100, 100] },
              p: { a: 0, k: [0, 0] },
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.541, 0.404, 0.902, 1] },
              o: { a: 0, k: 100 },
              r: 1,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
            },
          ],
          nm: "Circle",
        },
      ],
      ip: 0,
      op: 60,
      st: 0,
    },
  ],
  markers: [],
};

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#FDF8EC]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-title font-bold text-gray-800 mb-12 text-center"
        >
          Featured Article
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Image with Lottie animation overlay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-xl h-full"
          >
            <img
              src="/assets/placeholders/blog-featured.svg"
              alt={post.title}
              className="object-cover w-full h-full"
            />

            {/* Lottie animation overlay */}
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32">
              <Lottie
                animationData={pulseAnimation}
                loop={true}
                autoplay={true}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-5 rounded-full transition-all duration-300"
              >
                Read Article
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
