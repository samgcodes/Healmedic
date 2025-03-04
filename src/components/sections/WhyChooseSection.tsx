import React from "react";
import { Link } from "react-router-dom";
import { whyChooseData } from "../../constants/whyChooseData";
import {
  FadeIn,
  StaggeredList,
  AnimatedButton,
  SectionTitle,
} from "../utils/AnimationComponents";
import {
  PersonalizedCareIcon,
  ExpertGuidanceIcon,
  InnovationIcon,
  ConvenienceIcon,
  CollaborativeCareIcon,
} from "../utils/SvgIcons";
import ClinicalExpertiseIcon from "../utils/ClinicalExpertiseIcon";

/**
 * Get the appropriate icon component based on the point title
 */
const getIconComponent = (title: string, size = 48) => {
  const color = "#9a77f6";

  switch (title) {
    case "Personalized Care":
      return <PersonalizedCareIcon size={size} color={color} />;
    case "Expert Guidance":
      return <ExpertGuidanceIcon size={size} color={color} />;
    case "Innovative Services":
      return <InnovationIcon size={size} color={color} />;
    case "Convenience & Accessibility":
      return <ConvenienceIcon size={size} color={color} />;
    case "Collaborative Care":
      return <CollaborativeCareIcon size={size} color={color} />;
    case "Clinical Expertise":
      return <ClinicalExpertiseIcon size={size} color={color} />;
    default:
      return <div className="text-4xl">{title.charAt(0)}</div>;
  }
};

/**
 * Why Choose Section Component
 *
 * Displays the reasons to choose HealMedic Pharmacy
 */
const WhyChooseSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FDF8EC]">
      <div className="container-wide">
        <FadeIn className="text-center mb-16">
          <SectionTitle
            title={whyChooseData.headline}
            className="text-center"
          />
          <p className="body-regular text-gray-700 max-w-3xl mx-auto">
            We're more than just a pharmacy - we're your partner in health and
            wellness.
          </p>
        </FadeIn>

        <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {whyChooseData.points.map((point, index) => (
            <div
              key={point.title}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 h-full"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-4">{getIconComponent(point.title)}</div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-700">{point.description}</p>
              </div>
            </div>
          ))}
        </StaggeredList>

        <div className="text-center">
          <Link to={whyChooseData.ctaButton.link}>
            <AnimatedButton type="scale" className="btn-primary">
              {whyChooseData.ctaButton.text}
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
