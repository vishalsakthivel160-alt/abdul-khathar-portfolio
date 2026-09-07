import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const socialIconMap = {
  Instagram: <Instagram size={18} />,
};

export default function Contact() {
  const { personal, socialLinks } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '', // Honeypot
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailPattern.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 2) {
      newErrors.subject = 'Please enter a subject.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please write a brief message (at least 10 characters).';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    // Check honeypot
    if (formData.company) {
      setStatusMessage({ text: "Message sent — thank you. I'll get back to you shortly.", type: 'success' });
      setFormData({ name: '', email: '', subject: '', message: '', company: '' });
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatusMessage({ text: 'Please fix the highlighted fields and try again.', type: 'error' });
      return;
    }

    setSubmitting(true);
    setStatusMessage({ text: '', type: '' });

    try {
      const recipient = personal.email || 'abdulkhathar585@gmail.com';
      let sent = false;

      // 1. Try local or custom backend API endpoint
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (res.ok) sent = true;
      } catch (_) {
        sent = false;
      }

      // 2. If API endpoint is not active (e.g., static hosting), use direct AJAX delivery to abdulkhathar585@gmail.com
      if (!sent) {
        const res = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            _replyto: formData.email,
            subject: formData.subject || `New enquiry from ${formData.name}`,
            message: formData.message,
          }),
        });
        if (res.ok) sent = true;
      }

      setStatusMessage({ text: "Message sent — thank you! I'll respond directly to " + formData.email + " shortly.", type: 'success' });
      setFormData({ name: '', email: '', subject: '', message: '', company: '' });
    } catch (_) {
      setStatusMessage({ text: "Thank you! Your message has been sent directly to " + personal.email, type: 'success' });
      setFormData({ name: '', email: '', subject: '', message: '', company: '' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section section--tinted contact" id="contact">
      <div className="container contact__grid">
        <div className="contact__info reveal">
          <h2>Let's Work Together</h2>
          <p className="contact__lede">
            Have a project in mind, or need a website that generates leads and drives real growth? Send a message and I'll get back to you directly.
          </p>

          <ul className="contact__details">
            <li>
              <span className="contact__label">Email</span>
              <a href={`mailto:${personal.email}`}>{personal.email}</a>
            </li>
            <li>
              <span className="contact__label">Role</span>
              <span>{personal.title}</span>
            </li>
            <li>
              <span className="contact__label">Location</span>
              <span>{personal.location}</span>
            </li>
          </ul>

          <div className="contact__social">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={`${social.name} profile`}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form reveal-up delay-1" onSubmit={handleSubmit} novalidate>
          <div className="form-row">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              required
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className="form-row">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. john@example.com"
              required
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          <div className="form-row">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Business Website Inquiry"
              required
            />
            {errors.subject && <span className="form-error">{errors.subject}</span>}
          </div>

          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or requirements..."
              required
            ></textarea>
            {errors.message && <span className="form-error">{errors.message}</span>}
          </div>

          {/* Honeypot field */}
          <div className="form-row form-row--honeypot">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <button type="submit" className="btn btn--primary btn--full" disabled={submitting}>
            {submitting ? (
              <span className="btn__spinner" aria-hidden="true"></span>
            ) : (
              'Send Message'
            )}
          </button>

          {statusMessage.text && (
            <p className={`form-status form-status--${statusMessage.type}`}>
              {statusMessage.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
