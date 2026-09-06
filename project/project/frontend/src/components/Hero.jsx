import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code, Search, Megaphone, TrendingUp, ArrowRight } from 'lucide-react';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="hero" id="home">
      <div className="hero__bg" aria-hidden="true"></div>
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__status">
            <span className="hero__status-dot" aria-hidden="true"></span>
            {personal.statusBadge}
          </p>

          <p className="hero__name">{personal.name}</p>

          <h1 className="hero__headline">
            Freelance Web Developer &amp; <span className="hero__headline-accent">Digital Marketing</span> Professional
          </h1>

          <p className="hero__subtext">
            {personal.longDescription}
          </p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              View My Work
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn--outline">
              Let's Work Together
            </a>
          </div>

          <dl className="hero__meta">
            <div className="hero__meta-item">
              <dt>Since</dt>
              <dd>2024</dd>
            </div>
            <div className="hero__meta-item">
              <dt>Focus</dt>
              <dd>Web Dev &amp; Digital Marketing</dd>
            </div>
            <div className="hero__meta-item">
              <dt>Background</dt>
              <dd>Internship + Freelance Work</dd>
            </div>
          </dl>
        </div>

        <div className="hero__visual">
          <div className="hero__portrait-card">
            <div className="hero__portrait-frame">
              <img src={personal.profileImage} alt={`${personal.name} Profile`} />
            </div>

            <div className="hero__chip hero__chip--topleft">
              <Code size={18} />
              <span>Web Dev</span>
            </div>
            <div className="hero__chip hero__chip--topright">
              <Search size={18} />
              <span>SEO &amp; Growth</span>
            </div>
            <div className="hero__chip hero__chip--bottomleft">
              <Megaphone size={18} />
              <span>Digital Marketing</span>
            </div>
            <div className="hero__chip hero__chip--bottomright">
              <TrendingUp size={18} />
              <span>Lead Gen</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
