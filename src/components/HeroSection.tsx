import React, { useState, useEffect } from 'react';
import { Calendar, ChevronDown, Sparkles } from 'lucide-react';
import type { WeddingConfig } from '../types/invitation';

interface HeroSectionProps {
  config: WeddingConfig;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ config }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(config.weddingDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [config.weddingDate]);

  return (
    <section className="snap-section hero-section" id="hero">
      {/* Temple Gopuram Background Image */}
      <div className="section-bg-image" style={{ backgroundImage: `url('images/temple-gopuram-bg.jpg')` }}>
        <div className="section-overlay-gradient"></div>
      </div>

      <div className="hero-content container">
        <div className="save-date-badge animate-fade-down">
          <Calendar size={15} />
          <span>SAVE THE DATE</span>
        </div>

        <p className="hero-tagline animate-fade-up">{config.tagline}</p>

        <h1 className="hero-title animate-zoom-in">
          <span className="groom-name">{config.groomName}</span>
          <span className="hero-ampersand">&</span>
          <span className="bride-name">{config.brideName}</span>
        </h1>

        <div className="parents-names-subtitle animate-fade-up">
          <p className="parents-row">{config.groomTitle}</p>
          <p className="parents-row">{config.brideTitle}</p>
        </div>

        <div className="hero-date-wrapper animate-fade-up">
          <div className="divider-line"></div>
          <p className="hero-formatted-date">{config.weddingTimeFormatted}</p>
          <div className="divider-line"></div>
        </div>

        <div className="countdown-container glass-morphism animate-fade-up">
          <div className="countdown-header">
            <Sparkles size={16} className="gold-icon icon-sparkle-spin" />
            <span className="countdown-header-title">COUNTDOWN TO THE BIG DAY</span>
            <Sparkles size={16} className="gold-icon icon-sparkle-spin" />
          </div>

          <div className="countdown-grid">
            <div className="countdown-box">
              <span className="countdown-number">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-colon">:</div>
            <div className="countdown-box">
              <span className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-colon">:</div>
            <div className="countdown-box">
              <span className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="countdown-label">Mins</span>
            </div>
            <div className="countdown-colon">:</div>
            <div className="countdown-box">
              <span key={timeLeft.seconds} className="countdown-number tick-pulse">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="countdown-label">Secs</span>
            </div>
          </div>
        </div>

        <a href="#ceremony" className="scroll-indicator animate-fade-up" aria-label="Scroll to Ceremony">
          <span className="scroll-text">SCROLL FOR CEREMONY</span>
          <ChevronDown className="bounce-arrow" size={20} />
        </a>
      </div>
    </section>
  );
};
