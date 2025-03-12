import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import {
  MENU_ITEMS,
  SECONDARY_MENU_ITEMS,
} from "../../constants/navigation.ts";
import { NavigationItem } from "../../types";
import useMediaQuery, { breakpoints } from "../../hooks/useMediaQuery";

// Animation variants
interface AnimationVariants {
  mobileMenu: Variants;
  mobileMenuItem: Variants;
  navbarContainer: Variants;
  menuContainer: Variants;
  menuItem: Variants;
}

const animations: AnimationVariants = {
  mobileMenu: {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0, 0, 0.2, 1],
      },
    },
  },
  mobileMenuItem: {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: [0, 0, 0.2, 1],
      },
    }),
  },
  navbarContainer: {
    closed: {
      height: "80px",
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    open: {
      height: "144px",
      transition: {
        duration: 0.4,
        ease: [0, 0, 0.2, 1],
      },
    },
  },
  menuContainer: {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.1,
      },
    },
  },
  menuItem: {
    closed: {
      opacity: 0,
      y: -8,
      transition: {
        duration: 0.1,
      },
    },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05 + 0.1,
        duration: 0.2,
        ease: "easeOut",
      },
    }),
  },
};

/**
 * MenuButton props
 */
interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  isMobile?: boolean;
}

/**
 * MenuButton component for desktop and mobile
 */
const MenuButton: React.FC<MenuButtonProps> = ({
  isOpen,
  onClick,
  isMobile,
}) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center w-10 h-10 rounded-md text-white hover:text-opacity-80 focus:outline-none transition-all duration-200 ${
      isMobile ? "touch-manipulation" : ""
    }`}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    aria-expanded={isOpen}
  >
    {isOpen ? (
      <X weight="bold" className="w-6 h-6" />
    ) : (
      <List weight="bold" className="w-6 h-6" />
    )}
  </button>
);

/**
 * Main Navbar component
 */
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState<boolean>(false);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  // const isMobile = useMediaQuery(breakpoints.mobile); // Removed unused variable
  const isTablet = useMediaQuery(breakpoints.tablet);
  const isDesktop = useMediaQuery(breakpoints.desktop);

  // Refs for detecting clicks outside
  const navbarRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll events
  useEffect(() => {
    const updateScroll = (): void => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Handle clicks outside of the navbar to close menus
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // For desktop menu
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node) &&
        isDesktopMenuOpen
      ) {
        setIsDesktopMenuOpen(false);
      }

      // For mobile menu - only check if menu is open
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDesktopMenuOpen, isOpen]);

  // Get navbar width based on screen size and scroll state
  const getNavbarWidth = () => {
    if (isDesktop) {
      return hasScrolled ? "75%" : "66%";
    } else if (isTablet) {
      return hasScrolled ? "85%" : "80%";
    } else {
      return hasScrolled ? "95%" : "90%";
    }
  };

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 z-[100] flex justify-center"
        initial={{ top: 24 }}
        animate={{
          top: hasScrolled ? 12 : 24,
          transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
        }}
      >
        <motion.nav
          className="w-full px-4 sm:px-6"
          initial={{ maxWidth: "90%" }}
          animate={{
            maxWidth: getNavbarWidth(),
            transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
          }}
        >
          <motion.div
            ref={navbarRef}
            className="bg-[#5D3B9C] rounded-[24px] sm:rounded-[32px] shadow-[0_8px_32px_0_rgba(93,59,156,0.25)] relative overflow-hidden"
            initial="closed"
            animate={isDesktopMenuOpen ? "open" : "closed"}
            variants={animations.navbarContainer}
          >
            <div className="px-4 sm:px-8 md:px-10">
              {/* Main navbar content */}
              <div className="flex justify-between items-center h-[70px] sm:h-[80px]">
                {/* Left side - Hamburger Menu */}
                <div className="w-16 sm:w-24 flex items-center">
                  {/* Desktop menu button */}
                  <div className="hidden md:block">
                    <MenuButton
                      isOpen={isDesktopMenuOpen}
                      onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
                    />
                  </div>
                  {/* Mobile hamburger button */}
                  <div className="md:hidden flex items-center justify-center">
                    <MenuButton
                      isOpen={isOpen}
                      onClick={() => setIsOpen(!isOpen)}
                      isMobile
                    />
                  </div>
                </div>

                {/* Center - Logo */}
                <div className="flex-1 flex justify-center items-center">
                  <Link
                    to="/"
                    className="flex items-center justify-center h-[40px] sm:h-[44px] md:h-[56px] px-2 py-1 transition-transform duration-200 hover:scale-[1.02]"
                  >
                    <img
                      className="h-full w-auto brightness-0 invert object-contain object-center min-w-[100px] max-w-[140px] sm:max-w-[180px] md:max-w-[220px]"
                      src="/assets/logo1.png"
                      alt="Pharmacy Logo"
                      loading="lazy"
                      width="220"
                      height="56"
                      style={{ imageRendering: "crisp-edges" }}
                    />
                  </Link>
                </div>

                {/* Right side - About & Contact */}
                <div className="w-16 sm:w-24 flex justify-end space-x-4 sm:space-x-6">
                  {SECONDARY_MENU_ITEMS.map((item: NavigationItem) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="hidden md:block text-white hover:text-opacity-80 text-fluid-sm font-medium transition-all duration-200 ease-in-out whitespace-nowrap"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Desktop Menu Items */}
              <AnimatePresence>
                {isDesktopMenuOpen && (
                  <motion.div
                    className="hidden md:block border-t border-white/10"
                    variants={animations.menuContainer}
                  >
                    <div className="flex justify-between items-center h-16 px-4">
                      {MENU_ITEMS.map((item: NavigationItem, i: number) => (
                        <motion.div
                          key={item.name}
                          custom={i}
                          variants={animations.menuItem}
                          className="flex-1"
                        >
                          <Link
                            to={item.path}
                            className="block text-center px-4 py-3 mx-2 text-white hover:bg-white/10 text-fluid-sm font-medium transition-all duration-200 ease-in-out rounded-xl"
                            onClick={() => setIsDesktopMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.nav>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileMenuRef}
            className="fixed inset-x-0 top-0 h-screen bg-[#5D3B9C]/95 backdrop-blur-sm z-40 md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={animations.mobileMenu}
          >
            <div className="flex flex-col h-full pt-[80px] sm:pt-[88px]">
              <div className="flex-1 py-6">
                {MENU_ITEMS.map((item: NavigationItem, i: number) => (
                  <motion.div
                    key={item.name}
                    custom={i}
                    variants={animations.mobileMenuItem}
                  >
                    <Link
                      to={item.path}
                      className="block px-6 sm:px-8 py-4 sm:py-5 text-white hover:bg-white/10 text-fluid-lg font-medium tracking-wide transition-all duration-200 ease-in-out touch-manipulation"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="h-[1px] bg-white/10 my-4 sm:my-5 mx-6 sm:mx-8"></div>
                {SECONDARY_MENU_ITEMS.map((item: NavigationItem, i: number) => (
                  <motion.div
                    key={item.name}
                    custom={MENU_ITEMS.length + i}
                    variants={animations.mobileMenuItem}
                  >
                    <Link
                      to={item.path}
                      className="block px-6 sm:px-8 py-4 sm:py-5 text-white hover:bg-white/10 text-fluid-lg font-medium tracking-wide transition-all duration-200 ease-in-out touch-manipulation"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
