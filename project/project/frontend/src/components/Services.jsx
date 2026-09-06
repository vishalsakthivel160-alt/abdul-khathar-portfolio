import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code2, Layout, BarChart3, Search, Zap, ShoppingBag } from 'lucide-react';

const iconMap = {
  Code2: <Code2 size={26} />,
  Layout: <Layout size={26} />,
  BarChart3: <BarChart3 size={26} />,
  Search: <Search size={26} />,
  Zap: <Zap size={26} />,
  ShoppingBag: <ShoppingBag size={26} />,
};

export default function Services() {
  const { services } = portfolioData;

  return (
    <section className="section section--tinted" id="services">
      <div className="container">
        <div className="section-head">
          <h2>Services Offered</h2>
          <p className="section-head__lede">
            Practical web development and digital marketing support, built around what actually helps a business grow.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-card__icon">
                {iconMap[service.icon] || <Code2 size={26} />}
              </div>
              <h3>{service.id}. {service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
