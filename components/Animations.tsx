
import React, { useState, useEffect, useRef } from 'react';

// Animation hook for scroll-triggered animations
export const useScrollAnimation = (threshold: number = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};

// Scroll animation wrapper component
export const ScrollFade: React.FC<{ 
  children: React.ReactNode; 
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}> = ({ children, delay = 0, direction = 'up' }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const directions = {
    up: 'translate-y-10',
    down: '-translate-y-10',
    left: 'translate-x-10',
    right: '-translate-x-10',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 translate-x-0' 
          : `opacity-0 ${directions[direction]}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Animated counter component
export const CountUp: React.FC<{ 
  end: number; 
  duration?: number; 
  suffix?: string;
  prefix?: string;
}> = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.5);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth count up
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className="inline-block">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

// Paint text effect component
export const PaintText: React.FC<{ 
  text: string; 
  className?: string;
  delay?: number;
}> = ({ text, className = '', delay = 0 }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <span 
      ref={ref} 
      className={`relative inline-block overflow-hidden ${className}`}
    >
      <span 
        className={`inline-block transition-all duration-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {text}
      </span>
    </span>
  );
};

// Paint box effect for section titles
export const PaintBox: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
  color?: string;
}> = ({ children, className = '', delay = 0, color = 'bg-blue-600' }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      {/* Paint box background */}
      <div 
        className={`absolute inset-0 ${color} transition-all duration-700 ease-out rounded-lg ${
          isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
        }`}
        style={{ 
          transitionDelay: `${delay}ms`,
          transformOrigin: 'left'
        }}
      />
      {/* Text content */}
      <span 
        className={`relative z-10 transition-all duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: `${delay + 200}ms` }}
      >
        {children}
      </span>
    </div>
  );
};

export default { ScrollFade, CountUp, PaintText, PaintBox, useScrollAnimation };
