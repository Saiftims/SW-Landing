"use client";

import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

const TrustedBySection = () => {
  // Array for logo files
  const logos = [
    { name: "Company 1", src: "https://nationalbi.com/wp-content/uploads/2025/04/HanddrawnCircleLogo5-removebg-preview.png" },
    { name: "CNN", src: "https://nationalbi.com/wp-content/uploads/2025/04/cnn-1.svg" },
    { name: "Fly", src: "https://nationalbi.com/wp-content/uploads/2025/04/fly-1.svg" },
    { name: "Company 4", src: "https://nationalbi.com/wp-content/uploads/2025/04/1-1-1.png" },
    { name: "Dr. Phil", src: "https://nationalbi.com/wp-content/uploads/2025/04/dr-phil-logo-removebg-preview.png" },
    { name: "Relive Life's Moments", src: "/images/relive-logo.png" },
    { name: "Circle Logo", src: "https://nationalbi.com/wp-content/uploads/2025/04/HanddrawnCircleLogo6-removebg-preview.png" },
    { name: "Relive Life's Moments 2", src: "https://nationalbi.com/wp-content/uploads/2025/04/ReliveLifesMoments1-2-removebg-preview.png" },
    { name: "Healthline", src: "https://nationalbi.com/wp-content/uploads/2025/04/healthline-logo-removebg-preview-1-1.png" },
  ];

  // Duplicate logos to ensure smooth looping
  const extendedLogos = [...logos, ...logos, ...logos];

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
    slidesToScroll: 1
  });

  const animationRef = useRef<number | null>(null);
  const lastScrollRef = useRef<number>(0);

  useEffect(() => {
    if (emblaApi) {
      let lastTime = Date.now();
      const SCROLL_FACTOR = 0.0001;
      
      const animate = () => {
        const now = Date.now();
        const delta = now - lastTime;
        lastTime = now;
        
        const scrollDelta = delta * SCROLL_FACTOR;
        lastScrollRef.current += scrollDelta;
        
        if (lastScrollRef.current >= 0.2) {
          emblaApi.scrollNext();
          lastScrollRef.current = 0;
        }
        
        animationRef.current = requestAnimationFrame(animate);
      };
      
      animationRef.current = requestAnimationFrame(animate);
      
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [emblaApi]);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Subtle gradient background that blends with dark theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
      
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container-custom relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Built by the Experts Trusted by Leading Legal and{" "}
            <span className="gradient-text">Government Institutions</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-sm md:text-base">
            Our founders have advised top law firms and government agencies and are frequently cited by major global publications.
          </p>
        </div>
        
        {/* Logo Carousel with dark theme */}
        <div className="relative">
          {/* Gradient overlays for seamless fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[hsl(220,20%,4%)] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[hsl(220,20%,4%)] to-transparent pointer-events-none" />
          
          <div className="overflow-hidden py-4" ref={emblaRef}>
            <div className="flex">
              {extendedLogos.map((logo, index) => (
                <div key={index} className="flex-[0_0_50%] min-w-0 md:flex-[0_0_25%] lg:flex-[0_0_20%] px-4">
                  <div className="h-16 flex items-center justify-center rounded-xl transition-all duration-300 group hover:bg-white/[0.03]">
                    <img 
                      src={logo.src} 
                      alt={logo.name} 
                      className="h-8 w-auto max-w-[100px] object-contain transition-all duration-300 opacity-40 group-hover:opacity-70"
                      style={{ 
                        filter: 'brightness(0) invert(1)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle bottom border glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
};

export default TrustedBySection;
