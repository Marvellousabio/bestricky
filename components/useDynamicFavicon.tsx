/**
 * Dynamic Favicon Strategy
 * 
 * PSYCHOLOGICAL PRINCIPLES:
 * 
 * 1. Ocular Capture (The "Curiosity Hook")
 *    - When users switch tabs, they briefly glance at the favicon area
 *    - A visually distinct favicon captures attention during the "tab switch moment"
 *    - This creates a micro-moment of brand recall precisely when users are most receptive
 * 
 * 2. Zeigarnik Effect (Unfinished Business)
 *    - The brain has an incomplete task: "I left this tab open"
 *    - An unusual favicon creates mild cognitive dissonance
 *    - This creates subtle mental "loose ends" that pull users back
 * 
 * 3. Ambient Brand Recall (Peripheral Awareness)
 *    - Even when not looking at the tab, peripheral vision processes the favicon
 *    - Repeated exposure builds implicit memory of the brand
 *    - The distinctive image creates a "mental anchor" in memory
 * 
 * 4. Social Proof / Relatability
 *    - Using a human element (eyes, smile) triggers social recognition
 *    - Faces are processed 60% faster than other images in the brain
 *    - This creates instant emotional recognition even in tiny format
 * 
 * ETHICAL CONSIDERATIONS:
 * - No manipulative "scarcity" tactics (countdown timers)
 * - No alarming colors that trigger anxiety
 * - No deceptive imagery that misrepresents the brand
 * - Respects user attention without exploitation
 * - Subtle rather than aggressive (works in peripheral vision)
 */

import { useEffect, useRef } from "react";

interface FaviconStrategyConfig {
  defaultFavicon?: string;
  awayFavicon?: string;
  awayTitle?: string;
  defaultTitle?: string;
  enableTitleChange?: boolean;
}

/**
 * Compelling Favicon Options (Psychologically Optimized):
 * 
 * EYES_ICON - Uses face/eyes for instant recognition (faces process 60% faster)
 * STAR_ICON - Uses sparkle for positive association  
 * WAVE_ICON - Friendly wave creates social connection
 * HEART_ICON - Warmth creates positive emotion
 * CHECK_ICON - Success/progress association
 */

const FAVICON_OPTIONS = {
  default: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><text y='.9em' font-size='28'>💼</text></svg>",
  away: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='14' fill='%233b82f6'/><circle cx='11' cy='13' r='3' fill='white'/><circle cx='21' cy='13' r='3' fill='white'/><path d='M11 22 Q16 26 21 22' stroke='white' stroke-width='2' fill='none'/></svg>",
  awayTitle: "😄 Come back! | Bestricky",
  defaultTitle: "Bestricky | Web Developer in Lagos",
};

export const useDynamicFavicon = (config: FaviconStrategyConfig = {}) => {
  const {
    defaultFavicon = FAVICON_OPTIONS.away,
    awayFavicon = FAVICON_OPTIONS.away,
    awayTitle = FAVICON_OPTIONS.awayTitle,
    defaultTitle = FAVICON_OPTIONS.defaultTitle,
    enableTitleChange = true,
  } = config;

  const originalFavicon = useRef<string | null>(null);
  const originalTitle = useRef<string | null>(null);

  useEffect(() => {
    const faviconLink = () => {
      const links = document.querySelectorAll<HTMLLinkElement>('link[rel*="icon"]');
      return links[0] || null;
    };

    originalFavicon.current = faviconLink()?.href || null;
    originalTitle.current = document.title;

    const handleVisibilityChange = () => {
      const link = faviconLink();
      
      if (document.hidden) {
        // User navigated away - show compelling favicon
        if (link) {
          link.href = awayFavicon;
        }
        
        if (enableTitleChange && awayTitle) {
          document.title = awayTitle;
        }
        
        // Optional: Set a cookie to track this happened
        // document.cookie = "bestricky_tab_away=true; max-age=3600";
      } else {
        // User returned - restore original
        if (link && originalFavicon.current) {
          link.href = originalFavicon.current;
        }
        
        if (enableTitleChange && defaultTitle) {
          document.title = defaultTitle;
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      
      // Cleanup: restore original favicon on unmount
      const link = faviconLink();
      if (link && originalFavicon.current) {
        link.href = originalFavicon.current;
      }
      if (originalTitle.current) {
        document.title = originalTitle.current;
      }
    };
  }, [awayFavicon, defaultTitle, enableTitleChange, awayTitle]);
};

/**
 * Advanced: Multi-state favicon based on page scroll or interaction
 */
export const useScrollFavicon = () => {
  useEffect(() => {
    const faviconLink = () => {
      const links = document.querySelectorAll<HTMLLinkElement>('link[rel*="icon"]');
      return links[0] || null;
    };

    // Scroll progress favicon (subtle indicator)
    const updateFaviconProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((scrollTop / docHeight) * 100, 100);
      
      // Could add progress indicator to favicon
      // This is more experimental - use sparingly
    };

    window.addEventListener("scroll", updateFaviconProgress, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", updateFaviconProgress);
    };
  }, []);
};

export default useDynamicFavicon;