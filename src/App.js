import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

const App = () => {
  return (
    <div>
    <Navbar />

    <section className="section" id="home">
      <Home />
    </section>

    <section className="section" id="about">
      <About />
    </section>
    <section className="section" id="skills">
      <Skills />
    </section>

    <section className="section" id="projects">
      <Projects />
    </section>

    <section className="section" id="contact">
      <Contact />
    </section>

    <Footer/>
  </div>
  )
}

export default App
