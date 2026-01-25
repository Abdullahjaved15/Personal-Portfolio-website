import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Front-End Web Developer (Intern)',
      company: 'Nexus AI Digital',
      location: 'London',
      duration: 'September 2025 – October 2025',
      highlights: [
        'Developed a complete e-commerce website (Global E-Mart) using React.js.',
        'Collaborated on UI/UX refinements and optimized performance to meet modern frontend standards.',
        'Created responsive pages and implemented reusable components for efficient state management.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="experience-content">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-header">
                <div>
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company} • {exp.location}</p>
                </div>
                <p className="duration">{exp.duration}</p>
              </div>
              <ul className="experience-highlights">
                {exp.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
