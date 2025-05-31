import { useEffect } from 'react';
import { StoryLayout } from '../components/StoryLayout';
import { updateDocumentHead } from '../utils/documentHead';

export const AsutexStory = () => {
  useEffect(() => {
    updateDocumentHead('ASUTEX', '/company-logos/asutex.svg');
    // Cleanup when component unmounts
    return () => {
      updateDocumentHead('Zetos Hero App', '/favicon.ico');
    };
  }, []);

  return (
    <StoryLayout
      logo="/company-logos/asutex.svg"
      name="ASUTEX"
      category="Textile Innovation"
    >
      <p>
        ASUTEX, established in 1987, represents a groundbreaking fusion of traditional textile craftsmanship and cutting-edge technology. Founded by textile engineer Dr. James Wong and sustainable fashion pioneer Lisa Chen, the company has revolutionized the textile industry through their innovative approach to sustainable fabric production.
      </p>

      <h2>Breakthrough Technology</h2>
      <p>
        At the heart of ASUTEX's innovation is their patented "EcoFiber Processing System" - a revolutionary technology that transforms recycled materials into high-performance, eco-friendly fabrics. This system reduces water consumption by 75% compared to traditional methods and eliminates harmful chemical processes while maintaining superior fabric quality and durability.
      </p>

      <h2>Industry Impact</h2>
      <p>
        ASUTEX has partnered with over 30 major fashion brands globally, helping them transition to sustainable textile solutions. Their innovations have led to the recycling of more than 50 million plastic bottles into premium fabrics, and their processes have prevented an estimated 1,000 tons of textile waste from reaching landfills annually. The company's commitment to sustainability has earned them multiple environmental stewardship awards.
      </p>

      <h2>Future Innovation</h2>
      <p>
        Looking ahead, ASUTEX is developing next-generation smart fabrics that adapt to environmental conditions while maintaining their eco-friendly properties. Their R&D team is pioneering new applications in medical textiles and protective wear, combining sustainability with functionality. The company's vision is to make sustainable textiles the industry standard, not just an alternative.
      </p>
    </StoryLayout>
  );
}; 