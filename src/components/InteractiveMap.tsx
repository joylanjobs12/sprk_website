'use client';

import React from 'react';

interface InteractiveMapProps {
  mapImageUrl: string;
}

export default function InteractiveMap({ mapImageUrl }: InteractiveMapProps) {
  const handleZoomToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const mapElement = e.currentTarget.closest('.map-container')?.querySelector('.map-image') as HTMLElement;
    if (mapElement) {
      const currentScale = mapElement.style.transform.match(/scale\(([\d.]+)\)/)?.[1] || '1';
      const newScale = parseFloat(currentScale) >= 2 ? 1 : 2;
      mapElement.style.transform = `scale(${newScale})`;
      mapElement.style.backgroundSize = newScale === 1 ? '200%' : '400%';
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const mapElement = e.currentTarget.querySelector('.map-image') as HTMLElement;
    if (mapElement) {
      mapElement.style.transition = 'none';
    }
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const mapElement = e.currentTarget.querySelector('.map-image') as HTMLElement;
    if (mapElement) {
      mapElement.style.transition = 'transform 0.3s ease-out';
    }
  };

  return (
    <div className="bg-[#115056] content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
      {/* Mobile Map with Zoom Functionality */}
      <div className="block md:hidden w-full px-4 py-4">
        <div className="relative overflow-hidden rounded-lg bg-[#115056] border border-[rgba(255,255,255,0.1)]">
          <div 
            className="map-container cursor-grab active:cursor-grabbing select-none touch-pan-x touch-pan-y"
            style={{
              width: '100%',
              height: '400px',
              overflow: 'hidden',
              position: 'relative'
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="map-image bg-center bg-no-repeat w-full h-full"
              style={{ 
                backgroundImage: `url('${mapImageUrl}')`,
                backgroundSize: '200%',
                backgroundPosition: 'center',
                transform: 'scale(1)',
                transformOrigin: 'center center',
                transition: 'transform 0.3s ease-out'
              }}
            />
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            <div className="bg-[rgba(0,0,0,0.7)] text-white text-xs px-3 py-2 rounded-full">
              Pinch to zoom • Drag to explore
            </div>
            <button 
              className="bg-[rgba(255,255,255,0.9)] text-[#115056] w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg hover:bg-white transition-colors"
              onClick={handleZoomToggle}
            >
              🔍
            </button>
          </div>
        </div>
      </div>

      {/* Tablet Map */}
      <div className="hidden md:block lg:hidden w-full px-6 py-4">
        <div
          className="map-zoom bg-center bg-contain bg-no-repeat h-[600px] w-full rounded-lg"
          style={{ backgroundImage: `url('${mapImageUrl}')` }}
        />
      </div>

      {/* Desktop Map */}
      <div className="hidden lg:block w-full">
        <div
          className="map-zoom bg-center bg-contain bg-no-repeat h-[800px] xl:h-[900px] 2xl:h-[1031px] w-full"
          style={{ backgroundImage: `url('${mapImageUrl}')` }}
        />
      </div>
    </div>
  );
}
