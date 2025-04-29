import styled, { keyframes } from 'styled-components';

const ProfileContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.fill.white};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  margin-bottom: 1rem;
`;

const rollNumbers = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
`;

const NumberBox = styled.div`
  background: ${({ theme }) => theme.colors.fill.darkAlpha};
  border: 1px solid ${({ theme }) => theme.colors.stroke.cyan};
  border-radius: 8px;
  padding: 1rem;
  min-width: 100px;
  overflow: hidden;
`;

const Number = styled.div`
  color: ${({ theme }) => theme.colors.fill.cyan};
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: bold;
  animation: ${rollNumbers} 2s ease-out;
`;

const Label = styled.div`
  color: ${({ theme }) => theme.colors.fill.gray};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin-top: 0.5rem;
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
`;

export const Profile = () => {
  return (
    <ProfileContainer>
      <AvatarContainer>
        <Avatar src="/avatar.svg" alt="Profile" />
      </AvatarContainer>
      <Title>Tech-Visionary & Serial Entrepreneur</Title>
      <NumberContainer>
        <NumberBox>
          <Number>25</Number>
          <Label>Years of Experience</Label>
        </NumberBox>
        <NumberBox>
          <Number>10</Number>
          <Label>Ventures</Label>
        </NumberBox>
        <NumberBox>
          <Number>5</Number>
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