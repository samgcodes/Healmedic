import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface PercentageBarProps {
  percentage: number;
  mainColor: string;
  delay: number;
}

const PercentageBar: React.FC<PercentageBarProps> = ({
  percentage,
  mainColor,
  delay,
}) => {
  const percentageTextRef = useRef<HTMLDivElement>(null);
  const percentageBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const percentageText = percentageTextRef.current;
    const percentageBar = percentageBarRef.current;

    if (!percentageText || !percentageBar) return;

    // Set initial state
    gsap.set(percentageBar, { width: 0 });

    // Create a timeline for the animations
    const tl = gsap.timeline({ delay: delay * 0.5 });

    // Animate the percentage bar
    tl.to(percentageBar, {
      width: `${percentage}%`,
      duration: 0.8,
      ease: "power2.out",
    });

    // Animate the percentage text counter
    let counter = { value: 0 };
    tl.to(
      counter,
      {
        value: percentage,
        duration: 1,
        ease: "power2.out",
        onUpdate: function () {
          if (percentageText) {
            percentageText.textContent = `${Math.round(counter.value)}%`;
          }
        },
      },
      "<"
    ); // Start at the same time as the bar animation

    return () => {
      tl.kill();
    };
  }, [percentage, delay]);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <div
        ref={percentageTextRef}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2"
      >
        0%
      </div>
      <div className="w-full h-4 sm:h-5 lg:h-6 bg-gray-100 rounded-full overflow-hidden">
        <div
          ref={percentageBarRef}
          className="h-full rounded-full"
          style={{ backgroundColor: mainColor, width: 0 }}
        />
      </div>
      <div className="w-full flex justify-between mt-1 text-[10px] sm:text-xs text-gray-500">
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
    </div>
  );
};

export default PercentageBar;
