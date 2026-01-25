import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Abdullah Javed</span>
            </h1>
            <h2 className="hero-subtitle">
              Computer Science Student & Developer
            </h2>
            <p className="hero-description">
              Motivated Computer Science undergraduate with a strong academic record (CGPA: 3.84) 
              at COMSATS University. Experienced full-stack developer skilled in C++, Java, web development, 
              mobile development (Flutter), and AI/ML projects with hands-on experience in innovative software solutions.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <h3>3.84</h3>
              <p>CGPA</p>
            </div>
            <div className="stat-item">
              <h3>9+</h3>
              <p>Projects</p>
            </div>
            <div className="stat-item">
              <h3>10+</h3>
              <p>Technologies</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default Hero; 