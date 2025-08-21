// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
    {/* // <div className="min-h-screen bg-white"> */}
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects/>
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    {/* </div> */}
    </>
  );
}

export default App;