import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import CanvasParticles from './components/CanvasParticles';
import CyberGrid from './components/CyberGrid';

function App() {
  return (
    <div className="App relative min-h-screen">
      {/* 3D Background Components */}
      <Background3D />
      <CanvasParticles />
      <CyberGrid />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;