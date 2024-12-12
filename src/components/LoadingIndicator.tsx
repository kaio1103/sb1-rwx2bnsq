import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingIndicatorProps {
  className?: string;
  size?: number;
}

export function LoadingIndicator({ className = '', size = 24 }: LoadingIndicatorProps) {
  return (
    <Loader2 className={`animate-spin ${className}`} size={size} />
  );
}