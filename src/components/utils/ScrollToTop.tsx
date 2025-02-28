import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop props
 */
interface ScrollToTopProps {
  /**
   * The scroll behavior
   * - "auto": Instant scroll (default)
   * - "smooth": Smooth scroll animation
   */
  behavior?: "auto" | "smooth";
}

/**
 * ScrollToTop component
 *
 * Automatically scrolls to the top of the page when the route changes.
 * This component should be placed near the top of your component tree,
 * typically in App.tsx.
 *
 * @returns {null} This component doesn't render anything
 */
const ScrollToTop: React.FC<ScrollToTopProps> = ({ behavior = "auto" }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior, // "auto" or "smooth"
    });
  }, [pathname, behavior]);

  // This component doesn't render anything
  return null;
};

export default ScrollToTop;
