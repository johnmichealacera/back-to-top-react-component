'use client';

/**
 * BackToTop Component
 * 
 * A customizable React component that displays a "back to top" button
 * when the user scrolls down a certain distance from the top of the page.
 * 
 * @fileoverview Provides a smooth scrolling back-to-top functionality
 * with customizable styling and behavior options.
 */

import { useState, useEffect, ReactNode, createElement, CSSProperties } from "npm:react@^19.0.0";
import { ChevronUp } from "npm:lucide-react@^0.515.0";

/**
 * Configuration options for the BackToTop component
 */
export interface BackToTopOptions {
  /** Distance from top in pixels before button appears (default: 300) */
  threshold?: number;
  /** Smooth scroll behavior (default: true) */
  smooth?: boolean;
  /** Custom CSS classes for the button */
  className?: string;
  /** Custom icon component (defaults to ChevronUp from lucide-react) */
  icon?: ReactNode;
  /** Custom button text (defaults to empty, showing only icon) */
  text?: string;
  /** Position from bottom in pixels (default: 32) */
  bottom?: number;
  /** Position from right in pixels (default: 32) */
  right?: number;
  /** Custom aria-label for accessibility (default: "Back to top") */
  ariaLabel?: string;
  /** Callback function when button is clicked */
  onClick?: () => void;
}

/**
 * Default options for the BackToTop component
 */
const defaultOptions: Required<BackToTopOptions> = {
  threshold: 300,
  smooth: true,
  className: "fixed z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
  icon: null,
  text: "",
  bottom: 32,
  right: 32,
  ariaLabel: "Back to top",
  onClick: () => {},
};

/**
 * BackToTop Component
 * 
 * A React component that renders a floating "back to top" button.
 * The button appears when the user scrolls down beyond the specified threshold
 * and smoothly scrolls back to the top when clicked.
 * 
 * @param options - Configuration options for the component
 * @returns JSX element or null if not visible
 * 
 * @example
 * ```tsx
 * import { BackToTop } from "@jacera/back-to-top";
 * 
 * function App() {
 *   return (
 *     <div>
 *       <BackToTop />
 *     </div>
 *   );
 * }
 * ```
 * 
 * @example
 * ```tsx
 * import { BackToTop } from "@jacera/back-to-top";
 * 
 * function App() {
 *   return (
 *     <div>
 *       <BackToTop 
 *         threshold={500}
 *         className="bg-red-500 hover:bg-red-600"
 *         bottom={50}
 *         right={50}
 *       />
 *     </div>
 *   );
 * }
 * ```
 */
export function BackToTop(options: BackToTopOptions = {}): ReactNode | null {
  const config = { ...defaultOptions, ...options };
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled beyond threshold
  const toggleVisibility = () => {
    if ((window as any).pageYOffset > config.threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [config.threshold]);

  // Scroll to top
  const scrollToTop = () => {
    if (config.smooth) {
      (window as any).scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      (window as any).scrollTo(0, 0);
    }
    
    // Call custom onClick if provided
    config.onClick();
  };

  if (!isVisible) {
    return null;
  }

  const buttonStyle: CSSProperties = {
    bottom: `${config.bottom}px`,
    right: `${config.right}px`,
  };

  return createElement(
    "button",
    {
      onClick: scrollToTop,
      className: config.className,
      style: buttonStyle,
      "aria-label": config.ariaLabel,
    },
    config.icon || createElement(ChevronUp, { className: "h-6 w-6" }),
    config.text && createElement("span", { className: "ml-2" }, config.text)
  );
}

/**
 * Default export for convenience
 */
export default BackToTop;
