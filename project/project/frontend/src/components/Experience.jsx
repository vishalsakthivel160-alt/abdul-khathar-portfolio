import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section className="section section--tinted" id="experience">
      <div className="container">
        <div className="section-head">
          <h2>Experience</h2>
          <p className="section-head__lede">
            Working timeline in freelance client project delivery and internship work.
          </p>
        </div>

        <ol className="timeline">
          {experience.map((item) => (
            <li key={item.id} className="timeline__item">
              <div className="timeline__marker" aria-hidden="true"></div>
              <div className="timeline__card">
                <span className="timeline__date">{item.duration}</span>
                <h3>{item.role}</h3>
                <p className="timeline__company">{item.company}</p>
                <ul className="timeline__list">
                  {item.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
