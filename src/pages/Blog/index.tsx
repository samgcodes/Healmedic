import React, { useEffect } from "react";
import { motion } from "framer-motion";
import BlogHero from "./components/BlogHero";
import FeaturedPost from "./components/FeaturedPost";
import BlogCard from "./components/BlogCard";
import { getRecentPosts, getFeaturedPosts } from "./data/blogData";

const Blog: React.FC = () => {
  const recentPosts = getRecentPosts(6);
  const featuredPosts = getFeaturedPosts();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDF8EC]">
      {/* Hero Section */}
      <BlogHero />

      {/* Featured Post with Lottie Animation */}
      {featuredPosts.length > 0 && <FeaturedPost post={featuredPosts[0]} />}

      {/* Recent Posts with GSAP Animations */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-title font-bold text-gray-800 mb-8 text-center"
        >
          Recent Articles
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {recentPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
