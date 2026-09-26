import React from 'react';
import { Calendar, Clock, MapPin, Sparkles, ChevronDown } from 'lucide-react';
import type { WeddingConfig } from '../types/invitation';

interface CeremonySectionProps {
  config: WeddingConfig;
}

export const CeremonySection: React.FC<CeremonySectionProps> = ({ config }) => {
  const muhurthamEvent = config.events.find(e => e.id === 'muhurtham') || config.events[0];

  return (
    <section className="snap-section ceremony-section" id="ceremony">
      {/* Couple Photo Background */}
      <div className="section-bg-image" style={{ backgroundImage: `url(${config.coupleHeroPhoto})` }}>
        <div className="section-overlay-gradient"></div>
      </div>

      <div className="section-container container">
        <div className="event-overlay-content animate-zoom-in">
          <div className="save-date-badge">
            <Sparkles size={14} className="gold-icon" />
            <span>MUHURTHAM</span>
          </div>

          <h2 className="overlay-event-title">{muhurthamEvent.title}</h2>
          <p className="overlay-event-subtitle font-sub">{muhurthamEvent.subtitle}</p>

          <div className="title-underline"></div>

          <div className="overlay-details-list">
            <div className="overlay-detail-item">
              <Calendar size={18} className="gold-icon" />
              <div className="detail-text-group">
                <span className="detail-label-text">Date</span>
                <p className="detail-value-text">{muhurthamEvent.date}</p>
              </div>
            </div>

            <div className="overlay-detail-item">
              <Clock size={18} className="gold-icon" />
              <div className="detail-text-group">
                <span className="detail-label-text">Time</span>
                <p className="detail-value-text">{muhurthamEvent.time}</p>
              </div>
            </div>

            <div className="overlay-detail-item">
              <MapPin size={18} className="gold-icon" />
              <div className="detail-text-group">
                <span className="detail-label-text">Venue</span>
                <p className="detail-value-text">{muhurthamEvent.location}</p>
                <p className="detail-sub-text">{muhurthamEvent.address}</p>
              </div>
            </div>
          </div>

          <div className="event-action-button">
            <a
              href={muhurthamEvent.mapUrl || config.venue.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-gold"
            >
              <MapPin size={16} /> View Location Map
            </a>
          </div>
        </div>

        <a href="#reception" className="scroll-indicator margin-top-md" aria-label="Scroll to Reception">
          <span className="scroll-text">SCROLL FOR RECEPTION</span>
          <ChevronDown className="bounce-arrow" size={20} />
        </a>
      </div>
    </section>
  );
};
