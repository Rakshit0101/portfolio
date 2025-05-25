import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import LRC from './components/LRC';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <LRC />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;