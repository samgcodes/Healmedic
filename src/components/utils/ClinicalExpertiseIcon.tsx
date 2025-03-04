import React from "react";

interface SvgIconProps {
  className?: string;
  size?: number;
  color?: string;
}

/**
 * Clinical Expertise Icon
 */
export const ClinicalExpertiseIcon: React.FC<SvgIconProps> = ({
  className = "",
  size = 64,
  color = "#9a77f6",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="12"
        y="12"
        width="40"
        height="40"
        rx="4"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M32 20V44"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 32H44"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="32"
        cy="32"
        r="16"
        stroke={color}
        strokeWidth="2"
        strokeDasharray="4 4"
      />
    </svg>
  );
};

export default ClinicalExpertiseIcon;
