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
      <motion.button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="w-full text-left py-5 px-5 flex items-center justify-between space-x-3 rounded-xl bg-gradient-to-r from-primary to-purple-600 shadow-lg border border-primary/20 transition-all duration-200 my-3"
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
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
        <motion.div
          animate={{ rotate: isDropdownOpen ? 180 : 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
        >
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
        </motion.div>
      </motion.button>

      {/* Backdrop overlay */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 z-10"
            onClick={() => setIsDropdownOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
              duration: 0.3,
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className="absolute z-20 w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden"
          >
            <ul className="py-2">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <motion.button
                    onClick={() => handleMenuItemClick(item.id as MenuSection)}
                    className={`w-full text-left py-4 px-5 flex items-center space-x-3 transition-all duration-200 ${
                      activeSection === item.id
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-body text-base">{item.label}</span>
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="mobileActiveIndicator"
                        className="ml-auto px-2 py-1 bg-primary text-white text-xs rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        Active
                      </motion.div>
                    )}
                  </motion.button>
                </motion.li>
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
