import styled from 'styled-components';
import { AnimatedNumber } from './AnimatedNumber';

const ProfileContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.fill.white};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  margin-bottom: 1rem;
  
  @media (max-width: 390px) {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    padding: 0 0.5rem;
  }
`;

const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  flex-wrap: wrap;
  
  @media (max-width: 390px) {
    gap: 1rem;
  }
`;

const NumberBox = styled.div`
  background: ${({ theme }) => theme.colors.fill.darkAlpha};
  border: 1px solid ${({ theme }) => theme.colors.stroke.cyan};
  border-radius: 8px;
  padding: 1.5rem 2rem;
  min-width: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  backdrop-filter: blur(8px);
  
  @media (max-width: 390px) {
    min-width: 140px;
    padding: 1.25rem 1.5rem;
  }
`;

const Label = styled.div`
  color: ${({ theme }) => theme.colors.fill.gray};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  text-align: center;
  font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
`;

const AvatarContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 4px;
  background: ${({ theme }) => theme.colors.fill.gradient};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const LetsTalkButton = styled.button`
  background: ${({ theme }) => theme.colors.fill.gradient};
  color: ${({ theme }) => theme.colors.fill.white};
  padding: 0.75rem 2rem;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  transition: opacity 0.3s ease;
  width: 100%;
  max-width: 200px;
  text-align: center;

  &:hover {
    opacity: 0.9;
  }
  
  @media (max-width: 390px) {
    max-width: 180px;
    padding: 0.75rem 1.5rem;
  }
`;

export const Profile = () => {
  return (
    <ProfileContainer>
      <AvatarContainer data-avatar-container>
        <Avatar src="/avatar.svg" alt="Profile" />
      </AvatarContainer>
      <Title>Tech-Visionary & Serial Entrepreneur</Title>
      <NumberContainer>
        <NumberBox>
          <AnimatedNumber value={25} />
          <Label>Years of Experience</Label>
        </NumberBox>
        <NumberBox>
          <AnimatedNumber value={10} />
          <Label>Ventures</Label>
        </NumberBox>
        <NumberBox>
          <AnimatedNumber value={5} />
          <Label>Patents</Label>
        </NumberBox>
      </NumberContainer>
      <a 
        href="mailto:adam@zetos.fr"
        style={{ textDecoration: 'none', width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <LetsTalkButton>Let's Talk</LetsTalkButton>
      </a>
    </ProfileContainer>
  );
}; 