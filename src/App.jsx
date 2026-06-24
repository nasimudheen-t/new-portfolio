import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load below-the-fold components
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const WhyHireMe = lazy(() => import('./components/WhyHireMe'));
const Contact = lazy(() => import('./components/Contact'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));

const FallbackLoader = () => (
  <div className="w-full min-h-[20vh] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-slate-800 border-t-brand-accent rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-inter antialiased select-none">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<FallbackLoader />}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <WhyHireMe />
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