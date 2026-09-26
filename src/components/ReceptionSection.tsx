import React from 'react';
import { Calendar, Clock, MapPin, Sparkles, Wine } from 'lucide-react';
import type { WeddingConfig } from '../types/invitation';

interface ReceptionSectionProps {
  config: WeddingConfig;
}

export const ReceptionSection: React.FC<ReceptionSectionProps> = ({ config }) => {
  const receptionEvent = config.events.find(e => e.id === 'reception') || config.events[1] || config.events[0];

  return (
    <section className="snap-section reception-section" id="reception">
      {/* Couple Photo Background */}
      <div className="section-bg-image" style={{ backgroundImage: `url(${config.coupleHeroPhoto})` }}>
        <div className="section-overlay-gradient"></div>
      </div>

      <div className="section-container container">
        <div className="event-full-card glass-morphism animate-zoom-in">
          <div className="event-badge">
            <Wine size={15} className="gold-icon" />
            <span>EVENING CELEBRATION</span>
          </div>

          <h2 className="event-card-title">{receptionEvent.title}</h2>
          <p className="event-card-subtitle font-sub">{receptionEvent.subtitle}</p>

          <div className="title-underline"></div>

          <div className="event-card-details">
            <div className="card-detail-item">
              <Calendar size={18} className="gold-icon" />
              <div>
                <span className="detail-label-text">Date</span>
                <p className="detail-value-text">{receptionEvent.date}</p>
              </div>
            </div>

            <div className="card-detail-item">
              <Clock size={18} className="gold-icon" />
              <div>
                <span className="detail-label-text">Time</span>
                <p className="detail-value-text">{receptionEvent.time}</p>
              </div>
            </div>

            <div className="card-detail-item">
              <MapPin size={18} className="gold-icon" />
              <div>
                <span className="detail-label-text">Venue</span>
                <p className="detail-value-text font-weight-bold">{receptionEvent.location}</p>
                <p className="detail-sub-text">{receptionEvent.address}</p>
              </div>
            </div>
          </div>

          {receptionEvent.dressCode && (
            <div className="dress-code-pill">
              <Sparkles size={13} className="gold-icon" />
              <span>Dress Code: {receptionEvent.dressCode}</span>
            </div>
          )}

          <div className="event-action-button">
            <a
              href={receptionEvent.mapUrl || config.venue.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-gold"
            >
              <MapPin size={16} /> View Location Map
            </a>
          </div>

          <div className="reception-footer-blessing">
            <Sparkles size={20} className="gold-icon icon-glow margin-bottom-xs" />
            <p className="footer-blessing-text font-sub">We can't wait to celebrate with you!</p>
            <h4 className="footer-couple-names">{config.groomName} & {config.brideName}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
