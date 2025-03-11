import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useMediaQuery, { breakpoints } from "../../../hooks/useMediaQuery";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export type MenuSection =
  | "home"
  | "disease-management"
  | "medication-education"
  | "vitamins-supplements"
  | "nutrition-education"
  | "patient-tools";

interface SideMenuProps {
  activeSection: MenuSection;
  setActiveSection: (section: MenuSection) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);
  const dropdownOverlayRef = useRef<HTMLDivElement>(null);
  const desktopIndicatorRef = useRef<HTMLDivElement>(null);
  const mobileIndicatorRef = useRef<HTMLDivElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const desktopMenuItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const isMobile = useMediaQuery(breakpoints.mobile);

  const menuItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "disease-management", label: "Disease Management", icon: "🏥" },
    { id: "medication-education", label: "Medication Education", icon: "💊" },
    { id: "vitamins-supplements", label: "Vitamins & Supplements", icon: "🌿" },
    { id: "nutrition-education", label: "Nutrition Education", icon: "🥗" },
    { id: "patient-tools", label: "Patient Tools", icon: "🔧" },
  ];

  // Find the active menu item
  const activeItem =
    menuItems.find((item) => item.id === activeSection) || menuItems[0];

  // Initialize desktop menu items refs array
  useEffect(() => {
    desktopMenuItemsRef.current = desktopMenuItemsRef.current.slice(
      0,
      menuItems.length
    );
  }, [menuItems.length]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Dropdown button hover and tap animations
  useEffect(() => {
    if (dropdownButtonRef.current) {
      const button = dropdownButtonRef.current;

      // Adjust animation duration for mobile
      const duration = isMobile ? 0.15 : 0.2;

      // Hover animation
      const hoverEnter = () => {
        gsap.to(button, {
          scale: 1.02,
          duration: duration,
          ease: "power2.out",
        });
      };

      const hoverLeave = () => {
        if (!button.matches(":active")) {
          gsap.to(button, {
            scale: 1,
            duration: duration,
            ease: "power2.out",
          });
        }
      };

      // Tap animation
      const tapStart = () => {
        gsap.to(button, {
          scale: 0.98,
          duration: duration * 0.5,
          ease: "power2.in",
        });
      };

      const tapEnd = () => {
        gsap.to(button, {
          scale: 1,
          duration: duration * 0.5,
          ease: "power2.out",
        });
      };

      button.addEventListener("mouseenter", hoverEnter);
      button.addEventListener("mouseleave", hoverLeave);
      button.addEventListener("mousedown", tapStart);
      button.addEventListener("mouseup", tapEnd);
      button.addEventListener("mouseleave", tapEnd);

      return () => {
        button.removeEventListener("mouseenter", hoverEnter);
        button.removeEventListener("mouseleave", hoverLeave);
        button.removeEventListener("mousedown", tapStart);
        button.removeEventListener("mouseup", tapEnd);
        button.removeEventListener("mouseleave", tapEnd);
      };
    }
  }, [isMobile]);

  // Dropdown open/close animations
  useEffect(() => {
    if (dropdownMenuRef.current && dropdownOverlayRef.current) {
      // Adjust animation duration for mobile
      const duration = isMobile ? 0.2 : 0.3;

      if (isDropdownOpen) {
        // Show overlay
        gsap.to(dropdownOverlayRef.current, {
          opacity: 1,
          duration: duration * 0.7,
          display: "block",
          ease: "power2.out",
        });

        // Show dropdown menu
        gsap.fromTo(
          dropdownMenuRef.current,
          { opacity: 0, y: -20, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: duration,
            ease: "back.out(1.7)",
            display: "block",
          }
        );

        // Animate dropdown arrow
        const arrowElement = dropdownButtonRef.current?.querySelector("svg");
        if (arrowElement) {
          gsap.to(arrowElement, {
            rotation: 180,
            duration: duration,
            ease: "back.out(1.7)",
          });
        }

        // Animate menu items with stagger
        if (mobileMenuItemsRef.current.length > 0) {
          gsap.fromTo(
            mobileMenuItemsRef.current,
            { opacity: 0, x: -10 },
            {
              opacity: 1,
              x: 0,
              duration: duration * 0.7,
              stagger: 0.05,
              ease: "power2.out",
            }
          );
        }
      } else {
        // Hide overlay
        gsap.to(dropdownOverlayRef.current, {
          opacity: 0,
          duration: duration * 0.7,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(dropdownOverlayRef.current, { display: "none" });
          },
        });

        // Hide dropdown menu
        gsap.to(dropdownMenuRef.current, {
          opacity: 0,
          y: -20,
          scale: 0.95,
          duration: duration * 0.7,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(dropdownMenuRef.current, { display: "none" });
          },
        });

        // Animate dropdown arrow
        const arrowElement = dropdownButtonRef.current?.querySelector("svg");
        if (arrowElement) {
          gsap.to(arrowElement, {
            rotation: 0,
            duration: duration,
            ease: "back.out(1.7)",
          });
        }
      }
    }
  }, [isDropdownOpen, isMobile]);

  // Handle menu item selection
  const handleMenuItemClick = (section: MenuSection) => {
    setActiveSection(section);
    setIsDropdownOpen(false);
  };

  // Animate active indicator when activeSection changes
  useEffect(() => {
    // Adjust animation duration for mobile
    const duration = isMobile ? 0.2 : 0.3;

    // For desktop menu
    if (desktopIndicatorRef.current) {
      const activeDesktopButton = document.querySelector(
        `.desktop-menu-item[data-section="${activeSection}"]`
      );
      if (activeDesktopButton) {
        const indicator = desktopIndicatorRef.current;

        // First make it visible if it wasn't
        gsap.to(indicator, {
          opacity: 1,
          duration: duration * 0.7,
          ease: "power2.out",
        });

        // Then move it to the new position
        const buttonRect = activeDesktopButton.getBoundingClientRect();
        const indicatorParent = indicator.parentElement;

        if (indicatorParent) {
          const parentRect = indicatorParent.getBoundingClientRect();
          const relativeTop =
            buttonRect.top -
            parentRect.top +
            buttonRect.height / 2 -
            indicator.offsetHeight / 2;

          gsap.to(indicator, {
            top: relativeTop,
            duration: duration,
            ease: "power2.out",
          });
        }
      }
    }

    // For mobile menu
    if (mobileIndicatorRef.current && isDropdownOpen) {
      const activeMobileButton = document.querySelector(
        `.mobile-menu-item[data-section="${activeSection}"]`
      );
      if (activeMobileButton) {
        const indicator = mobileIndicatorRef.current;

        // First make it visible if it wasn't
        gsap.to(indicator, {
          opacity: 1,
          duration: duration * 0.7,
          ease: "power2.out",
        });

        // Then move it to the new position
        gsap.to(indicator, {
          top: activeMobileButton.getBoundingClientRect().top,
          duration: duration,
          ease: "power2.out",
        });
      }
    }
  }, [activeSection, isDropdownOpen, isMobile]);

  // Animate desktop menu items on scroll
  useEffect(() => {
    // Only apply ScrollTrigger to desktop menu
    if (window.innerWidth >= 1280) {
      // xl breakpoint
      const desktopMenuItems = document.querySelectorAll(".desktop-menu-item");

      if (desktopMenuItems.length > 0) {
        // Create a timeline for staggered animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: desktopMenuItems[0],
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        });

        // Add staggered animation to the timeline
        tl.fromTo(
          desktopMenuItems,
          {
            opacity: 0,
            x: -20,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "power2.out",
          }
        );

        // Cleanup
        return () => {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      }
    }
  }, []);

  // Desktop menu (vertical list)
  const renderDesktopMenu = () => (
    <nav className="sticky top-24 hidden xl:block relative">
      <ul className="space-y-1">
        {menuItems.map((item, index) => (
          <li
            key={item.id}
            ref={(el) => (desktopMenuItemsRef.current[index] = el)}
          >
            <button
              data-section={item.id}
              className={`desktop-menu-item w-full text-left py-4 px-4 flex items-center space-x-3 rounded-lg transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveSection(item.id as MenuSection)}
              onMouseEnter={(e) => {
                if (activeSection !== item.id) {
                  gsap.to(e.currentTarget, {
                    x: 3,
                    duration: 0.2,
                    ease: "power2.out",
                  });
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.id) {
                  gsap.to(e.currentTarget, {
                    x: 0,
                    duration: 0.2,
                    ease: "power2.out",
                  });
                }
              }}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-body">{item.label}</span>
              {activeSection === item.id && (
                <div
                  className="ml-auto w-1.5 h-5 bg-primary rounded-full"
                  ref={desktopIndicatorRef}
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );

  // Mobile menu (dropdown)
  const renderMobileMenu = () => (
    <div className="xl:hidden relative" ref={dropdownRef}>
      {/* Dropdown button */}
      <button
        ref={dropdownButtonRef}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="w-full text-left py-5 px-5 flex items-center justify-between space-x-3 rounded-xl bg-gradient-to-r from-primary to-purple-600 shadow-lg border border-primary/20 transition-all duration-200 my-3"
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
      >
        <div className="flex items-center space-x-3">
          <span className="text-2xl text-white">{activeItem.icon}</span>
          <div className="flex flex-col">
            <span className="font-body font-semibold text-white text-lg">
              {activeItem.label}
            </span>
            <span className="text-xs text-white/80 font-body">
              Select a category
            </span>
          </div>
        </div>
        <div>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {/* Backdrop overlay */}
      <div
        ref={dropdownOverlayRef}
        className="fixed inset-0 bg-black/20 z-10 hidden"
        onClick={() => setIsDropdownOpen(false)}
      />

      {/* Dropdown menu */}
      <div
        ref={dropdownMenuRef}
        className="absolute z-20 w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden hidden"
      >
        <ul className="py-2">
          {menuItems.map((item, index) => (
            <li
              key={item.id}
              ref={(el) => (mobileMenuItemsRef.current[index] = el)}
            >
              <button
                data-section={item.id}
                onClick={() => handleMenuItemClick(item.id as MenuSection)}
                className={`mobile-menu-item w-full text-left py-4 px-5 flex items-center space-x-3 transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    x: 5,
                    duration: 0.2,
                    ease: "power2.out",
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    x: 0,
                    duration: 0.2,
                    ease: "power2.out",
                  });
                }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-body text-base">{item.label}</span>
                {activeSection === item.id && (
                  <div
                    ref={mobileIndicatorRef}
                    className="ml-auto px-2 py-1 bg-primary text-white text-xs rounded-full"
                  >
                    Active
                  </div>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="w-full xl:w-64 flex-shrink-0 xl:border-r xl:border-gray-200">
      {renderMobileMenu()}
      {renderDesktopMenu()}
    </div>
  );
};

export default SideMenu;
