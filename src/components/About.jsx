import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { aboutBio, aboutStats } = portfolioData;

  return (
    <section className="section" id="about">
      <div className="container about">
        <div className="section-head">
          <h2>About Me</h2>
          <p className="section-head__lede">
            A developer and marketer dedicated to building high-performing sites that deliver real business growth.
          </p>
        </div>

        <div className="about__grid">
          <div className="about__text">
            {aboutBio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="about__facts">
            {aboutStats.map((stat, index) => (
              <div key={index} className="fact-card">
                <span className="fact-card__value">{stat.value}</span>
                <span className="fact-card__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
