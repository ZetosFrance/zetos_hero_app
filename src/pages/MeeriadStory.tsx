import { useEffect } from 'react';
import { StoryLayout } from '../components/StoryLayout';
import { updateDocumentHead } from '../utils/documentHead';

export const MeeriadStory = () => {
  useEffect(() => {
    updateDocumentHead('MEERIAD', '/company-logos/meeriad.svg');
    // Cleanup when component unmounts
    return () => {
      updateDocumentHead('Zetos Hero App', '/favicon.ico');
    };
  }, []);

  return (
    <StoryLayout
      logo="/company-logos/meeriad.svg"
      name="MEERIAD"
      category="Digital Healthcare"
    >
      <p>
        MEERIAD emerged in 2019 with a mission to democratize healthcare through artificial intelligence and data analytics. Founded by Dr. Elena Martinez, a renowned AI researcher, and Michael Chang, a veteran healthcare administrator, the company has pioneered innovative solutions that bridge the gap between patients and healthcare providers.
      </p>

      <h2>Healthcare Innovation</h2>
      <p>
        MEERIAD's flagship platform, "HealthBridge AI," uses advanced machine learning algorithms to analyze patient data and provide personalized healthcare recommendations. This revolutionary system has reduced diagnosis times by 40% and improved treatment accuracy by 55% in partner hospitals. The platform's unique ability to process and interpret complex medical data has made it an invaluable tool for healthcare professionals worldwide.
      </p>

      <h2>Global Impact</h2>
      <p>
        Since its inception, MEERIAD has expanded its reach to over 200 healthcare facilities across 15 countries. Their technology has helped diagnose rare conditions in underserved communities and provided vital support during the global health crisis. The platform's telemedicine capabilities have enabled over 1 million virtual consultations, making quality healthcare accessible to remote and rural areas.
      </p>

      <h2>Future of Healthcare</h2>
      <p>
        MEERIAD is currently developing next-generation predictive healthcare models that can identify potential health issues before they become critical. Their latest research focuses on integrating genomic data analysis with their AI platform, paving the way for truly personalized medicine. The company's commitment to innovation continues to shape the future of healthcare delivery and patient care.
      </p>
    </StoryLayout>
  );
}; 