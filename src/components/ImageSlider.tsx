"use client";

import { useState, useEffect } from "react";

interface ImageSliderProps {
  images: { src: string; alt: string }[];
  interval?: number;
}

const ImageSlider = ({ images, interval = 4000 }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-full">
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="w-full h-full object-contain bg-transparent"
      />
      
      {/* Dots indicator - keeping this for accessibility but making it visually subtle */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full opacity-60 ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider; 