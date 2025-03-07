import React, { useState } from "react";
import { motion } from "framer-motion";

const BMICalculator: React.FC = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("metric"); // metric or imperial
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      return;
    }

    let bmiValue: number;
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    if (unit === "metric") {
      // BMI = weight(kg) / height(m)²
      bmiValue = weightNum / Math.pow(heightNum / 100, 2);
    } else {
      // BMI = 703 × weight(lb) / height(in)²
      bmiValue = (703 * weightNum) / Math.pow(heightNum, 2);
    }

    setBmi(parseFloat(bmiValue.toFixed(1)));

    // Determine BMI category
    if (bmiValue < 18.5) {
      setCategory("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setCategory("Normal weight");
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setCategory("Overweight");
    } else {
      setCategory("Obesity");
    }
  };

  const resetCalculator = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setCategory("");
  };

  const getHeightPlaceholder = () => {
    return unit === "metric" ? "Height (cm)" : "Height (inches)";
  };

  const getWeightPlaceholder = () => {
    return unit === "metric" ? "Weight (kg)" : "Weight (lbs)";
  };

  const getBMICategoryColor = () => {
    if (!category) return "bg-gray-100";

    switch (category) {
      case "Underweight":
        return "bg-blue-100 text-blue-800";
      case "Normal weight":
        return "bg-green-100 text-green-800";
      case "Overweight":
        return "bg-yellow-100 text-yellow-800";
      case "Obesity":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="mb-6">
        <div className="flex justify-center space-x-4 mb-6">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-primary"
              name="unit"
              value="metric"
              checked={unit === "metric"}
              onChange={() => setUnit("metric")}
            />
            <span className="ml-2 font-body text-gray-700">Metric (cm/kg)</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-primary"
              name="unit"
              value="imperial"
              checked={unit === "imperial"}
              onChange={() => setUnit("imperial")}
            />
            <span className="ml-2 font-body text-gray-700">
              Imperial (in/lbs)
            </span>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="height"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {getHeightPlaceholder()}
            </label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder={getHeightPlaceholder()}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              min="0"
            />
          </div>
          <div>
            <label
              htmlFor="weight"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {getWeightPlaceholder()}
            </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder={getWeightPlaceholder()}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              min="0"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={calculateBMI}
            className="flex-1 bg-primary text-white font-body px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300"
          >
            Calculate BMI
          </button>
          <button
            onClick={resetCalculator}
            className="flex-1 bg-gray-200 text-gray-700 font-body px-4 py-2 rounded-md hover:bg-gray-300 transition-colors duration-300"
          >
            Reset
          </button>
        </div>
      </div>

      {bmi !== null && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-lg overflow-hidden shadow-md"
        >
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h3 className="font-title text-lg font-semibold text-gray-800">
              Your Results
            </h3>
          </div>
          <div className="px-6 py-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-body text-gray-600">Your BMI:</span>
              <span className="font-title text-xl font-bold text-gray-800">
                {bmi}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-body text-gray-600">Category:</span>
              <span
                className={`font-body font-medium px-3 py-1 rounded-full ${getBMICategoryColor()}`}
              >
                {category}
              </span>
            </div>
          </div>
          <div className="px-6 py-4 bg-gray-50 text-sm text-gray-600">
            <p className="mb-2">BMI Categories:</p>
            <ul className="space-y-1">
              <li>• Underweight: BMI less than 18.5</li>
              <li>• Normal weight: BMI 18.5 to 24.9</li>
              <li>• Overweight: BMI 25 to 29.9</li>
              <li>• Obesity: BMI 30 or greater</li>
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BMICalculator;
