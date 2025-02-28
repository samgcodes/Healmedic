import { useState, useEffect, useRef, RefObject } from "react";

/**
 * Return type for the useLazyImage hook
 */
interface UseLazyImageReturn {
  imageSrc: string;
  isLoading: boolean;
  imageRef: RefObject<HTMLElement>;
}

/**
 * Custom hook for lazy loading images
 *
 * This hook allows components to lazy load images when they enter the viewport,
 * improving initial page load performance.
 *
 * @param {string} src - The source URL of the image
 * @param {string} placeholder - The placeholder image URL to show while loading
 * @returns {Object} - An object containing the current src, loading state, and ref
 *
 * @example
 * // Usage in a component
 * const { imageSrc, isLoading, imageRef } = useLazyImage(
 *   "/assets/large-image.jpg",
 *   "/assets/placeholder.jpg"
 * );
 *
 * return (
 *   <div ref={imageRef} className="image-container">
 *     {isLoading && <div className="loading-spinner" />}
 *     <img
 *       src={imageSrc}
 *       alt="Lazy loaded image"
 *       className={isLoading ? "opacity-0" : "opacity-100"}
 *     />
 *   </div>
 * );
 */
const useLazyImage = (
  src: string,
  placeholder: string = ""
): UseLazyImageReturn => {
  const [imageSrc, setImageSrc] = useState<string>(placeholder);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const imageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Skip if no src provided
    if (!src) {
      setIsLoading(false);
      return;
    }

    let observer: IntersectionObserver | undefined;
    let didCancel = false;

    // Create an observer instance
    const observeImage = (element: HTMLElement): void => {
      if (!element || !window.IntersectionObserver) {
        // If no element or no support for IntersectionObserver, load immediately
        loadImage();
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // When the image enters the viewport
            if (entry.isIntersecting && !didCancel) {
              loadImage();
              // Stop observing once loaded
              if (observer && observer.unobserve) {
                observer.unobserve(element);
              }
            }
          });
        },
        {
          rootMargin: "50px", // Start loading when within 50px of viewport
          threshold: 0.01, // Trigger when 1% of the element is visible
        }
      );

      observer.observe(element);
    };

    // Load the image
    const loadImage = (): void => {
      setIsLoading(true);

      const img = new Image();
      img.src = src;

      img.onload = () => {
        if (!didCancel) {
          setImageSrc(src);
          setIsLoading(false);
        }
      };

      img.onerror = () => {
        if (!didCancel) {
          setIsLoading(false);
          // Keep the placeholder on error
          if (placeholder) {
            setImageSrc(placeholder);
          }
        }
      };
    };

    // Start observing when the ref is available
    if (imageRef.current) {
      observeImage(imageRef.current);
    }

    // Cleanup
    return () => {
      didCancel = true;
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    };
  }, [src, placeholder]);

  return { imageSrc, isLoading, imageRef };
};

export default useLazyImage;
