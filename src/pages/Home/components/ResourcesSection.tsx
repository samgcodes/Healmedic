import React from "react";
import { Link } from "react-router-dom";
import {
  MedicationSyncIcon,
  DnaTestingIcon,
  TravelHealthIcon,
} from "../../../components/utils/SvgIcons";

// Resources data embedded directly in the component
const resourcesData = {
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

/**
 * Get the appropriate icon component based on the article title
 */
const getArticleIcon = (title: string, size = 64) => {
  const color = "#9a77f6";

  if (title.includes("Medication Synchronization")) {
    return <MedicationSyncIcon size={size} color={color} />;
  } else if (title.includes("PGx Testing")) {
    return <DnaTestingIcon size={size} color={color} />;
  } else if (title.includes("Travel")) {
    return <TravelHealthIcon size={size} color={color} />;
  } else {
    return <div className="text-4xl">📚</div>;
  }
};

/**
 * Article Card Component
 */
interface ArticleCardProps {
  title: string;
  excerpt: string;
  link: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, excerpt, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-center mb-6">{getArticleIcon(title)}</div>
        <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-gray-700 mb-4 flex-grow">{excerpt}</p>
        <Link
          to={link}
          className="text-primary font-bold hover:underline inline-flex items-center"
        >
          Read More
          <span className="ml-1">→</span>
        </Link>
      </div>
    </div>
  );
};

/**
 * Resources Section Component
 *
 * Displays health and wellness resources and blog articles
 * Animations removed for troubleshooting
 */
const ResourcesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FDF8EC]">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-primary mb-6 font-title">
            {resourcesData.headline}
          </h2>
          <p className="body-regular text-gray-700 max-w-3xl mx-auto">
            Stay informed with the latest health tips, medication information,
            and wellness advice from our expert team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {resourcesData.articles.map((article) => {
            // Destructure to exclude image property
            const { title, excerpt, link } = article;
            return (
              <ArticleCard
                key={title}
                title={title}
                excerpt={excerpt}
                link={link}
              />
            );
          })}
        </div>

        <div className="text-center">
          <Link to={resourcesData.ctaButton.link} className="btn-primary">
            {resourcesData.ctaButton.text}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
