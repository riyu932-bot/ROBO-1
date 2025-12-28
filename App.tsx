import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Clientele from './components/Clientele';
import Testimonials from './components/Testimonials';
import BlogHighlights from './components/BlogHighlights';
import Contact from './components/Contact';
import QuickLinksSection from './components/QuickLinksSection';
import Footer from './components/Footer';
import CursorSimulation from './components/CursorSimulation';

const App: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Handle scroll reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealItems = document.querySelectorAll('.reveal');
    revealItems.forEach(item => observer.observe(item));

    // Custom cursor trail logic
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-matteBlack selection:bg-neonLavender selection:text-white">
      {/* Custom Cursor Trail */}
      <div 
        className="custom-cursor-trail hidden lg:block"
        style={{ transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)` }}
      />
      <CursorSimulation />

      <Header />
      
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <About />
        <Clientele />
        <Testimonials />
        <BlogHighlights />
        <Contact />
        <QuickLinksSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;