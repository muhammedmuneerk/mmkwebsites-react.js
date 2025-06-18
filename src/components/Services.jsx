import React, { useEffect } from 'react';
import { skills } from '../data';

export default function Services() {
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });

  return (
    <section id="skills">
      <h2>Services</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <div className="skill-icon">
              {skill.iconLibrary === 'lucide' ? (
                <div data-lucide={skill.icon} />
              ) : (
                <i className={`fab fa-${skill.icon}`} />
              )}
            </div>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-description">{skill.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 