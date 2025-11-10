import { useState, useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';

interface LazyImageProps {
   src: string;
   alt: string;
   className?: string;
   style?: CSSProperties;
   placeholder?: string;
   onLoad?: () => void;
}

const LazyImage = ({ 
   src, 
   alt, 
   className = '', 
   style = {}, 
   placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23f0f0f0"/%3E%3C/svg%3E',
   onLoad
}: LazyImageProps) => {
   const [imageSrc, setImageSrc] = useState<string>(placeholder);
   const [imageLoaded, setImageLoaded] = useState<boolean>(false);
   const imgRef = useRef<HTMLImageElement>(null);

   useEffect(() => {
      let observer: IntersectionObserver;
      
      if (imgRef.current) {
         observer = new IntersectionObserver(
            (entries) => {
               entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                     setImageSrc(src);
                     observer.unobserve(entry.target);
                  }
               });
            },
            {
               rootMargin: '50px', // Start loading 50px before entering viewport
            }
         );

         observer.observe(imgRef.current);
      }

      return () => {
         if (observer && imgRef.current) {
            observer.unobserve(imgRef.current);
         }
      };
   }, [src]);

   const handleImageLoad = () => {
      setImageLoaded(true);
      if (onLoad) {
         onLoad();
      }
   };

   return (
      <img
         ref={imgRef}
         src={imageSrc}
         alt={alt}
         className={className}
         style={{
            ...style,
            opacity: imageLoaded ? 1 : 0.5,
            transition: 'opacity 0.3s ease-in-out',
         }}
         onLoad={handleImageLoad}
         loading="lazy"
      />
   );
};

export default LazyImage;

