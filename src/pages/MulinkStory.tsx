import { useEffect } from 'react';
import { StoryLayout } from '../components/StoryLayout';
import { updateDocumentHead } from '../utils/documentHead';

export const MulinkStory = () => {
  useEffect(() => {
    updateDocumentHead('MULINK', '/company-logos/mulink.svg');
    // Cleanup when component unmounts
    return () => {
      updateDocumentHead('Zetos Hero App', '/favicon.ico');
    };
  }, []);

  return (
    <StoryLayout
      logo="/company-logos/mulink.svg"
      name="MULINK"
      category="Media Marketing"
    >
      <p>
        MULINK burst onto the music scene in 2020 as a revolutionary force in digital music distribution. Founded by music industry veterans and social media experts, the company has redefined how artists connect with audiences through its innovative influencer-driven distribution model.
      </p>

      <h2>Disruptive Innovation</h2>
      <p>
        MULINK's groundbreaking "Social Music Distribution Network" connects artists directly with a curated network of million-scale influencers and KOL leaders. Their AI-powered matching system ensures that music reaches the most relevant audiences, resulting in an average of 300% higher engagement rates compared to traditional distribution methods. The platform's unique approach has helped launch over 1,000 successful music campaigns globally.
      </p>

      <h2>Industry Impact</h2>
      <p>
        With a network of over 10,000 influencers reaching a combined audience of 500 million followers, MULINK has become a powerhouse in international music distribution. Their platform has helped independent artists achieve over 1 billion streams collectively, and their partnerships with major record labels have revolutionized how music marketing campaigns are executed in the digital age.
      </p>

      <h2>Future Vision</h2>
      <p>
        MULINK is pioneering new frontiers in music distribution with their upcoming "Creator Collaboration Platform," which will enable real-time collaboration between artists and influencers. Their investment in blockchain technology for royalty tracking and smart contracts promises to bring unprecedented transparency to music distribution. The company continues to expand its global reach, focusing on emerging markets and new social media platforms.
      </p>
    </StoryLayout>
  );
}; 