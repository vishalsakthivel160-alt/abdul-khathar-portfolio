import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  if (!certifications || certifications.length === 0) return null;

  return (
    <section className="section" id="certifications">
      <div className="container">
        <div className="section-head reveal">
          <h2>Certifications &amp; Credentials</h2>
          <p className="section-head__lede">
            Verified qualifications and professional learning paths in Web Development, Data Science, and Marketing.
          </p>
        </div>

        <div className="certifications__grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className={`certification-card ${cert.image ? 'certification-card--has-image' : ''} reveal-up delay-${idx + 1}`}>
              {cert.image && (
                <div className="certification-card__image-wrap" onClick={() => setSelectedCert(cert)}>
                  <img src={cert.image} alt={cert.title} />
                  <span className="certification-card__badge">View Certificate</span>
                </div>
              )}
              <div className="certification-card__body">
                <h3>{cert.title}</h3>
                {cert.issuer && <p className="certification-card__issuer">{cert.issuer}</p>}
                {cert.date && <p className="certification-card__date">{cert.date}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal Lightbox */}
      {selectedCert && (
        <div className="modal is-open" aria-hidden="false">
          <div className="modal__backdrop" onClick={() => setSelectedCert(null)}></div>
          <div className="modal__panel modal__panel--cert" role="dialog" aria-modal="true">
            <button type="button" className="modal__close" onClick={() => setSelectedCert(null)} aria-label="Close dialog">
              <X size={20} />
            </button>
            <div className="modal__content">
              <span className="modal__tag">Verified Certificate</span>
              <h2>{selectedCert.title}</h2>
              <p className="modal__meta">{selectedCert.issuer} {selectedCert.date ? `• ${selectedCert.date}` : ''}</p>
              <div className="cert-modal__img-container">
                <img src={selectedCert.image} alt={selectedCert.title} className="cert-modal__img" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
