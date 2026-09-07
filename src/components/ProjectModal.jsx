import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.classList.add('no-scroll');
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal is-open" aria-hidden="false">
      <div className="modal__backdrop" onClick={onClose}></div>
      <div className="modal__panel" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <button type="button" className="modal__close" onClick={onClose} aria-label="Close dialog">
          <X size={20} />
        </button>

        <div className="modal__content">
          <span className="modal__tag">{project.tag || 'Project'}</span>
          <h2 id="modalTitle">{project.title}</h2>
          {project.date && <p className="modal__meta">{project.date}</p>}

          <p className="modal__desc">{project.description}</p>

          {project.tech && (
            <ul className="modal__tech">
              {project.tech.map((t, idx) => (
                <li key={idx}>{t}</li>
              ))}
            </ul>
          )}

          {project.outcome && (
            <p className="modal__outcome">
              <strong>Outcome:</strong> {project.outcome}
            </p>
          )}

          <div className="modal__actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--small"
              >
                Visit Live Website <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
