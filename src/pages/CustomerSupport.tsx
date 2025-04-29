import { useEffect } from 'react';
import styled from 'styled-components';
import { updateDocumentHead } from '../utils/documentHead';

const SupportContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.fill.dark};
  color: ${({ theme }) => theme.colors.fill.white};
  padding: 2rem;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.fill.darkAlpha};
  border: 1px solid ${({ theme }) => theme.colors.stroke.cyan};
  border-radius: 8px;
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.stroke.cyanAlpha};
`;

const HeaderIcon = styled.img`
  width: 48px;
  height: 48px;
`;

const HeaderText = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors.fill.cyan};
    margin: 0;
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
  p {
    color: ${({ theme }) => theme.colors.fill.gray};
    margin: 0.5rem 0 0;
  }
`;

const FAQSection = styled.div`
  margin-top: 2rem;
`;

const QuestionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
`;

const QuestionLink = styled.a`
  color: ${({ theme }) => theme.colors.fill.cyan};
  text-decoration: none;
  display: block;
  padding: 0.5rem 0;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Answer = styled.div`
  margin: 1rem 0 2rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.fill.darkAlpha};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.fill.gray};
`;

export const CustomerSupport = () => {
  useEffect(() => {
    updateDocumentHead('Zetos Support', '/avatar.svg');
  }, []);

  const faq = [
    {
      id: 'project-start',
      q: 'How can I start a project with Zetos?',
      a: 'Starting a project with Zetos is simple. Contact us through the "Let\'s Talk" button or email us at contact@zetos.fr. Our team will schedule a consultation to discuss your needs and create a tailored solution.'
    },
    {
      id: 'industries',
      q: 'What industries do you specialize in?',
      a: 'Zetos has expertise across multiple industries including Technology, Healthcare, Finance, Manufacturing, and Chemical. Our diverse portfolio demonstrates our ability to adapt and innovate in any sector.'
    },
    {
      id: 'timeline',
      q: 'What\'s your typical project timeline?',
      a: 'Project timelines vary based on scope and complexity. Typically, small projects take 2-3 months, while larger enterprise solutions may take 6-12 months. We provide detailed timelines during initial consultations.'
    },
    {
      id: 'quality',
      q: 'How do you ensure project quality?',
      a: 'We maintain high quality through rigorous testing, code reviews, and continuous integration practices. Our team follows industry best practices and uses modern tools to ensure reliable, scalable solutions.'
    },
    {
      id: 'support',
      q: 'What kind of support do you provide?',
      a: 'We offer 24/7 technical support for critical issues, regular maintenance updates, and ongoing consultation for future improvements. Our support team is always ready to assist you.'
    }
  ];

  return (
    <SupportContainer>
      <ContentContainer>
        <Header>
          <HeaderIcon src="/avatar.svg" alt="Zetos Support" />
          <HeaderText>
            <h1>Zetos Support</h1>
            <p>Find answers to common questions below</p>
          </HeaderText>
        </Header>

        <FAQSection>
          <h2>Frequently Asked Questions</h2>
          <QuestionList>
            {faq.map(({ id, q }) => (
              <li key={id}>
                <QuestionLink href={`#${id}`}>{q}</QuestionLink>
              </li>
            ))}
          </QuestionList>

          {faq.map(({ id, q, a }) => (
            <div key={id} id={id}>
              <h3>{q}</h3>
              <Answer>{a}</Answer>
            </div>
          ))}
        </FAQSection>
      </ContentContainer>
    </SupportContainer>
  );
}; 