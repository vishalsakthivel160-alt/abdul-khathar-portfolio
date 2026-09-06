import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

export default function Freelancing() {
  const { freelancing } = portfolioData;

  return (
    <section className="section section--tinted" id="freelancing">
      <div className="container">
        <div className="freelancing-banner">
          <div className="freelancing-banner__content">
            <h2>{freelancing.heading}</h2>
            <p>{freelancing.subheading}</p>
            <a href="#contact" className="btn btn--primary">
              Start a Project
            </a>
          </div>

          <div className="freelancing-features">
            {freelancing.features.map((feature, idx) => (
              <div key={idx} className="freelancing-feature-item">
                <CheckCircle2 size={22} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
