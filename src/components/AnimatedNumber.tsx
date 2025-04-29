import { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
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

const NumberContainer = styled.div`
  display: inline-block;
  overflow: hidden;
  height: 1.2em;
  font-size: 32px;
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  position: relative;
  color: transparent;
  background-image: ${({ theme }) => theme.colors.fill.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  line-height: 1.2;
`;

const AnimatedSpan = styled.span<{ $duration: number }>`
  display: inline-block;
  animation: ${rollAnimation} ${props => props.$duration}ms ease-out forwards;
  background: inherit;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const AnimatedNumber = ({ 
  value, 
  duration = 400 // Shorter duration for multiple rolls
}: AnimatedNumberProps) => {
  const [displayNumber, setDisplayNumber] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [rollCount, setRollCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const isInitialMount = useRef(true);

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
    if (!isInitialMount.current || rollCount >= 5 || !shouldAnimate) {
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
        startTimeRef.current = null;
        
        // Schedule next roll if we haven't done 5 yet
        if (rollCount < 4) {
          setTimeout(() => {
            setRollCount(prev => prev + 1);
            setDisplayNumber(0);
            requestAnimationFrame(animate);
          }, 100); // Small delay between rolls
        } else {
          setRollCount(5); // Mark as complete
        }
      }
    };

    // Start the animation
    animationFrameRef.current = requestAnimationFrame(animate);
    if (isInitialMount.current) {
      isInitialMount.current = false;
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [value, duration, shouldAnimate, rollCount]);

  return (
    <NumberContainer>
      <AnimatedSpan $duration={shouldAnimate && rollCount < 5 ? duration : 0}>
        {displayNumber}
      </AnimatedSpan>
    </NumberContainer>
  );
}; 