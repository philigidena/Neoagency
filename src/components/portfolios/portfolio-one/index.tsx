import FooterFour from "../../../layouts/footers/FooterFour"
import HeaderFour from "../../../layouts/headers/HeaderFour"
import BreadCrumbOne from "../../common/BreadCrumbOne"
import PortfolioArea from "./PortfolioArea"
import MatrixRainPattern from "../../common/MatrixRainPattern"

const PortfolioOne = () => {
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
