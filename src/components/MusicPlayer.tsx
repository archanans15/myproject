import React, { useEffect, useRef, useState } from 'react';
import { Music, Play, Pause } from 'lucide-react';

interface MusicPlayerProps {
  musicUrl: string;
  autoPlayTriggered: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ musicUrl, autoPlayTriggered }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current && autoPlayTriggered) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Autoplay prevented by browser policy:', err);
        setIsPlaying(false);
      });
    }
  }, [autoPlayTriggered, musicUrl]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => console.error('Audio play error:', err));
    }
  };

  return (
    <div className="compact-music-floating">
      <audio ref={audioRef} src={musicUrl} loop preload="auto" />
      <button
        className={`compact-music-btn glass-morphism ${isPlaying ? 'playing' : ''}`}
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause Music' : 'Play Music'}
        title={isPlaying ? 'Pause Music' : 'Play Music'}
      >
        <div className={`music-disc-mini ${isPlaying ? 'spin' : ''}`}>
          <Music size={15} className="gold-icon" />
        </div>
        <div className="music-play-state-icon">
          {isPlaying ? <Pause size={15} /> : <Play size={15} />}
        </div>
      </button>
    </div>
  );
};

