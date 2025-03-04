import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { resourcesData } from "../../constants/resourcesData";
import {
  FadeIn,
  AnimatedCard,
  AnimatedButton,
  SectionTitle,
} from "../utils/AnimationComponents";
import {
  MedicationSyncIcon,
  DnaTestingIcon,
  TravelHealthIcon,
} from "../utils/SvgIcons";

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
  index: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  excerpt,
  link,
  index,
}) => {
  return (
    <AnimatedCard
      className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col"
      delay={index * 0.1 + 0.2}
    >
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-center mb-6">{getArticleIcon(title)}</div>
        <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-gray-700 mb-4 flex-grow">{excerpt}</p>
        <Link
          to={link}
          className="text-primary font-bold hover:underline inline-flex items-center"
        >
          Read More
          <motion.span
            className="ml-1"
            animate={{ x: [0, 4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            →
          </motion.span>
        </Link>
      </div>
    </AnimatedCard>
  );
};

/**
 * Resources Section Component
 *
 * Displays health and wellness resources and blog articles
 */
const ResourcesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FDF8EC]">
      <div className="container-wide">
        <FadeIn className="text-center mb-16">
          <SectionTitle
            title={resourcesData.headline}
            className="text-center"
          />
          <p className="body-regular text-gray-700 max-w-3xl mx-auto">
            Stay informed with the latest health tips, medication information,
            and wellness advice from our expert team.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {resourcesData.articles.map((article, index) => {
            // Destructure to exclude image property
            const { title, excerpt, link } = article;
            return (
              <ArticleCard
                key={title}
                title={title}
                excerpt={excerpt}
                link={link}
                index={index}
              />
            );
          })}
        </div>

        <div className="text-center">
          <Link to={resourcesData.ctaButton.link}>
            <AnimatedButton type="scale" className="btn-primary">
              {resourcesData.ctaButton.text}
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
