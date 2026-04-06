/**
 * Dynamic Favicon Strategy - Implementation Guide
 * 
 * ============================================
 * PSYCHOLOGICAL PRINCIPLES
 * ============================================
 * 
 * 1. OCULAR CAPTURE (The "Tab Switch Moment")
 *    When users switch tabs, they briefly glance at the favicon area.
 *    A visually distinct favicon captures attention during this moment.
 *    This creates a micro-moment of brand recall precisely when users are most receptive.
 * 
 * 2. ZEIGARNIK EFFECT (Unfinished Business)
 *    The brain has an incomplete task: "I left this tab open"
 *    An unusual favicon creates mild cognitive dissonance
 *    This creates subtle mental "loose ends" that pull users back
 * 
 * 3. AMBIENT BRAND RECALL (Peripheral Awareness)
 *    Even when not looking at the tab, peripheral vision processes the favicon
 *    Repeated exposure builds implicit memory of the brand
 *    The distinctive image creates a "mental anchor" in memory
 * 
 * 4. FACE RECOGNITION ADVANTAGE
 *    Using a human element (eyes, smile) triggers social recognition
 *    Faces are processed 60% faster than other images in the brain
 *    This creates instant emotional recognition even in tiny format
 * 
 * ============================================
 * ETHICAL GUIDELINES
 * ============================================
 * 
 * ✓ DO: Use positive, friendly imagery (smiles, waves)
 * ✓ DO: Keep it subtle and professional
 * ✓ DO: Use brand-consistent colors
 * ✓ DO: Allow users to control (optional feature)
 * 
 * ✗ DON'T: Use countdown timers (scarcity manipulation)
 * ✗ DON'T: Use alarming colors (red for danger)
 * ✗ DON'T: Misrepresent the brand
 * ✗ DON'T: Use aggressive or distressing imagery
 * 
 * ============================================
 * TECHNICAL IMPLEMENTATION
 * ============================================
 * 
 * The hook is already integrated in App.tsx. Here's how it works:
 * 
 * 1. On page load, we capture the original favicon href
 * 2. We listen for the 'visibilitychange' event
 * 3. When user switches tabs (document.hidden = true):
 *    - Change favicon to the "away" version (blue smiley face)
 *    - Change page title to "Come back! ..."
 * 4. When user returns (document.hidden = false):
 *    - Restore original favicon
 *    - Restore original title
 * 5. On component unmount, clean up to restore original state
 * 
 * ============================================
 * FAVICON OPTIONS
 * ============================================
 * 
 * Current Implementation (Blue Smiley Face):
 * - Uses blue (#3b82f6) - trust, professionalism, calming
 * - Face element - instant recognition (60% faster processing)
 * - Friendly smile - positive emotion, welcoming
 * 
 * Alternative Options (more choices):
 * 
 * 1. WAVE ICON (Friendly):
 *    data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='14' fill='%233b82f6'/><path d='M10 20 L8 18 L10 16' stroke='white' fill='none' stroke-width='2'/><path d='M22 20 L24 18 L22 16' stroke='white' fill='none' stroke-width='2'/></svg>
 * 
 * 2. STAR ICON (Premium/Success):
 *    data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='14' fill='%23f59e0b'/><text x='16' y='22' text-anchor='middle' fill='white' font-size='18'>★</text></svg>
 * 
 * 3. EYES ONLY (Curiosity):
 *    data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='14' fill='%233b82f6'/><circle cx='10' cy='14' r='4' fill='white'/><circle cx='22' cy='14' r='4' fill='white'/><circle cx='10' cy='14' r='2' fill='%233b82f6'/><circle cx='22' cy='14' r='2' fill='%233b82f6'/></svg>
 * 
 * ============================================
 * REACT HOOK USAGE (Modular Version)
 * ============================================
 * 
 * If you want to use this in individual components:
 * 
 * import { useDynamicFavicon } from './components/useDynamicFavicon';
 * 
 * const MyComponent = () => {
 *   useDynamicFavicon({
 *     enableTitleChange: true,
 *   });
 *   // ... component code
 * };
 * 
 */

export const FAVICON_STRATEGY = {
  version: "1.0.0",
  description: "Dynamic favicon that changes when user navigates away",
  
  // Current implementation uses blue smiley face
  // Blue = trust, professionalism
  // Face = instant recognition  
  // Smile = positive emotion
  
  awayFavicon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='14' fill='%233b82f6'/><circle cx='11' cy='13' r='3' fill='white'/><circle cx='21' cy='13' r='3' fill='white'/><path d='M11 22 Q16 26 21 22' stroke='white' stroke-width='2' fill='none'/></svg>",
  
  awayTitle: "Come back! We want to build your website - Bestricky",
  
  isProductionReady: true,
  
  accessibilityNotes: "This technique is screen-reader safe as it only affects visual tab elements",
  
  browserSupport: "Works in all modern browsers (Chrome, Firefox, Safari, Edge)",
};

export default FAVICON_STRATEGY;