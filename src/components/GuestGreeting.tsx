import React from 'react';
import { Heart } from 'lucide-react';
import type { WeddingConfig } from '../types/invitation';

interface GuestGreetingProps {
  config: WeddingConfig;
  guestName: string | null;
}

export const GuestGreeting: React.FC<GuestGreetingProps> = ({ config, guestName }) => {
  return (
    <section className="greeting-section section-padding" id="greeting">
      <div className="container">
        <div className="card-ornate glass-morphism">
          <div className="corner-flourish top-left"></div>
          <div className="corner-flourish top-right"></div>
          <div className="corner-flourish bottom-left"></div>
          <div className="corner-flourish bottom-right"></div>

          <div className="greeting-header text-center">
            <h2 className="greeting-subtitle font-sub">CORDIAL INVITATION</h2>
          </div>

          {guestName ? (
            <div className="guest-personalized-box text-center">
              <span className="guest-prefix font-sub">Dearest</span>
              <h3 className="guest-full-name">{guestName}</h3>
              <div className="royal-divider">
                <span>✦</span>
                <span className="star-center">★</span>
                <span>✦</span>
              </div>
              <p className="greeting-text">
                With joy in our hearts and blessings in our prayers, we, along with our families, 
                warmly invite you to join us in celebrating the holy union of 
                <strong className="highlight-gold"> {config.groomName} </strong> & 
                <strong className="highlight-gold"> {config.brideName} </strong>.
              </p>
              <p className="greeting-subtext">
                Your presence on our special day will make our celebrations truly complete and memorable.
              </p>
            </div>
          ) : (
            <div className="guest-personalized-box text-center">
              <h3 className="greeting-title">Welcome Friends & Family</h3>
              <div className="royal-divider">
                <span>✦</span>
                <span className="star-center">★</span>
                <span>✦</span>
              </div>
              <p className="greeting-text">
                With joy in our hearts and blessings in our prayers, we cordially invite you and your family 
                to grace the auspicious marriage celebrations of 
                <strong className="highlight-gold"> {config.groomName} </strong> & 
                <strong className="highlight-gold"> {config.brideName} </strong>.
              </p>
            </div>
          )}

          <div className="family-blessings-grid">
            <div className="family-card">
              <p className="family-role font-sub">Groom’s Parents</p>
              <h4 className="family-names">{config.groomParents}</h4>
            </div>
            <div className="family-heart">
              <Heart size={20} fill="#d4af37" color="#d4af37" />
            </div>
            <div className="family-card">
              <p className="family-role font-sub">Bride’s Parents</p>
              <h4 className="family-names">{config.brideParents}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
