import React, { useState } from 'react';
import { Heart, Music, Sparkles } from 'lucide-react';
import type { WeddingConfig } from '../types/invitation';

interface CoverEnvelopeProps {
  config: WeddingConfig;
  guestName: string | null;
  onOpen: () => void;
}

export const CoverEnvelope: React.FC<CoverEnvelopeProps> = ({ config, guestName, onOpen }) => {
  const [isOpenAnimation, setIsOpenAnimation] = useState(false);

  const handleOpenClick = () => {
    setIsOpenAnimation(true);
    setTimeout(() => {
      onOpen();
    }, 800);
  };

  return (
    <div className={`cover-overlay ${isOpenAnimation ? 'cover-opening' : ''}`}>
      <div className="cover-card glass-morphism">
        <div className="cover-border-decorative"></div>
        
        <div className="cover-header">
          <Sparkles className="icon-sparkle animate-pulse-glow" size={28} />
          <p className="cover-subheading">{config.tagline}</p>
        </div>

        <div className="cover-monogram">
          <span className="mono-letter">{config.groomName[0]}</span>
          <Heart className="mono-heart" size={24} fill="currentColor" />
          <span className="mono-letter">{config.brideName[0]}</span>
        </div>

        <h1 className="cover-couple-names">
          {config.groomName} <span className="ampersand">&</span> {config.brideName}
        </h1>

        <p className="cover-wedding-date">
          {new Date(config.weddingDate).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>

        {guestName && (
          <div className="guest-badge-container">
            <span className="guest-invite-label">Specially Prepared For</span>
            <h3 className="guest-invite-name">{guestName}</h3>
          </div>
        )}

        <button className="wax-seal-button" onClick={handleOpenClick} aria-label="Open Invitation">
          <div className="seal-ring">
            <div className="seal-center">
              <Heart className="seal-heart" size={32} fill="#d4af37" />
              <span className="seal-text">OPEN INVITATION</span>
            </div>
          </div>
        </button>

        <p className="music-hint font-sub">
          <Music size={14} className="inline-icon" /> Sound on for ambient wedding music
        </p>
      </div>
    </div>
  );
};
