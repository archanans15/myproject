import React from 'react';
import { Heart, ChevronDown } from 'lucide-react';
import type { WeddingConfig } from '../types/invitation';

interface InvitationSectionProps {
  config: WeddingConfig;
  guestName: string | null;
}

export const InvitationSection: React.FC<InvitationSectionProps> = ({ config, guestName }) => {
  return (
    <section className="snap-section invitation-section" id="invitation">
      {/* Traditional Indian Background Image */}
      <div className="section-bg-image" style={{ backgroundImage: `url('images/welcome-bg.jpg')` }}>
        <div className="section-overlay-gradient welcome-overlay-gradient"></div>
      </div>

      <div className="section-container container">
        <div className="event-overlay-content animate-zoom-in">
          <div className="save-date-badge">
            <Heart size={15} className="gold-icon" />
            <span>CORDIAL INVITATION</span>
          </div>

          {guestName && (
            <div className="guest-welcome-badge">
              <span className="guest-badge-label font-sub">DEAREST GUEST</span>
              <h3 className="guest-name-highlight">{guestName}</h3>
            </div>
          )}

          <h2 className="overlay-event-title font-serif">Welcome To Our Celebration</h2>
          <div className="title-underline"></div>

          <p className="invitation-welcome-msg font-sub">
            "{config.welcomeMessage}"
          </p>

          <p className="invitation-blessing-quote font-sub">
            "With the blessings of our beloved families, we request the honour of your presence as we unite in holy matrimony."
          </p>


        </div>

        <a href="#ceremony" className="scroll-indicator margin-top-md" aria-label="Scroll to Ceremony">
          <span className="scroll-text">SCROLL FOR CEREMONY</span>
          <ChevronDown className="bounce-arrow" size={20} />
        </a>
      </div>
    </section>
  );
};
