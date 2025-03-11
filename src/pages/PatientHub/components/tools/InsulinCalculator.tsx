import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const InsulinCalculator: React.FC = () => {
  const [calculationType, setCalculationType] = useState("mealtime");
  const [carbAmount, setCarbAmount] = useState("");
  const [carbRatio, setCarbRatio] = useState("");
  const [currentBG, setCurrentBG] = useState("");
  const [targetBG, setTargetBG] = useState("");
  const [correctionFactor, setCorrectionFactor] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Animation for results
  useEffect(() => {
    if (result !== null && resultsRef.current) {
      // Set initial state
      gsap.set(resultsRef.current, { opacity: 0, y: 20 });

      // Animate in
      gsap.to(resultsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [result]);

  const calculateInsulin = () => {
    if (calculationType === "mealtime") {
      if (!carbAmount || !carbRatio) {
        return;
      }

      const carbInsulin = parseFloat(carbAmount) / parseFloat(carbRatio);

      if (currentBG && targetBG && correctionFactor) {
        const bgDifference = parseFloat(currentBG) - parseFloat(targetBG);
        const correctionInsulin =
          bgDifference > 0 ? bgDifference / parseFloat(correctionFactor) : 0;
        setResult(parseFloat((carbInsulin + correctionInsulin).toFixed(1)));
      } else {
        setResult(parseFloat(carbInsulin.toFixed(1)));
      }
    } else {
      if (!currentBG || !targetBG || !correctionFactor) {
        return;
      }

      const bgDifference = parseFloat(currentBG) - parseFloat(targetBG);
      const correctionInsulin =
        bgDifference > 0 ? bgDifference / parseFloat(correctionFactor) : 0;
      setResult(parseFloat(correctionInsulin.toFixed(1)));
    }
  };

  const resetCalculator = () => {
    setCarbAmount("");
    setCarbRatio("");
    setCurrentBG("");
    setTargetBG("");
    setCorrectionFactor("");
    setResult(null);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="mb-6">
        <div className="flex justify-center space-x-4 mb-6">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-primary"
              name="calculationType"
              value="mealtime"
              checked={calculationType === "mealtime"}
              onChange={() => setCalculationType("mealtime")}
            />
            <span className="ml-2 font-body text-gray-700">
              Mealtime Insulin
            </span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-primary"
              name="calculationType"
              value="correction"
              checked={calculationType === "correction"}
              onChange={() => setCalculationType("correction")}
            />
            <span className="ml-2 font-body text-gray-700">
              Correction Insulin
            </span>
          </label>
        </div>

        <div className="space-y-4">
          {calculationType === "mealtime" && (
            <>
              <div>
                <label
                  htmlFor="carbAmount"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Carbohydrates (grams)
                </label>
                <input
                  type="number"
                  id="carbAmount"
                  value={carbAmount}
                  onChange={(e) => setCarbAmount(e.target.value)}
                  placeholder="Enter carbohydrates in grams"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  min="0"
                />
              </div>
              <div>
                <label
                  htmlFor="carbRatio"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Insulin-to-Carb Ratio (1 unit per X grams)
                </label>
                <input
                  type="number"
                  id="carbRatio"
                  value={carbRatio}
                  onChange={(e) => setCarbRatio(e.target.value)}
                  placeholder="Enter your insulin-to-carb ratio"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  min="1"
                />
              </div>
            </>
          )}

          <div className="border-t border-gray-200 pt-4 mt-4">
            <p className="text-sm text-gray-600 mb-4">
              {calculationType === "mealtime"
                ? "Optional: Add correction dose calculation"
                : "Correction dose calculation"}
            </p>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="currentBG"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Current Blood Glucose (mg/dL)
                </label>
                <input
                  type="number"
                  id="currentBG"
                  value={currentBG}
                  onChange={(e) => setCurrentBG(e.target.value)}
                  placeholder="Enter current blood glucose"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  min="0"
                />
              </div>
              <div>
                <label
                  htmlFor="targetBG"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Target Blood Glucose (mg/dL)
                </label>
                <input
                  type="number"
                  id="targetBG"
                  value={targetBG}
                  onChange={(e) => setTargetBG(e.target.value)}
                  placeholder="Enter target blood glucose"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  min="0"
                />
              </div>
              <div>
                <label
                  htmlFor="correctionFactor"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Correction Factor (1 unit lowers BG by X mg/dL)
                </label>
                <input
                  type="number"
                  id="correctionFactor"
                  value={correctionFactor}
                  onChange={(e) => setCorrectionFactor(e.target.value)}
                  placeholder="Enter your correction factor"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  min="1"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 mt-6">
          <button
            onClick={calculateInsulin}
            className="flex-1 bg-primary text-white font-body px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300"
          >
            Calculate Insulin
          </button>
          <button
            onClick={resetCalculator}
            className="flex-1 bg-gray-200 text-gray-700 font-body px-4 py-2 rounded-md hover:bg-gray-300 transition-colors duration-300"
          >
            Reset
          </button>
        </div>
      </div>

      {result !== null && (
        <div ref={resultsRef} className="rounded-lg overflow-hidden shadow-md">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h3 className="font-title text-lg font-semibold text-gray-800">
              Insulin Dose Result
            </h3>
          </div>
          <div className="px-6 py-4">
            <div className="flex justify-between items-center">
              <span className="font-body text-gray-600">Recommended dose:</span>
              <span className="font-title text-xl font-bold text-gray-800">
                {result} units
              </span>
            </div>
            {calculationType === "mealtime" && carbAmount && carbRatio && (
              <div className="mt-2 text-sm text-gray-600">
                <p>
                  • Carb calculation:{" "}
                  {(parseFloat(carbAmount) / parseFloat(carbRatio)).toFixed(1)}{" "}
                  units
                </p>
                {currentBG &&
                  targetBG &&
                  correctionFactor &&
                  parseFloat(currentBG) > parseFloat(targetBG) && (
                    <p>
                      • Correction:{" "}
                      {(
                        (parseFloat(currentBG) - parseFloat(targetBG)) /
                        parseFloat(correctionFactor)
                      ).toFixed(1)}{" "}
                      units
                    </p>
                  )}
              </div>
            )}
          </div>
          <div className="px-6 py-4 bg-gray-50 text-sm text-gray-600">
            <p className="font-medium text-red-600 mb-2">
              Important Disclaimer:
            </p>
            <p>
              This calculator provides an estimate only. Always consult with
              your healthcare provider about your insulin dosing regimen. Never
              adjust your insulin regimen without medical supervision.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsulinCalculator;
