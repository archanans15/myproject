import React from 'react';
import { MapPin, Sparkles, Heart } from 'lucide-react';
import type { WeddingConfig } from '../types/invitation';

interface EventsSectionProps {
  config: WeddingConfig;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ config }) => {
  const muhurthamEvent = config.events.find(e => e.id === 'muhurtham') || config.events[0];
  const receptionEvent = config.events.find(e => e.id === 'reception') || config.events[1] || config.events[0];

  return (
    <section className="snap-section events-section" id="events">
      {/* Traditional Indian Background Image */}
      <div className="section-bg-image" style={{ backgroundImage: `url('images/welcome-bg.jpg')` }}>
        <div className="section-overlay-gradient welcome-overlay-gradient"></div>
      </div>

      <div className="section-container container">
        <div className="events-combined-overlay">
          <div className="save-date-badge">
            <Heart size={15} className="gold-icon" />
            <span>WEDDING & RECEPTION</span>
          </div>

          <div className="events-dual-grid">
            {/* Muhurtham Event - Top Left (Slide in from Left) */}
            <div className="compact-transparent-event event-top-left animate-slide-left">
              <div className="event-title-badge">
                <Sparkles size={14} className="gold-icon" />
                <span>SACRED CEREMONY</span>
              </div>
              <h3 className="event-simple-heading font-serif">{muhurthamEvent.location}</h3>
              <p className="event-simple-sub font-sub">{muhurthamEvent.address}</p>
              <p className="event-simple-meta">Sunday, Nov 29 • 10:30 AM</p>

              <a
                href={muhurthamEvent.mapUrl || config.venue.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-simple-map-gold"
              >
                <MapPin size={13} /> View Map
              </a>
            </div>

            {/* Reception Event - Bottom Right (Slide in from Right) */}
            <div className="compact-transparent-event event-bottom-right animate-slide-right">
              <div className="event-title-badge">
                <Sparkles size={14} className="gold-icon" />
                <span>GRAND RECEPTION</span>
              </div>
              <h3 className="event-simple-heading font-serif">{receptionEvent.location}</h3>
              <p className="event-simple-sub font-sub">{receptionEvent.address}</p>
              <p className="event-simple-meta">Sunday, Nov 29 • 06:30 PM Onwards</p>

              <a
                href={receptionEvent.mapUrl || config.venue.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-simple-map-gold"
              >
                <MapPin size={13} /> View Map
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
