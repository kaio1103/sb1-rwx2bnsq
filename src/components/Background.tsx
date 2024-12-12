import React from 'react';
import { getOptimizedImageUrl } from '../utils/cloudinary';
import { imageConfig } from '../config/images';

interface BackgroundProps {
  className?: string;
  children: React.ReactNode;
}

export function Background({ className = '', children }: BackgroundProps) {
  return (
    <div 
      className={`min-h-screen bg-cover bg-center bg-no-repeat ${className}`}
      style={{ 
        backgroundImage: `url(${getOptimizedImageUrl({ publicId: imageConfig.background.publicId })})`,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlend: 'overlay',
      }}
    >
      {children}
    </div>
  );
}