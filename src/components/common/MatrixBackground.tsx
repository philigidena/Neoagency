import { useEffect, useRef } from 'react';

interface MatrixBackgroundProps {
   opacity?: number;
   color?: string;
   density?: number;
}

const MatrixBackground = ({ 
   opacity = 0.05, 
   color = '#91ed91',
   density = 20 
}: MatrixBackgroundProps) => {
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

      // Matrix rain characters
      const characters = '01';
      const fontSize = 14;
      const columns = Math.floor(canvas.width / fontSize);
      const drops: number[] = [];

      // Initialize drops
      for (let i = 0; i < columns; i++) {
         drops[i] = Math.random() * -100;
      }

      // Drawing function
      const draw = () => {
         // Create fade effect
         ctx.fillStyle = `rgba(10, 30, 21, ${opacity * 2})`;
         ctx.fillRect(0, 0, canvas.width, canvas.height);

         ctx.fillStyle = color;
         ctx.font = `${fontSize}px monospace`;

         // Draw characters
         for (let i = 0; i < drops.length; i++) {
            // Random character
            const char = characters[Math.floor(Math.random() * characters.length)];
            const x = i * fontSize;
            const y = drops[i] * fontSize;

            ctx.fillText(char, x, y);

            // Reset drop randomly
            if (y > canvas.height && Math.random() > 0.95) {
               drops[i] = 0;
            }

            // Move drop
            drops[i] += 0.5;
         }
      };

      // Animation loop
      const interval = setInterval(draw, 50);

      return () => {
         clearInterval(interval);
         window.removeEventListener('resize', setCanvasSize);
      };
   }, [opacity, color, density]);

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
            zIndex: 0,
         }}
      />
   );
};

export default MatrixBackground;




