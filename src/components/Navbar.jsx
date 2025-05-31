import  { useEffect, useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar`}>
      <div className="logo">
        <img src="/assets/logo.png" alt="Logo" width={150} />
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={handleLinkClick}>Home</a>
        <a href="#about" onClick={handleLinkClick}>About</a>
        <a href="#projects" onClick={handleLinkClick}>Projects</a>
        <a href="#skills" onClick={handleLinkClick}>Skills</a>
        <a href="#contact" onClick={handleLinkClick}>Contact</a>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? '✖' : '☰'}
      </div>
    </nav>
  );
};

export default Navbar;
