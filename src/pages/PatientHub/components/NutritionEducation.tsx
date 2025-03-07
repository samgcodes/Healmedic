import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TabNavigation from "../../../components/utils/TabNavigation";

const NutritionEducation: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const nutritionTopics = [
    {
      title: "Healthy Eating Guidelines",
      content: (
        <div className="space-y-4">
          <p className="font-body text-gray-600">
            Good nutrition is essential for overall health and well-being.
            Following evidence-based dietary guidelines can help reduce the risk
            of chronic diseases and promote optimal health.
          </p>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Key Principles of Healthy Eating:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>Eat a variety of foods from all food groups</li>
            <li>
              Focus on fruits, vegetables, whole grains, and lean proteins
            </li>
            <li>Limit added sugars, sodium, and saturated fats</li>
            <li>Choose nutrient-dense foods over empty calories</li>
            <li>Stay hydrated by drinking plenty of water</li>
            <li>Practice portion control and mindful eating</li>
          </ul>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            The Plate Method:
          </h4>
          <p className="font-body text-gray-600">
            A simple way to build a balanced meal is to use the plate method:
          </p>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>Fill half your plate with non-starchy vegetables</li>
            <li>Fill one quarter with lean protein</li>
            <li>Fill one quarter with whole grains or starchy vegetables</li>
            <li>Add a small serving of fruit and/or dairy</li>
            <li>Use healthy fats in small amounts</li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500 mt-4">
            <p className="font-body text-blue-700">
              <span className="font-semibold">Tip:</span> Small changes add up.
              Start by making one or two healthy swaps in your diet, such as
              choosing water instead of sugary drinks or adding an extra serving
              of vegetables to your meals.
            </p>
          </div>
        </div>
      ),
      icon: "🥗",
    },
    {
      title: "Special Diets",
      content: (
        <div className="space-y-4">
          <p className="font-body text-gray-600">
            Special diets may be necessary for managing certain health
            conditions. These diets should be tailored to individual needs and
            followed under the guidance of healthcare professionals.
          </p>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Diabetic Diet:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>Focus on consistent carbohydrate intake throughout the day</li>
            <li>Choose complex carbohydrates over simple sugars</li>
            <li>Include lean proteins and healthy fats with meals</li>
            <li>Monitor portion sizes and total carbohydrate intake</li>
            <li>Limit sugary beverages and desserts</li>
            <li>Eat regular meals and snacks to maintain blood sugar levels</li>
          </ul>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Heart-Healthy Diet:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>Limit saturated and trans fats</li>
            <li>Choose lean proteins and plant-based protein sources</li>
            <li>Increase intake of fruits, vegetables, and whole grains</li>
            <li>
              Include sources of omega-3 fatty acids (fatty fish, walnuts,
              flaxseeds)
            </li>
            <li>Reduce sodium intake (aim for less than 2,300 mg per day)</li>
            <li>Limit alcohol consumption</li>
          </ul>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Other Special Diets:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>
              <span className="font-semibold">Low-FODMAP Diet:</span> For
              irritable bowel syndrome
            </li>
            <li>
              <span className="font-semibold">Gluten-Free Diet:</span> For
              celiac disease and gluten sensitivity
            </li>
            <li>
              <span className="font-semibold">Low-Sodium Diet:</span> For
              hypertension and heart failure
            </li>
            <li>
              <span className="font-semibold">Renal Diet:</span> For kidney
              disease
            </li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500 mt-4">
            <p className="font-body text-blue-700">
              <span className="font-semibold">Important:</span> Special diets
              should be followed under the guidance of healthcare professionals.
              Our pharmacists can work with your healthcare team to help you
              understand and implement dietary recommendations for your specific
              health needs.
            </p>
          </div>
        </div>
      ),
      icon: "🍽️",
    },
    {
      title: "Meal Planning",
      content: (
        <div className="space-y-4">
          <p className="font-body text-gray-600">
            Meal planning can help you eat healthier, save time and money,
            reduce food waste, and manage health conditions more effectively.
            With a little preparation, meal planning can become a simple part of
            your routine.
          </p>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Benefits of Meal Planning:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>Ensures balanced nutrition throughout the week</li>
            <li>Reduces impulse eating and unhealthy food choices</li>
            <li>Saves money by reducing food waste and limiting takeout</li>
            <li>Saves time by reducing daily decision-making</li>
            <li>Helps with portion control and weight management</li>
            <li>Makes it easier to manage health conditions like diabetes</li>
          </ul>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Steps for Successful Meal Planning:
          </h4>
          <ol className="list-decimal pl-5 space-y-2 font-body text-gray-600">
            <li>
              Set aside time each week for planning (e.g., Sunday afternoon)
            </li>
            <li>Check your calendar to know how many meals you need to plan</li>
            <li>Take inventory of what you already have</li>
            <li>
              Plan meals based on nutritional needs, preferences, and schedule
            </li>
            <li>Create a shopping list organized by store sections</li>
            <li>Prep ingredients in advance when possible</li>
            <li>Use leftovers strategically to save time</li>
          </ol>

          <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500 mt-4">
            <p className="font-body text-blue-700">
              <span className="font-semibold">Tip:</span> Start small by
              planning just 2-3 days of meals at first. As you get more
              comfortable with the process, you can extend your planning to a
              full week. Consider using a meal planning app or template to stay
              organized.
            </p>
          </div>
        </div>
      ),
      icon: "📝",
    },
    {
      title: "Reading Nutrition Labels",
      content: (
        <div className="space-y-4">
          <p className="font-body text-gray-600">
            Understanding how to read nutrition labels is an essential skill for
            making informed food choices. Nutrition labels provide valuable
            information about the nutrient content of packaged foods.
          </p>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Key Components of a Nutrition Label:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>
              <span className="font-semibold">Serving Size:</span> All nutrition
              information is based on this amount
            </li>
            <li>
              <span className="font-semibold">Servings Per Container:</span> How
              many servings are in the entire package
            </li>
            <li>
              <span className="font-semibold">Calories:</span> The energy
              provided by one serving
            </li>
            <li>
              <span className="font-semibold">% Daily Value (%DV):</span> How
              much a nutrient contributes to a 2,000 calorie daily diet
            </li>
            <li>
              <span className="font-semibold">Nutrients:</span> Listed with
              amounts and %DV
            </li>
            <li>
              <span className="font-semibold">Ingredient List:</span> All
              ingredients listed in descending order by weight
            </li>
          </ul>

          <h4 className="font-title text-lg font-semibold text-gray-800">
            Tips for Using Nutrition Labels:
          </h4>
          <ul className="list-disc pl-5 space-y-2 font-body text-gray-600">
            <li>
              Check the serving size first and compare it to how much you
              actually eat
            </li>
            <li>
              Use %DV to determine if a food is high or low in a nutrient (5% or
              less is low, 20% or more is high)
            </li>
            <li>
              Look for foods that are lower in saturated fat, sodium, and added
              sugars
            </li>
            <li>
              Choose foods that are higher in dietary fiber, vitamin D, calcium,
              iron, and potassium
            </li>
            <li>
              Review the ingredient list for hidden sugars, unhealthy fats, and
              artificial additives
            </li>
            <li>Compare similar products to make healthier choices</li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500 mt-4">
            <p className="font-body text-blue-700">
              <span className="font-semibold">Sugar Alert:</span> Sugar can
              appear under many different names in ingredient lists, including
              high-fructose corn syrup, dextrose, maltose, sucrose, cane juice,
              fruit juice concentrate, and many others. If multiple forms of
              sugar appear in the ingredient list, the product is likely high in
              added sugars.
            </p>
          </div>
        </div>
      ),
      icon: "🏷️",
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
        <div className="flex flex-col xl:flex-row items-start gap-6">
          <div className="flex-1">
            <h2 className="font-title text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
              Nutrition Education
            </h2>
            <p className="font-body text-lg text-gray-600">
              Good nutrition is a cornerstone of health and can help prevent and
              manage many chronic conditions. Our nutrition resources provide
              practical guidance for making healthier food choices and
              understanding how nutrition impacts your overall health.
            </p>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 aspect-square rounded-xl overflow-hidden mb-6 xl:mb-0">
            <img
              src="/assets/PatientHub/nutrition_education_PH.png"
              alt="Nutrition Education"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <TabNavigation
            items={nutritionTopics}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {nutritionTopics[activeTab].content}
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
          <div className="text-3xl mb-4 md:mb-0">🍎</div>
          <div>
            <h3 className="font-title text-xl font-semibold mb-3 text-gray-800">
              Nutrition Resources
            </h3>
            <p className="font-body text-gray-600">
              For more personalized nutrition guidance, consider consulting with
              a registered dietitian. Our pharmacy can provide referrals to
              qualified nutrition professionals who can create customized meal
              plans and provide ongoing support for your specific health needs.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NutritionEducation;
