import { useEffect, useMemo, useRef, useState } from "react";
import Isotope from "isotope-layout";
import portfolio_data from "../../../data/PortfolioData";
import VideoPopup from "../../../modals/VideoPopup";

const PortfolioArea = () => {

   const isotope = useRef<Isotope | null>(null);
   const [filterKey, setFilterKey] = useState("*");
   const [selectedFilter, setSelectedFilter] = useState("*");
   const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
   const [videoId, setVideoId] = useState<string>("");

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
                  <div key={item.id} className={`col-md-6 grid-item ${item.category} mb-30`}>
                     <div 
                        className="td-portfolio-filter-wrapper p-relative" 
                        style={{ cursor: 'pointer', overflow: 'hidden', borderRadius: '12px' }}
                        onClick={() => {
                           if (item.videoUrl) {
                              setVideoId(item.videoUrl);
                              setIsVideoOpen(true);
                           }
                        }}
                     >
                        <div className="td-portfolio-filter-thumb fix" style={{ position: 'relative' }}>
                           <img className="w-100" src={item.img} alt={item.title} style={{ transition: 'transform 0.3s ease' }} />
                           {/* Video Play Overlay */}
                           <div style={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              width: '70px',
                              height: '70px',
                              borderRadius: '50%',
                              background: 'rgba(145, 237, 145, 0.95)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'all 0.3s ease',
                              boxShadow: '0 8px 25px rgba(145, 237, 145, 0.4)'
                           }}
                           className="video-play-btn"
                           >
                              <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M22.5 11.7679C24.1667 12.7377 24.1667 15.2623 22.5 16.2321L3 27.1244C1.33333 28.0942 -0.666667 26.8819 -0.666667 24.9423L-0.666666 3.05769C-0.666666 1.11808 1.33334 -0.0941819 3 0.875644L22.5 11.7679Z" fill="#0a1e15"/>
                              </svg>
                           </div>
                           {/* Gradient Overlay */}
                           <div style={{
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              right: 0,
                              height: '60%',
                              background: 'linear-gradient(to top, rgba(10, 30, 21, 0.9) 0%, rgba(10, 30, 21, 0) 100%)',
                              pointerEvents: 'none'
                           }}></div>
                        </div>
                        <div className="td-portfolio-filter-content">
                           <span className="mb-10">{item.tag}</span>
                           <h3 className="titles">{item.title}</h3>
                           {item.description && (
                              <p style={{ 
                                 fontSize: '14px',
                                 marginTop: '8px',
                                 lineHeight: '1.5'
                              }}>
                                 {item.description}
                              </p>
                           )}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={videoId}
         />

         {/* Custom Styles */}
         <style>{`
            .td-portfolio-filter-wrapper:hover .td-portfolio-filter-thumb img {
               transform: scale(1.05);
            }
            .td-portfolio-filter-wrapper:hover .video-play-btn {
               transform: translate(-50%, -50%) scale(1.1);
               box-shadow: 0 12px 35px rgba(145, 237, 145, 0.6);
            }
            .td-portfolio-filter-btn button {
               margin: 0 8px;
               padding: 12px 24px;
               background: transparent;
               border: 2px solid rgba(44, 110, 73, 0.3);
               color: #1C1D1F;
               font-weight: 600;
               font-size: 13px;
               letter-spacing: 0.5px;
               border-radius: 8px;
               transition: all 0.3s ease;
            }
            .td-portfolio-filter-btn button:hover {
               background: rgba(145, 237, 145, 0.1);
               border-color: #2c6e49;
               color: #1C1D1F;
            }
            .td-portfolio-filter-btn button.active {
               background: linear-gradient(135deg, #91ed91 0%, #7FFF00 100%);
               border-color: #91ed91;
               color: #0a1e15;
            }
         `}</style>
      </div>
   )
}

export default PortfolioArea
