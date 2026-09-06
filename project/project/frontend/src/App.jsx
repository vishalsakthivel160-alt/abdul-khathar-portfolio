import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Freelancing from './components/Freelancing';
import DigitalMarketing from './components/DigitalMarketing';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="app-container">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Services />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Freelancing />
        <DigitalMarketing />
        <Education />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <Footer />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
