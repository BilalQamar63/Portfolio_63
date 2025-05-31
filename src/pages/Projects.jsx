import React, { useEffect, useRef, useState } from 'react';
import '../styles/Projects.css';

const projectData = [
  {
    title: 'Trading Website',
    link: 'https://tresmind-sol-test-ij87.vercel.app/',
    description:
      'A responsive trading platform with live charts, real-time pricing, and secure login built using Next.js, WebSockets, and Tailwind CSS.',
    image: '/assets/project_1.png',
  },
  {
    title: 'Software House Website',
    link: 'https://quick-web-hub.vercel.app/',
    description:
      'Official website of our software house, showcasing our services, portfolio, and team using React, Framer Motion, and modern UI design.',
    image: '/assets/project_2.png',
  },
  {
    title: 'Burger Point Website',
    link: 'https://tastyburger63.web.app/',
    description:
      'A fast-food website for a burger restaurant featuring an interactive menu, contact section, and order system, made with React and Firebase.',
    image: '/assets/project_3.png',
  },
];

const Projects = () => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting && !visibleIndexes.includes(index)) {
            setVisibleIndexes((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleIndexes]);

  return (
    <div className="projects-wrapper">
      <div className="projects-heading">
        <h1>My Projects & Practice — Just See It!</h1>
        <p>
          Explore a few creations that reflect my learning, practice, and passion for building web experiences.
        </p>
      </div>

      {projectData.map((project, index) => (
        <div
          key={index}
          className={`projects-container ${
            visibleIndexes.includes(index) ? 'animate-slide-fade' : ''
          }`}
          ref={(el) => (itemRefs.current[index] = el)}
          data-index={index}
        >
          <div className="project-text">
            <h2>{project.title}</h2>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Hosted Link
            </a>
            <p>{project.description}</p>
          </div>

          <div className="project-image">
            <img src={project.image} alt={`${project.title} Screenshot`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
