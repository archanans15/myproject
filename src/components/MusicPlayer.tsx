import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Music, Play, Pause } from 'lucide-react';

interface MusicPlayerProps {
  musicUrl: string;
  autoPlayTriggered: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ musicUrl, autoPlayTriggered }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

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

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="music-player-bar glass-morphism">
      <audio ref={audioRef} src={musicUrl} loop preload="auto" />
      
      <div className="music-info">
        <div className={`music-disc ${isPlaying ? 'spin' : ''}`}>
          <Music size={16} />
        </div>
        <div className="music-labels">
          <span className="music-title">Pookal Pookum (Flute Cover)</span>
          <span className="music-status">{isPlaying ? 'Playing Flute Song' : 'Tap Play'}</span>
        </div>
      </div>

      <div className="music-equalizer">
        <span className={`bar ${isPlaying ? 'animating' : ''}`}></span>
        <span className={`bar ${isPlaying ? 'animating' : ''}`}></span>
        <span className={`bar ${isPlaying ? 'animating' : ''}`}></span>
        <span className={`bar ${isPlaying ? 'animating' : ''}`}></span>
      </div>

      <div className="music-actions">
        <button className="music-btn" onClick={togglePlay} title={isPlaying ? "Pause Music" : "Play Music"}>
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>
        <button className="music-btn" onClick={toggleMute} title={isMuted ? "Unmute" : "Mute"}>
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>
    </div>
  );
};
