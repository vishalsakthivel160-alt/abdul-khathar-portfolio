import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  const categories = [
    { title: "Frontend", items: skills.frontend },
    { title: "Backend", items: skills.backend },
    { title: "Programming", items: skills.programming },
    { title: "Database", items: skills.database },
    { title: "Digital Marketing", items: skills.digitalMarketing },
    { title: "Tools & Platforms", items: skills.toolsAndPlatforms },
  ];

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head">
          <h2>Technical &amp; Marketing Skills</h2>
          <p className="section-head__lede">
            Proficiencies spanning web development technologies, analytical tools, and digital marketing.
          </p>
        </div>

        <div className="skills__grid">
          {categories.map((cat, idx) => (
            <div key={idx} className="skill-group">
              <h3>{cat.title}</h3>
              <div className="skill-pills">
                {cat.items.map((skill, sIdx) => (
                  <span key={sIdx}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
