import { useEffect, useRef } from 'react';

interface MatrixRainPatternProps {
   opacity?: number;
   primaryColor?: string;
   secondaryColor?: string;
   speed?: number;
   density?: number;
}

const MatrixRainPattern = ({ 
   opacity = 0.12, 
   primaryColor = '#2c6e49',
   secondaryColor = '#91ed91',
   speed = 50,
   density = 0.8
}: MatrixRainPatternProps) => {
   const canvasRef = useRef<HTMLCanvasElement>(null);

   useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Set canvas size
      const setCanvasSize = () => {
         canvas.width = window.innerWidth;
         canvas.height = window.innerHeight;
      };
      setCanvasSize();
      window.addEventListener('resize', setCanvasSize);

      // Matrix rain settings
      const fontSize = 14;
      const columns = Math.floor(canvas.width / fontSize);
      const drops: number[] = [];
      const speeds: number[] = [];
      const colors: string[] = [];

      // Initialize each column
      for (let i = 0; i < columns; i++) {
         drops[i] = Math.random() * -50; // Start at random heights
         speeds[i] = 0.3 + Math.random() * 0.5; // Random speeds
         colors[i] = Math.random() > 0.5 ? secondaryColor : primaryColor; // Random color
      }

      // Check if a point overlaps with any image
      const checkImageOverlap = (x: number, y: number): boolean => {
         const images = document.querySelectorAll('img');
         for (const img of images) {
            const rect = img.getBoundingClientRect();
            if (
               x >= rect.left &&
               x <= rect.right &&
               y >= rect.top &&
               y <= rect.bottom
            ) {
               return true;
            }
         }
         return false;
      };

      // Draw function
      const draw = () => {
         // Create trailing effect
         ctx.fillStyle = 'rgba(10, 30, 21, 0.05)';
         ctx.fillRect(0, 0, canvas.width, canvas.height);

         ctx.font = `${fontSize}px monospace`;

         // Draw each column
         for (let i = 0; i < drops.length; i++) {
            // Alternate between 0 and 1
            const char = Math.random() > 0.5 ? '1' : '0';
            const x = i * fontSize;
            const y = drops[i] * fontSize;

            // Check if position overlaps with image
            const overlapsImage = checkImageOverlap(x, y);

            if (!overlapsImage && y > 0 && y < canvas.height) {
               // Brightest character at the tip
               ctx.fillStyle = colors[i];
               ctx.globalAlpha = 1;
               ctx.fillText(char, x, y);

               // Draw fading trail
               for (let j = 1; j < 8; j++) {
                  const trailY = (drops[i] - j) * fontSize;
                  if (trailY > 0 && !checkImageOverlap(x, trailY)) {
                     ctx.globalAlpha = 1 - (j * 0.15);
                     const trailChar = Math.random() > 0.5 ? '1' : '0';
                     ctx.fillText(trailChar, x, trailY);
                  }
               }
            }

            // Reset globalAlpha
            ctx.globalAlpha = 1;

            // Move drop down
            drops[i] += speeds[i];

            // Reset drop when it goes off screen
            if (drops[i] * fontSize > canvas.height + Math.random() * 500) {
               drops[i] = -10;
               speeds[i] = 0.3 + Math.random() * 0.5;
               colors[i] = Math.random() > 0.5 ? secondaryColor : primaryColor;
            }
         }
      };

      // Animation loop
      const interval = setInterval(draw, speed);

      return () => {
         clearInterval(interval);
         window.removeEventListener('resize', setCanvasSize);
      };
   }, [opacity, primaryColor, secondaryColor, speed, density]);

   return (
      <canvas
         ref={canvasRef}
         style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: opacity,
            mixBlendMode: 'screen',
         }}
      />
   );
};

export default MatrixRainPattern;




