import { useEffect } from 'react';
import '../styles/About.css';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
  useEffect(() => {
    const blocks = document.querySelectorAll('.about-block');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.3 }
    );

    blocks.forEach((block) => observer.observe(block));

    return () => {
      blocks.forEach((block) => observer.unobserve(block));
    };
  }, []);

  return (
    <section className="about-section">
      {/* Block 1 */}
      <div className="about-block">
        <div className="about-text">
          <h2>Who Am I?</h2>
          <p>
            I’m a passionate MERN Stack Developer with a strong focus on clean code,
            responsive design, and scalable backend solutions.
          </p>
        </div>
        <div className="about-image">
          <img src="/assets/about1.jpg" alt="About Me 1" />
        </div>
      </div>

      {/* Block 2 */}
      <div className="about-block reverse">
        <div className="about-text">
          <h2>What I Do?</h2>
          <p>
            I build full-stack applications using React, Node.js, Express, and MongoDB.
            I also focus on UI/UX to ensure modern, intuitive user experiences.
          </p>
        </div>
        <div className="about-image">
          <img src="/assets/about2.jpg" alt="About Me 2" />
        </div>
      </div>

      {/* Block 3 */}
      <div className="about-block">
        <div className="about-text">
          <h2>Beyond Coding</h2>
          <p>
            When I’m not coding, I love exploring design trends, mentoring budding developers,
            and continuously learning new tech tools to stay ahead in the fast-moving web world.
          </p>
        </div>
        <div className="about-image">
          <img src="/assets/about3.jpg" alt="Creative Side" />
        </div>
      </div>

      {/* Education Block */}
      <div className="about-block education-block">
        <div className="education-overlay">
          <div className="about-text light-text education-text-center">
            <h2>
              <FaGraduationCap style={{ marginRight: '10px' }} />
              Education
            </h2>
            <p className="education-point">
              🎓 <strong>Matriculation - Computer Science (2021-2023):</strong><br />
              Built a strong academic foundation and curiosity for technology.
            </p>
            <p className="education-point">
              🧮 <strong>Intermediate - Computer Science (2023-2025):</strong><br />
              Developed logical thinking and problem-solving skills that led me to web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
