import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import type { JSX } from "react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';

interface DataType {
   id: number;
   videoId: string;
   date: string;
   title: JSX.Element;
   description?: string;
   client?: string;
}

const project_data: DataType[] = [
   {
      id: 1,
      videoId: "1134206849",
      date: "TV Series",
      client: "Dopamine Studios",
      title: (<>2 GUADA</>),
      description: "An interactive kitchen show where a husband, wife, and mother-in-law navigate family dynamics. The wife and mother cook separate meals, and the husband chooses the winner while the family talks through and resolves their issues."
   },
   {
      id: 2,
      videoId: "1134213403",
      date: "Documentary Series",
      client: "Dopamine Studios",
      title: (<>THE SMALL KITCHEN</>),
      description: "Adoptees from different countries return to Ethiopia to share their experiences about adoption corruption and discovering they have living relatives. The show explores diverse cultural backgrounds through food and personal stories."
   },
   {
      id: 3,
      videoId: "1134207289",
      date: "Sitcom Series",
      client: "Dopamine Studios",
      title: (<>BALETARIKOCHU</>),
      description: "A sitcom series featuring different actors who portray unique characters and tell extraordinary stories. Every episode brings new characters and narratives, showcasing diverse scenarios and comedic situations."
   },
];

const setting = {
   modules: [Navigation, Autoplay, EffectFade],
   slidesPerView: 1,
   speed: 1000,
   spaceBetween: 0,
   loop: true,
   effect: 'fade' as const,
   fadeEffect: {
      crossFade: true
   },
   autoplay: {
      delay: 15000,
      disableOnInteraction: false,
   },
   navigation: {
      nextEl: '.portfolio-button-next',
      prevEl: '.portfolio-button-prev',
   },
};

