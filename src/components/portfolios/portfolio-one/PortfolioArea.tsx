import { useEffect, useMemo, useRef, useState } from "react";
import Isotope from "isotope-layout";
import portfolio_data from "../../../data/PortfolioData";

const PortfolioArea = () => {

   const isotope = useRef<Isotope | null>(null);
   const [filterKey, setFilterKey] = useState("*");
   const [selectedFilter, setSelectedFilter] = useState("*");
   const [visibleVideos, setVisibleVideos] = useState<Set<number>>(new Set());

   // Intersection Observer for lazy loading videos
   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  const videoId = entry.target.getAttribute('data-video-id');
                  if (videoId) {
                     setVisibleVideos(prev => new Set(prev).add(parseInt(videoId)));
                  }
               }
            });
         },
         {
            rootMargin: '50px',
            threshold: 0.1
         }
      );

      // Observe all video containers
      const videoContainers = document.querySelectorAll('[data-video-id]');
      videoContainers.forEach(container => observer.observe(container));

      return () => {
         videoContainers.forEach(container => observer.unobserve(container));
      };
   }, [filterKey]);

   useEffect(() => {
      // Add delay to ensure lazy-loaded content is rendered
      const initTimer = setTimeout(() => {
         if (Isotope) {
            const gridElement = document.querySelector(".grid");
            if (!gridElement) return;

            // Wait for images to load before initializing Isotope
            const images = gridElement.querySelectorAll("img");
            let loadedImages = 0;

            const checkAllImagesLoaded = () => {
               loadedImages++;
               if (loadedImages === images.length) {
                  // Initialize Isotope after all images are loaded
                  isotope.current = new Isotope(".grid", {
                     itemSelector: ".grid-item",
                     layoutMode: "fitRows",
                  });
               }
            };

            if (images.length === 0) {
               // No images, initialize immediately
               isotope.current = new Isotope(".grid", {
                  itemSelector: ".grid-item",
                  layoutMode: "fitRows",
               });
            } else {
               // Wait for each image to load
               images.forEach((img) => {
                  if (img.complete) {
                     checkAllImagesLoaded();
                  } else {
                     img.addEventListener("load", checkAllImagesLoaded);
                     img.addEventListener("error", checkAllImagesLoaded); // Handle errors too
                  }
               });
            }
         }
      }, 300);

      return () => {
         clearTimeout(initTimer);
         isotope.current?.destroy();
      };
   }, []);

   useEffect(() => {
      if (filterKey === "*") isotope.current?.arrange?.({ filter: "*" });
      else isotope.current?.arrange?.({ filter: `.${filterKey}` });
   }, [filterKey]);

   const handleFilterKeyChange = (key: string) => () => {
      setFilterKey(key);
      setSelectedFilter(key);
   };

   const filteredData = useMemo(() => {
      return portfolio_data.filter((items) => items.page === "portfolio_1");
   }, []);

   return (
      <div className="td-portfolio-filter-area pb-160">
         <div className="container">
            <div className="row">
               <div className="col-lg-12 mb-50  wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                  <div className="td-portfolio-filter-btn text-center masonary-menu">
                     <button className={`${selectedFilter === "*" ? "is-checked active" : ""}`} onClick={handleFilterKeyChange("*")}> ALL WORK </button>
                     <button className={`${selectedFilter === "branding" ? "is-checked active" : ""}`} onClick={handleFilterKeyChange("branding")}> BRANDING  </button>
                     <button className={`${selectedFilter === "commercial" ? "is-checked active" : ""}`} onClick={handleFilterKeyChange("commercial")}> COMMERCIAL  </button>
                     <button className={`${selectedFilter === "product" ? "is-checked active" : ""}`} onClick={handleFilterKeyChange("product")}> PRODUCT  </button>
                     <button className={`${selectedFilter === "lifestyle" ? "is-checked active" : ""}`} onClick={handleFilterKeyChange("lifestyle")}> LIFESTYLE  </button>
                  </div>
               </div>
            </div>
            <div className="grid row">
               {filteredData.map((item) => (
                  <div key={item.id} className={`col-lg-4 col-md-6 grid-item ${item.category} mb-30`}>
                     <div 
                        className="td-portfolio-video-card"
                        data-video-id={item.id}
                        style={{ 
                           overflow: 'hidden', 
                           borderRadius: '16px',
                           background: '#000',
                           boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                           transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                           e.currentTarget.style.transform = 'translateY(-5px)';
                           e.currentTarget.style.boxShadow = '0 15px 50px rgba(145, 237, 145, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                           e.currentTarget.style.transform = 'translateY(0)';
                           e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.2)';
                        }}
                     >
                        <div style={{ 
                           position: 'relative',
                           width: '100%',
                           height: '550px',
                           overflow: 'hidden',
                           background: '#000'
                        }}>
                           {item.videoUrl && item.videoType === 'vimeo' ? (
                              <>
                                 {visibleVideos.has(item.id) ? (
                                    <iframe
                                       id={`vimeo-player-${item.id}`}
                                       src={`https://player.vimeo.com/video/${item.videoUrl}?autoplay=1&loop=1&autopause=0&muted=1&byline=0&title=0&portrait=0&controls=1&background=0&quality=360p`}
                                       frameBorder="0"
                                       allow="autoplay; fullscreen; picture-in-picture"
                                       loading="lazy"
                                       style={{
                                          position: 'absolute',
                                          top: '50%',
                                          left: '50%',
                                          width: '177.78%',
                                          height: '177.78%',
                                          minWidth: '177.78%',
                                          minHeight: '177.78%',
                                          transform: 'translate(-50%, -50%)',
                                          pointerEvents: 'auto',
                                          border: 'none'
                                       }}
                                       title={item.title}
                                    ></iframe>
                                 ) : (
                                    <div style={{
                                       width: '100%',
                                       height: '100%',
                                       background: '#000',
                                       display: 'flex',
                                       alignItems: 'center',
                                       justifyContent: 'center'
                                    }}>
                                       <div style={{
                                          color: '#91ed91',
                                          fontSize: '14px',
                                          fontWeight: '500'
                                       }}>Loading...</div>
                                    </div>
                                 )}
                                 {/* Play/Sound button overlay - only show when video is loaded */}
                                 {visibleVideos.has(item.id) && (
                                    <div 
                                       onClick={() => {
                                          const iframe = document.getElementById(`vimeo-player-${item.id}`) as HTMLIFrameElement;
                                          if (iframe && (window as any).Vimeo) {
                                             try {
                                                const player = new (window as any).Vimeo.Player(iframe);
                                                player.getMuted().then((muted: boolean) => {
                                                   player.setMuted(!muted);
                                                }).catch((error: any) => {
                                                   console.log('Unmute error:', error);
                                                });
                                             } catch (error) {
                                                console.log('Player error:', error);
                                             }
                                          }
                                       }}
                                       style={{
                                          position: 'absolute',
                                          bottom: '20px',
                                          right: '20px',
                                          width: '48px',
                                          height: '48px',
                                          borderRadius: '50%',
                                          background: 'rgba(145, 237, 145, 0.95)',
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          cursor: 'pointer',
                                          zIndex: 2,
                                          boxShadow: '0 4px 12px rgba(145, 237, 145, 0.4)',
                                          transition: 'all 0.3s ease',
                                          backdropFilter: 'blur(10px)'
                                       }}
                                       onMouseEnter={(e) => {
                                          e.currentTarget.style.transform = 'scale(1.1)';
                                          e.currentTarget.style.boxShadow = '0 6px 20px rgba(145, 237, 145, 0.6)';
                                       }}
                                       onMouseLeave={(e) => {
                                          e.currentTarget.style.transform = 'scale(1)';
                                          e.currentTarget.style.boxShadow = '0 4px 12px rgba(145, 237, 145, 0.4)';
                                       }}
                                    >
                                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="#0a1e15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#0a1e15"/>
                                          <path d="M15.54 8.46C16.4774 9.39764 17.0039 10.6692 17.0039 11.995C17.0039 13.3208 16.4774 14.5924 15.54 15.53" stroke="#0a1e15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                       </svg>
                                    </div>
                                 )}
                              </>
                           ) : (
                              <img src={item.img} alt={item.title} style={{ 
                                 width: '100%',
                                 height: '100%',
                                 objectFit: 'cover'
                              }} />
                           )}
                        </div>
                        <div style={{ 
                           padding: '24px',
                           background: '#fff',
                           borderTop: '1px solid rgba(145, 237, 145, 0.3)'
                        }}>
                           <span style={{
                              fontSize: '10px',
                              fontWeight: '700',
                              color: '#91ed91',
                              letterSpacing: '2px',
                              textTransform: 'uppercase',
                              display: 'block',
                              marginBottom: '10px'
                           }}>{item.tag}</span>
                           <h3 style={{ 
                              fontSize: '19px',
                              fontWeight: '700',
                              color: '#1C1D1F',
                              marginBottom: '0',
                              lineHeight: '1.3',
                              letterSpacing: '-0.5px'
                           }}>{item.title}</h3>
                           <p style={{
                              fontSize: '11px',
                              color: 'rgba(28, 29, 31, 0.6)',
                              marginTop: '8px',
                              marginBottom: '0',
                              fontWeight: '500',
                              letterSpacing: '0.5px'
                           }}>Click to unmute</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Custom Styles */}
         <style>{`
            .td-portfolio-filter-btn {
               display: flex;
               flex-wrap: wrap;
               justify-content: center;
               gap: 8px;
            }
            
            .td-portfolio-filter-btn button {
               margin: 0;
               padding: 12px 24px;
               background: transparent;
               border: 2px solid rgba(28, 29, 31, 0.2);
               color: #1C1D1F;
               font-weight: 600;
               font-size: 13px;
               letter-spacing: 0.5px;
               border-radius: 8px;
               transition: all 0.3s ease;
               white-space: nowrap;
            }
            .td-portfolio-filter-btn button:hover {
               background: rgba(145, 237, 145, 0.1);
               border-color: #91ed91;
               color: #1C1D1F;
            }
            .td-portfolio-filter-btn button.active {
               background: linear-gradient(135deg, #91ed91 0%, #7FFF00 100%);
               border-color: #91ed91;
               color: #0a1e15;
            }
            
            /* Mobile responsive styles */
            @media (max-width: 768px) {
               .td-portfolio-filter-btn {
                  gap: 6px;
                  padding: 0 15px;
               }
               
               .td-portfolio-filter-btn button {
                  padding: 10px 18px;
                  font-size: 11px;
                  letter-spacing: 0.3px;
                  border-radius: 6px;
               }
               
               .col-lg-12.mb-50 {
                  margin-bottom: 35px !important;
               }
            }
            
            @media (max-width: 480px) {
               .td-portfolio-filter-btn {
                  gap: 5px;
                  padding: 0 10px;
               }
               
               .td-portfolio-filter-btn button {
                  padding: 8px 14px;
                  font-size: 10px;
                  letter-spacing: 0.2px;
                  border-width: 1.5px;
               }
               
               .col-lg-12.mb-50 {
                  margin-bottom: 30px !important;
               }
            }
            
            /* Polish video cards */
            .td-portfolio-video-card {
               position: relative;
            }
            
            .td-portfolio-video-card::before {
               content: '';
               position: absolute;
               inset: 0;
               border-radius: 16px;
               padding: 1px;
               background: linear-gradient(135deg, rgba(145, 237, 145, 0.1) 0%, rgba(127, 255, 0, 0.05) 100%);
               -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
               -webkit-mask-composite: xor;
               mask-composite: exclude;
               pointer-events: none;
               opacity: 0;
               transition: opacity 0.3s ease;
            }
            
            .td-portfolio-video-card:hover::before {
               opacity: 1;
            }
         `}</style>
      </div>
   )
}

export default PortfolioArea
