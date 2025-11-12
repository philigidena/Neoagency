import { useEffect } from "react"
import FooterFour from "../../../layouts/footers/FooterFour"
import HeaderFour from "../../../layouts/headers/HeaderFour"
import BreadCrumbOne from "../../common/BreadCrumbOne"
import PortfolioArea from "./PortfolioArea"
import MatrixRainPattern from "../../common/MatrixRainPattern"

const PortfolioOne = () => {
   useEffect(() => {
      // Preconnect to Vimeo for faster loading
      const preconnect1 = document.createElement('link');
      preconnect1.rel = 'preconnect';
      preconnect1.href = 'https://player.vimeo.com';
      document.head.appendChild(preconnect1);

      const preconnect2 = document.createElement('link');
      preconnect2.rel = 'preconnect';
      preconnect2.href = 'https://i.vimeocdn.com';
      document.head.appendChild(preconnect2);

      const preconnect3 = document.createElement('link');
      preconnect3.rel = 'preconnect';
      preconnect3.href = 'https://f.vimeocdn.com';
      document.head.appendChild(preconnect3);

      // Load Vimeo Player API
      const script = document.createElement('script');
      script.src = 'https://player.vimeo.com/api/player.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
         document.head.removeChild(preconnect1);
         document.head.removeChild(preconnect2);
         document.head.removeChild(preconnect3);
         document.body.removeChild(script);
      };
   }, []);

   return (
      <div className="theme-bg">
         <MatrixRainPattern 
            opacity={0.2}
            primaryColor="#2c6e49"
            secondaryColor="#91ed91"
            speed={50}
            density={0.8}
         />
         <HeaderFour />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <BreadCrumbOne sub_title="OUR WORK"
                     title={<>Client <span>Portfolio</span></>}
                  />
                  <PortfolioArea />
               </main>
               <FooterFour />
            </div>
         </div>
      </div>
   )
}

export default PortfolioOne
