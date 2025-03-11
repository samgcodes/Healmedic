import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

interface TimeChartProps {
  delay: number;
}

const TimeChart: React.FC<TimeChartProps> = ({ delay }) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const totalValueRef = useRef<HTMLDivElement>(null);
  const annualTotalRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize animation
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimatedValue((prev) => {
          if (prev < 100) {
            return prev + 2;
          }
          clearInterval(interval);
          return 100;
        });
      }, 10);

      return () => clearInterval(interval);
    }, delay * 500);

    return () => clearTimeout(timer);
  }, [delay]);

  // Set up GSAP animations
  useEffect(() => {
    // Animate the main time savings number
    if (totalValueRef.current) {
      gsap.fromTo(
        totalValueRef.current,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          delay: delay,
          ease: "back.out(1.7)",
        }
      );
    }

    // Animate the categories
    if (categoryRefs.current.filter(Boolean).length > 0) {
      categoryRefs.current.filter(Boolean).forEach((category, index) => {
        if (!category) return;

        gsap.fromTo(
          category,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            delay: delay + 0.1 + index * 0.1,
            ease: "power2.out",
          }
        );
      });
    }

    // Animate the annual total
    if (annualTotalRef.current) {
      gsap.fromTo(
        annualTotalRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          delay: delay + 0.6,
          ease: "power2.out",
        }
      );
    }
  }, [delay]);

  // Time savings data
  const categories = [
    { name: "Patient Consultations", hours: 2.0, icon: "👨‍⚕️" },
    { name: "Medication Reviews", hours: 1.5, icon: "💊" },
    { name: "Documentation", hours: 1.0, icon: "📝" },
    { name: "Follow-ups", hours: 1.3, icon: "📞" },
  ];

  const totalHours = categories.reduce(
    (sum, category) => sum + category.hours,
    0
  );
  const animatedTotal = ((totalHours * animatedValue) / 100).toFixed(1);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Main time savings number */}
      <div className="text-center mb-3">
        <div ref={totalValueRef} className="text-4xl font-bold text-primary">
          {animatedTotal}
        </div>
        <div className="text-sm text-gray-600 font-medium">
          hours saved weekly
        </div>
      </div>

      {/* Categories */}
      <div className="w-full grid grid-cols-2 gap-2">
        {categories.map((category, index) => (
          <div
            key={category.name}
            ref={(el) => (categoryRefs.current[index] = el)}
            className="flex items-center bg-gray-50 rounded-lg p-2"
          >
            <span className="text-lg mr-2">{category.icon}</span>
            <div className="flex-1">
              <div className="text-xs font-medium text-gray-700">
                {category.name}
              </div>
              <div className="text-xs text-primary font-semibold">
                {((category.hours * animatedValue) / 100).toFixed(1)} hrs
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Annual total */}
      <div
        ref={annualTotalRef}
        className="mt-3 text-xs text-gray-500 text-center"
      >
        That's over 300 hours saved annually!
      </div>
    </div>
  );
};

export default TimeChart;
