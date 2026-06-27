import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <h3>Summary</h3>
              <p>
                Computer Science undergraduate at COMSATS University (CGPA: 3.84) with hands-on experience in full-stack development, mobile applications (Flutter), and AI/ML. Completed internships as a Mobile Application Developer at Excelerate and DevelopersHub, with additional frontend experience at Nexus AI Digital. Skilled in C++, Java, web, and mobile development — focused on building scalable, practical software solutions.
              </p>
            </div>
            
            <div className="about-card">
              <h3>Education</h3>
              <div className="education-item">
                <h4>COMSATS University Islamabad, Sahiwal Campus</h4>
                <p className="degree">Bachelor of Science in Computer Science</p>
                <p className="gpa">CGPA: 3.84</p>
                <p className="status">6th Semester • Currently Enrolled</p>
              </div>
            </div>

            <div className="about-card">
              <h3>Core Strengths</h3>
              <div className="strengths-grid">
                <div className="strength-item">
                  <span className="strength-icon">💻</span>
                  <h4>Programming</h4>
                  <p>Strong foundation in C++, Java, JavaScript, and Python</p>
                </div>
                <div className="strength-item">
                  <span className="strength-icon">🔧</span>
                  <h4>Problem Solving</h4>
                  <p>Analytical thinking and efficient algorithm development</p>
                </div>
                <div className="strength-item">
                  <span className="strength-icon">👥</span>
                  <h4>Teamwork</h4>
                  <p>Collaborative approach with excellent communication skills</p>
                </div>
                <div className="strength-item">
                  <span className="strength-icon">📚</span>
                  <h4>Learning</h4>
                  <p>Quick to adapt and learn new technologies and frameworks</p>
                </div>
                <div className="strength-item">
                  <span className="strength-icon">🌐</span>
                  <h4>Full-Stack Development</h4>
                  <p>Experience with frontend, backend, and database technologies</p>
                </div>
                <div className="strength-item">
                  <span className="strength-icon">📱</span>
                  <h4>Mobile Development</h4>
                  <p>Proficient in Flutter for cross-platform mobile applications</p>
                </div>
                <div className="strength-item">
                  <span className="strength-icon">🤖</span>
                  <h4>AI & Machine Learning</h4>
                  <p>Experience with AI-based solutions and optimization algorithms</p>
                </div>
                <div className="strength-item">
                  <span className="strength-icon">🗄️</span>
                  <h4>Database Design</h4>
                  <p>SQL and NoSQL database design and optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 