import React from 'react';
import { Heart, Sparkles, Wine, Music, Calendar, MapPin } from 'lucide-react';
import type { WeddingConfig, EventDetails } from '../types/invitation';

interface EventTimelineProps {
  config: WeddingConfig;
}

const getEventIcon = (iconName: EventDetails['iconName']) => {
  switch (iconName) {
    case 'sparkles': return <Sparkles size={24} className="gold-icon" />;
    case 'music': return <Music size={24} className="gold-icon" />;
    case 'glass': return <Wine size={24} className="gold-icon" />;
    default: return <Heart size={24} className="gold-icon" />;
  }
};

export const EventTimeline: React.FC<EventTimelineProps> = ({ config }) => {
  return (
    <section className="events-section section-padding" id="events">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-eyebrow font-sub">JOIN THE CELEBRATIONS</span>
          <h2 className="section-title">Events & Timeline</h2>
          <div className="title-underline"></div>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-central-line"></div>

          {config.events.map((evt, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={evt.id} className={`timeline-item ${isEven ? 'left' : 'right'}`}>
                <div className="timeline-marker">
                  <div className="marker-inner">
                    {getEventIcon(evt.iconName)}
                  </div>
                </div>

                <div className="timeline-card glass-morphism">
                  <span className="event-date-badge font-sub">
                    <Calendar size={14} /> {evt.date}
                  </span>

                  <h3 className="event-title">{evt.title}</h3>
                  <p className="event-subtitle font-sub">{evt.subtitle}</p>

                  <div className="event-details-grid">
                    <div className="detail-row">
                      <span className="detail-label"><Calendar size={14} /> Time:</span>
                      <span className="detail-value">{evt.time}</span>
                    </div>

                    <div className="detail-row">
                      <span className="detail-label"><MapPin size={14} /> Venue:</span>
                      <span className="detail-value">{evt.location} ({evt.address})</span>
                    </div>
                  </div>

                  <div className="event-card-actions">
                    <a
                      href={evt.mapUrl || config.venue.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link-gold"
                    >
                      <MapPin size={14} /> View Location Map
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
