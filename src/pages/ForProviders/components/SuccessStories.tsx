import React from "react";
import { motion } from "framer-motion";

interface SuccessStory {
  title: string;
  providerType: string;
  challenge: string;
  solution: string;
  results: string;
  quote: string;
  author: string;
  role: string;
}

const SuccessStories: React.FC = () => {
  const stories: SuccessStory[] = [
    {
      title: "Improving Diabetes Management in Primary Care",
      providerType: "Primary Care Clinic",
      challenge:
        "A busy primary care clinic was struggling to effectively manage their growing population of patients with diabetes. Limited appointment times made it difficult for physicians to provide comprehensive medication management and education.",
      solution:
        "We established a Collaborative Practice Agreement that allowed our clinical pharmacists to work directly with the clinic's diabetes patients. Our pharmacists conducted regular medication reviews, adjusted therapies based on lab values, provided in-depth education, and monitored adherence.",
      results:
        "After 12 months, the clinic saw a 28% improvement in patients meeting A1C goals, a 35% reduction in diabetes-related emergency visits, and significantly improved medication adherence rates. Physicians reported being able to focus more on complex medical issues while knowing their patients' medication needs were being addressed.",
      quote:
        "The partnership with HealMedic has transformed how we care for our patients with diabetes. Our patients are getting better results, and our providers have more time to focus on other aspects of patient care.",
      author: "Dr. Michael Chen",
      role: "Medical Director, Westside Primary Care",
    },
    {
      title: "Streamlining Medication Management for Cardiology Practice",
      providerType: "Cardiology Specialty Clinic",
      challenge:
        "A cardiology practice was facing challenges with medication reconciliation, complex drug interactions, and ensuring patient adherence to multiple cardiac medications. Prior authorization delays were also causing treatment initiation delays.",
      solution:
        "We implemented a comprehensive medication management program that included pharmacist-led medication reconciliation, therapy optimization, prior authorization support, and a specialized cardiac medication adherence program with regular follow-up.",
      results:
        "The practice experienced a 40% reduction in medication discrepancies, 65% faster prior authorization processing, and a 25% improvement in medication adherence. Patient satisfaction scores increased by 30%, and hospital readmission rates for heart failure patients decreased by 22%.",
      quote:
        "The expertise of HealMedic's clinical pharmacists has been invaluable to our practice. Their attention to detail with complex medication regimens and proactive approach to adherence has significantly improved outcomes for our cardiac patients.",
      author: "Dr. Sophia Rodriguez",
      role: "Cardiologist, Heart Health Specialists",
    },
    {
      title: "Enhancing Transitional Care for Hospital System",
      providerType: "Regional Hospital System",
      challenge:
        "A regional hospital system was experiencing high readmission rates due to medication-related issues following discharge. Patients were confused about medication changes, experiencing adverse effects, or not filling prescriptions promptly.",
      solution:
        "We developed a comprehensive transitions of care program that included medication reconciliation at discharge, bedside delivery of medications, post-discharge follow-up calls, and coordination with primary care providers to ensure continuity of care.",
      results:
        "The hospital system saw a 32% reduction in 30-day readmissions related to medication issues, a 45% decrease in adverse drug events post-discharge, and a 60% improvement in discharge prescription fill rates. The program also resulted in significant cost savings for the hospital system.",
      quote:
        "HealMedic's transitions of care program has been a game-changer for our patients. The seamless coordination between hospital and community care has closed critical gaps that were leading to readmissions and patient harm.",
      author: "Jennifer Williams, PharmD",
      role: "Director of Pharmacy Services, Regional Medical Center",
    },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary"
      >
        <h2 className="font-title text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
          Success Stories
        </h2>
        <p className="font-body text-lg text-gray-600 mb-8 max-w-3xl">
          Discover how healthcare providers like you have partnered with our
          pharmacy team to improve patient outcomes and practice efficiency.
        </p>

        <div className="space-y-12">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="bg-gradient-to-r from-primary to-purple-600 p-6 text-white">
                <h3 className="font-title text-xl font-semibold mb-2">
                  {story.title}
                </h3>
                <p className="font-body text-white/80 text-sm">
                  {story.providerType}
                </p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-title text-lg font-semibold mb-2 text-gray-800">
                      Challenge
                    </h4>
                    <p className="font-body text-gray-600 text-sm">
                      {story.challenge}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-title text-lg font-semibold mb-2 text-gray-800">
                      Solution
                    </h4>
                    <p className="font-body text-gray-600 text-sm">
                      {story.solution}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-title text-lg font-semibold mb-2 text-gray-800">
                      Results
                    </h4>
                    <p className="font-body text-gray-600 text-sm">
                      {story.results}
                    </p>
                  </div>
                </div>

                <div className="mt-6 bg-primary/5 p-5 rounded-lg border-l-4 border-primary">
                  <p className="font-body text-gray-700 italic mb-3">
                    "{story.quote}"
                  </p>
                  <div className="font-title font-semibold text-gray-800">
                    {story.author}
                  </div>
                  <div className="font-body text-sm text-gray-500">
                    {story.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-r from-primary/10 to-purple-100 rounded-xl p-8 shadow-md"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="font-title text-xl font-semibold mb-3 text-gray-800">
            Ready to Create Your Success Story?
          </h3>
          <p className="font-body text-gray-600 mb-6">
            Partner with our pharmacy team to develop customized solutions for
            your practice and patients. Contact us today to discuss how we can
            collaborate to improve outcomes and efficiency.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary text-white font-body px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors duration-300 shadow-md"
          >
            Start the Conversation
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default SuccessStories;
