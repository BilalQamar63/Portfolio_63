import React from 'react';
import FallingMotion from '../components/FallingMotion';
import '../styles/Skill.css';

const experience = [
  {
    title: 'MERN Stack Developer Intern at Coderatory',
    duration: 'Sep 2024 – Dec 2024',
    description: 'Developed full-stack applications using MongoDB, Express.js, Nextjs, React, and Node.js.',
  },
  {
    title: 'MERN Stack Developer Intern at Brainwave',
    duration: 'Jan 2025 – Feb 2025',
    description: 'Worked on React-based UIs, optimized performance, and implemented reusable components.',
  },
];

const skillList = [
  'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Next.js', "Figma", "AWS",
  'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git & GitHub',
];

const Skills = () => {
  
  const half = Math.ceil(skillList.length / 2);
  const firstCol = skillList.slice(0, half);
  const secondCol = skillList.slice(half);

  return (
    <div className="skills-container">
      <div className="falling-section">
        <FallingMotion />
      </div>

      <div className="experience-section">
        <h2>Experience</h2>
        {experience.map((item, index) => (
          <div key={index} className="experience-card">
            <h3>{item.title}</h3>
            <span className="duration">{item.duration}</span>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="text-section">
        <h2>Skills & Expertise</h2>
        <div className="skills-columns">
          <div className="skills-col">
            {firstCol.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </div>
          <div className="skills-col">
            {secondCol.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
