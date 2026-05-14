import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

const App = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <WhatsAppButton />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default App;