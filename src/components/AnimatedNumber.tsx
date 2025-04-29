import { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  repeatDelay?: number;
}

const rollAnimation = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const NumberContainer = styled.span`
  display: inline-block;
  overflow: hidden;
  height: 1.2em; /* Fixed height to prevent layout shift */
`;

const AnimatedSpan = styled.span<{ $duration: number }>`
  display: inline-block;
  animation: ${rollAnimation} ${props => props.$duration}ms ease-out forwards;
`;

export const AnimatedNumber = ({ 
  value, 
  duration = 2000,
  repeatDelay = 120000 
}: AnimatedNumberProps) => {
  const [displayNumber, setDisplayNumber] = useState(value);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [isRolling, setIsRolling] = useState(false);
  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionPreference = (e: MediaQueryListEvent | MediaQueryList) => {
      setShouldAnimate(!e.matches);
    };

    // Initial check
    handleMotionPreference(prefersReducedMotion);

    // Listen for changes
    prefersReducedMotion.addEventListener('change', handleMotionPreference);

    return () => {
      prefersReducedMotion.removeEventListener('change', handleMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (!shouldAnimate) {
      setDisplayNumber(value);
      return;
    }

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);
      
      setDisplayNumber(Math.floor(value * percentage));

      if (percentage < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setIsRolling(false);
        startTimeRef.current = null;
      }
    };

    const startRolling = () => {
      setIsRolling(true);
      setDisplayNumber(0);
      startTimeRef.current = null;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initial animation
    startRolling();

    // Set up interval for repeated animation
    intervalRef.current = setInterval(() => {
      if (!isRolling) {
        startRolling();
      }
    }, repeatDelay);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [value, duration, repeatDelay, shouldAnimate, isRolling]);

  return (
    <NumberContainer>
      <AnimatedSpan $duration={shouldAnimate ? duration : 0}>
        {displayNumber}
      </AnimatedSpan>
    </NumberContainer>
  );
}; 