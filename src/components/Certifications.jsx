import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;

  if (!certifications || certifications.length === 0) return null;

  return (
    <section className="section" id="certifications">
      <div className="container">
        <div className="section-head reveal">
          <h2>Certifications</h2>
        </div>

        <div className="certifications__grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className={`certification-card reveal-up delay-${idx + 1}`}>
              <h3>{cert.title}</h3>
              {cert.issuer && <p className="certification-card__issuer">{cert.issuer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
