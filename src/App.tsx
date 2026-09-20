import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Sparkles } from 'lucide-react';
import type { WeddingConfig } from './types/invitation';
import { getSavedConfig, getGuestNameFromUrl } from './utils/storage';
import { CoverEnvelope } from './components/CoverEnvelope';
import { MusicPlayer } from './components/MusicPlayer';
import { HeroSection } from './components/HeroSection';
import { GuestGreeting } from './components/GuestGreeting';
import { CoupleStory } from './components/CoupleStory';
import { EventTimeline } from './components/EventTimeline';
import { VenueSection } from './components/VenueSection';
import { PhotoGallery } from './components/PhotoGallery';
import { RSVPSection } from './components/RSVPSection';
import { GuestWishes } from './components/GuestWishes';
import { BackgroundParticles } from './components/BackgroundParticles';

export const App: React.FC = () => {
  const [config] = useState<WeddingConfig>(getSavedConfig());
  const [guestName, setGuestName] = useState<string | null>(null);
  const [isOpened, setIsOpened] = useState(false);
  const [autoPlayMusic, setAutoPlayMusic] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const urlGuest = getGuestNameFromUrl();
    if (urlGuest) {
      setGuestName(urlGuest);
    }
  }, []);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setAutoPlayMusic(true);
  };

  return (
    <div className={`app-root theme-${config.theme}`}>
      <BackgroundParticles />

      {!isOpened ? (
        <CoverEnvelope config={config} guestName={guestName} onOpen={handleOpenInvitation} />
      ) : (
        <>
          <header className="site-header glass-morphism">
            <div className="header-container container">
              <a href="#hero" className="header-brand">
                <span className="brand-monogram">{config.groomName[0]}&{config.brideName[0]}</span>
                <span className="brand-names">{config.groomName} <Heart size={12} fill="currentColor" className="inline-heart" /> {config.brideName}</span>
              </a>

              <nav className={`header-nav ${mobileMenuOpen ? 'open' : ''}`}>
                <a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a>
                <a href="#greeting" onClick={() => setMobileMenuOpen(false)}>Invitation</a>
                <a href="#story" onClick={() => setMobileMenuOpen(false)}>Our Story</a>
                <a href="#events" onClick={() => setMobileMenuOpen(false)}>Events</a>
                <a href="#venue" onClick={() => setMobileMenuOpen(false)}>Venue</a>
                <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
                <a href="#rsvp" onClick={() => setMobileMenuOpen(false)}>RSVP</a>
                <a href="#wishes" onClick={() => setMobileMenuOpen(false)}>Wishes</a>
              </nav>

              <button
                className="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </header>

          <main className="main-content">
            <HeroSection config={config} />
            <GuestGreeting config={config} guestName={guestName} />
            <CoupleStory config={config} />
            <EventTimeline config={config} />
            <VenueSection config={config} />
            <PhotoGallery gallery={config.gallery} />
            <RSVPSection config={config} defaultGuestName={guestName} />
            <GuestWishes />
          </main>

          <footer className="site-footer text-center glass-morphism">
            <div className="container">
              <Sparkles size={24} className="gold-icon margin-bottom-sm" />
              <h3 className="footer-title">{config.groomName} & {config.brideName}</h3>
              <p className="footer-sub font-sub">We can't wait to celebrate with you!</p>
              <div className="footer-divider"></div>
              <p className="footer-copyright font-sub">
                © {new Date().getFullYear()} Digital Wedding Invitation • Crafted with Love
              </p>
            </div>
          </footer>

          <MusicPlayer musicUrl={config.bgMusicUrl} autoPlayTriggered={autoPlayMusic} />
        </>
      )}
    </div>
  );
};

export default App;
