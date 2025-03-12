import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  List,
  X,
  FirstAidKit,
  User,
  Stethoscope,
  FileText,
} from "@phosphor-icons/react";
import {
  MENU_ITEMS,
  SECONDARY_MENU_ITEMS,
} from "../../constants/navigation.ts";
import { NavigationItem } from "../../types";
import useMediaQuery, { breakpoints } from "../../hooks/useMediaQuery";
import { gsap } from "gsap";

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
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Simple animation for button click feedback
  useEffect(() => {
    if (!buttonRef.current) return;

    gsap.to(buttonRef.current, {
      scale: 0.9,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut",
    });
  }, [isOpen]);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`flex items-center justify-center w-10 h-10 rounded-md text-white hover:text-opacity-80 focus:outline-none ${
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
};

/**
 * Main Navbar component
 */
const Navbar: React.FC = () => {
  // Helper function to render the appropriate Phosphor icon
  const renderIcon = (iconName?: string) => {
    if (!iconName) return null;

    // Phosphor icons expect a specific weight type
    const iconWeight = "regular" as const; // TypeScript will infer this as the correct type
    const IconProps = { weight: iconWeight, className: "w-5 h-5" };

    switch (iconName) {
      case "FirstAidKit":
        return <FirstAidKit {...IconProps} />;
      case "User":
        return <User {...IconProps} />;
      case "Stethoscope":
        return <Stethoscope {...IconProps} />;
      case "FileText":
        return <FileText {...IconProps} />;
      default:
        return null;
    }
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState<boolean>(false);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const isTablet = useMediaQuery(breakpoints.tablet);
  const isDesktop = useMediaQuery(breakpoints.desktop);

  // Refs for animation targets
  const navbarContainerRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const navbarInnerRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const desktopMenuRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);

  // Get navbar width based on screen size and scroll state
  const getNavbarWidth = (scrolled = false) => {
    if (isDesktop) {
      return scrolled ? "75%" : "66%";
    } else if (isTablet) {
      return scrolled ? "85%" : "80%";
    } else {
      return scrolled ? "95%" : "90%";
    }
  };

  // Handle scroll events
  useEffect(() => {
    const updateScroll = (): void => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  // Animate navbar width and position when scroll state changes
  useEffect(() => {
    if (!navbarRef.current || !navbarContainerRef.current) return;

    // Get the target width based on screen size and scroll state
    const targetWidth = getNavbarWidth(hasScrolled);
    const targetTop = hasScrolled ? 12 : 24;

    // Create animation for smooth transition
    gsap.to(navbarRef.current, {
      maxWidth: targetWidth,
      duration: 0.4,
      ease: "power2.out",
      force3D: true, // Hardware acceleration
    });

    // Animate the top position as well
    gsap.to(navbarContainerRef.current, {
      top: targetTop,
      duration: 0.4,
      ease: "power2.out",
      force3D: true, // Hardware acceleration
    });
  }, [hasScrolled, isTablet, isDesktop]); // Re-run when these dependencies change

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
        navbarInnerRef.current &&
        !navbarInnerRef.current.contains(event.target as Node) &&
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

  // Desktop menu animation - improved fluid flowing effect
  useEffect(() => {
    if (!navbarInnerRef.current || !desktopMenuRef.current) return;

    // Get all menu items for animation
    const menuItems = desktopMenuRef.current.querySelectorAll(".flex-1");

    // Clear any existing animations first
    gsap.killTweensOf([
      navbarInnerRef.current,
      desktopMenuRef.current,
      menuItems,
    ]);

    // Create master timeline
    const tl = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.35,
        ease: "power2.out",
      },
    });

    if (isDesktopMenuOpen) {
      // Setup initial state - important to do this once before animation
      gsap.set(desktopMenuRef.current, {
        display: "block",
        autoAlpha: 0, // combines visibility and opacity
        y: -10,
      });

      gsap.set(menuItems, {
        opacity: 0,
        y: -10,
      });

      // Opening animation sequence
      tl
        // 1. First start expanding the navbar height
        .to(navbarInnerRef.current, {
          height: "144px",
          duration: 0.45,
          ease: "power3.out",
        })

        // 2. Fade in the menu container slightly before navbar finishes expanding
        .to(
          desktopMenuRef.current,
          {
            autoAlpha: 1, // animate both visibility and opacity
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.25"
        ) // Start before previous animation finishes

        // 3. Stagger in menu items
        .to(
          menuItems,
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.3,
            ease: "back.out(1.2)", // smoother bounce effect
          },
          "-=0.2"
        ); // Start before previous animation finishes
    } else {
      // Only run closing animation if menu is currently visible
      if (desktopMenuRef.current.style.display === "block") {
        // Closing animation sequence
        tl
          // 1. First fade out menu items quickly
          .to(menuItems, {
            opacity: 0,
            y: -5,
            stagger: 0.02,
            duration: 0.2,
            ease: "power1.in",
          })

          // 2. Then start collapsing navbar slightly before items finish fading
          .to(
            navbarInnerRef.current,
            {
              height: "80px",
              duration: 0.4,
              ease: "power3.inOut",
            },
            "-=0.1"
          )

          // 3. Fade out menu container while navbar is collapsing
          .to(
            desktopMenuRef.current,
            {
              autoAlpha: 0,
              y: -8,
              duration: 0.25,
              ease: "power2.in",
              onComplete: () => {
                // Only set display none after animation is fully complete
                gsap.set(desktopMenuRef.current, { display: "none" });
              },
            },
            "-=0.3"
          ); // Significant overlap for smoother transition
      }
    }

    // Play the timeline immediately
    tl.play();

    // Cleanup
    return () => {
      tl.kill();
    };
  }, [isDesktopMenuOpen]);

  // Initialize mobile menu items to be hidden on component mount
  // This ensures they're hidden before the first interaction
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    // Pre-hide all menu items and divider
    const links = mobileMenuRef.current.querySelectorAll("a");
    const divider = mobileMenuRef.current.querySelector(".h-\\[1px\\]");

    gsap.set(links, { opacity: 0 });
    if (divider) gsap.set(divider, { opacity: 0 });
  }, []); // Empty dependency array ensures this runs once on mount

  // Mobile menu animation - liquid fill effect from hamburger menu
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    // Get the position of the hamburger menu button for the clip-path origin
    // Default to top-left if we can't find it
    let originX = 20;
    let originY = 20;

    // Try to find the mobile hamburger button position
    const mobileButton = document.querySelector(".md\\:hidden .w-6");
    if (mobileButton) {
      const rect = mobileButton.getBoundingClientRect();
      originX = rect.left;
      originY = rect.top;
    }

    // Format the clip-path origin
    const origin = `${originX}px ${originY}px`;

    if (isOpen) {
      // Show the menu first with full opacity
      mobileMenuRef.current.style.display = "block";

      // Create a timeline for sequenced animations
      const tl = gsap.timeline();

      // Get all links and the divider for staggered animation
      const links = mobileMenuRef.current.querySelectorAll("a");
      const divider = mobileMenuRef.current.querySelector(".h-\\[1px\\]");

      // Set initial states
      gsap.set(mobileMenuRef.current, {
        opacity: 1, // Full opacity from the start
        clipPath: `circle(0px at ${origin})`, // Start as a tiny circle at hamburger position
      });

      // Hide menu items initially
      gsap.set(links, { opacity: 0, y: 20 });
      if (divider) gsap.set(divider, { opacity: 0 });

      // Animate the menu to fill the screen like liquid
      tl.to(mobileMenuRef.current, {
        clipPath: `circle(150% at ${origin})`, // Expand to cover the entire screen
        duration: 0.8,
        ease: "power3.out", // Smooth acceleration
      })

        // Then animate the menu items with stagger - start appearing earlier
        .to(
          links,
          {
            opacity: 1,
            y: 0,
            stagger: 0.08, // Original stagger timing
            duration: 0.5, // Original duration
            ease: "back.out(1.2)", // Keep the bounce effect
          },
          "-=0.6"
        ); // Start much earlier during the fill animation

      // Animate the divider if it exists
      if (divider) {
        tl.to(
          divider,
          {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.4"
        ); // Overlap with menu items animation
      }
    } else if (mobileMenuRef.current.style.display !== "none") {
      // Closing animation - reverse the liquid effect
      const tl = gsap.timeline({
        onComplete: () => {
          if (mobileMenuRef.current) {
            mobileMenuRef.current.style.display = "none";
          }
        },
      });

      // Get all links and the divider
      const links = mobileMenuRef.current.querySelectorAll("a");
      const divider = mobileMenuRef.current.querySelector(".h-\\[1px\\]");

      // Make everything happen almost simultaneously for ultra-fast closing

      // Hide all menu items at once - no stagger
      gsap.to(links, {
        opacity: 0,
        duration: 0.08, // Ultra short duration
        ease: "power1.in", // Fast easing
      });

      // Hide divider immediately if it exists
      if (divider) {
        gsap.to(divider, {
          opacity: 0,
          duration: 0.08,
        });
      }

      // Immediately start shrinking the menu - much faster
      tl.to(mobileMenuRef.current, {
        clipPath: `circle(0px at ${origin})`,
        duration: 0.15, // Ultra short duration
        ease: "power1.in", // Fastest easing
      });
    }
  }, [isOpen]);

  return (
    <>
      <div
        ref={navbarContainerRef}
        className="fixed left-0 right-0 z-[100] flex justify-center"
        style={{ top: "24px" }} // Initial position, will be controlled by GSAP
      >
        <nav
          ref={navbarRef}
          className="w-full px-4 sm:px-6"
          style={{ maxWidth: "90%" }} // Initial value, will be animated by GSAP
        >
          <div
            ref={navbarInnerRef}
            className="bg-[#5D3B9C] rounded-[24px] sm:rounded-[32px] shadow-[0_8px_32px_0_rgba(93,59,156,0.25)] relative overflow-hidden"
            style={{
              height: isDesktopMenuOpen ? "144px" : "80px",
              transform: "translateZ(0)", // Hardware acceleration for smoother animation
            }}
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
                    ref={logoRef}
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

              {/* Desktop Menu Items - Always render but control visibility with GSAP */}
              <div
                ref={desktopMenuRef}
                className="hidden md:block border-t border-white/10"
                style={{
                  display: "none", // Will be controlled by GSAP
                  opacity: 0,
                }}
              >
                <div className="flex justify-between items-center h-16 px-4">
                  {MENU_ITEMS.map((item: NavigationItem) => (
                    <div key={item.name} className="flex-1">
                      <Link
                        to={item.path}
                        className="flex items-center justify-center px-4 py-3 mx-2 text-white hover:bg-white/10 text-fluid-sm font-medium transition-all duration-200 ease-in-out rounded-xl"
                        onClick={() => setIsDesktopMenuOpen(false)}
                      >
                        {item.icon && (
                          <span className="mr-2">{renderIcon(item.icon)}</span>
                        )}
                        <span>{item.name}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile menu - with liquid fill animation */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-x-0 top-0 h-screen bg-[#5D3B9C] z-40 md:hidden"
        style={{ display: "none" }}
      >
        <div className="flex flex-col h-full pt-[80px] sm:pt-[88px]">
          <div className="flex-1 py-6">
            {MENU_ITEMS.map((item: NavigationItem) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  className="flex items-center px-6 sm:px-8 py-4 sm:py-5 text-white hover:bg-white/10 text-fluid-lg font-medium tracking-wide transition-all duration-200 ease-in-out touch-manipulation"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon && (
                    <span className="mr-3">{renderIcon(item.icon)}</span>
                  )}
                  <span>{item.name}</span>
                </Link>
              </div>
            ))}
            <div className="h-[1px] bg-white/10 my-4 sm:my-5 mx-6 sm:mx-8"></div>
            {SECONDARY_MENU_ITEMS.map((item: NavigationItem) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  className="block px-6 sm:px-8 py-4 sm:py-5 text-white hover:bg-white/10 text-fluid-lg font-medium tracking-wide transition-all duration-200 ease-in-out touch-manipulation"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
