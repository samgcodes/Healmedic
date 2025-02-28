import { useState, useEffect } from "react";

/**
 * Custom hook for responsive design
 *
 * This hook allows components to respond to media query changes,
 * making it easier to implement responsive behavior.
 *
 * @param {string} query - The media query to match (e.g., "(min-width: 768px)")
 * @returns {boolean} - Whether the media query matches
 *
 * @example
 * // Usage in a component
 * const isMobile = useMediaQuery("(max-width: 767px)");
 * const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
 * const isDesktop = useMediaQuery("(min-width: 1024px)");
 *
 * // Then use the boolean values to conditionally render or apply styles
 * return (
 *   <div>
 *     {isMobile && <MobileComponent />}
 *     {isTablet && <TabletComponent />}
 *     {isDesktop && <DesktopComponent />}
 *   </div>
 * );
 */
const useMediaQuery = (query: string): boolean => {
  // Initialize with the current match state
  const getMatches = (mediaQuery: string): boolean => {
    // For SSR, always return false initially
    if (typeof window === "undefined") {
      return false;
    }
    return window.matchMedia(mediaQuery).matches;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    // Ensure we're in the browser environment
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(query);

    // Update the state initially and on changes
    const updateMatches = (): void => {
      setMatches(mediaQuery.matches);
    };

    // Call once to set the initial value
    updateMatches();

    // Add the listener
    if (mediaQuery.addEventListener) {
      // Modern browsers
      mediaQuery.addEventListener("change", updateMatches);
      return () => mediaQuery.removeEventListener("change", updateMatches);
    } else {
      // Older browsers (IE, Edge < 16)
      mediaQuery.addListener(updateMatches);
      return () => mediaQuery.removeListener(updateMatches);
    }
  }, [query]);

  return matches;
};

/**
 * Breakpoint types
 */
type BreakpointKey =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "mobile"
  | "tablet"
  | "desktop"
  | "portrait"
  | "landscape";

/**
 * Predefined breakpoints for common screen sizes
 */
export const breakpoints: Record<BreakpointKey, string> = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
  // Mobile-first (max-width) breakpoints
  mobile: "(max-width: 767px)",
  tablet: "(min-width: 768px) and (max-width: 1023px)",
  desktop: "(min-width: 1024px)",
  // Orientation
  portrait: "(orientation: portrait)",
  landscape: "(orientation: landscape)",
};

export default useMediaQuery;
