import { useEffect } from 'react';
import { StoryLayout } from '../components/StoryLayout';
import { updateDocumentHead } from '../utils/documentHead';

export const IndeooStory = () => {
  useEffect(() => {
    updateDocumentHead('INDEOO', '/company-logos/indeoo.svg');
    // Cleanup when component unmounts
    return () => {
      updateDocumentHead('Zetos Hero App', '/favicon.ico');
    };
  }, []);

  return (
    <StoryLayout
      logo="/company-logos/indeoo.svg"
      name="INDEOO"
      category="Software Producer"
    >
      <p>
        INDEOO was founded in 2021 with a clear mission: to revolutionize how companies manage and collaborate with freelance talent. Born from the challenges of the modern gig economy, INDEOO's platform brings structure, efficiency, and professionalism to the freelancer management ecosystem.
      </p>

      <h2>Revolutionary Platform</h2>
      <p>
        INDEOO's flagship SaaS platform combines smart contract management, AI-powered talent matching, and automated payment systems into a seamless experience. Their innovative "Smart Collaboration Hub" enables companies to reduce freelancer onboarding time by 70% while improving project success rates by 85%. The platform's built-in analytics provide real-time insights into freelancer performance and project progress.
      </p>

      <h2>Market Impact</h2>
      <p>
        Since its launch, INDEOO has helped over 500 companies streamline their freelancer operations, managing more than 10,000 freelance professionals across various industries. The platform has processed over $50 million in freelancer payments, with a 99.9% satisfaction rate. Their commitment to transparency and efficiency has made them the go-to solution for companies embracing the future of work.
      </p>

      <h2>Future Developments</h2>
      <p>
        INDEOO is currently expanding its platform capabilities to include advanced project management tools, cross-border payment solutions, and AI-driven skill assessment features. Their upcoming "Global Talent Pool" initiative aims to connect companies with verified freelance talent from over 100 countries, making professional freelancer management accessible to businesses of all sizes.
      </p>
    </StoryLayout>
  );
}; 