/**
 * Helper functions for the HealMedic application
 */

/**
 * Format a phone number to a standard format
 * @param {string} phoneNumber - The phone number to format
 * @returns {string} - The formatted phone number
 *
 * @example
 * // Returns "(123) 456-7890"
 * formatPhoneNumber("1234567890")
 */
export const formatPhoneNumber = (phoneNumber: string): string => {
  // Remove all non-numeric characters
  const cleaned = phoneNumber.replace(/\D/g, "");

  // Check if the input is valid
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  return phoneNumber;
};

/**
 * Truncate text to a specified length and add ellipsis
 * @param {string} text - The text to truncate
 * @param {number} maxLength - The maximum length of the text
 * @returns {string} - The truncated text
 *
 * @example
 * // Returns "This is a long..."
 * truncateText("This is a long text", 14)
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

/**
 * Debounce a function call
 * @param {Function} func - The function to debounce
 * @param {number} wait - The time to wait in milliseconds
 * @returns {Function} - The debounced function
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function executedFunction(...args: Parameters<T>): void {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(later, wait);
  };
};

/**
 * Format options for date formatting
 */
type DateFormatOptions = {
  month: "numeric" | "short" | "long";
  day: "numeric";
  year: "numeric";
  weekday?: "long";
};

/**
 * Format types for date formatting
 */
type DateFormatType = "short" | "medium" | "long";

/**
 * Get a formatted date string
 * @param {Date|string} date - The date to format
 * @param {string} format - The format to use (short, medium, long)
 * @returns {string} - The formatted date
 *
 * @example
 * // Returns "Feb 26, 2025"
 * formatDate(new Date(), "medium")
 */
export const formatDate = (
  date: Date | string,
  format: DateFormatType = "medium"
): string => {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  const options: Record<DateFormatType, DateFormatOptions> = {
    short: { month: "numeric", day: "numeric", year: "numeric" },
    medium: { month: "short", day: "numeric", year: "numeric" },
    long: { weekday: "long", month: "long", day: "numeric", year: "numeric" },
  };

  return dateObj.toLocaleDateString("en-US", options[format] || options.medium);
};

/**
 * Check if an element is in the viewport
 * @param {HTMLElement} element - The element to check
 * @param {number} offset - The offset from the viewport edge
 * @returns {boolean} - Whether the element is in the viewport
 */
export const isInViewport = (
  element: HTMLElement | null,
  offset: number = 0
): boolean => {
  if (!element) return false;

  const rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 - offset &&
    rect.left >= 0 - offset &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + offset &&
    rect.right <=
      (window.innerWidth || document.documentElement.clientWidth) + offset
  );
};
