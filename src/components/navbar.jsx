import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  React.useEffect(() => {
    const updateScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Define navigation items for hamburger menu
  const menuItems = [
    { name: "Services", path: "/services" },
    { name: "Patient Hub", path: "/patient-hub" },
    { name: "For Providers", path: "/for-providers" },
  ];

  const mobileMenuVariants = {
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
  };

  const mobileMenuItemVariants = {
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
  };

  const navbarContainerVariants = {
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
  };

  const menuContainerVariants = {
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
  };

  const menuItemVariants = {
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
  };

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 z-[100] flex justify-center"
        animate={{
          top: hasScrolled ? 12 : 24,
          transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
        }}
      >
        <motion.nav
          className="w-full px-6"
          initial={false}
          animate={{
            maxWidth:
              window.innerWidth >= 768
                ? hasScrolled
                  ? "75%"
                  : "66%"
                : hasScrolled
                ? "90%"
                : "85%",
            transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
          }}
        >
          <motion.div
            className="bg-[#5D3B9C] rounded-[32px] shadow-[0_8px_32px_0_rgba(93,59,156,0.25)] relative overflow-hidden"
            initial="closed"
            animate={isDesktopMenuOpen ? "open" : "closed"}
            variants={navbarContainerVariants}
          >
            <div className="px-8 sm:px-10">
              {/* Main navbar content */}
              <div className="flex justify-between items-center h-[80px]">
                {/* Left side - Hamburger Menu */}
                <div className="w-24 flex items-center">
                  {/* Desktop menu button */}
                  <div className="hidden md:block">
                    <button
                      onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
                      className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-opacity-80 focus:outline-none transition-all duration-200"
                      aria-label="Menu"
                      aria-expanded={isDesktopMenuOpen}
                    >
                      <svg
                        className="h-7 w-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={
                            isDesktopMenuOpen
                              ? "M6 18L18 6M6 6l12 12"
                              : "M4 6h16M4 12h16M4 18h16"
                          }
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Mobile hamburger button */}
                  <div className="md:hidden">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-opacity-80 focus:outline-none transition-all duration-200"
                      aria-expanded={isOpen}
                      aria-label="Menu"
                    >
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={
                            isOpen
                              ? "M6 18L18 6M6 6l12 12"
                              : "M4 6h16M4 12h16M4 18h16"
                          }
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Center - Logo */}
                <div className="flex-1 flex justify-center items-center">
                  <Link
                    to="/"
                    className="flex items-center justify-center h-[44px] md:h-[56px] px-3 py-2 transition-transform duration-200 hover:scale-[1.02]"
                  >
                    <img
                      className="h-full w-auto brightness-0 invert object-contain object-center min-w-[120px] max-w-[160px] sm:max-w-[180px] md:max-w-[220px]"
                      src="src\assets\logo1.png"
                      alt="Pharmacy Logo"
                      style={{ imageRendering: "crisp-edges" }}
                    />
                  </Link>
                </div>

                {/* Right side - About & Contact */}
                <div className="w-24 flex justify-end space-x-6">
                  <Link
                    to="/about-us"
                    className="hidden md:block text-white hover:text-opacity-80 text-[15px] font-medium transition-all duration-200 ease-in-out whitespace-nowrap"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/contact"
                    className="hidden md:block text-white hover:text-opacity-80 text-[15px] font-medium transition-all duration-200 ease-in-out whitespace-nowrap"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* Desktop Menu Items */}
              <AnimatePresence>
                {isDesktopMenuOpen && (
                  <motion.div
                    className="hidden md:block border-t border-white/10"
                    variants={menuContainerVariants}
                  >
                    <div className="flex justify-between items-center h-16 px-4">
                      {menuItems.map((item, i) => (
                        <motion.div
                          key={item.name}
                          custom={i}
                          variants={menuItemVariants}
                          className="flex-1"
                        >
                          <Link
                            to={item.path}
                            className="block text-center px-4 py-2 mx-2 text-white hover:bg-white/10 text-[15px] font-medium transition-all duration-200 ease-in-out rounded-xl"
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
            className="fixed inset-x-0 top-0 h-screen bg-[#5D3B9C]/95 backdrop-blur-sm z-40 md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="flex flex-col h-full pt-[88px]">
              <div className="flex-1 py-6">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    custom={i}
                    variants={mobileMenuItemVariants}
                  >
                    <Link
                      to={item.path}
                      className="block px-8 py-5 text-white hover:bg-white/10 text-[17px] font-medium tracking-wide transition-all duration-200 ease-in-out"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="h-[1px] bg-white/10 my-5 mx-8"></div>
                <motion.div
                  custom={menuItems.length}
                  variants={mobileMenuItemVariants}
                >
                  <Link
                    to="/about-us"
                    className="block px-8 py-5 text-white hover:bg-white/10 text-[17px] font-medium tracking-wide transition-all duration-200 ease-in-out"
                    onClick={() => setIsOpen(false)}
                  >
                    About Us
                  </Link>
                </motion.div>
                <motion.div
                  custom={menuItems.length + 1}
                  variants={mobileMenuItemVariants}
                >
                  <Link
                    to="/contact"
                    className="block px-8 py-5 text-white hover:bg-white/10 text-[17px] font-medium tracking-wide transition-all duration-200 ease-in-out"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
