import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xbljkajn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, _replyto: 'muhammedmuneerk15@gmail.com' }),
      });
      if (res.ok) {
        setStatus('success');
        e.target.reset();
      } else throw new Error();
    } catch {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
        </div>
        <button type="submit" id="submit-btn" disabled={status === 'sending'}>
          <span className="btn-text">{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
          <span className="btn-icon">&#10148;</span>
        </button>
      </form>
      {status === 'success' && (
        <div id="form-status" className="success">Thank you for your message! I will get back to you soon.</div>
      )}
      {status === 'error' && (
        <div id="form-status" className="error">Oops! There was a problem submitting your form. Please try again.</div>
      )}
    </section>
  );
} 