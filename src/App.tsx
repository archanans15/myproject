import React, { useState, useEffect } from 'react';
import type { WeddingConfig } from './types/invitation';
import { getSavedConfig, getGuestNameFromUrl } from './utils/storage';
import { CoverEnvelope } from './components/CoverEnvelope';
import { MusicPlayer } from './components/MusicPlayer';
import { HeroSection } from './components/HeroSection';
import { InvitationSection } from './components/InvitationSection';
import { EventsSection } from './components/EventsSection';

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
      {!isOpened && (
        <CoverEnvelope config={config} guestName={guestName} onOpen={handleOpenInvitation} />
      )}

      <main className="main-content">
        <HeroSection config={config} />
        <InvitationSection config={config} guestName={guestName} />
        <EventsSection config={config} />
      </main>

      {isOpened && (
        <MusicPlayer musicUrl={config.bgMusicUrl} autoPlayTriggered={autoPlayMusic} />
      )}
    </div>
  );
};

export default App;
