import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer-tagline">
        Passionate Developer Ready to Turn Ideas into Reality — Hire Me Today!
      </h3>

      <div className="footer-icons">
        <a
          href="https://leetcode.com/u/Bilal_Qamar/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
        >
          <SiLeetcode />
        </a>

        <a
          href="https://www.linkedin.com/in/bilal-qamar-b15890278/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=bilalqamardeen@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Gmail"
        >
          <FaEnvelope />
        </a>
      </div>

      <p className="footer-copy">&copy; {new Date().getFullYear()} Bilal Qamar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
