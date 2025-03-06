import React, { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "../../../components/utils/AnimationComponents";

/**
 * DeliveryChecker Component
 * Allows users to check if delivery is available to their zip code
 */
const DeliveryChecker: React.FC = () => {
  const [zipCode, setZipCode] = useState("");
  const [result, setResult] = useState<null | boolean>(null);

  // List of valid zip codes
  const validZipCodes = [
    90024, 90025, 90026, 90027, 90028, 90029, 90031, 90032, 90034, 90035, 90036,
    90038, 90039, 90041, 90042, 90046, 90048, 90049, 90064, 90065, 90066, 90068,
    90069, 90077, 90094, 91001, 91011, 91020, 91030, 91101, 91103, 91104, 91105,
    91106, 91107, 91108, 91201, 91202, 91203, 91204, 91205, 91206, 91207, 91208,
    91214, 91304, 91306, 91307, 91311, 91316, 91324, 91325, 91326, 91330, 91331,
    91335, 91340, 91342, 91343, 91344, 91345, 91352, 91356, 91364, 91367, 91381,
    91383, 91384, 91387, 91390, 91401, 91402, 91403, 91405, 91406, 91411, 91423,
    91436, 91501, 91502, 91504, 91505, 91506, 91601, 91602, 91604, 91605, 91606,
    91607, 91608,
  ];

  const checkDelivery = () => {
    if (!zipCode.trim()) return;

    // Add console log for debugging
    console.log("Checking zip code:", zipCode);

    const isValid = validZipCodes.includes(Number(zipCode));
    console.log("Is valid:", isValid);

    setResult(isValid);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      checkDelivery();
    }
  };

  return (
    <FadeIn>
      <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
        <h3 className="heading-3 text-primary mb-4 text-center font-bold">
          Check Delivery Availability
        </h3>
        <p className="body-regular text-gray-700 mb-6">
          Enter your zip code to see if we can deliver to your location.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value.replace(/[^0-9]/g, ""))}
            onKeyDown={handleKeyDown}
            placeholder="Enter zip code"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary flex-grow"
            maxLength={5}
            aria-label="Zip code"
          />
          <motion.button
            onClick={checkDelivery}
            className="btn-primary whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Check Availability
          </motion.button>
        </div>

        {/* Always show result container with more prominent styling */}
        <div className="mt-6 p-4 rounded-md border-2 border-gray-300 bg-gray-50">
          {result === null ? (
            <p className="text-gray-500 text-center">
              Enter your zip code and click "Check Availability" to see if we
              deliver to your area.
            </p>
          ) : result ? (
            <div className="bg-green-100 p-4 rounded-md border border-green-300">
              <p className="text-green-700 font-medium text-center text-lg">
                Good news! We deliver to your area. 🎉
              </p>
            </div>
          ) : (
            <div className="bg-amber-50 p-4 rounded-md border border-amber-200">
              <p className="text-gray-700 font-medium mb-2 text-center">
                We don't currently deliver to your area.
              </p>
              <p className="text-center">
                Please call us at{" "}
                <a
                  href="tel:123-456-7890"
                  className="text-primary hover:underline font-medium"
                >
                  123-456-7890
                </a>{" "}
                for more information about alternative options.
              </p>
            </div>
          )}
        </div>
      </div>
    </FadeIn>
  );
};

export default DeliveryChecker;
