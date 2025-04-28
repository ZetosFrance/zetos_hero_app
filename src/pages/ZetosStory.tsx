import { useEffect } from 'react';
import { StoryLayout } from '../components/StoryLayout';
import { updateDocumentHead } from '../utils/documentHead';

export const ZetosStory = () => {
  useEffect(() => {
    updateDocumentHead('ZETOS', '/company-logos/zetos.svg');
    // Cleanup when component unmounts
    return () => {
      updateDocumentHead('Zetos Hero App', '/favicon.ico');
    };
  }, []);

  return (
    <StoryLayout
      logo="/company-logos/zetos.svg"
      name="ZETOS"
      category="Development Workshop"
    >
      <p>
        ZETOS emerged as a visionary AI-driven development workshop in 2020, bringing together world-class talent to serve both innovative startups and Fortune 500 companies. Founded by a team of seasoned tech entrepreneurs and AI specialists, ZETOS has established itself as a bridge between cutting-edge technology and practical business solutions.
      </p>

      <h2>Innovation Approach</h2>
      <p>
        At the core of ZETOS's success is their unique "AI-First Development Framework" - a revolutionary approach that combines artificial intelligence with agile development methodologies. This framework enables rapid prototyping and development while maintaining enterprise-grade quality, resulting in 40% faster project delivery times and a 60% improvement in code quality metrics.
      </p>

      <h2>Global Impact</h2>
      <p>
        ZETOS has successfully delivered over 100 projects across various industries, from fintech startups to healthcare giants. Their diverse portfolio includes AI-powered analytics platforms, smart city solutions, and enterprise-grade applications. The workshop's commitment to excellence has attracted partnerships with leading tech companies and venture capital firms, establishing ZETOS as a trusted name in the global tech ecosystem.
      </p>

      <h2>Future Vision</h2>
      <p>
        Looking ahead, ZETOS is expanding its capabilities in emerging technologies such as quantum computing integration and advanced machine learning systems. Their research division is actively developing new frameworks for sustainable AI development, aiming to make advanced technology more accessible and environmentally conscious. Through continuous innovation and talent development, ZETOS is shaping the future of software development.
      </p>
    </StoryLayout>
  );
}; 