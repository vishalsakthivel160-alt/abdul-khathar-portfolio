import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Megaphone, Share2, Instagram, TrendingUp, ExternalLink } from 'lucide-react';

const iconMap = {
  Megaphone: <Megaphone size={22} />,
  Share2: <Share2 size={22} />,
  Instagram: <Instagram size={22} />,
  TrendingUp: <TrendingUp size={22} />,
};

export default function DigitalMarketing() {
  const { digitalMarketing } = portfolioData;

  return (
    <section className="section" id="digital-marketing">
      <div className="container">
        <div className="section-head reveal">
          <h2>{digitalMarketing.heading}</h2>
          <p className="section-head__lede">{digitalMarketing.subheading}</p>
        </div>

        {/* Instagram Profile Card Callout */}
        <div className="instagram-card reveal-up delay-1">
          <div className="instagram-card__info">
            <div className="instagram-card__avatar">
              <Instagram size={28} />
            </div>
            <div>
              <span className="instagram-card__handle">{digitalMarketing.username}</span>
              <p className="instagram-card__desc">
                Follow for digital marketing strategies, web dev insights, and social media growth tips.
              </p>
            </div>
          </div>
          <a
            href={digitalMarketing.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary instagram-card__btn"
          >
            <Instagram size={18} />
            Visit My Instagram
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Topics & Services Grid */}
        <div className="digital-marketing-grid">
          {digitalMarketing.cards.map((card, idx) => (
            <div key={idx} className={`digital-marketing-card reveal-up delay-${idx + 1}`}>
              <div className="digital-marketing-card__icon">
                {iconMap[card.icon] || <Megaphone size={22} />}
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
