import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StoryContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.fill.cyan};
  text-decoration: none;
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.typography.fontSize.base};

  &:hover {
    text-decoration: underline;
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const CompanyLogo = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

const CompanyInfo = styled.div`
  flex: 1;
`;

const CompanyName = styled.h1`
  color: ${({ theme }) => theme.colors.fill.white};
  margin-bottom: 0.5rem;
`;

const CompanyCategory = styled.p`
  color: ${({ theme }) => theme.colors.fill.gray};
`;

const StoryContent = styled.div`
  color: ${({ theme }) => theme.colors.fill.white};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: 1.6;

  p {
    margin-bottom: 1.5rem;
  }

  h2 {
    color: ${({ theme }) => theme.colors.fill.cyan};
    margin: 2rem 0 1rem;
  }
`;

interface StoryLayoutProps {
  logo: string;
  name: string;
  category: string;
  children: React.ReactNode;
}

export const StoryLayout = ({ logo, name, category, children }: StoryLayoutProps) => {
  return (
    <StoryContainer>
      <BackLink to="/">
        <i className="fas fa-arrow-left"></i>
        Back to Companies
      </BackLink>
      <CompanyHeader>
        <CompanyLogo src={logo} alt={`${name} logo`} />
        <CompanyInfo>
          <CompanyName>{name}</CompanyName>
          <CompanyCategory>{category}</CompanyCategory>
        </CompanyInfo>
      </CompanyHeader>
      <StoryContent>
        {children}
      </StoryContent>
    </StoryContainer>
  );
}; 