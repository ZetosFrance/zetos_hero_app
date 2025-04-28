import { useEffect, useState } from 'react';
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
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setDisplayNumber(Math.floor(end * percentage));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
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