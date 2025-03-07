import React from "react";
import { motion } from "framer-motion";

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
  const menuItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "disease-management", label: "Disease Management", icon: "🏥" },
    { id: "medication-education", label: "Medication Education", icon: "💊" },
    { id: "vitamins-supplements", label: "Vitamins & Supplements", icon: "🌿" },
    { id: "nutrition-education", label: "Nutrition Education", icon: "🥗" },
    { id: "patient-tools", label: "Patient Tools", icon: "🔧" },
  ];

  return (
    <div className="w-full md:w-64 flex-shrink-0 border-r border-gray-200">
      <nav className="sticky top-24">
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
                    layoutId="activeIndicator"
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
    </div>
  );
};

export default SideMenu;
