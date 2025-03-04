import React from "react";

/**
 * SVG Icon props
 */
interface SvgIconProps {
  className?: string;
  size?: number;
  color?: string;
}

/**
 * Medication Sync Icon - Represents medication synchronization
 */
export const MedicationSyncIcon: React.FC<SvgIconProps> = ({
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
      <circle cx="32" cy="32" r="30" stroke={color} strokeWidth="2" />
      <path
        d="M32 12V32L44 44"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M32 12V20"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M44 32H52"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M32 44V52"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M20 32H12"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="32" cy="32" r="4" fill={color} />
    </svg>
  );
};

/**
 * DNA Testing Icon - Represents PGx testing
 */
export const DnaTestingIcon: React.FC<SvgIconProps> = ({
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
      <path
        d="M16 8C16 8 32 16 48 8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 16C16 16 32 24 48 16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 24C16 24 32 32 48 24"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 32C16 32 32 40 48 32"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 40C16 40 32 48 48 40"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 48C16 48 32 56 48 48"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M16 8V48" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M48 8V48" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="20" r="2" fill={color} />
      <circle cx="40" cy="28" r="2" fill={color} />
      <circle cx="24" cy="36" r="2" fill={color} />
      <circle cx="40" cy="44" r="2" fill={color} />
    </svg>
  );
};

/**
 * Travel Health Icon - Represents travel health consultation
 */
export const TravelHealthIcon: React.FC<SvgIconProps> = ({
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
      <circle cx="32" cy="32" r="24" stroke={color} strokeWidth="2" />
      <path d="M32 8V12" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path
        d="M32 52V56"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M56 32H52"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M12 32H8" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path
        d="M48.9706 15.0294L46.1422 17.8579"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M17.8579 46.1421L15.0294 48.9706"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M48.9706 48.9706L46.1422 46.1421"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M17.8579 17.8579L15.0294 15.0294"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 20L38 32H26L32 44"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

/**
 * Personalized Care Icon
 */
export const PersonalizedCareIcon: React.FC<SvgIconProps> = ({
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
      <circle cx="32" cy="20" r="12" stroke={color} strokeWidth="2" />
      <path
        d="M12 56C12 44.9543 20.9543 36 32 36C43.0457 36 52 44.9543 52 56"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 36V48"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 44H40"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

/**
 * Expert Guidance Icon
 */
export const ExpertGuidanceIcon: React.FC<SvgIconProps> = ({
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
      <circle cx="24" cy="24" r="12" stroke={color} strokeWidth="2" />
      <path
        d="M24 16V24H32"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 52C12 45.3726 17.3726 40 24 40C30.6274 40 36 45.3726 36 52"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M36 20H52"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M36 28H48"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M40 36H52"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M44 44H52"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

/**
 * Innovation Icon
 */
export const InnovationIcon: React.FC<SvgIconProps> = ({
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
      <path
        d="M32 12V20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 44V52"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M52 32H44"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 32H12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M46.1421 17.8579L40.4853 23.5147"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M23.5147 40.4853L17.8579 46.1421"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M46.1421 46.1421L40.4853 40.4853"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M23.5147 23.5147L17.8579 17.8579"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="32" cy="32" r="8" stroke={color} strokeWidth="2" />
      <circle cx="32" cy="32" r="2" fill={color} />
    </svg>
  );
};

/**
 * Convenience Icon
 */
export const ConvenienceIcon: React.FC<SvgIconProps> = ({
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
      <path
        d="M12 20H52V48C52 50.2091 50.2091 52 48 52H16C13.7909 52 12 50.2091 12 48V20Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M20 20V16C20 13.7909 21.7909 12 24 12H40C42.2091 12 44 13.7909 44 16V20"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M32 32L32 40"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 36L40 36"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

/**
 * Collaborative Care Icon
 */
export const CollaborativeCareIcon: React.FC<SvgIconProps> = ({
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
      <circle cx="20" cy="20" r="8" stroke={color} strokeWidth="2" />
      <circle cx="44" cy="20" r="8" stroke={color} strokeWidth="2" />
      <circle cx="32" cy="44" r="8" stroke={color} strokeWidth="2" />
      <path
        d="M20 28C20 28 24 36 32 36"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M44 28C44 28 40 36 32 36"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

/**
 * Pharmacy Services Icon
 */
export const PharmacyServicesIcon: React.FC<SvgIconProps> = ({
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
        x="16"
        y="12"
        width="32"
        height="40"
        rx="4"
        stroke={color}
        strokeWidth="2"
      />
      <path d="M24 12V8" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M40 12V8" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path
        d="M24 24H40"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 32H40"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 40H32"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

/**
 * Clinical Services Icon
 */
export const ClinicalServicesIcon: React.FC<SvgIconProps> = ({
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
        d="M28 24H36"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 20V28"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="32" cy="40" r="8" stroke={color} strokeWidth="2" />
    </svg>
  );
};

/**
 * Wellness Services Icon
 */
export const WellnessServicesIcon: React.FC<SvgIconProps> = ({
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
      <path
        d="M32 16C32 16 20 28 20 36C20 44 32 52 32 52C32 52 44 44 44 36C44 28 32 16 32 16Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 16C32 16 44 28 44 36C44 44 32 52 32 52"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 28V40"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M26 34H38"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
