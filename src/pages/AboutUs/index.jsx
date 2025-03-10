import React from "react";
import {
  HeroSection,
  OurStorySection,
  OurMissionSection,
  StandoutFeaturesSection,
  CoFoundersSection,
  CommitmentSection,
  JoinUsSection,
} from "./components";

// Import data
import {
  standoutFeatures,
  commitmentFeatures,
  coFounders,
  ourStory,
  ourMission,
  joinUs,
} from "./data";

const AboutUs = () => {
  return (
    <div>
      <HeroSection />

      {/* Content with cream background */}
      <div className="bg-[#FDF8EC] pt-16 pb-16">
        <div className="container mx-auto px-4">
          <OurStorySection
            title={ourStory.title}
            content={ourStory.content}
            images={ourStory.images}
          />

          <OurMissionSection
            title={ourMission.title}
            content={ourMission.content}
          />

          <StandoutFeaturesSection features={standoutFeatures} />

          <CoFoundersSection founders={coFounders} />

          <CommitmentSection features={commitmentFeatures} />

          <JoinUsSection
            title={joinUs.title}
            content={joinUs.content}
            buttons={joinUs.buttons}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
