import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal, navLinks, socialLinks } = portfolioData;

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <p className="footer__name">{personal.name}</p>
          <p className="footer__title">{personal.title}</p>
        </div>

        <nav className="footer__links" aria-label="Footer Navigation">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </nav>

        <div className="footer__social">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.name} profile`}
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} {personal.name}. All rights reserved.
      </p>
    </footer>
  );
}
