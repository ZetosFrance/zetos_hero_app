import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/GlobalStyles'
import styled from 'styled-components'
import { Profile } from './components/Profile'
import { Card } from './components/Card'
import { Footer } from './components/Footer'
import { ChintecStory } from './pages/ChintecStory'
import { AsutexStory } from './pages/AsutexStory'
import { MeeriadStory } from './pages/MeeriadStory'
import { ZetosStory } from './pages/ZetosStory'
import { IndeooStory } from './pages/IndeooStory'
import { MulinkStory } from './pages/MulinkStory'
import { BozzettoStory } from './pages/BozzettoStory'
import { UpToMoreStory } from './pages/UpToMoreStory'
import { CustomerSupport } from './pages/CustomerSupport'

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContent = styled.main`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;
  max-width: 1200px;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const CardsSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const CardRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  justify-content: center;

  @media (min-width: 768px) {
    grid-template-columns: minmax(320px, 1fr) minmax(320px, 1fr);
    max-width: 1200px;
  }
`;

const companies = [
  {
    logo: '/company-logos/chintec.svg',
    name: 'CHINTEC',
    category: 'IT Network',
    metric: 'Revenue',
    metricValue: '$3M',
    url: 'www.chintec.net'
  },
  {
    logo: '/company-logos/asutex.svg',
    name: 'ASUTEX',
    category: 'Chemical',
    metric: 'Revenue',
    metricValue: '$500M',
    url: 'www.asutex.com'
  },
  {
    logo: '/company-logos/meeriad.svg',
    name: 'MEERIAD',
    category: 'Mental Health',
    metric: 'Revenue',
    metricValue: '$2M',
    url: 'www.meeriad.com'
  },
  {
    logo: '/company-logos/zetos.svg',
    name: 'ZETOS',
    category: 'Development Workshop',
    metric: 'AUM',
    metricValue: '$100M',
    url: 'www.zetos.fr'
  },
  {
    logo: '/company-logos/indeoo.svg',
    name: 'INDEOO',
    category: 'Software Producer',
    metric: 'Revenue',
    metricValue: '$1M',
    url: 'www.indeoo.com'
  },
  {
    logo: '/company-logos/mulink.svg',
    name: 'MULINK',
    category: 'Media Marketing',
    metric: 'Revenue',
    metricValue: '$1M',
    url: 'www.mulink.link'
  },
  {
    logo: '/company-logos/bozzetto.svg',
    name: 'BOZZETTO',
    category: 'Chemical',
    metric: 'Revenue',
    metricValue: '$200M',
    url: 'www.bozzetto.com'
  },
  {
    logo: '/company-logos/uptomore.svg',
    name: 'UpToMore',
    category: 'Fintech',
    metric: 'Revenue',
    metricValue: '$5M',
    url: 'www.uptomore.com'
  }
];

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={
            <PageContainer>
              <MainContent>
                <Profile />
                <CardsSection>
                  <CardRow>
                    <Card {...companies[0]} />
                    <Card {...companies[1]} />
                  </CardRow>
                  <CardRow>
                    <Card {...companies[2]} />
                    <Card {...companies[3]} />
                  </CardRow>
                  <CardRow>
                    <Card {...companies[4]} />
                    <Card {...companies[5]} />
                  </CardRow>
                  <CardRow>
                    <Card {...companies[6]} />
                    <Card {...companies[7]} />
                  </CardRow>
                </CardsSection>
              </MainContent>
              <Footer />
            </PageContainer>
          } />
          <Route path="/stories/chintec" element={<ChintecStory />} />
          <Route path="/stories/asutex" element={<AsutexStory />} />
          <Route path="/stories/meeriad" element={<MeeriadStory />} />
          <Route path="/stories/zetos" element={<ZetosStory />} />
          <Route path="/stories/indeoo" element={<IndeooStory />} />
          <Route path="/stories/mulink" element={<MulinkStory />} />
          <Route path="/stories/bozzetto" element={<BozzettoStory />} />
          <Route path="/stories/uptomore" element={<UpToMoreStory />} />
          <Route path="/support" element={<CustomerSupport />} />
        </Routes>
      </ThemeProvider>
    </Router>
  )
}

export default App
