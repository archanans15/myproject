import React, { useState, useEffect, useRef } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="snap-section hero-section" id="hero" ref={heroRef}>
      {/* Temple Gopuram Background Image */}
      <div className="section-bg-image" style={{ backgroundImage: `url('images/temple-gopuram-bg.jpg')` }}>
        <div className="section-overlay-gradient"></div>
      </div>

      <div className="hero-content container">
        {/* Row 1: Save The Date Badge */}
        <div
          className={`save-date-badge slow-fade-in-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.1s' }}
        >
          <Calendar size={15} />
          <span>SAVE THE DATE</span>
        </div>

        {/* Row 2: Tagline */}
        <p
          className={`hero-tagline slow-fade-in-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.3s' }}
        >
          {config.tagline}
        </p>

        {/* Row 3: Couple Names */}
        <h1
          className={`hero-title slow-fade-in-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.5s' }}
        >
          <span className="groom-name">{config.groomName}</span>
          <span className="hero-ampersand">&</span>
          <span className="bride-name">{config.brideName}</span>
        </h1>

        {/* Row 4: Parents Names */}
        <div
          className={`parents-names-subtitle slow-fade-in-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.7s' }}
        >
          <p className="parents-row">{config.groomTitle}</p>
          <p className="parents-row">{config.brideTitle}</p>
        </div>

        {/* Row 5: Formatted Wedding Date */}
        <div
          className={`hero-date-wrapper slow-fade-in-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.9s' }}
        >
          <div className="divider-line"></div>
          <p className="hero-formatted-date">{config.weddingTimeFormatted}</p>
          <div className="divider-line"></div>
        </div>

        {/* Row 6: Countdown Box */}
        <div
          className={`countdown-container slow-fade-in-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '1.1s' }}
        >
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

        {/* Row 7: Scroll Indicator */}
        <a
          href="#invitation"
          className={`scroll-indicator slow-fade-in-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '1.3s' }}
          aria-label="Scroll to Invitation"
        >
          <span className="scroll-text">SCROLL FOR INVITATION</span>
          <ChevronDown className="bounce-arrow" size={20} />
        </a>
      </div>
    </section>
  );
};