const Portfolio = () => {
   const [activeSlide, setActiveSlide] = useState<number>(0);
   const [mutedVideos, setMutedVideos] = useState<{ [key: number]: boolean }>({
      1: true,
      2: true,
      3: true
   });
   const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set([1])); // Only load first video initially
   const iframeRefs = useRef<{ [key: number]: HTMLIFrameElement | null }>({});

   const sendVimeoCommand = (itemId: number, method: string, value?: any) => {
      const iframe = iframeRefs.current[itemId];
      if (iframe && iframe.contentWindow) {
         const message = value !== undefined 
            ? JSON.stringify({ method, value })
            : JSON.stringify({ method });
         iframe.contentWindow.postMessage(message, 'https://player.vimeo.com');
      }
   };

   const toggleMute = (itemId: number) => {
      const newMutedState = !mutedVideos[itemId];
      
      setMutedVideos(prev => ({
         ...prev,
         [itemId]: newMutedState
      }));

      // Send mute/unmute command
      sendVimeoCommand(itemId, 'setVolume', newMutedState ? 0 : 1);
   };

   // Initialize first video on mount
   useEffect(() => {
      const initTimer = setTimeout(() => {
         // Play the first video when component mounts
         sendVimeoCommand(1, 'play');
         sendVimeoCommand(1, 'setVolume', mutedVideos[1] ? 0 : 1);
      }, 500);
      
      return () => clearTimeout(initTimer);
   }, []);

   // Load adjacent videos for smooth transitions and manage playback
   useEffect(() => {
      // Calculate the correct active item ID using modulo for loop mode
      const activeItemId = (activeSlide % project_data.length) + 1;
      
      // Calculate adjacent slides for preloading
      const nextItemId = ((activeSlide + 1) % project_data.length) + 1;
      const prevItemId = ((activeSlide - 1 + project_data.length) % project_data.length) + 1;
      
      // Load current, next, and previous videos
      setLoadedVideos(prev => {
         const newSet = new Set(prev);
         newSet.add(activeItemId);
         newSet.add(nextItemId);
         newSet.add(prevItemId);
         return newSet;
      });
      
      // Small delay to ensure slide transition is complete
      const timer = setTimeout(() => {
         project_data.forEach((item) => {
            const itemId = item.id;
            
            if (itemId !== activeItemId) {
               // Pause non-active videos
               sendVimeoCommand(itemId, 'pause');
            } else {
               // Play active video
               sendVimeoCommand(itemId, 'play');
               
               // Set volume based on mute state
               setTimeout(() => {
                  sendVimeoCommand(itemId, 'setVolume', mutedVideos[itemId] ? 0 : 1);
               }, 200);
            }
         });
      }, 150);
      
      return () => clearTimeout(timer);
   }, [activeSlide]);

   return (
      <div className="td-portfolio-area" style={{ 
         background: 'linear-gradient(180deg, #0a1e15 0%, #0f2419 100%)',
         padding: '120px 0',
         position: 'relative',
         overflow: 'hidden'
      }}>
         {/* Background Pattern Overlay */}
         <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.03,
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2391ed91" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            pointerEvents: 'none',
         }} />

         <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            {/* Section Header */}
            <div className="row mb-60">
               <div className="col-lg-12">
                  <div className="text-center">
                     <span 
                        className="td-section-4-subtitle mb-20 d-inline-block" 
                        style={{ 
                           color: '#91ed91',
                        }}
                     >
                        // FROM DOPAMINE STUDIOS
                     </span>
                     <h2 className="td-section-4-title mb-20">
                        FEATURED PRODUCTIONS
                     </h2>
                     <p style={{ 
                        color: 'rgba(255, 255, 255, 0.6)', 
                        maxWidth: '600px', 
                        margin: '0 auto',
                        fontSize: '18px',
                        lineHeight: '1.6',
                        fontFamily: 'var(--td-ff-body)'
                     }}>
                        Award-winning TV series and documentaries from our production house
                     </p>
                  </div>
               </div>
            </div>

            {/* Video Carousel */}
            <div className="row">
               <div className="col-lg-12">
                  <div style={{ position: 'relative' }}>
                     <Swiper 
                        {...setting} 
                        className="swiper-container"
                        onSlideChange={(swiper) => {
                           setActiveSlide(swiper.realIndex);
                        }}
                     >
                        {project_data.map((item) => (
                           <SwiperSlide key={item.id}>
                              <div style={{ 
                                 background: 'rgba(255, 255, 255, 0.02)',
                                 borderRadius: '20px',
                                 overflow: 'hidden',
                                 border: '1px solid rgba(145, 237, 145, 0.1)',
                                 backdropFilter: 'blur(10px)'
                              }}>
                                 <div className="row g-0 align-items-center">
                                    {/* Video Player */}
                                    <div className="col-lg-8 col-12">
                                       <div style={{ 
                                          position: 'relative',
                                          paddingTop: '56.25%',
                                          background: '#000',
                                          overflow: 'hidden',
                                          borderRadius: '10px 0 0 10px',
                                       }}>
                                          {/* Conditionally render video or placeholder */}
                                          {loadedVideos.has(item.id) ? (
                                             <iframe
                                                ref={(el) => {
                                                   if (el) iframeRefs.current[item.id] = el;
                                                }}
                                                src={`https://player.vimeo.com/video/${item.videoId}?api=1&player_id=vimeo_${item.id}&autoplay=0&loop=1&muted=1&title=0&byline=0&portrait=0&controls=1&quality=auto&dnt=1&responsive=1`}
                                                style={{
                                                   position: 'absolute',
                                                   top: 0,
                                                   left: 0,
                                                   width: '100%',
                                                   height: '100%',
                                                   border: 'none'
                                                }}
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowFullScreen
                                                title={`${item.client} Video`}
                                                id={`vimeo_${item.id}`}
                                             />
                                          ) : (
                                             // Placeholder for unloaded videos
                                             <div style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                background: 'linear-gradient(135deg, #0a1e15 0%, #1a3a2e 100%)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                             }}>
                                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <circle cx="12" cy="12" r="10" stroke="#91ed91" strokeWidth="1" opacity="0.3"/>
                                                   <path d="M10 8L16 12L10 16V8Z" fill="#91ed91" opacity="0.5"/>
                                                </svg>
                                             </div>
                                          )}
                                          
                                          {/* Elegant Mute/Unmute Button */}
                                          <div style={{
                                             position: 'absolute',
                                             bottom: '20px',
                                             right: '20px',
                                             zIndex: 10,
                                          }}>
                                             <button
                                                onClick={() => toggleMute(item.id)}
                                                style={{
                                                   width: '56px',
                                                   height: '56px',
                                                   borderRadius: '50%',
                                                   background: !mutedVideos[item.id] ? '#91ed91' : 'rgba(10, 30, 21, 0.8)',
                                                   border: '2px solid #91ed91',
                                                   color: !mutedVideos[item.id] ? '#0a1e15' : '#91ed91',
                                                   cursor: 'pointer',
                                                   transition: 'all 0.3s ease',
                                                   display: 'flex',
                                                   alignItems: 'center',
                                                   justifyContent: 'center',
                                                   backdropFilter: 'blur(10px)',
                                                   boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                                                }}
                                                onMouseEnter={(e) => {
                                                   e.currentTarget.style.transform = 'scale(1.1)';
                                                   e.currentTarget.style.boxShadow = '0 6px 30px rgba(145, 237, 145, 0.4)';
                                                }}
                                                onMouseLeave={(e) => {
                                                   e.currentTarget.style.transform = 'scale(1)';
                                                   e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
                                                }}
                                                aria-label={!mutedVideos[item.id] ? 'Mute video' : 'Unmute video'}
                                             >
                                                {!mutedVideos[item.id] ? (
                                                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                   </svg>
                                                ) : (
                                                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                      <line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                      <line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                   </svg>
                                                )}
                                             </button>
                                          </div>

                                          {/* Video Info Badge */}
                                          <div style={{
                                             position: 'absolute',
                                             top: '20px',
                                             left: '20px',
                                             background: 'rgba(10, 30, 21, 0.8)',
                                             backdropFilter: 'blur(10px)',
                                             padding: '8px 16px',
                                             borderRadius: '20px',
                                             border: '1px solid rgba(145, 237, 145, 0.3)',
                                             display: 'flex',
                                             alignItems: 'center',
                                             gap: '8px',
                                          }}>
                                             <div style={{
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: '50%',
                                                background: '#91ed91',
                                                animation: 'pulse 2s infinite',
                                             }} />
                                             <span style={{
                                                color: '#91ed91',
                                                fontSize: '12px',
                                                fontWeight: '600',
                                                fontFamily: 'var(--td-ff-body)',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px'
                                             }}>
                                                Live
                                             </span>
                                          </div>
                                       </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="col-lg-4 col-12">
                                       <div style={{ 
                                          padding: '60px 50px',
                                          height: '100%',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          justifyContent: 'center'
                                       }}
                                       className="td-portfolio-info-responsive"
                                       >
                                          <div style={{ 
                                             display: 'inline-block',
                                             padding: '6px 16px',
                                             background: 'rgba(145, 237, 145, 0.1)',
                                             border: '1px solid rgba(145, 237, 145, 0.3)',
                                             borderRadius: '20px',
                                             marginBottom: '20px',
                                             alignSelf: 'flex-start'
                                          }}>
                                             <span style={{ 
                                                color: '#91ed91',
                                                fontSize: '12px',
                                                fontWeight: '600',
                                                letterSpacing: '1px',
                                                textTransform: 'uppercase',
                                                fontFamily: 'var(--td-ff-body)'
                                             }}>
                                                {item.date}
                                             </span>
                                          </div>
                                          
                                          <h4 style={{ 
                                             color: '#91ed91',
                                             fontSize: '16px',
                                             fontWeight: '600',
                                             letterSpacing: '2px',
                                             marginBottom: '10px',
                                             textTransform: 'uppercase',
                                             fontFamily: 'var(--td-ff-teko)'
                                          }}>
                                             {item.client}
                                          </h4>

                                          <h3 style={{ 
                                             color: '#fff',
                                             fontSize: '42px',
                                             fontWeight: '700',
                                             lineHeight: '1.2',
                                             marginBottom: '20px',
                                             fontFamily: 'var(--td-ff-teko)'
                                          }}>
                                             {item.title}
                                          </h3>

                                          <p style={{ 
                                             color: 'rgba(255, 255, 255, 0.6)',
                                             fontSize: '16px',
                                             lineHeight: '1.6',
                                             marginBottom: '40px',
                                             fontFamily: 'var(--td-ff-body)'
                                          }}>
                                             {item.description}
                                          </p>

                                          <Link 
                                             to="/portfolio-details"
                                             style={{
                                                color: '#91ed91',
                                                textDecoration: 'none',
                                                fontSize: '14px',
                                                fontWeight: '600',
                                                letterSpacing: '1px',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                transition: 'all 0.3s ease',
                                                textTransform: 'uppercase',
                                                fontFamily: 'var(--td-ff-body)'
                                             }}
                                             onMouseEnter={(e) => {
                                                e.currentTarget.style.gap = '15px';
                                             }}
                                             onMouseLeave={(e) => {
                                                e.currentTarget.style.gap = '10px';
                                             }}
                                          >
                                             View Case Study
                                             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                             </svg>
                                          </Link>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </SwiperSlide>
                        ))}
                     </Swiper>

                     {/* Navigation Arrows */}
                     <button 
                        className="portfolio-button-prev"
                        style={{
                           position: 'absolute',
                           left: '-80px',
                           top: '50%',
                           transform: 'translateY(-50%)',
                           zIndex: 10,
                           cursor: 'pointer',
                           width: '60px',
                           height: '60px',
                           borderRadius: '50%',
                           background: 'rgba(145, 237, 145, 0.1)',
                           border: '2px solid #91ed91',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',
                           transition: 'all 0.3s ease',
                           backdropFilter: 'blur(10px)',
                        }}
                        onMouseEnter={(e) => {
                           e.currentTarget.style.background = '#91ed91';
                           e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                           e.currentTarget.style.background = 'rgba(145, 237, 145, 0.1)';
                           e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                        }}
                     >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M15 18L9 12L15 6" stroke="#91ed91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                     </button>

                     <button 
                        className="portfolio-button-next"
                        style={{
                           position: 'absolute',
                           right: '-80px',
                           top: '50%',
                           transform: 'translateY(-50%)',
                           zIndex: 10,
                           cursor: 'pointer',
                           width: '60px',
                           height: '60px',
                           borderRadius: '50%',
                           background: 'rgba(145, 237, 145, 0.1)',
                           border: '2px solid #91ed91',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',
                           transition: 'all 0.3s ease',
                           backdropFilter: 'blur(10px)',
                        }}
                        onMouseEnter={(e) => {
                           e.currentTarget.style.background = '#91ed91';
                           e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                           e.currentTarget.style.background = 'rgba(145, 237, 145, 0.1)';
                           e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                        }}
                     >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M9 18L15 12L9 6" stroke="#91ed91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                     </button>

                     {/* Pagination Dots */}
                     <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '12px',
                        marginTop: '50px'
                     }}>
                        {project_data.map((_, index) => (
                           <button
                              key={index}
                              style={{
                                 width: activeSlide === index ? '40px' : '12px',
                                 height: '12px',
                                 borderRadius: '6px',
                                 background: activeSlide === index ? '#91ed91' : 'rgba(145, 237, 145, 0.3)',
                                 border: 'none',
                                 cursor: 'pointer',
                                 transition: 'all 0.3s ease',
                              }}
                              aria-label={`Go to slide ${index + 1}`}
                           />
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Portfolio
