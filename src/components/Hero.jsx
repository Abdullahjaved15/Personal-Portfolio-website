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
              Computer Science undergraduate at COMSATS University (CGPA: 3.84) with hands-on experience in full-stack development, mobile applications (Flutter), and AI/ML. Completed internships as a Mobile Application Developer at Excelerate and DevelopersHub, with additional frontend experience at Nexus AI Digital. Skilled in C++, Java, web, and mobile development — focused on building scalable, practical software solutions.
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
          <div className="hero-image">
            <div className="avatar-container">
              <div className="avatar-glow"></div>
              <img src="/images/Avatar.png" alt="Abdullah Javed" className="avatar-img" />
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