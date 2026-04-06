"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TIME_MESSAGES = {
  morning: ["Good morning!", "Hope your day starts amazing"],
  afternoon: ["Good afternoon!", "Hope your afternoon is great"],
  evening: ["Good evening!", "Hope your evening is wonderful"],
  night: ["Good night!", "Time to unwind"]
};

const getTimeBasedMessage = () => {
  const hour = new Date().getHours();
  let period: keyof typeof TIME_MESSAGES;

  if (hour >= 5 && hour < 12) {
    period = "morning";
  } else if (hour >= 12 && hour < 17) {
    period = "afternoon";
  } else if (hour >= 17 && hour < 21) {
    period = "evening";
  } else {
    period = "night";
  }

  const messages = TIME_MESSAGES[period];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
  const secondMessage = period === "night" 
    ? "Rest well 💤" 
    : period === "morning"
    ? "Let's make today count ✨"
    : period === "afternoon"
    ? "You're powering through 💪"
    : "Almost there 🌙";

  return { greeting: randomMessage, subtext: secondMessage, period };
};

const CelebrationWavingHand: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M7 11.5V20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20V11.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ rotate: 0 }}
      animate={{ rotate: [0, 15, -10, 12, -8, 10, -5, 0] }}
      transition={{ 
        duration: 1.5, 
        repeat: 0,
        ease: "easeInOut",
        delay: 0.5
      }}
    />
    <motion.path
      d="M6 9C6 9 6 6 9 6C9 6 10.5 3 13 3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ rotate: 0 }}
      animate={{ rotate: [0, 12, -8, 10, -6, 8, 0] }}
      transition={{ 
        duration: 1.5, 
        repeat: 0,
        ease: "easeInOut",
        delay: 0.5
      }}
    />
    <motion.path
      d="M15 9C15 9 15 6 12 6C12 6 10.5 3 8 3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ rotate: 0 }}
      animate={{ rotate: [0, -12, 8, -10, 6, -8, 0] }}
      transition={{ 
        duration: 1.5, 
        repeat: 0,
        ease: "easeInOut",
        delay: 0.5
      }}
    />
    <motion.path
      d="M7 11.5V9.5C7 8.94772 7.44772 8.5 8 8.5H13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface DelightfulElementsProps {
  showOnLoad?: boolean;
}

const DelightfulElements: React.FC<DelightfulElementsProps> = ({ showOnLoad = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [message, setMessage] = useState(getTimeBasedMessage);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (showOnLoad) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsLoaded(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [showOnLoad]);

  useEffect(() => {
    setMessage(getTimeBasedMessage());
  }, []);

  const playCelebrationSound = () => {
    if (!soundEnabled || hasPlayed) return;
    setHasPlayed(true);
  };

  return (
    <>
      {/* Time-based Greeting - Appears on page load */}
      <AnimatePresence>
        {isVisible && isLoaded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-5 py-3 rounded-full shadow-xl border border-slate-100">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 15,
                  delay: 0.2
                }}
              >
                <CelebrationWavingHand className="w-6 h-6 text-blue-600" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-800">
                  {message.greeting}
                </span>
                <span className="text-xs text-slate-500">
                  {message.subtext}
                </span>
              </div>
              {/* Sound toggle button */}
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="ml-2 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                aria-label={soundEnabled ? "Disable celebration sound" : "Enable celebration sound"}
              >
                {soundEnabled ? (
                  <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Export sound function for external use */}
      <div className="hidden">
        <button
          onClick={playCelebrationSound}
          className="hidden"
          id="play-celebration-sound"
          aria-hidden="true"
        />
      </div>
    </>
  );
};

export const getDelightfulMessage = getTimeBasedMessage;
export const triggerCelebrationSound = (enabled: boolean = true) => {
  if (!enabled) return;
  
  // Create a soft, professional success tone
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Soft, pleasant chime sound
    oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
    oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
    oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
    
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.05);
    gainNode.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 0.3);
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  } catch (e) {
    // Audio not supported
  }
};

export default DelightfulElements;