import React from 'react';
import { Navigation, CalendarPlus, Building2 } from 'lucide-react';
import type { WeddingConfig } from '../types/invitation';

interface VenueSectionProps {
  config: WeddingConfig;
}

export const VenueSection: React.FC<VenueSectionProps> = ({ config }) => {
  return (
    <section className="venue-section section-padding" id="venue">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-eyebrow font-sub">DESTINATION & LOCATION</span>
          <h2 className="section-title">The Wedding Venue</h2>
          <div className="title-underline"></div>
        </div>

        <div className="venue-grid">
          <div className="venue-info-card glass-morphism">
            <Building2 size={36} className="gold-icon icon-glow" />
            <h3 className="venue-name">{config.venue.name}</h3>
            <p className="venue-address font-sub">{config.venue.address}</p>
            <p className="venue-city">{config.venue.city}</p>

            <div className="venue-btn-group">
              <a
                href={config.venue.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-gold"
              >
                <Navigation size={18} /> Get Google Directions
              </a>

              <a
                href={config.venue.googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-gold"
              >
                <CalendarPlus size={18} /> Add to Calendar
              </a>
            </div>
          </div>

          <div className="venue-map-card glass-morphism">
            <iframe
              title="Venue Location Map"
              src={config.venue.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px', borderRadius: '16px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
