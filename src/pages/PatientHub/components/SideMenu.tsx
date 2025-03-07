import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Handle menu item selection
  const handleMenuItemClick = (section: MenuSection) => {
    setActiveSection(section);
    setIsDropdownOpen(false);
  };

  // Desktop menu (vertical list)
  const renderDesktopMenu = () => (
    <nav className="sticky top-24 hidden xl:block">
      <ul className="space-y-1">
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => setActiveSection(item.id as MenuSection)}
              className={`w-full text-left py-4 px-4 flex items-center space-x-3 rounded-lg transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-body">{item.label}</span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="desktopActiveIndicator"
                  className="ml-auto w-1.5 h-5 bg-primary rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
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
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="w-full text-left py-4 px-4 flex items-center justify-between space-x-3 rounded-lg bg-white shadow-md border border-gray-200 transition-all duration-200"
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
      >
        <div className="flex items-center space-x-3">
          <span className="text-xl">{activeItem.icon}</span>
          <span className="font-body font-medium">{activeItem.label}</span>
        </div>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
            isDropdownOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
          >
            <ul className="py-1">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleMenuItemClick(item.id as MenuSection)}
                    className={`w-full text-left py-3 px-4 flex items-center space-x-3 transition-colors duration-200 ${
                      activeSection === item.id
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-body">{item.label}</span>
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="mobileActiveIndicator"
                        className="ml-auto w-1.5 h-5 bg-primary rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
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
