import React from 'react';
import { Calendar, Clock, MapPin, Sparkles, Heart } from 'lucide-react';
import type { WeddingConfig } from '../types/invitation';

interface EventsSectionProps {
  config: WeddingConfig;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ config }) => {
  const muhurthamEvent = config.events.find(e => e.id === 'muhurtham') || config.events[0];
  const receptionEvent = config.events.find(e => e.id === 'reception') || config.events[1] || config.events[0];

  return (
    <section className="snap-section events-section" id="events">
      {/* Couple Photo Background */}
      <div className="section-bg-image" style={{ backgroundImage: `url(${config.coupleHeroPhoto})` }}>
        <div className="section-overlay-gradient"></div>
      </div>

      <div className="section-container container">
        <div className="events-combined-overlay animate-zoom-in">
          <div className="save-date-badge">
            <Heart size={15} className="gold-icon" />
            <span>WEDDING & RECEPTION</span>
          </div>

          <div className="events-dual-grid">
            {/* Muhurtham Event Card - Top Left */}
            <div className="single-event-compact-card event-top-left">
              <div className="compact-event-badge">
                <Sparkles size={13} className="gold-icon" />
                <span>SACRED CEREMONY</span>
              </div>
              <h3 className="compact-event-title font-serif">{muhurthamEvent.title}</h3>
              <p className="compact-event-subtitle font-sub">{muhurthamEvent.subtitle}</p>

              <div className="compact-detail-row">
                <Calendar size={14} className="gold-icon" />
                <span>{muhurthamEvent.date}</span>
              </div>
              <div className="compact-detail-row">
                <Clock size={14} className="gold-icon" />
                <span>{muhurthamEvent.time}</span>
              </div>
              <div className="compact-detail-row">
                <MapPin size={14} className="gold-icon" />
                <span>{muhurthamEvent.location}, {muhurthamEvent.address}</span>
              </div>

              <a
                href={muhurthamEvent.mapUrl || config.venue.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-compact-gold"
              >
                <MapPin size={13} /> View Location Map
              </a>
            </div>

            {/* Reception Event Card - Bottom Right */}
            <div className="single-event-compact-card event-bottom-right">
              <div className="compact-event-badge">
                <Sparkles size={13} className="gold-icon" />
                <span>RECEPTION</span>
              </div>
              <h3 className="compact-event-title font-serif">{receptionEvent.title}</h3>
              <p className="compact-event-subtitle font-sub">{receptionEvent.subtitle}</p>

              <div className="compact-detail-row">
                <Calendar size={14} className="gold-icon" />
                <span>{receptionEvent.date}</span>
              </div>
              <div className="compact-detail-row">
                <Clock size={14} className="gold-icon" />
                <span>{receptionEvent.time}</span>
              </div>
              <div className="compact-detail-row">
                <MapPin size={14} className="gold-icon" />
                <span>{receptionEvent.location}, {receptionEvent.address}</span>
              </div>

              <a
                href={receptionEvent.mapUrl || config.venue.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-compact-gold"
              >
                <MapPin size={13} /> View Location Map
              </a>
            </div>
          </div>

          <div className="reception-footer-blessing margin-top-xs">
            <Sparkles size={16} className="gold-icon margin-bottom-xs" />
            <p className="footer-blessing-text font-sub">We can't wait to celebrate with you!</p>
            <h4 className="footer-couple-names">{config.groomName} & {config.brideName}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
