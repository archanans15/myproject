import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import type { WeddingConfig } from './types/invitation';
import { getSavedConfig, getGuestNameFromUrl } from './utils/storage';
import { CoverEnvelope } from './components/CoverEnvelope';
import { MusicPlayer } from './components/MusicPlayer';
import { HeroSection } from './components/HeroSection';
import { GuestGreeting } from './components/GuestGreeting';
import { CoupleStory } from './components/CoupleStory';
import { EventTimeline } from './components/EventTimeline';
import { PhotoGallery } from './components/PhotoGallery';
import { BackgroundParticles } from './components/BackgroundParticles';

export const App: React.FC = () => {
  const [config] = useState<WeddingConfig>(getSavedConfig());
  const [guestName, setGuestName] = useState<string | null>(null);
  const [isOpened, setIsOpened] = useState(false);
  const [autoPlayMusic, setAutoPlayMusic] = useState(false);

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
          <main className="main-content">
            <HeroSection config={config} />
            <GuestGreeting config={config} guestName={guestName} />
            <CoupleStory config={config} />
            <EventTimeline config={config} />
            <PhotoGallery gallery={config.gallery} />
          </main>

          <footer className="site-footer text-center glass-morphism">
            <div className="container">
              <Sparkles size={24} className="gold-icon margin-bottom-sm" />
              <h3 className="footer-title">{config.groomName} & {config.brideName}</h3>
              <p className="footer-sub font-sub">We can't wait to celebrate with you!</p>
              <div className="footer-divider"></div>
              <p className="footer-copyright font-sub">
                © {new Date().getFullYear()} Digital Wedding Invitation • Rakesh & Archana
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
