import { useVideoPopup } from "../../../hooks/useVideoPopup";
import VideoPopup from "../../../modals/VideoPopup";

const VideoArea = () => {

   const { isVideoOpen, openVideo, closeVideo } = useVideoPopup();

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
                        background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%)',
                     }}>
                        <div className="td-video-bg" style={{
                           position: 'absolute',
                           top: 0,
                           left: 0,
                           width: '100%',
                           height: '100%',
                           backgroundImage: `url(/Neo-studio_4.png)`,
                           backgroundSize: 'cover',
                           backgroundPosition: 'center',
                           zIndex: 1,
                        }}></div>
                        
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
                           padding: '40px',
                           textAlign: 'center'
                        }}>
                           <div>
                              <div className="td-video-badge mb-30" style={{
                                 display: 'inline-flex',
                                 alignItems: 'center',
                                 gap: '10px',
                                 padding: '10px 24px',
                                 background: 'rgba(127, 255, 0, 0.15)',
                                 border: '1px solid rgba(127, 255, 0, 0.3)',
                                 borderRadius: '50px',
                                 fontSize: '13px',
                                 fontWeight: '600',
                                 color: '#7FFF00',
                                 letterSpacing: '1.5px',
                                 textTransform: 'uppercase',
                              }}>
                                 Watch Our Story
                              </div>

                              <h2 className="td-video-title mb-40" style={{
                                 fontSize: 'clamp(42px, 6vw, 82px)',
                                 fontWeight: '800',
                                 lineHeight: '1.1',
                                 color: '#fff',
                                 letterSpacing: '-2px',
                                 textTransform: 'uppercase',
                                 marginBottom: '40px'
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

                              <p className="td-video-desc mb-50" style={{
                                 fontSize: '18px',
                                 lineHeight: '1.7',
                                 color: 'rgba(255,255,255,0.9)',
                                 maxWidth: '600px',
                                 margin: '0 auto 50px'
                              }}>
                                 Discover how we blend psychology, perception, and storytelling to create 
                                 marketing experiences that resonate deeply with your audience.
                              </p>

                              <button 
                                 onClick={openVideo} 
                                 className="td-video-play-modern"
                                 style={{
                                    width: '90px',
                                    height: '90px',
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
                                 <svg width="28" height="32" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.3616 8.34455C19.0412 9.31425 19.0412 11.7385 17.3616 12.7082L4.13504 20.3445C2.45548 21.3142 0.356021 20.1021 0.356021 18.1627L0.356022 2.89C0.356022 0.950609 2.45548 -0.261512 4.13504 0.708185L17.3616 8.34455Z" fill="#000" />
                                 </svg>
                              </button>
                           </div>
                        </div>

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
                           animation: 'videoPulse 2s infinite'
                        }}></div>
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

            @media (max-width: 991px) {
               .td-video-modern-wrap {
                  height: 500px !important;
               }
            }

            @media (max-width: 767px) {
               .td-video-modern-wrap {
                  height: 400px !important;
               }
            }
         `}</style>

         <VideoPopup isOpen={isVideoOpen} onClose={closeVideo} videoId="eEzD-Y97ges" />
      </>
   )
}

export default VideoArea
