import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import '../styles.css';

export default function App() {
  return (
    <>
      <ParticleBackground />
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
} 