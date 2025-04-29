import { useEffect, useState } from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.fill.darkAlpha};
  backdrop-filter: blur(8px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.stroke.cyanAlpha};
  padding: 0.75rem 1rem;
  transform: translateY(${({ visible }) => (visible ? '0' : '-100%')});
  transition: transform 0.3s ease;
  z-index: 1000;
  display: flex;
  justify-content: center;

  @media (max-width: 390px) {
    padding: 0.5rem 0.75rem;
  }
`;

const NavContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 390px) {
    gap: 1rem;
  }
`;

const NavAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 2px;
  background: ${({ theme }) => theme.colors.fill.gradient};

  @media (max-width: 390px) {
    width: 32px;
    height: 32px;
  }
`;

const NavTitle = styled.h1`
  color: ${({ theme }) => theme.colors.fill.white};
  font-size: 24px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 390px) {
    font-size: 16px;
  }
`;

export const StickyNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the avatar element
      const avatar = document.querySelector('[data-avatar-container]');
      if (!avatar) return;

      // Get the avatar's position and dimensions
      const rect = avatar.getBoundingClientRect();
      const avatarMiddle = rect.top + rect.height / 2;

      // Show navbar when avatar is halfway out of view
      setIsVisible(avatarMiddle < 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavContainer visible={isVisible}>
      <NavContent>
        <NavAvatar src="/avatar.svg" alt="Profile" />
        <NavTitle>Tech-Visionary & Serial Entrepreneur</NavTitle>
      </NavContent>
    </NavContainer>
  );
}; 