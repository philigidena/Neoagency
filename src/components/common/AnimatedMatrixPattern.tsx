import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface AnimatedMatrixPatternProps {
   opacity?: number;
   primaryColor?: string;
   secondaryColor?: string;
   showGrid?: boolean;
   showBinary?: boolean;
}

const AnimatedMatrixPattern = ({ 
   opacity = 0.15, 
   primaryColor = '#2c6e49',
   secondaryColor = '#91ed91',
   showGrid = true,
   showBinary = true
}: AnimatedMatrixPatternProps) => {
   const binaryRefs = useRef<(SVGTextElement | null)[]>([]);
   const gridRef = useRef<HTMLDivElement>(null);
   const containerRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (!showBinary) return;

      // Animate binary numbers with staggered fade in/out
      binaryRefs.current.forEach((ref, index) => {
         if (ref) {
            gsap.to(ref, {
               opacity: Math.random() * 0.6 + 0.3,
               duration: 2 + Math.random() * 2,
               repeat: -1,
               yoyo: true,
               delay: index * 0.1,
               ease: 'power1.inOut'
            });

            // Random text change animation
            const changeText = () => {
               if (ref) {
                  const newBinary = Math.random() > 0.5 ? '1' : '0';
                  gsap.to(ref, {
                     scale: 1.2,
                     duration: 0.1,
                     onComplete: () => {
                        ref.textContent = ref.textContent?.split(' ').map(() => 
                           Math.random() > 0.5 ? '1' : '0'
                        ).join(' ') || ref.textContent;
                        gsap.to(ref, { scale: 1, duration: 0.1 });
                     }
                  });
               }
            };

            // Random intervals for text changes
            const intervalTime = 3000 + Math.random() * 5000;
            const interval = setInterval(changeText, intervalTime);

            // Cleanup
            return () => clearInterval(interval);
         }
      });

      // Subtle floating animation for entire container
      if (containerRef.current) {
         gsap.to(containerRef.current, {
            y: -10,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
         });
      }

      // Pulse grid lines
      if (showGrid && gridRef.current) {
         gsap.to(gridRef.current, {
            opacity: opacity * 0.8,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
         });
      }

   }, [showBinary, showGrid, opacity]);

   return (
      <div
         ref={containerRef}
         style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 10,
            overflow: 'hidden',
         }}
      >
         {/* Animated Grid Pattern */}
         {showGrid && (
            <div
               ref={gridRef}
               style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundImage: `
                     linear-gradient(${primaryColor} 0.5px, transparent 0.5px),
                     linear-gradient(90deg, ${primaryColor} 0.5px, transparent 0.5px)
                  `,
                  backgroundSize: '30px 30px',
                  opacity: opacity,
               }}
            />
         )}

         {/* Animated Binary Numbers Pattern */}
         {showBinary && (
            <svg
               style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  opacity: opacity * 1.5,
               }}
            >
               <defs>
                  <pattern
                     id="animatedBinaryPattern"
                     x="0"
                     y="0"
                     width="300"
                     height="300"
                     patternUnits="userSpaceOnUse"
                  >
                     {/* Top section */}
                     <text ref={el => binaryRefs.current[0] = el} x="20" y="30" fill={secondaryColor} fontSize="11" fontFamily="monospace" opacity="0.6">1 0 1 0</text>
                     <text ref={el => binaryRefs.current[1] = el} x="180" y="50" fill={primaryColor} fontSize="10" fontFamily="monospace" opacity="0.5">0 1</text>
                     <text ref={el => binaryRefs.current[2] = el} x="250" y="40" fill={secondaryColor} fontSize="9" fontFamily="monospace" opacity="0.4">1 1</text>
                     
                     {/* Middle section */}
                     <text ref={el => binaryRefs.current[3] = el} x="60" y="100" fill={primaryColor} fontSize="10" fontFamily="monospace" opacity="0.5">1 1 1</text>
                     <text ref={el => binaryRefs.current[4] = el} x="200" y="120" fill={secondaryColor} fontSize="11" fontFamily="monospace" opacity="0.6">0 1 0</text>
                     <text ref={el => binaryRefs.current[5] = el} x="10" y="150" fill={primaryColor} fontSize="9" fontFamily="monospace" opacity="0.4">1 0</text>
                     <text ref={el => binaryRefs.current[6] = el} x="270" y="140" fill={secondaryColor} fontSize="10" fontFamily="monospace" opacity="0.5">0 1 1</text>
                     
                     {/* Bottom section */}
                     <text ref={el => binaryRefs.current[7] = el} x="100" y="200" fill={secondaryColor} fontSize="10" fontFamily="monospace" opacity="0.5">1 0 1</text>
                     <text ref={el => binaryRefs.current[8] = el} x="240" y="220" fill={primaryColor} fontSize="11" fontFamily="monospace" opacity="0.6">0 1</text>
                     <text ref={el => binaryRefs.current[9] = el} x="30" y="250" fill={secondaryColor} fontSize="9" fontFamily="monospace" opacity="0.4">1 1 0</text>
                     <text ref={el => binaryRefs.current[10] = el} x="150" y="270" fill={primaryColor} fontSize="10" fontFamily="monospace" opacity="0.5">1 0 0 1</text>
                     
                     {/* Scattered numbers */}
                     <text ref={el => binaryRefs.current[11] = el} x="140" y="70" fill={secondaryColor} fontSize="8" fontFamily="monospace" opacity="0.3">0</text>
                     <text ref={el => binaryRefs.current[12] = el} x="80" y="180" fill={primaryColor} fontSize="8" fontFamily="monospace" opacity="0.3">1</text>
                     <text ref={el => binaryRefs.current[13] = el} x="220" y="90" fill={secondaryColor} fontSize="8" fontFamily="monospace" opacity="0.3">0</text>
                  </pattern>
               </defs>
               <rect width="100%" height="100%" fill="url(#animatedBinaryPattern)" />
            </svg>
         )}

         {/* Subtle gradient overlay for depth */}
         <div
            style={{
               position: 'absolute',
               width: '100%',
               height: '100%',
               background: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(10, 30, 21, ${opacity * 0.5}) 100%)`,
               opacity: 0.3,
            }}
         />
      </div>
   );
};

export default AnimatedMatrixPattern;




