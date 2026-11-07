"use client";

import { useEffect, useRef } from "react";

type AutoplayVideoProps = {
  src: string;
  poster: string;
  label: string;
  className?: string;
  playbackRate?: number;
};

export default function AutoplayVideo({ src, poster, label, className, playbackRate = 0.75 }: AutoplayVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    // Velocidad: default para cuando el video carga, y la actual por si ya cargó
    video.defaultPlaybackRate = playbackRate;
    video.playbackRate = playbackRate;
    
    // Respeta a quien pidió "reducir movimiento" en su sistema
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    video.muted = true; // los navegadores solo permiten autoplay sin sonido

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      controls
      preload="none"
      className={className}
    />
  );
}