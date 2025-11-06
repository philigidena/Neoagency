import FooterFour from "../../../../layouts/footers/FooterFour"
import HeaderFour from "../../../../layouts/headers/HeaderFour"
import BreadcrumbTwo from "../../../common/BreadcrumbTwo"
import MatrixRainPattern from "../../../common/MatrixRainPattern"
import ServiceArea from "./ServiceArea"
import ServiceItem from "./ServiceItem"

const Service = () => {
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
                  <BreadcrumbTwo sub_title="FULL-HOUSE MARKETING"
                     title={<>Neo's  <br /> <span>Services</span></>}
                     desc="Neo is a full-house marketing agency offering end-to-end solutions through a wide range of specialized services. From strategy to execution, we bring your brand vision to life."
                  />
                  <ServiceArea />
                  <ServiceItem />
               </main>
               <FooterFour />
            </div>
         </div>
      </div>
   )
}

export default Service
