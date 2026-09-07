import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';

export default function Projects({ onSelectProject }) {
  const { featuredProject, projects } = portfolioData;

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head reveal">
          <h2>Featured &amp; Client Projects</h2>
          <p className="section-head__lede">
            Real client work and full-stack builds demonstrating web development, SEO, and AI integration.
          </p>
        </div>

        {/* Featured Project */}
        <div className="featured-card reveal-up delay-1">
          <span className="featured-card__tag">{featuredProject.tag}</span>

          <div className="featured-card__grid">
            <div className="featured-card__gallery">
              <div className="featured-card__shot">
                <img src={featuredProject.image} alt={featuredProject.title} />
              </div>
            </div>

            <div className="featured-card__content">
              <h3>{featuredProject.title}</h3>
              <p className="featured-card__subtitle">{featuredProject.subtitle}</p>
              <p className="featured-card__desc">{featuredProject.description}</p>

              <ul className="featured-card__list">
                <li>On-page SEO optimization</li>
                <li>Keyword-focused content</li>
                <li>Meta titles &amp; descriptions</li>
                <li>Search-friendly site structure</li>
                <li>FAQ &amp; service information</li>
                <li>Customer query targeting</li>
                <li>Meta/Facebook lead generation</li>
                <li>Direct WhatsApp booking path</li>
              </ul>

              <div className="featured-card__actions">
                {featuredProject.liveUrl && (
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary"
                  >
                    Visit Live Website <ExternalLink size={16} />
                  </a>
                )}
                <button
                  type="button"
                  className="btn btn--ghost"
                  onClick={() => onSelectProject(featuredProject)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Projects Grid */}
        <div className="projects__grid">
          {projects.map((proj, index) => (
            <article key={proj.id} className={`project-card reveal-up delay-${index + 1}`}>
              <div className="project-card__thumb">
                <img src={proj.image} alt={proj.title} />
              </div>
              <div className="project-card__body">
                <div className="project-card__top">
                  <span className="project-card__date">{proj.date}</span>
                </div>
                <h3>{proj.title}</h3>
                <p className="project-card__desc">{proj.description}</p>

                <ul className="project-card__tech">
                  {proj.tech.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ul>

                {proj.outcome && (
                  <p className="project-card__outcome">
                    <strong>Outcome:</strong> {proj.outcome}
                  </p>
                )}

                <div className="project-card__actions">
                  <button
                    type="button"
                    className="btn btn--outline btn--small"
                    onClick={() => onSelectProject(proj)}
                  >
                    View Project Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
