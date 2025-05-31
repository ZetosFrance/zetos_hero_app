import { useEffect } from 'react';
import { StoryLayout } from '../components/StoryLayout';
import { updateDocumentHead } from '../utils/documentHead';

export const ChintecStory = () => {
  useEffect(() => {
    updateDocumentHead('CHINTEC', '/company-logos/chintec.svg');
    // Cleanup when component unmounts
    return () => {
      updateDocumentHead('Zetos Hero App', '/favicon.ico');
    };
  }, []);

  return (
    <StoryLayout
      logo="/company-logos/chintec.svg"
      name="CHINTEC"
      category="Technology & Innovation"
    >
      <p>
        CHINTEC emerged from a small garage startup in 2008 to become one of the most innovative AI-driven manufacturing solutions providers in Asia. Founded by Dr. Sarah Chen, a former robotics engineer, the company's journey began with a vision to revolutionize traditional manufacturing processes through artificial intelligence and automation.
      </p>

      <h2>The Innovation Journey</h2>
      <p>
        What sets CHINTEC apart is their groundbreaking "Smart Factory OS" - an integrated system that combines machine learning, IoT sensors, and predictive analytics to optimize manufacturing operations. This proprietary technology has helped their clients reduce production costs by an average of 35% while improving quality control metrics by 60%.
      </p>

      <h2>Impact and Growth</h2>
      <p>
        From their initial team of 5 passionate engineers, CHINTEC has grown to employ over 200 professionals across Asia. Their solutions are now implemented in more than 50 manufacturing facilities, ranging from electronics to automotive industries. The company's commitment to innovation has earned them multiple industry awards and recognition as a leader in Industry 4.0 transformation.
      </p>

      <h2>Future Vision</h2>
      <p>
        Looking ahead, CHINTEC is investing heavily in developing next-generation AI algorithms that can adapt to increasingly complex manufacturing challenges. Their R&D team is currently working on incorporating advanced computer vision and natural language processing to create more intuitive human-machine interfaces, promising to make smart manufacturing accessible to an even broader range of industries.
      </p>
    </StoryLayout>
  );
}; 