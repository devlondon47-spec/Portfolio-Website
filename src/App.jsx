import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeView from './components/ResumeView';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [showResume, setShowResume] = useState(false);

  return (
    <main>
      <Navbar />
      <Hero onOpenResume={() => setShowResume(true)} />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer onOpenResume={() => setShowResume(true)} />

      <AnimatePresence>
        {showResume && (
          <ResumeView onClose={() => setShowResume(false)} />
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
