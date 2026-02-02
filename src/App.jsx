import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

import Background from './components/Background';

function App() {

  return (
    <div className="bg-dark min-h-screen text-white selection:bg-neon-blue selection:text-black relative">
      <Background />

      <Navbar />

      <main className="container mx-auto px-4 md:px-0 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
    </div>
  );
}

export default App;
