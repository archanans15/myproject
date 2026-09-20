import React from 'react';
import { Heart, Quote, Sparkles } from 'lucide-react';
import type { WeddingConfig } from '../types/invitation';
import { ScratchPhotoCard } from './ScratchPhotoCard';

interface CoupleStoryProps {
  config: WeddingConfig;
}

export const CoupleStory: React.FC<CoupleStoryProps> = ({ config }) => {
  return (
    <section className="story-section section-padding" id="story">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-eyebrow font-sub">OUR JOURNEY TO FOREVER</span>
          <h2 className="section-title">Meet Groom & Bride</h2>
          <p className="scratch-hint font-sub">
            <Sparkles size={16} className="inline-icon gold-icon" /> Scratch cards below to reveal Rakesh & Archana!
          </p>
          <div className="title-underline"></div>
        </div>

        <div className="couple-grid">
          {/* Groom Scratch Card */}
          <div className="couple-card glass-morphism">
            <div className="couple-img-wrapper">
              <ScratchPhotoCard
                imageSrc={config.groomPhoto}
                name={config.groomName}
                roleBadge="The Groom"
              />
            </div>
            <div className="couple-info text-center">
              <h3 className="couple-name">{config.groomName}</h3>
              {config.groomTitle && <p className="couple-subtitle font-sub">{config.groomTitle}</p>}
              <p className="couple-bio">{config.groomBio}</p>
            </div>
          </div>

          <div className="couple-center-symbol">
            <div className="glow-ring">
              <Heart size={36} fill="#d4af37" color="#d4af37" />
            </div>
          </div>

          {/* Bride Scratch Card */}
          <div className="couple-card glass-morphism">
            <div className="couple-img-wrapper">
              <ScratchPhotoCard
                imageSrc={config.bridePhoto}
                name={config.brideName}
                roleBadge="The Bride"
              />
            </div>
            <div className="couple-info text-center">
              <h3 className="couple-name">{config.brideName}</h3>
              {config.brideTitle && <p className="couple-subtitle font-sub">{config.brideTitle}</p>}
              <p className="couple-bio">{config.brideBio}</p>
            </div>
          </div>
        </div>

        <div className="how-we-met-box glass-morphism margin-top-lg text-center">
          <Quote size={32} className="quote-icon gold-icon" />
          <h3 className="story-subtitle font-sub">HOW OUR STORY BEGAN</h3>
          <p className="story-description">{config.howWeMet}</p>
          <div className="couple-quote">
            <p>“{config.coupleBio}”</p>
          </div>
        </div>
      </div>
    </section>
  );
};
