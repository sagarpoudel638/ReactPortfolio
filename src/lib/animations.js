import { useEffect, useRef, useState } from 'react';

// Intersection Observer Hook for animations
export const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return { containerRef, isVisible };
};

// Custom hook for staggered animations
export const useStaggeredAnimation = (
  options = { threshold: 0.1 }
) => {
  const { containerRef, isVisible } = useElementOnScreen(options);
  
  return { 
    ref: containerRef, 
    className: isVisible ? 'stagger-visible' : '' 
  };
};

// Custom hook for section animations
export const useSectionAnimation = (
  options = { threshold: 0.1 }
) => {
  const { containerRef, isVisible } = useElementOnScreen(options);
  
  return { 
    ref: containerRef, 
    className: `section-animate ${isVisible ? 'animate-visible' : ''}` 
  };
};

// Custom hook for skill bar animations
export const useSkillAnimation = (
  options = { threshold: 0.1 }
) => {
  const { containerRef, isVisible } = useElementOnScreen(options);
  
  return { 
    ref: containerRef, 
    className: `${isVisible ? 'skill-visible' : ''}` 
  };
};
