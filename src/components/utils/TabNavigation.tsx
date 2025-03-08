import React, { useState, useRef, useEffect } from "react";
// No need to import motion since we removed the scrollbar

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
  // We only need to track if we should show arrows, not the actual values
  const [, setScrollPosition] = useState(0);
  const [, setScrollWidth] = useState(0);
  const [, setContainerWidth] = useState(0);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  // These state setters are used in the checkArrows function
  // but we don't need the actual state values anymore

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
            onClick={() => setActiveTab(index)}
            className={`py-4 px-6 font-body text-sm md:text-base whitespace-nowrap flex items-center space-x-2 transition-all duration-200 ${
              activeTab === index
                ? "text-primary border-b-2 border-primary font-medium bg-primary/5"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
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
