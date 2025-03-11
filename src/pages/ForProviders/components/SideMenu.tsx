import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

export type MenuSection =
  | "home"
  | "advanced-practice-pharmacist"
  | "collaborative-practice"
  | "provider-benefits"
  | "provider-resources"
  | "provider-faq";

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
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);
  const dropdownOverlayRef = useRef<HTMLDivElement>(null);
  const desktopActiveIndicatorRef = useRef<HTMLDivElement>(null);
  const mobileActiveIndicatorRef = useRef<HTMLDivElement>(null);
  const menuItemRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const menuContainerRef = useRef<HTMLUListElement>(null);

  const menuItems = [
    { id: "home", label: "Home", icon: "🏠" },
    {
      id: "advanced-practice-pharmacist",
      label: "Advanced Practice Pharmacist",
      icon: "💼",
    },
    {
      id: "collaborative-practice",
      label: "Collaborative Practice",
      icon: "🤝",
    },
    { id: "provider-benefits", label: "Provider Benefits", icon: "✅" },
    { id: "provider-resources", label: "Provider Resources", icon: "📚" },
    { id: "provider-faq", label: "Provider FAQ", icon: "❓" },
  ];

  // Find the active menu item
  const activeItem =
    menuItems.find((item) => item.id === activeSection) || menuItems[0];

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

  // Handle dropdown toggle animation
  useEffect(() => {
    if (!dropdownMenuRef.current || !dropdownOverlayRef.current) return;

    if (isDropdownOpen) {
      // Show overlay
      gsap.to(dropdownOverlayRef.current, {
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
        display: "block",
      });

      // Show dropdown menu
      gsap.fromTo(
        dropdownMenuRef.current,
        { opacity: 0, y: -20, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
          display: "block",
        }
      );

      // Animate menu items
      const menuItems = dropdownMenuRef.current.querySelectorAll(".menu-item");
      gsap.fromTo(
        menuItems,
        { opacity: 0, x: -10 },
        {
          opacity: 1,
          x: 0,
          duration: 0.2,
          stagger: 0.05,
          ease: "power2.out",
        }
      );
    } else {
      // Hide overlay
      gsap.to(dropdownOverlayRef.current, {
        opacity: 0,
        duration: 0.2,
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
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(dropdownMenuRef.current, { display: "none" });
        },
      });
    }
  }, [isDropdownOpen]);

  // Animate dropdown arrow rotation
  useEffect(() => {
    if (!dropdownButtonRef.current) return;

    const arrowIcon = dropdownButtonRef.current.querySelector("svg");
    if (arrowIcon) {
      gsap.to(arrowIcon, {
        rotation: isDropdownOpen ? 180 : 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [isDropdownOpen]);

  // Handle menu item selection
  const handleMenuItemClick = (section: MenuSection) => {
    setActiveSection(section);
    setIsDropdownOpen(false);
  };

  // Function to update the active indicator position
  const updateActiveIndicatorPosition = () => {
    if (
      desktopActiveIndicatorRef.current &&
      menuItemRefs.current[activeSection] &&
      menuContainerRef.current
    ) {
      const activeMenuItem = menuItemRefs.current[activeSection];
      const menuContainer = menuContainerRef.current;

      if (activeMenuItem) {
        // Get the position relative to the menu container
        const menuContainerRect = menuContainer.getBoundingClientRect();
        const activeMenuItemRect = activeMenuItem.getBoundingClientRect();

        // Calculate the top position relative to the menu container
        const relativeTop = activeMenuItemRect.top - menuContainerRect.top;

        // Position the indicator at the center of the menu item
        gsap.to(desktopActiveIndicatorRef.current, {
          top: relativeTop + activeMenuItemRect.height / 2 - 10, // Center the indicator
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    }
  };

  // Animate active indicator when active section changes
  useEffect(() => {
    updateActiveIndicatorPosition();

    // Add scroll event listener to update indicator position when scrolling
    window.addEventListener("scroll", updateActiveIndicatorPosition);
    window.addEventListener("resize", updateActiveIndicatorPosition);

    return () => {
      window.removeEventListener("scroll", updateActiveIndicatorPosition);
      window.removeEventListener("resize", updateActiveIndicatorPosition);
    };
  }, [activeSection]);

  // Desktop menu (vertical list)
  const renderDesktopMenu = () => (
    <nav className="sticky top-24 hidden xl:block">
      <ul ref={menuContainerRef} className="space-y-1 relative">
        {/* Active indicator dot */}
        <div
          ref={desktopActiveIndicatorRef}
          className="absolute right-4 w-1.5 h-5 bg-primary rounded-full"
          style={{ opacity: 0, position: "absolute" }}
        />

        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              ref={(el) => (menuItemRefs.current[item.id] = el)}
              onClick={() => setActiveSection(item.id as MenuSection)}
              className={`w-full text-left py-4 px-4 flex items-center space-x-3 rounded-lg transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-body">{item.label}</span>
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
      </button>

      {/* Backdrop overlay */}
      <div
        ref={dropdownOverlayRef}
        className="fixed inset-0 bg-black/20 z-10"
        onClick={() => setIsDropdownOpen(false)}
        style={{ display: "none", opacity: 0 }}
      />

      {/* Dropdown menu */}
      <div
        ref={dropdownMenuRef}
        className="absolute z-20 w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden"
        style={{ display: "none", opacity: 0 }}
      >
        <ul className="py-2">
          {menuItems.map((item) => (
            <li key={item.id} className="menu-item">
              <button
                onClick={() => handleMenuItemClick(item.id as MenuSection)}
                className={`w-full text-left py-4 px-5 flex items-center space-x-3 transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-body text-base">{item.label}</span>
                {activeSection === item.id && (
                  <div
                    ref={mobileActiveIndicatorRef}
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
