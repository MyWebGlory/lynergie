import { useEffect, useState, RefObject } from 'react';

interface UseSmoothScrollProps {
  ref: RefObject<HTMLElement>;
  start?: number;
  end?: number;
}

export function useSmoothScroll({ ref, start = 0, end = 1 }: UseSmoothScrollProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the element we've scrolled
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Progress from 0 (element just entering) to 1 (element just leaving)
      const rawProgress = (windowHeight - elementTop) / (windowHeight + elementHeight);
      
      // Clamp and normalize to start/end range
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));
      const normalizedProgress = start + clampedProgress * (end - start);
      
      setProgress(normalizedProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, start, end]);

  return progress;
}
