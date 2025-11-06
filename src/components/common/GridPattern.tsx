interface GridPatternProps {
   opacity?: number;
   color?: string;
   gridSize?: number;
}

const GridPattern = ({ 
   opacity = 0.03, 
   color = '#91ed91',
   gridSize = 20 
}: GridPatternProps) => {
   return (
      <div
         style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0,
            backgroundImage: `
               linear-gradient(${color} 1px, transparent 1px),
               linear-gradient(90deg, ${color} 1px, transparent 1px)
            `,
            backgroundSize: `${gridSize}px ${gridSize}px`,
            opacity: opacity,
         }}
      >
         {/* Optional: Add scattered binary numbers */}
         <svg
            style={{
               position: 'absolute',
               width: '100%',
               height: '100%',
               opacity: opacity * 2,
            }}
         >
            <defs>
               <pattern
                  id="binaryPattern"
                  x="0"
                  y="0"
                  width="200"
                  height="200"
                  patternUnits="userSpaceOnUse"
               >
                  <text x="10" y="20" fill={color} fontSize="10" fontFamily="monospace">1 0 1</text>
                  <text x="120" y="50" fill={color} fontSize="10" fontFamily="monospace">0 1</text>
                  <text x="50" y="80" fill={color} fontSize="10" fontFamily="monospace">1 1 0</text>
                  <text x="150" y="110" fill={color} fontSize="10" fontFamily="monospace">1 0</text>
                  <text x="20" y="140" fill={color} fontSize="10" fontFamily="monospace">0 1 1</text>
                  <text x="100" y="170" fill={color} fontSize="10" fontFamily="monospace">1 0 0</text>
               </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#binaryPattern)" />
         </svg>
      </div>
   );
};

export default GridPattern;




