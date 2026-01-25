import React, { useState, useEffect } from 'react';
import './Certificates.css';

const Certificates = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const certificates = [
    {
      id: 1,
      title: 'React.js Mastery',
      issuer: 'Nexus AI Digital',
      date: 'October 2025',
      description: 'Completed comprehensive React.js training with focus on component architecture, state management, and performance optimization.',
      type: 'image',
      file: '/images/certificate.jpeg'
    },
    {
      id: 2,
      title: 'Frontend Development Excellence',
      issuer: 'Nexus AI Digital',
      date: 'October 2025',
      description: 'Successfully completed internship program covering modern frontend practices, responsive design, and UI/UX implementation.',
      type: 'image',
      file: '/images/Abdullah.png'
    },
    {
      id: 3,
      title: 'Web Performance & Optimization',
      issuer: 'Nexus AI Digital',
      date: 'October 2025',
      description: 'Earned certification for implementing best practices in web performance, optimization techniques, and scalable component design.',
      type: 'image',
      file: '/images/Abdullah_Javed_certificate-1.png'
    }
  ];

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % certificates.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoPlay, certificates.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certificates.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certificates.length) % certificates.length);
    setAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h2>Certificates</h2>
        
        <div className="carousel-container">
          <div className="carousel-wrapper">
            <div 
              className="carousel-track"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}
            >
              {certificates.map((cert) => (
                <div key={cert.id} className="certificate-card">
                  {cert.type === 'image' ? (
                    <img 
                      src={cert.file} 
                      alt={cert.title}
                      className="certificate-image"
                    />
                  ) : (
                    <div className="certificate-pdf">
                      <div className="pdf-icon">📄</div>
                      <p className="pdf-label">PDF Certificate</p>
                      <a 
                        href={cert.file} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="pdf-button"
                      >
                        View PDF
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Previous Button */}
          <button 
            className="carousel-button prev"
            onClick={prevSlide}
            aria-label="Previous certificate"
          >
            ‹
          </button>

          {/* Next Button */}
          <button 
            className="carousel-button next"
            onClick={nextSlide}
            aria-label="Next certificate"
          >
            ›
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="carousel-dots">
          {certificates.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
