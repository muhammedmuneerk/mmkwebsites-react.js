import React from 'react';

export default function Header() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
      <nav>
        <ul>
          <li><a href="#home" onClick={(e)=>handleScroll(e,'home')}>Home</a></li>
          <li><a href="#about" onClick={(e)=>handleScroll(e,'about')}>About</a></li>
          <li><a href="#skills" onClick={(e)=>handleScroll(e,'skills')}>services</a></li>
          <li><a href="#projects" onClick={(e)=>handleScroll(e,'projects')}>Projects</a></li>
          <li><a href="#contact" onClick={(e)=>handleScroll(e,'contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
} 