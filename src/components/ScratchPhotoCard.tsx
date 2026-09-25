import React from 'react';

interface ScratchPhotoCardProps {
  imageSrc: string;
  name: string;
  roleBadge: string;
}

export const ScratchPhotoCard: React.FC<ScratchPhotoCardProps> = ({ imageSrc, name, roleBadge }) => {
  return (
    <div className="scratch-card-container">
      <img src={imageSrc} alt={name} className="couple-img" />
      <span className="couple-badge">{roleBadge}</span>
    </div>
  );
};
