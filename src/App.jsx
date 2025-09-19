import React, { Suspense, lazy } from 'react';
import { ClipLoader } from 'react-spinners';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import { useExperience } from './components/ExperienceContext.jsx'; // importando o contexto
import IntroOverlay from './components/IntroOverlay.jsx'; 

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const CorpPixel = lazy(() => import('./pages/PixelStudio'));
const Projects = lazy(() => import('./pages/Projects'));  
const Contact = lazy(() => import('./pages/Contact'));
const Footer = lazy(() => import('./components/Footer'));



function App() {
  const { started } = useExperience();

  return (
    <>
      <GlobalStyles />

      {!started && <IntroOverlay />}
      
      {started && (
        <>
          <Header />
          <main>
            <Suspense fallback={
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <ClipLoader color="#0077b6" size={48} className='pulse-loader' />
              </div>
            }>
              <Home />
              <About />
              <CorpPixel />
              <Projects />
              <Contact />
              <Footer />
            </Suspense>
          </main>
        </>
      )}
    </>
  );
}

export default App;
