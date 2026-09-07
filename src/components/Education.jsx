import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section className="section section--tinted" id="education">
      <div className="container">
        <div className="section-head reveal">
          <h2>Education</h2>
        </div>

        <div className="education__grid">
          {education.map((item, index) => (
            <div key={item.id} className={`education-card reveal-up delay-${index + 1}`}>
              <span className="education-card__date">{item.duration}</span>
              <h3>{item.degree}</h3>
              <p className="education-card__school">{item.institution}</p>
              <p className="education-card__grade">{item.grade}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
