import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import useMediaQuery, { breakpoints } from "../../hooks/useMediaQuery";

interface TabItem {
  title: string;
  icon: string;
  content?: React.ReactNode;
  component?: React.ReactNode;
  description?: string;
}

interface TabNavigationProps {
  items: TabItem[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  items,
  activeTab,
  setActiveTab,
}) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [previousActiveTab, setPreviousActiveTab] = useState(activeTab);
  // We only need to track if we should show arrows, not the actual values
  const [, setScrollPosition] = useState(0);
  const [, setScrollWidth] = useState(0);
  const [, setContainerWidth] = useState(0);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isMobile = useMediaQuery(breakpoints.mobile);

  // Initialize tab refs array
  useEffect(() => {
    tabRefs.current = tabRefs.current.slice(0, items.length);
  }, [items]);

  // Check if arrows should be shown
  useEffect(() => {
    const checkArrows = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;

        setScrollPosition(scrollLeft);
        setScrollWidth(scrollWidth);
        setContainerWidth(clientWidth);

        // Show left arrow if not at the beginning
        setShowLeftArrow(scrollLeft > 0);

        // Show right arrow if not at the end
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5); // 5px buffer
      }
    };

    // Initial check
    checkArrows();

    // Add scroll event listener
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkArrows);
    }

    // Cleanup
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", checkArrows);
      }
    };
  }, []);

  // Handle scroll actions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  // Animate the active tab indicator
  useEffect(() => {
    if (activeTab !== previousActiveTab) {
      // Scroll the active tab into view
      if (tabRefs.current[activeTab]) {
        const tabElement = tabRefs.current[activeTab];
        if (tabElement && scrollContainerRef.current) {
          const scrollContainer = scrollContainerRef.current;
          const tabRect = tabElement.getBoundingClientRect();
          const containerRect = scrollContainer.getBoundingClientRect();

          // Calculate if the tab is partially or fully outside the visible area
          const isTabLeftOfView = tabRect.left < containerRect.left;
          const isTabRightOfView = tabRect.right > containerRect.right;

          if (isTabLeftOfView) {
            // Scroll to make the tab visible on the left
            const scrollLeft =
              scrollContainer.scrollLeft -
              (containerRect.left - tabRect.left) -
              16;
            scrollContainer.scrollTo({ left: scrollLeft, behavior: "smooth" });
          } else if (isTabRightOfView) {
            // Scroll to make the tab visible on the right
            const scrollLeft =
              scrollContainer.scrollLeft +
              (tabRect.right - containerRect.right) +
              16;
            scrollContainer.scrollTo({ left: scrollLeft, behavior: "smooth" });
          }
        }
      }

      // Animate the tab transition
      const duration = isMobile ? 0.2 : 0.3;

      // Animate the previously active tab
      if (tabRefs.current[previousActiveTab]) {
        gsap.to(tabRefs.current[previousActiveTab], {
          scale: 1,
          duration: duration,
          ease: "power2.out",
        });
      }

      // Animate the newly active tab
      if (tabRefs.current[activeTab]) {
        gsap.fromTo(
          tabRefs.current[activeTab],
          { scale: 0.95 },
          {
            scale: 1,
            duration: duration,
            ease: "power2.out",
          }
        );

        // Pulse animation for the icon
        const iconElement =
          tabRefs.current[activeTab]?.querySelector(".tab-icon");
        if (iconElement) {
          gsap.fromTo(
            iconElement,
            { scale: 1 },
            {
              scale: 1.2,
              duration: duration * 0.8,
              yoyo: true,
              repeat: 1,
              ease: "power2.inOut",
            }
          );
        }
      }

      setPreviousActiveTab(activeTab);
    }
  }, [activeTab, previousActiveTab, isMobile]);

  // Handle tab click with animation
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="relative">
      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary/90 hover:bg-primary rounded-full p-1.5 shadow-lg text-white transition-all duration-200 ml-0.5"
          aria-label="Scroll left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 md:h-5 md:w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Tabs */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide relative"
      >
        {items.map((item, index) => (
          <button
            key={item.title}
            ref={(el) => (tabRefs.current[index] = el)}
            onClick={() => handleTabClick(index)}
            className={`py-4 px-6 font-body text-sm md:text-base whitespace-nowrap flex items-center space-x-2 transition-all duration-200 ${
              activeTab === index
                ? "text-primary border-b-2 border-primary font-medium bg-primary/5"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            <span className="text-xl tab-icon">{item.icon}</span>
            <span>{item.title}</span>
          </button>
        ))}
      </div>

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary/90 hover:bg-primary rounded-full p-1.5 shadow-lg text-white transition-all duration-200 mr-0.5"
          aria-label="Scroll right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 md:h-5 md:w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      {/* No scrollbar as per user request */}
    </div>
  );
};

export default TabNavigation;
