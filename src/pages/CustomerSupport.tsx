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

const ChatContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.fill.darkAlpha};
  border: 1px solid ${({ theme }) => theme.colors.stroke.cyan};
  border-radius: 8px;
  padding: 2rem;
  min-height: 80vh;
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

const QuickQuestions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const QuestionButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.stroke.cyan};
  color: ${({ theme }) => theme.colors.fill.cyan};
  padding: 1rem;
  border-radius: 4px;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.fill.darkAlpha};
  }
`;

const ChatArea = styled.div`
  min-height: 400px;
  background: ${({ theme }) => theme.colors.fill.dark};
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const InputArea = styled.div`
  display: flex;
  gap: 1rem;
`;

const Input = styled.input`
  flex: 1;
  background: ${({ theme }) => theme.colors.fill.dark};
  border: 1px solid ${({ theme }) => theme.colors.stroke.gray};
  color: ${({ theme }) => theme.colors.fill.white};
  padding: 1rem;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typography.fontSize.base};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.stroke.cyan};
  }
`;

const SendButton = styled.button`
  background: ${({ theme }) => theme.colors.fill.cyan};
  color: ${({ theme }) => theme.colors.fill.dark};
  border: none;
  padding: 0 2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const CustomerSupport = () => {
  useEffect(() => {
    updateDocumentHead('Customer Support - Zetos', '/favicon.ico');
  }, []);

  const commonQuestions = [
    "How can I start a project with Zetos?",
    "What industries do you specialize in?",
    "What's your typical project timeline?",
    "How do you ensure project quality?"
  ];

  return (
    <SupportContainer>
      <ChatContainer>
        <Header>
          <HeaderIcon src="/company-logos/zetos.svg" alt="Zetos Support" />
          <HeaderText>
            <h1>Welcome to Zetos Support</h1>
            <p>Our team is here to help you 24/7</p>
          </HeaderText>
        </Header>

        <QuickQuestions>
          <h2>Common Questions</h2>
          {commonQuestions.map((question, index) => (
            <QuestionButton key={index}>
              {question}
            </QuestionButton>
          ))}
        </QuickQuestions>

        <ChatArea>
          {/* Chat messages will be rendered here */}
        </ChatArea>

        <InputArea>
          <Input 
            type="text" 
            placeholder="Type your message here..."
          />
          <SendButton>Send</SendButton>
        </InputArea>
      </ChatContainer>
    </SupportContainer>
  );
}; 