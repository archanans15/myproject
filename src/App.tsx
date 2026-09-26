import React, { useState, useEffect } from 'react';
import type { WeddingConfig } from './types/invitation';
import { getSavedConfig, getGuestNameFromUrl } from './utils/storage';
import { CoverEnvelope } from './components/CoverEnvelope';
import { MusicPlayer } from './components/MusicPlayer';
import { HeroSection } from './components/HeroSection';
import { CeremonySection } from './components/CeremonySection';
import { ReceptionSection } from './components/ReceptionSection';

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
        <CeremonySection config={config} />
        <ReceptionSection config={config} />
      </main>

      {isOpened && (
        <MusicPlayer musicUrl={config.bgMusicUrl} autoPlayTriggered={autoPlayMusic} />
      )}
    </div>
  );
};

export default App;
