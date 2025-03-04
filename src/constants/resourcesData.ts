/**
 * Health & Wellness Resources section data for the homepage
 */

export interface Article {
  title: string;
  excerpt: string;
  image: string;
  link: string;
}

export const resourcesData = {
  headline: "Empower Your Health With Knowledge",
  articles: [
    {
      title: "How Medication Synchronization Can Simplify Your Life",
      excerpt:
        "Learn how our medication synchronization service can save you time, reduce stress, and improve medication adherence with a single monthly pickup.",
      image: "medication-sync.svg", // Will be replaced with actual image
      link: "/blog/medication-synchronization",
    },
    {
      title: "The Importance of PGx Testing for Personalized Medicine",
      excerpt:
        "Discover how pharmacogenomic testing can help determine which medications work best for your unique genetic makeup, reducing side effects and improving outcomes.",
      image: "pgx-testing.svg", // Will be replaced with actual image
      link: "/blog/pgx-testing",
    },
    {
      title: "Traveling? Here's Why You Need a Pre-Trip Health Consultation",
      excerpt:
        "Before your next international trip, learn why a travel health consultation can protect you from common travel-related illnesses and ensure you have the right medications.",
      image: "travel-health.svg", // Will be replaced with actual image
      link: "/blog/travel-health-consultation",
    },
  ],
  ctaButton: {
    text: "Explore Health Tips & Insights",
    link: "/blog",
  },
};
