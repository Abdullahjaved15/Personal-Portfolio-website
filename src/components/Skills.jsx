import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", level: 85 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "Python", level: 60 },
        { name: "HTML/CSS", level: 85 }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "Flask", level: 70 }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "VS Code", level: 90 },
        { name: "MS Office", level: 85 },
        { name: "Draw.io", level: 80 }
      ]
    },
    {
      title: "Database & Backend",
      skills: [
        { name: "SQL", level: 75 }
      ]
    },
    {
      title: "Core CS Concepts",
      skills: [
        { name: "Object Oriented Programming", level: 85 },
        { name: "Data Structures", level: 80 },
        { name: "Computer Networks", level: 75 },
        { name: "Operating System", level: 70 },
        { name: "Information Security", level: 70 }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Public Speaking", level: 80 },
        { name: "Teamwork", level: 85 },
        { name: "Critical Thinking", level: 80 },
        { name: "Time Management", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 