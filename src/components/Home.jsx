import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });

  return (
    <section id="home">
      <h1>
        <span className="fodadisplay">MMK</span>
        <span className="antone">Websites</span>
      </h1>
      <p>Web Designing | Web Development</p>
      <div className="social-media">
        <a
          href="https://www.instagram.com/mmk_websites"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <div data-lucide="instagram" />
        </a>
        <a
          href="https://wa.me/7356928611"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <i className="fab fa-whatsapp" />
        </a>
        <a href="tel:+7356928611" aria-label="Phone">
          <div data-lucide="phone" />
        </a>
      </div>
    </section>
  );
} 