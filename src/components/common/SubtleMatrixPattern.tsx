interface SubtleMatrixPatternProps {
   opacity?: number;
   primaryColor?: string;
   secondaryColor?: string;
   showGrid?: boolean;
   showBinary?: boolean;
}

const SubtleMatrixPattern = ({ 
   opacity = 0.04, 
   primaryColor = '#2c6e49',
   secondaryColor = '#91ed91',
   showGrid = true,
   showBinary = true
}: SubtleMatrixPatternProps) => {
   return (
      <div
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
         {/* Grid Pattern */}
         {showGrid && (
            <div
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

         {/* Binary Numbers Pattern */}
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
                     id="binaryPattern"
                     x="0"
                     y="0"
                     width="300"
                     height="300"
                     patternUnits="userSpaceOnUse"
                  >
                     {/* Top section */}
                     <text x="20" y="30" fill={secondaryColor} fontSize="11" fontFamily="monospace" opacity="0.6">1 0 1 0</text>
                     <text x="180" y="50" fill={primaryColor} fontSize="10" fontFamily="monospace" opacity="0.5">0 1</text>
                     <text x="250" y="40" fill={secondaryColor} fontSize="9" fontFamily="monospace" opacity="0.4">1 1</text>
                     
                     {/* Middle section */}
                     <text x="60" y="100" fill={primaryColor} fontSize="10" fontFamily="monospace" opacity="0.5">1 1 1</text>
                     <text x="200" y="120" fill={secondaryColor} fontSize="11" fontFamily="monospace" opacity="0.6">0 1 0</text>
                     <text x="10" y="150" fill={primaryColor} fontSize="9" fontFamily="monospace" opacity="0.4">1 0</text>
                     <text x="270" y="140" fill={secondaryColor} fontSize="10" fontFamily="monospace" opacity="0.5">0 1 1</text>
                     
                     {/* Bottom section */}
                     <text x="100" y="200" fill={secondaryColor} fontSize="10" fontFamily="monospace" opacity="0.5">1 0 1</text>
                     <text x="240" y="220" fill={primaryColor} fontSize="11" fontFamily="monospace" opacity="0.6">0 1</text>
                     <text x="30" y="250" fill={secondaryColor} fontSize="9" fontFamily="monospace" opacity="0.4">1 1 0</text>
                     <text x="150" y="270" fill={primaryColor} fontSize="10" fontFamily="monospace" opacity="0.5">1 0 0 1</text>
                     
                     {/* Scattered numbers */}
                     <text x="140" y="70" fill={secondaryColor} fontSize="8" fontFamily="monospace" opacity="0.3">0</text>
                     <text x="80" y="180" fill={primaryColor} fontSize="8" fontFamily="monospace" opacity="0.3">1</text>
                     <text x="220" y="90" fill={secondaryColor} fontSize="8" fontFamily="monospace" opacity="0.3">0</text>
                  </pattern>
               </defs>
               <rect width="100%" height="100%" fill="url(#binaryPattern)" />
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

export default SubtleMatrixPattern;

