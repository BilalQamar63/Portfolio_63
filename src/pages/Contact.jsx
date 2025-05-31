import React, { useState } from 'react';
import WaterEffect from '../components/WaterEffect';
import ConfettiPieces from '../components/ConfettiPieces';
import '../styles/Contact.css';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setLoading(true);
    try {
      const response = await fetch('https://formspree.io/f/xyzwravr', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      setLoading(false);

      if (response.ok) {
        form.reset();
        setStatus('SUCCESS');
        setModalMessage("Thanks! We'll get back to you soon.");
      } else {
        setStatus('ERROR');
        setModalMessage("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      setStatus('ERROR');
      setModalMessage("Sorry, you seem to be offline. Please check your internet connection.");
    }

    setShowModal(true);
  };

  const handleOkClick = () => {
    setShowModal(false);
    if (status === 'SUCCESS') {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
        setStatus('');
      }, 5000);
    } else {
      setStatus('');
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="background-layer">
        <WaterEffect />
      </div>

      <div className="contact-content">
        <div className="contact-card">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? <span className="loader"></span> : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>{modalMessage}</p>
            <button onClick={handleOkClick}>OK</button>
          </div>
        </div>
      )}

      {showConfetti && <ConfettiPieces />}
    </div>
  );
};

export default Contact;
