import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
// import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Certifications from './components/Certifications';

function App() {
  const [showCursor, setShowCursor] = useState(false);

  // Only show custom cursor on devices that likely have a mouse
  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover)');
    setShowCursor(mediaQuery.matches);
    
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setShowCursor(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {showCursor && <Cursor />}
        <Navbar />
        <main>
          <Hero />
          <About />
          <Certifications />
          {/* <Projects /> */}
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;