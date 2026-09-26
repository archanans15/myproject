import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Sparkles, Heart } from 'lucide-react';
import type { WeddingConfig } from '../types/invitation';

interface EventsSectionProps {
  config: WeddingConfig;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ config }) => {
  const muhurthamEvent = config.events.find(e => e.id === 'muhurtham') || config.events[0];
  const receptionEvent = config.events.find(e => e.id === 'reception') || config.events[1] || config.events[0];
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="snap-section events-section" id="events" ref={sectionRef}>
      {/* Traditional Indian Background Image */}
      <div className="section-bg-image" style={{ backgroundImage: `url('images/welcome-bg.jpg')` }}>
        <div className="section-overlay-gradient welcome-overlay-gradient"></div>
      </div>

      <div className="section-container container">
        <div className="events-combined-overlay">
          <div
            className={`save-date-badge slow-fade-in-up ${isVisible ? 'visible' : ''}`}
            style={{ animationDelay: '0.1s', transitionDelay: '0.1s' }}
          >
            <Heart size={15} className="gold-icon" />
            <span>WEDDING & RECEPTION</span>
          </div>

          <div className="events-dual-grid">
            {/* Muhurtham Event - Top Left (Slide in from Left row-by-row on Scroll) */}
            <div className="compact-transparent-event event-top-left">
              <div
                className={`event-title-badge slow-slide-left ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: '0.25s', transitionDelay: '0.25s' }}
              >
                <Sparkles size={14} className="gold-icon" />
                <span>SACRED CEREMONY</span>
              </div>
              <h3
                className={`event-simple-heading font-serif slow-slide-left ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: '0.6s', transitionDelay: '0.6s' }}
              >
                {muhurthamEvent.location}
              </h3>
              <p
                className={`event-simple-sub font-sub slow-slide-left ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: '0.95s', transitionDelay: '0.95s' }}
              >
                {muhurthamEvent.address}
              </p>
              <p
                className={`event-simple-meta slow-slide-left ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: '1.3s', transitionDelay: '1.3s' }}
              >
                Sunday, Nov 29 • 10:30 AM
              </p>

              <div
                className={`slow-slide-left ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: '1.65s', transitionDelay: '1.65s' }}
              >
                <a
                  href={muhurthamEvent.mapUrl || config.venue.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-simple-map-gold"
                >
                  <MapPin size={13} /> View Map
                </a>
              </div>
            </div>

            {/* Reception Event - Bottom Right (Slide in from Right row-by-row on Scroll) */}
            <div className="compact-transparent-event event-bottom-right">
              <div
                className={`event-title-badge slow-slide-right ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: '0.42s', transitionDelay: '0.42s' }}
              >
                <Sparkles size={14} className="gold-icon" />
                <span>GRAND RECEPTION</span>
              </div>
              <h3
                className={`event-simple-heading font-serif slow-slide-right ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: '0.77s', transitionDelay: '0.77s' }}
              >
                {receptionEvent.location}
              </h3>
              <p
                className={`event-simple-sub font-sub slow-slide-right ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: '1.12s', transitionDelay: '1.12s' }}
              >
                {receptionEvent.address}
              </p>
              <p
                className={`event-simple-meta slow-slide-right ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: '1.47s', transitionDelay: '1.47s' }}
              >
                Sunday, Nov 29 • 06:30 PM Onwards
              </p>

              <div
                className={`slow-slide-right ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: '1.82s', transitionDelay: '1.82s' }}
              >
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
          </div>

          <div
            className={`reception-footer-blessing margin-top-xs slow-fade-in-up ${isVisible ? 'visible' : ''}`}
            style={{ animationDelay: '2.1s', transitionDelay: '2.1s' }}
          >
            <Sparkles size={16} className="gold-icon margin-bottom-xs" />
            <p className="footer-blessing-text font-sub">We can't wait to celebrate with you!</p>
            <h4 className="footer-couple-names">{config.groomName} & {config.brideName}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
