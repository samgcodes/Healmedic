import { BlogPost, BlogCategory } from "../types";

/**
 * Blog categories
 */
export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: "health-tips",
    name: "Health Tips",
    description: "Practical advice for maintaining your health and wellness",
    icon: "heart",
  },
  {
    id: "medication",
    name: "Medication",
    description:
      "Information about medications, side effects, and interactions",
    icon: "pill",
  },
  {
    id: "nutrition",
    name: "Nutrition",
    description: "Guidance on healthy eating and dietary considerations",
    icon: "apple",
  },
  {
    id: "wellness",
    name: "Wellness",
    description: "Holistic approaches to physical and mental wellbeing",
    icon: "sun",
  },
  {
    id: "research",
    name: "Research",
    description: "Latest medical research and scientific breakthroughs",
    icon: "microscope",
  },
];

/**
 * Sample blog posts
 */
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "understanding-blood-pressure",
    title: "Understanding Blood Pressure: What the Numbers Mean",
    excerpt:
      "Blood pressure readings can be confusing. Learn what systolic and diastolic numbers indicate about your health.",
    content: "",
    author: {
      name: "Dr. Sarah Johnson",
      avatar: "/assets/placeholder-avatar.jpg",
      role: "Cardiologist",
    },
    publishDate: "2025-02-15",
    categoryId: "health-tips",
    imageUrl: "/assets/placeholder-blog-1.jpg",
    readTime: 5,
    featured: true,
  },
  {
    id: "common-medication-interactions",
    title: "Common Medication Interactions You Should Know About",
    excerpt:
      "Many medications can interact with each other, sometimes with serious consequences. Here's what to watch for.",
    content: "",
    author: {
      name: "Dr. Michael Chen",
      avatar: "/assets/placeholder-avatar.jpg",
      role: "Pharmacist",
    },
    publishDate: "2025-02-10",
    categoryId: "medication",
    imageUrl: "/assets/placeholder-blog-2.jpg",
    readTime: 7,
  },
  {
    id: "nutrition-myths-debunked",
    title: "5 Common Nutrition Myths Debunked by Science",
    excerpt:
      "There's a lot of misinformation about nutrition. Let's separate fact from fiction with evidence-based insights.",
    content: "",
    author: {
      name: "Emma Rodriguez",
      avatar: "/assets/placeholder-avatar.jpg",
      role: "Registered Dietitian",
    },
    publishDate: "2025-02-05",
    categoryId: "nutrition",
    imageUrl: "/assets/placeholder-blog-3.jpg",
    readTime: 6,
  },
  {
    id: "mindfulness-for-stress",
    title: "Mindfulness Techniques for Managing Daily Stress",
    excerpt:
      "Simple mindfulness practices that can help reduce stress and improve your mental wellbeing.",
    content: "",
    author: {
      name: "Dr. James Wilson",
      avatar: "/assets/placeholder-avatar.jpg",
      role: "Psychologist",
    },
    publishDate: "2025-01-28",
    categoryId: "wellness",
    imageUrl: "/assets/placeholder-blog-4.jpg",
    readTime: 4,
  },
  {
    id: "breakthrough-diabetes-treatment",
    title: "New Breakthrough in Diabetes Treatment Shows Promise",
    excerpt:
      "Recent research reveals a potential new approach to managing diabetes that could reduce dependence on insulin.",
    content: "",
    author: {
      name: "Dr. Lisa Patel",
      avatar: "/assets/placeholder-avatar.jpg",
      role: "Endocrinologist",
    },
    publishDate: "2025-01-20",
    categoryId: "research",
    imageUrl: "/assets/placeholder-blog-5.jpg",
    readTime: 8,
  },
  {
    id: "seasonal-allergies-guide",
    title: "Your Complete Guide to Managing Seasonal Allergies",
    excerpt:
      "From medications to environmental controls, learn how to minimize allergy symptoms and enjoy the outdoors.",
    content: "",
    author: {
      name: "Dr. Robert Kim",
      avatar: "/assets/placeholder-avatar.jpg",
      role: "Allergist",
    },
    publishDate: "2025-01-15",
    categoryId: "health-tips",
    imageUrl: "/assets/placeholder-blog-6.jpg",
    readTime: 6,
  },
  {
    id: "heart-healthy-diet",
    title: "Heart-Healthy Diet: Foods That Lower Cholesterol",
    excerpt:
      "Discover which foods can naturally help reduce cholesterol levels and improve heart health.",
    content: "",
    author: {
      name: "Emma Rodriguez",
      avatar: "/assets/placeholder-avatar.jpg",
      role: "Registered Dietitian",
    },
    publishDate: "2025-01-10",
    categoryId: "nutrition",
    imageUrl: "/assets/placeholder-blog-7.jpg",
    readTime: 5,
  },
  {
    id: "sleep-quality-improvement",
    title: "7 Science-Backed Ways to Improve Sleep Quality",
    excerpt:
      "Poor sleep affects your health in numerous ways. Here are evidence-based strategies to sleep better.",
    content: "",
    author: {
      name: "Dr. Thomas Lee",
      avatar: "/assets/placeholder-avatar.jpg",
      role: "Sleep Specialist",
    },
    publishDate: "2025-01-05",
    categoryId: "wellness",
    imageUrl: "/assets/placeholder-blog-8.jpg",
    readTime: 7,
  },
];

/**
 * Get featured blog posts
 */
export const getFeaturedPosts = (): BlogPost[] => {
  return BLOG_POSTS.filter((post) => post.featured);
};

/**
 * Get recent blog posts
 */
export const getRecentPosts = (count: number = 4): BlogPost[] => {
  return [...BLOG_POSTS]
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    )
    .slice(0, count);
};

/**
 * Get posts by category
 */
export const getPostsByCategory = (categoryId: string): BlogPost[] => {
  return BLOG_POSTS.filter((post) => post.categoryId === categoryId);
};

/**
 * Get category by ID
 */
export const getCategoryById = (
  categoryId: string
): BlogCategory | undefined => {
  return BLOG_CATEGORIES.find((category) => category.id === categoryId);
};
