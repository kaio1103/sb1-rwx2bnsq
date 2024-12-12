import React from 'react';
import { LoadingIndicator } from './LoadingIndicator';

export function LoadingMessage() {
  return (
    <div className="flex gap-3">
      <div className="relative max-w-[80%] px-4 py-3 rounded-lg bg-white/80 text-black">
        <div className="absolute left-[-8px] top-3 w-0 h-0 border-t-[8px] border-t-transparent border-r-[8px] border-r-white/80 border-b-[8px] border-b-transparent" />
        <div className="flex items-center gap-2">
          <LoadingIndicator size={20} className="text-black" />
          <span className="text-sm">考え中...</span>
        </div>
      </div>
    </div>
  );
}