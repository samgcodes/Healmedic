import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TabNavigation from "../../../components/utils/TabNavigation";

const MedicationEducation: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const medicationTopics = [
    {
      title: "Medication Adherence",
      content: (
        <div className="space-y-4 max-w-full overflow-hidden">
          <p className="font-body text-gray-600">
            Taking your medications as prescribed is crucial for managing health
            conditions effectively. Medication adherence means taking the right
            dose, at the right time, in the right way, and for the prescribed
            duration.
          </p>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Common Barriers to Medication Adherence:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>Forgetting to take medications</li>
            <li>Complex medication regimens</li>
            <li>Side effects or concerns about side effects</li>
            <li>Cost of medications</li>
            <li>Lack of understanding about the medication's purpose</li>
            <li>Difficulty opening medication containers</li>
          </ul>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Strategies to Improve Adherence:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>Use pill organizers or medication reminder apps</li>
            <li>
              Link medication taking to daily routines (e.g., brushing teeth)
            </li>
            <li>Set alarms or reminders</li>
            <li>Ask about once-daily dosing options when possible</li>
            <li>Discuss side effect concerns with your healthcare provider</li>
            <li>
              Explore cost-saving options (generics, patient assistance
              programs)
            </li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500 mt-4">
            <p className="font-body text-blue-700">
              <span className="font-semibold">Tip:</span> Our pharmacy offers
              medication synchronization services, which means all your regular
              medications can be refilled at the same time each month, reducing
              the number of pharmacy trips and helping you stay on track.
            </p>
          </div>
        </div>
      ),
      icon: "⏰",
    },
    {
      title: "Understanding Side Effects",
      content: (
        <div className="space-y-4 max-w-full overflow-hidden">
          <p className="font-body text-gray-600">
            All medications can cause side effects, although not everyone
            experiences them. Understanding potential side effects and knowing
            which ones require medical attention is important for medication
            safety.
          </p>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Common vs. Serious Side Effects:
          </h4>
          <p className="font-body text-gray-600">
            Common side effects are usually mild and often improve as your body
            adjusts to the medication. Serious side effects are less common but
            require immediate medical attention.
          </p>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Examples of Common Side Effects:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>Drowsiness or fatigue</li>
            <li>Mild nausea</li>
            <li>Dry mouth</li>
            <li>Mild headache</li>
            <li>Minor digestive issues</li>
          </ul>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            When to Seek Medical Attention:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>
              Severe allergic reactions (rash, itching, swelling, severe
              dizziness, difficulty breathing)
            </li>
            <li>Persistent vomiting or severe nausea</li>
            <li>Unusual bleeding or bruising</li>
            <li>Severe dizziness or fainting</li>
            <li>Persistent or severe headache</li>
            <li>Yellowing of the skin or eyes</li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500 mt-4">
            <p className="font-body text-blue-700">
              <span className="font-semibold">Important:</span> Never stop
              taking a prescribed medication due to side effects without
              consulting your healthcare provider. They may be able to adjust
              your dose, switch to an alternative medication, or suggest ways to
              manage the side effects.
            </p>
          </div>
        </div>
      ),
      icon: "⚠️",
    },
    {
      title: "Drug Interactions",
      content: (
        <div className="space-y-4 max-w-full overflow-hidden">
          <p className="font-body text-gray-600">
            Drug interactions occur when a medication affects how another
            medication works, potentially reducing effectiveness or increasing
            the risk of side effects. Interactions can also occur with foods,
            beverages, supplements, and health conditions.
          </p>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Types of Drug Interactions:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>
              <span className="font-semibold">Drug-Drug Interactions:</span>{" "}
              When two or more medications interact with each other
            </li>
            <li>
              <span className="font-semibold">Drug-Food Interactions:</span>{" "}
              When medications interact with foods or beverages
            </li>
            <li>
              <span className="font-semibold">
                Drug-Supplement Interactions:
              </span>{" "}
              When medications interact with vitamins, minerals, or herbal
              supplements
            </li>
            <li>
              <span className="font-semibold">
                Drug-Condition Interactions:
              </span>{" "}
              When a medication affects an existing health condition
            </li>
          </ul>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Common Examples:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>
              Warfarin (blood thinner) with NSAIDs like ibuprofen (increased
              bleeding risk)
            </li>
            <li>
              Certain antibiotics with dairy products (reduced absorption)
            </li>
            <li>Statins with grapefruit juice (increased side effect risk)</li>
            <li>
              MAO inhibitors with tyramine-rich foods like aged cheese
              (dangerous blood pressure spike)
            </li>
            <li>
              St. John's Wort with many medications (reduced effectiveness)
            </li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500 mt-4">
            <p className="font-body text-blue-700">
              <span className="font-semibold">Prevention Tips:</span> Keep an
              updated list of all medications, supplements, and over-the-counter
              products you take. Share this list with all healthcare providers
              and use the same pharmacy for all prescriptions when possible. Ask
              your pharmacist to check for interactions whenever you start a new
              medication.
            </p>
          </div>
        </div>
      ),
      icon: "🔄",
    },
    {
      title: "Proper Storage & Disposal",
      content: (
        <div className="space-y-4 max-w-full overflow-hidden">
          <p className="font-body text-gray-600">
            Proper medication storage and disposal are important for maintaining
            medication effectiveness and preventing accidental ingestion or
            environmental contamination.
          </p>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Storage Guidelines:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>
              Store most medications at room temperature (59-77°F) in a cool,
              dry place
            </li>
            <li>
              Keep medications away from direct sunlight, heat, and moisture
              (avoid bathroom medicine cabinets)
            </li>
            <li>
              Some medications require refrigeration - check the label or ask
              your pharmacist
            </li>
            <li>
              Keep all medications in their original containers with labels
              intact
            </li>
            <li>Store medications out of reach of children and pets</li>
            <li>Use child-resistant caps when children are in the home</li>
          </ul>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Safe Disposal Methods:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>
              Use medication take-back programs (our pharmacy participates in
              these events)
            </li>
            <li>Use DEA-authorized collection sites</li>
            <li>
              Some medications can be flushed down the toilet (check the FDA
              flush list)
            </li>
            <li>
              For household disposal: Mix medications with unpalatable
              substances like coffee grounds or cat litter, place in a sealed
              container, and throw in household trash
            </li>
            <li>
              Remove personal information from prescription labels before
              disposal
            </li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500 mt-4">
            <p className="font-body text-blue-700">
              <span className="font-semibold">Expiration Dates:</span>{" "}
              Medications can lose effectiveness and sometimes become harmful
              after their expiration date. Regularly check your medicine cabinet
              and properly dispose of expired medications. Our pharmacy offers
              medication disposal services - ask us for details.
            </p>
          </div>
        </div>
      ),
      icon: "🗑️",
    },
  ];

  return (
    <div className="space-y-8 max-w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary"
      >
        <div className="flex flex-col xl:flex-row items-start gap-6">
          <div className="flex-1">
            <h2 className="font-title text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
              Medication Education
            </h2>
            <p className="font-body text-lg text-gray-600">
              Understanding your medications is essential for safe and effective
              treatment. Our medication education resources provide valuable
              information about medication adherence, side effects,
              interactions, and proper storage and disposal.
            </p>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 aspect-square rounded-xl overflow-hidden mb-6 xl:mb-0">
            <img
              src="/assets/PatientHub/medication_education_PH.png"
              alt="Medication Education"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <TabNavigation
            items={medicationTopics}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        {/* Content */}
        <div className="p-6 max-w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {medicationTopics[activeTab].content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-gradient-to-r from-primary/10 to-purple-100 rounded-xl p-6 shadow-md"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="text-3xl mb-4 md:mb-0">💊</div>
          <div>
            <h3 className="font-title text-xl font-semibold mb-3 text-gray-800">
              Medication Review Services
            </h3>
            <p className="font-body text-gray-600">
              Our pharmacists offer comprehensive medication reviews to help you
              understand your medications, identify potential issues, and
              optimize your therapy. Contact us to schedule a personalized
              medication review.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MedicationEducation;
