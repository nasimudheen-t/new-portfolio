import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load below-the-fold components
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));

const FallbackLoader = () => (
  <div className="w-full min-h-[20vh] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<FallbackLoader />}>
          <About />
          <Services />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <WhatsAppButton />
      </Suspense>
    </div>
  );
};

export default App;