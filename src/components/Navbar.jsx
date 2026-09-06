import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`} id="site-header">
      <nav className="nav" aria-label="Primary">
        <a href="#home" className="nav__brand" onClick={closeMenu}>
          <div className="nav__brand-badge">{portfolioData.personal.badgeInitials}</div>
          <span>{portfolioData.personal.name}</span>
        </a>

        <button
          className="nav__toggle"
          id="navToggle"
          aria-expanded={mobileOpen}
          aria-controls="navMenu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="nav__toggle-bar" style={mobileOpen ? { transform: 'translateY(7px) rotate(45deg)' } : {}}></span>
          <span className="nav__toggle-bar" style={mobileOpen ? { opacity: 0 } : {}}></span>
          <span className="nav__toggle-bar" style={mobileOpen ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}}></span>
        </button>

        <ul className={`nav__menu ${mobileOpen ? 'is-open' : ''}`} id="navMenu">
          {portfolioData.navLinks.map((link) => {
            const isCta = link.name === 'Contact';
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav__link ${isCta ? 'nav__link--cta' : ''}`}
                  onClick={closeMenu}
                >
                  {isCta ? "Let's Talk" : link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
