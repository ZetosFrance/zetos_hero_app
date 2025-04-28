import { useEffect } from 'react';
import { StoryLayout } from '../components/StoryLayout';
import { updateDocumentHead } from '../utils/documentHead';

export const BozzettoStory = () => {
  useEffect(() => {
    updateDocumentHead('BOZZETTO', '/company-logos/bozzetto.svg');
    // Cleanup when component unmounts
    return () => {
      updateDocumentHead('Zetos Hero App', '/favicon.ico');
    };
  }, []);

  return (
    <StoryLayout
      logo="/company-logos/bozzetto.svg"
      name="BOZZETTO"
      category="Chemical"
    >
      <p>
        BOZZETTO, established in 1919 in Italy, stands as a testament to a century of innovation and excellence in the chemical industry. Listed on the Canadian Stock Exchange, this venerable institution has evolved from a local chemical producer into a global leader in specialty chemicals, while maintaining its commitment to quality and sustainability.
      </p>

      <h2>Century of Innovation</h2>
      <p>
        Through 100 years of operation, BOZZETTO has pioneered numerous breakthroughs in chemical processing and sustainable manufacturing. Their signature "EcoSynth" technology has revolutionized how industrial chemicals are produced, reducing environmental impact by 80% while maintaining superior product quality. The company's research facilities in Italy continue to push the boundaries of green chemistry.
      </p>

      <h2>Global Presence</h2>
      <p>
        Today, BOZZETTO operates in over 30 countries, with manufacturing facilities across Europe, Asia, and the Americas. Their products serve diverse industries, from textile processing to water treatment, generating annual revenues exceeding $200 million. The company's commitment to sustainability has earned them numerous environmental certifications and industry accolades.
      </p>

      <h2>Sustainable Future</h2>
      <p>
        As BOZZETTO enters its second century, the focus is on developing next-generation sustainable chemical solutions. Their "Green Chemistry 2030" initiative aims to make all production processes carbon-neutral while expanding their bio-based product line. The company continues to invest in R&D, focusing on circular economy principles and innovative applications in emerging markets.
      </p>
    </StoryLayout>
  );
}; 