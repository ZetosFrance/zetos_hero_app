import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.fill.darkAlpha};
  border-top: 1px solid ${({ theme }) => theme.colors.stroke.cyanAlpha};
  padding: 2rem 1rem;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MainRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex: 1;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.fill.gray};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.fill.cyan};
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex: 2;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.fill.gray};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  transition: color 0.3s ease;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.fill.cyan};
  }
`;

const Copyright = styled.div`
  color: ${({ theme }) => theme.colors.fill.gray};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  flex: 1;
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TalkButton = styled.a`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.stroke.cyan};
  color: ${({ theme }) => theme.colors.fill.cyan};
  padding: 0.75rem 2rem;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  max-width: 400px;
  width: 100%;
  text-align: center;
  align-self: center;

  &:hover {
    background: ${({ theme }) => theme.colors.stroke.cyanAlpha};
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <MainRow>
          <SocialLinks>
            <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </SocialIcon>
            <SocialIcon href="https://x.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-x-twitter"></i>
            </SocialIcon>
            <SocialIcon href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </SocialIcon>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </SocialIcon>
          </SocialLinks>
          <FooterLinks>
            <FooterLink to="/terms">Terms & Conditions</FooterLink>
            <FooterLink to="/disclaimer">Disclaimer</FooterLink>
            <FooterLink to="/career">Career</FooterLink>
            <FooterLink to="/privacy">Privacy</FooterLink>
          </FooterLinks>
          <Copyright>
            © {new Date().getFullYear()} All rights reserved
          </Copyright>
        </MainRow>
        <TalkButton 
          href="/support"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Talk
        </TalkButton>
      </FooterContent>
    </FooterContainer>
  );
}; 