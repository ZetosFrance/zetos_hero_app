import styled from 'styled-components';

interface CardProps {
  logo: string;
  name: string;
  category: string;
  metric: string;
  metricValue: string;
  url: string;
}

const CardContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.fill.darkAlpha};
  border: 1px solid ${({ theme }) => theme.colors.stroke.cyanAlpha};
  border-radius: 8px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.3s ease;
  min-width: 280px;

  @media (min-width: 768px) {
    padding: 1.5rem;
    min-width: 320px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.stroke.cyan};
  }
`;

const CompanyHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

const LogoLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const Logo = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  transition: transform 0.3s ease;

  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }

  ${LogoLink}:hover & {
    transform: scale(1.1);
  }
`;

const CompanyInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CompanyName = styled.h3`
  color: ${({ theme }) => theme.colors.fill.white};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin: 0;
`;

const CompanyCategory = styled.span`
  color: ${({ theme }) => theme.colors.fill.gray};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const MetricRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MetricLabel = styled.span`
  color: ${({ theme }) => theme.colors.fill.gray};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
`;

const MetricValue = styled.span`
  color: ${({ theme }) => theme.colors.fill.cyan};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
`;

const ReadStoryButton = styled.a`
  width: 100%;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.stroke.cyan};
  color: ${({ theme }) => theme.colors.fill.cyan};
  padding: 0.75rem;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  transition: all 0.3s ease;
  text-decoration: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.stroke.cyanAlpha};
  }
`;

const Divider = styled.img`
  width: 100%;
  height: 4px;
  margin: 0.5rem 0;
`;

export const Card = ({ logo, name, category, metric, metricValue, url }: CardProps) => {
  return (
    <CardContainer>
      <CompanyHeader>
        <LogoLink href={`https://${url}`} target="_blank" rel="noopener noreferrer">
          <Logo src={logo} alt={`${name} logo`} />
        </LogoLink>
        <CompanyInfo>
          <CompanyName>{name}</CompanyName>
          <CompanyCategory>{category}</CompanyCategory>
        </CompanyInfo>
      </CompanyHeader>
      <Divider src="/div0.svg" alt="divider" />
      <MetricRow>
        <MetricLabel>{metric}</MetricLabel>
        <MetricValue>{metricValue}</MetricValue>
      </MetricRow>
      <ReadStoryButton 
        href={`/stories/${name.toLowerCase()}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read Story
      </ReadStoryButton>
    </CardContainer>
  );
}; 