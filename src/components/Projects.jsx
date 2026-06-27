import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Global Mart E-commerce",
      description: "A fully functional e-commerce website developed during my internship at Nexus AI Digital. Features include product catalog, shopping cart, checkout functionality, and responsive design. Deployed and live on Netlify.",
      technologies: ["React.js", "Frontend Development", "Responsive Design", "Netlify"],
      category: "Web Application",
      icon: "🛒",
      link: "#",
      github: "#"
    },
    {
      title: "Library Management System",
      description: "Designed and implemented a desktop application for managing book records, user check-ins, and check-outs. Features include book cataloging, user management, and automated checkout system.",
      technologies: ["Java", "GUI", "Object-Oriented Programming"],
      category: "Desktop Application",
      icon: "📚"
    },
    {
      title: "Crypt Analysis Tool",
      description: "Developed a web tool to analyze and break basic cryptographic schemes. Provides various encryption/decryption methods and cryptographic analysis features.",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask"],
      category: "Web Application",
      icon: "🔐",
      github: "https://github.com/Abdullahjaved15/crypt-analysis-tool"
    },
    {
      title: "Restaurant Management System",
      description: "Built a low-level program simulating menu and order management functionalities. Includes inventory tracking, order processing, and basic reporting.",
      technologies: ["Assembly Language", "Low-level Programming"],
      category: "System Programming",
      icon: "🍽️"
    },
    {
      title: "Hire Match",
      description: "A smart job matching platform that connects job seekers with suitable positions based on skills, experience, and preferences. Features intelligent filtering and recommendation algorithms.",
      technologies: ["Web Development", "Algorithms", "Database"],
      category: "Web Application",
      icon: "💼",
      github: "https://github.com/Abdullahjaved15/Hire-Match"
    },
    {
      title: "Assignment Plagiarism Checker",
      description: "Developed a comprehensive plagiarism detection system for academic assignments. Utilizes advanced comparison algorithms to identify similar content and provide detailed plagiarism reports.",
      technologies: ["Python", "NLP", "Algorithms", "Web Development"],
      category: "Web Application",
      icon: "🔍",
      github: "https://github.com/Abdullahjaved15/Assignment-Plagiarism-Checker"
    },
    {
      title: "Q-Health: Smart Queue & Appointment System",
      description: "Comprehensive mobile solution for hospital management using Flutter and Firebase. Engineered a role-based system supporting Admin, Doctor, and Patient workflows with real-time queue tracking and appointment status updates via Firestore. Integrated Firebase Authentication for secure user login and data privacy.",
      technologies: ["Flutter", "Firebase", "Firestore", "Mobile Development"],
      category: "Mobile Application",
      icon: "🏥",
      github: "https://github.com/Abdullahjaved15/Queue-and-Appointment-Management"
    },
    {
      title: "Warranty / Expiry Tracker App",
      description: "Utility application for tracking product longevity using Flutter. Utilizes Sqflite for robust local database storage and offline accessibility. Features full CRUD functionality with an intuitive UI for managing product records.",
      technologies: ["Flutter", "Sqflite", "Mobile Development", "Database"],
      category: "Mobile Application",
      icon: "⏰",
      github: "https://github.com/Abdullahjaved15/Expiry-Warranty-Tracker"
    },
    {
      title: "AI-based University Timetable Scheduler",
      description: "Intelligent timetable scheduling system for universities built using Python and AI techniques. Automates the creation of conflict-free academic timetables by considering constraints such as faculty availability, course requirements, classrooms, and time slots.",
      technologies: ["Python", "AI", "Algorithms", "Optimization"],
      category: "AI/ML Project",
      icon: "🎓",
      github: "https://github.com/Abdullahjaved15/AI-based-University-Timetable-Scheduler"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-icon">
                <span>{project.icon}</span>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <div className="project-link">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                      View Project
                    </a>
                  </div>
                )}
                {project.github && (
                  <div className="project-link">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                      View on GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 