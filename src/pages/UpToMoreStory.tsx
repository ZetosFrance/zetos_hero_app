import { useEffect } from 'react';
import { StoryLayout } from '../components/StoryLayout';
import { updateDocumentHead } from '../utils/documentHead';

export const UpToMoreStory = () => {
  useEffect(() => {
    updateDocumentHead('UpToMore', '/company-logos/uptomore.svg');
    // Cleanup when component unmounts
    return () => {
      updateDocumentHead('Zetos Hero App', '/favicon.ico');
    };
  }, []);

  return (
    <StoryLayout
      logo="/company-logos/uptomore.svg"
      name="UpToMore"
      category="Fintech"
    >
      <p>
        UpToMore emerged in 2022 as a groundbreaking fintech platform with a mission to revolutionize personal wealth growth. Founded by financial technology experts and investment professionals, the company has created a unique ecosystem that transforms traditional investment approaches into accessible, transparent, and growth-focused solutions.
      </p>

      <h2>Innovative Approach</h2>
      <p>
        At the heart of UpToMore's success is their "Smart Growth Engine" - an AI-powered investment platform that combines sophisticated risk analysis with personalized growth strategies. This revolutionary system has helped users achieve an average of 12% annual returns while maintaining strong security measures and regulatory compliance. Their unique approach focuses on sustainable growth rather than short-term gains.
      </p>

      <h2>Market Impact</h2>
      <p>
        Since launch, UpToMore has attracted over 100,000 users and manages more than $5 million in investments. Their platform has democratized access to sophisticated investment strategies previously available only to high-net-worth individuals. The company's commitment to transparency and fair practices has earned them multiple fintech innovation awards and recognition from leading financial institutions.
      </p>

      <h2>Future Vision</h2>
      <p>
        UpToMore is expanding its platform to include advanced features such as AI-driven market analysis, automated portfolio rebalancing, and integrated financial planning tools. Their upcoming "Community Investment Networks" will enable users to learn from successful investors while maintaining individual portfolio control. The company's vision is to make professional-grade investment strategies accessible to everyone, promoting financial literacy and sustainable wealth growth.
      </p>
    </StoryLayout>
  );
}; 