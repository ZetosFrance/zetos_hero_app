import { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

interface AnimatedNumberProps {
  end: number;
  duration?: number;
}

const rollAnimation = keyframes`
  0% {
    transform: translateY(100%);
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
`;

const AnimatedSpan = styled.span<{ $duration: number }>`
  display: inline-block;
  animation: ${rollAnimation} ${props => props.$duration}ms ease-out forwards;
`;

export const AnimatedNumber = ({ end, duration = 2000 }: AnimatedNumberProps) => {
  const [displayNumber, setDisplayNumber] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);
      
      setDisplayNumber(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [end, duration]);

  return (
    <NumberContainer>
      <AnimatedSpan $duration={duration}>
        {displayNumber}
      </AnimatedSpan>
    </NumberContainer>
  );
}; 