import React, { useState } from 'react';
import { Heart, Music, Sparkles } from 'lucide-react';
import type { WeddingConfig } from '../types/invitation';

interface CoverEnvelopeProps {
  config: WeddingConfig;
  guestName: string | null;
  onOpen: () => void;
}

export const CoverEnvelope: React.FC<CoverEnvelopeProps> = ({ config, guestName, onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <div className={`landing-cover-viewport ${isOpening ? 'opening-doors' : ''}`}>
      {/* Royal Opening Doors Overlay */}
      <div className="door-panel door-panel-left">
        <div className="door-ornament-border"></div>
      </div>
      <div className="door-panel door-panel-right">
        <div className="door-ornament-border"></div>
      </div>

      {/* Main Elegant Invitation Cover Card (as shown in screenshot) */}
      <div className="landing-cover-card glass-morphism">
        <div className="cover-border-inner"></div>

        <div className="cover-header text-center">
          <Sparkles className="gold-icon icon-glow animate-pulse-glow" size={32} />
          <p className="cover-tagline font-sub">{config.tagline}</p>
        </div>

        <div className="cover-monogram">
          <span className="mono-initial">{config.groomName[0]}</span>
          <Heart className="mono-heart-gold" size={24} fill="#d4af37" color="#d4af37" />
          <span className="mono-initial">{config.brideName[0]}</span>
        </div>

        <h1 className="cover-couple-title">
          {config.groomName} <span className="ampersand">&</span> {config.brideName}
        </h1>

        <p className="cover-date-formatted font-sub">{config.weddingTimeFormatted}</p>

        {guestName && (
          <div className="guest-badge-cover">
            <span className="guest-invite-label">Specially Prepared For</span>
            <h3 className="guest-invite-name">{guestName}</h3>
          </div>
        )}

        <button className="wax-seal-button" onClick={handleOpenClick} aria-label="Open Invitation">
          <div className="seal-ring">
            <div className="seal-center">
              <Heart className="seal-heart" size={30} fill="#d4af37" color="#d4af37" />
              <span className="seal-text">TAP TO OPEN DOORS</span>
            </div>
          </div>
        </button>

        <p className="music-hint font-sub">
          <Music size={14} className="inline-icon" /> Sound on for Pookal Pookum flute music
        </p>
      </div>
    </div>
  );
};
