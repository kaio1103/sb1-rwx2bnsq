import React, { useState, useEffect } from 'react';
import { getOptimizedImageUrl } from '../utils/cloudinary';

interface CharacterSpaceProps {
  publicId: string;
}

export function CharacterSpace({ publicId }: CharacterSpaceProps) {
  const [currentImage, setCurrentImage] = useState(publicId);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (publicId !== currentImage) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setCurrentImage(publicId);
        setIsTransitioning(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [publicId, currentImage]);

  return (
    <div className="w-1/2 relative">
      <img
        src={getOptimizedImageUrl({ publicId: currentImage })}
        alt="Character"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
}