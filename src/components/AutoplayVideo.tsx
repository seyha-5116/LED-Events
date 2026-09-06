import React, { useEffect, useRef } from 'react';

interface AutoplayVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

/**
 * Muted, looping preview video that reliably starts playing once it scrolls
 * into view. The bare `autoPlay` attribute is skipped by browsers when the
 * element mounts off-screen (as our reveal-on-scroll cards do), so we drive
 * playback explicitly with an IntersectionObserver instead.
 */
export default function AutoplayVideo({ src, poster, className }: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      const promise = video.play();
      if (promise) promise.catch(() => {});
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tryPlay();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      poster={poster}
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
