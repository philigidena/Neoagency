import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";;
import Isotope from "isotope-layout";
import portfolio_data from "../../../data/PortfolioData";

const PortfolioArea = () => {

   const isotope = useRef<Isotope | null>(null);
   const [filterKey, setFilterKey] = useState("*");
   const [selectedFilter, setSelectedFilter] = useState("*");

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
                     <button className={`${selectedFilter === "*" ? "is-checked active" : ""}`} onClick={handleFilterKeyChange("*")}> SHOW ALL </button>
                     <button className={`${selectedFilter === "prof" ? "is-checked active" : ""}`} onClick={handleFilterKeyChange("prof")}> digital  </button>
                     <button className={`${selectedFilter === "prof1" ? "is-checked active" : ""}`} onClick={handleFilterKeyChange("prof1")}> marketing  </button>
                     <button className={`${selectedFilter === "prof2" ? "is-checked active" : ""}`} onClick={handleFilterKeyChange("prof2")}> studio  </button>
                     <button className={`${selectedFilter === "prof3" ? "is-checked active" : ""}`} onClick={handleFilterKeyChange("prof3")}> creative  </button>
                  </div>
               </div>
            </div>
            <div className="grid row">
               {filteredData.map((item) => (
                  <div key={item.id} className={`col-md-6 grid-item ${item.category} mb-30`}>
                     <div className="td-portfolio-filter-wrapper p-relative">
                        <div className="td-portfolio-filter-thumb fix">
                           <img className="w-100" src={item.img} alt="project" />
                        </div>
                        <div className="td-portfolio-filter-content">
                           <span className="mb-10">{item.tag}</span>
                           <h3 className="titles"><Link to="/portfolio-details">{item.title}</Link></h3>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            <div className="row">
               <div className="col-12">
                  <div className="d-flex justify-content-center mt-50">
                     <div className="td-btn-group">
                        <Link className="td-btn-circle" to="/service">
                           <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <Link className="td-btn-2 td-btn-primary" to="/service">SEE MORE PROJECT</Link>
                        <Link className="td-btn-circle" to="/service">
                           <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default PortfolioArea
