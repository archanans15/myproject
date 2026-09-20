import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import type { GalleryPhoto } from '../types/invitation';

interface PhotoGalleryProps {
  gallery: GalleryPhoto[];
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ gallery }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  return (
    <section className="gallery-section section-padding" id="gallery">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-eyebrow font-sub">MEMORIES & GLIMPSES</span>
          <h2 className="section-title">Pre-Wedding Moments</h2>
          <div className="title-underline"></div>
        </div>

        <div className="gallery-grid">
          {gallery.map((photo) => (
            <div
              key={photo.id}
              className="gallery-item glass-morphism"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img src={photo.url} alt={photo.caption} loading="lazy" />
              <div className="gallery-hover-overlay">
                <ZoomIn size={28} className="gold-icon" />
                <span className="gallery-caption">{photo.caption}</span>
              </div>
            </div>
          ))}
        </div>

        {selectedPhoto && (
          <div className="lightbox-overlay" onClick={() => setSelectedPhoto(null)}>
            <div className="lightbox-content glass-morphism" onClick={(e) => e.stopPropagation()}>
              <button
                className="lightbox-close-btn"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close image"
              >
                <X size={24} />
              </button>
              <img src={selectedPhoto.url} alt={selectedPhoto.caption} className="lightbox-img" />
              <p className="lightbox-caption font-sub">{selectedPhoto.caption}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
