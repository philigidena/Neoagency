import { useRef, useState } from "react";

const VideoArea = () => {

   const videoRef = useRef<HTMLVideoElement>(null);
   const [isPlaying, setIsPlaying] = useState(true);
   const [isMuted, setIsMuted] = useState(true);

   const togglePlayPause = () => {
      if (videoRef.current) {
         if (isPlaying) {
            videoRef.current.pause();
         } else {
            videoRef.current.play();
         }
         setIsPlaying(!isPlaying);
      }
   };

   const toggleMute = () => {
      if (videoRef.current) {
         videoRef.current.muted = !isMuted;
         setIsMuted(!isMuted);
      }
   };

   return (
      <>
         <div className="td-video-area-modern p-relative" style={{ 
            padding: '120px 0',
            overflow: 'hidden'
         }}>
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="td-video-modern-wrap" style={{
                        position: 'relative',
                        borderRadius: '32px',
                        overflow: 'hidden',
                        height: '600px',
                        background: '#000',
                     }}>
                        <video 
                           ref={videoRef}
                           autoPlay 
                           loop 
                           muted 
                           playsInline
                           style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              zIndex: 1,
                           }}
                        >
                           <source src="/assets/Perception.mp4" type="video/mp4" />
                        </video>
                        
                        <div className="td-video-overlay" style={{
                           position: 'absolute',
                           top: 0,
                           left: 0,
                           width: '100%',
                           height: '100%',
                           background: 'linear-gradient(135deg, rgba(44, 110, 73, 0.7) 0%, rgba(10, 30, 21, 0.8) 100%)',
                           zIndex: 2,
                        }}></div>

                        <div className="td-video-content d-flex align-items-center justify-content-center" style={{
                           position: 'relative',
                           zIndex: 3,
                           height: '100%',
                           padding: '40px 20px',
                           textAlign: 'center'
                        }}>
                           <div>
                              <div className="td-video-badge mb-20 mb-md-30" style={{
                                 display: 'inline-flex',
                                 alignItems: 'center',
                                 gap: '10px',
                                 padding: '8px 20px',
                                 background: 'rgba(127, 255, 0, 0.15)',
                                 border: '1px solid rgba(127, 255, 0, 0.3)',
                                 borderRadius: '50px',
                                 fontSize: '11px',
                                 fontWeight: '600',
                                 color: '#7FFF00',
                                 letterSpacing: '1.5px',
                                 textTransform: 'uppercase',
                              }}>
                                 Our Story
                              </div>

                              <h2 className="td-video-title mb-20 mb-md-40" style={{
                                 fontSize: 'clamp(36px, 5.5vw, 82px)',
                                 fontWeight: '800',
                                 lineHeight: '1.1',
                                 color: '#fff',
                                 letterSpacing: 'clamp(-1px, -0.02em, -2px)',
                                 textTransform: 'uppercase',
                              }}>
                                 PERCEPTION<br />
                                 <span style={{
                                    background: 'linear-gradient(135deg, #7FFF00 0%, #00FF7F 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                 }}>PSYCHOLOGY</span><br />
                                 STORYTELLING
                              </h2>

                              <p className="td-video-desc mb-30 mb-md-50" style={{
                                 fontSize: 'clamp(15px, 2vw, 18px)',
                                 lineHeight: '1.7',
                                 color: 'rgba(255,255,255,0.9)',
                                 maxWidth: '600px',
                                 margin: '0 auto',
                                 marginBottom: 'clamp(30px, 5vw, 50px)',
                                 padding: '0 10px',
                              }}>
                                 Discover how we blend psychology, perception, and storytelling to create 
                                 marketing experiences that resonate deeply with your audience.
                              </p>

                              <div style={{ 
                                 display: 'flex', 
                                 alignItems: 'center', 
                                 justifyContent: 'center',
                                 gap: '20px',
                                 flexWrap: 'wrap'
                              }}>
                                 <button 
                                    onClick={togglePlayPause} 
                                    className="td-video-play-modern"
                                    style={{
                                       width: 'clamp(70px, 15vw, 90px)',
                                       height: 'clamp(70px, 15vw, 90px)',
                                       borderRadius: '50%',
                                       background: 'linear-gradient(135deg, #7FFF00 0%, #00FF7F 100%)',
                                       border: 'none',
                                       cursor: 'pointer',
                                       display: 'inline-flex',
                                       alignItems: 'center',
                                       justifyContent: 'center',
                                       position: 'relative',
                                       transition: 'all 0.4s ease',
                                       boxShadow: '0 10px 40px rgba(127, 255, 0, 0.3)',
                                    }}
                                    onMouseEnter={(e) => {
                                       e.currentTarget.style.transform = 'scale(1.1)';
                                       e.currentTarget.style.boxShadow = '0 15px 50px rgba(127, 255, 0, 0.5)';
                                    }}
                                    onMouseLeave={(e) => {
                                       e.currentTarget.style.transform = 'scale(1)';
                                       e.currentTarget.style.boxShadow = '0 10px 40px rgba(127, 255, 0, 0.3)';
                                    }}
                                 >
                                    {isPlaying ? (
                                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect x="6" y="4" width="4" height="16" rx="1" fill="#000" />
                                          <rect x="14" y="4" width="4" height="16" rx="1" fill="#000" />
                                       </svg>
                                    ) : (
                                       <svg width="24" height="24" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M17.3616 8.34455C19.0412 9.31425 19.0412 11.7385 17.3616 12.7082L4.13504 20.3445C2.45548 21.3142 0.356021 20.1021 0.356021 18.1627L0.356022 2.89C0.356022 0.950609 2.45548 -0.261512 4.13504 0.708185L17.3616 8.34455Z" fill="#000" />
                                       </svg>
                                    )}
                                 </button>

                                 <button 
                                    onClick={toggleMute} 
                                    style={{
                                       width: '50px',
                                       height: '50px',
                                       borderRadius: '50%',
                                       background: 'rgba(127, 255, 0, 0.2)',
                                       border: '2px solid rgba(127, 255, 0, 0.4)',
                                       cursor: 'pointer',
                                       display: 'inline-flex',
                                       alignItems: 'center',
                                       justifyContent: 'center',
                                       transition: 'all 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                       e.currentTarget.style.background = 'rgba(127, 255, 0, 0.3)';
                                       e.currentTarget.style.borderColor = 'rgba(127, 255, 0, 0.6)';
                                    }}
                                    onMouseLeave={(e) => {
                                       e.currentTarget.style.background = 'rgba(127, 255, 0, 0.2)';
                                       e.currentTarget.style.borderColor = 'rgba(127, 255, 0, 0.4)';
                                    }}
                                 >
                                    {isMuted ? (
                                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="#7FFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                          <line x1="23" y1="9" x2="17" y2="15" stroke="#7FFF00" strokeWidth="2" strokeLinecap="round"/>
                                          <line x1="17" y1="9" x2="23" y2="15" stroke="#7FFF00" strokeWidth="2" strokeLinecap="round"/>
                                       </svg>
                                    ) : (
                                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="#7FFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                          <path d="M15.54 8.46C16.4774 9.39764 17.0039 10.6692 17.0039 11.995C17.0039 13.3208 16.4774 14.5924 15.54 15.53" stroke="#7FFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                          <path d="M19.07 4.93C20.9447 6.80528 21.9979 9.34836 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07" stroke="#7FFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                       </svg>
                                    )}
                                 </button>
                              </div>
                           </div>
                        </div>

                        {isPlaying && (
                           <div className="td-video-pulse" style={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              width: '140px',
                              height: '140px',
                              borderRadius: '50%',
                              border: '2px solid rgba(127, 255, 0, 0.3)',
                              zIndex: 2,
                              animation: 'videoPulse 2s infinite',
                              pointerEvents: 'none',
                           }}></div>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <style>{`
            @keyframes videoPulse {
               0% {
                  transform: translate(-50%, -50%) scale(1);
                  opacity: 1;
               }
               100% {
                  transform: translate(-50%, -50%) scale(1.5);
                  opacity: 0;
               }
            }

            .td-video-area-modern {
               padding: 80px 0 !important;
            }

            @media (max-width: 991px) {
               .td-video-modern-wrap {
                  height: 500px !important;
               }
               .td-video-area-modern {
                  padding: 60px 0 !important;
               }
            }

            @media (max-width: 767px) {
               .td-video-modern-wrap {
                  height: 450px !important;
                  border-radius: 20px !important;
               }
               .td-video-area-modern {
                  padding: 50px 0 !important;
               }
               .td-video-content {
                  padding: 30px 15px !important;
               }
            }

            @media (max-width: 575px) {
               .td-video-modern-wrap {
                  height: 400px !important;
                  border-radius: 16px !important;
               }
               .td-video-content {
                  padding: 20px 10px !important;
               }
            }
         `}</style>
      </>
   )
}

export default VideoArea
