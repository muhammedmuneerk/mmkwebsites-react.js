import React, { useState } from 'react';
import { projects } from '../data';

export default function Projects() {
  const [active, setActive] = useState(null);
  const [preview, setPreview] = useState(false);

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            data-project={`project${index + 1}`}
            onClick={() => {
              setActive(project);
              setPreview(false);
            }}
          >
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <button className="btn">View Project</button>
            </div>
          </div>
        ))}
      </div>

      {active && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <span className="close" onClick={() => setActive(null)}>&times;</span>
            <h3>{active.name}</h3>
            <div className="modal-body">
              <img id="modal-image" src={active.image} alt="Project" />
              <p id="modal-description">{active.description}</p>
              <div className="modal-buttons">
                <a
                  id="live-site-btn"
                  href={active.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  View Live Site
                </a>
                <button className="btn" onClick={() => setPreview(true)}>
                  View Site in Modal
                </button>
              </div>
            </div>
            {preview && (
              <div id="site-preview" className="site-preview" style={{ display: 'block' }}>
                <button className="btn" onClick={() => setPreview(false)}>
                  Close Preview
                </button>
                <iframe id="site-iframe" src={active.live} title="site" frameBorder="0" />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
} 