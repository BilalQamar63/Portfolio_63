import  { useEffect } from 'react'
import '../styles/Home.css'

const Home = () => {
  useEffect(() => {
    const text = document.querySelector('.home-text')
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) * 0.04
      const y = (e.clientY - window.innerHeight / 2) * 0.04
      text.style.transform = `translate(${x}px, ${y}px)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" className="home-section">
      

      <div className="home-content">
        <div className="home-text">
          <h1>Hi, I'm Bilal Qamar</h1>
          <p>
            I’m a <strong>MERN Stack Developer</strong> with 2 years of experience.
            I specialize in both <strong>Frontend</strong> and <strong>Backend</strong> development,
            building modern, responsive, and full-stack web applications.
          </p>
          <a 
            href="/assets/cv.pdf" 
            download 
            className="download-btn"
          >
            Download CV
          </a>
        </div>
        <div className="home-image split-reveal">
          <img src="/assets/man.jpg" alt="Developer" />
        </div>
      </div>
    </section>
  )
}

export default Home
