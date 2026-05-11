import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "Abhay Yeskar | Java Full Stack Developer";
  }, []);

  return (
    <div className="bg-dark text-light">
      <Navbar />
      <Hero />
      <About/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;