import FooterOne from "../../../../layouts/footers/FooterOne"
import InnerHeader from "../../../../layouts/headers/InnerHeader"
import Cta from "../../../common/Cta"
import Faq from "./Faq"
import ServiceDetailsArea from "./ServiceDetailsArea"
import ServiceProcess from "./ServiceProcess"
import ServiceReplace from "./ServiceReplace"
import MatrixRainPattern from "../../../common/MatrixRainPattern"

const ServiceDetails = () => {
   return (
      <div className="theme-bg">
         <MatrixRainPattern 
            opacity={0.2}
            primaryColor="#2c6e49"
            secondaryColor="#91ed91"
            speed={50}
            density={0.8}
         />
         <InnerHeader />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <ServiceDetailsArea />
                  <ServiceProcess />
                  <Faq style={false} />
                  <ServiceReplace />
                  <Cta />
               </main>
               <FooterOne style={true} />
            </div>
         </div>
      </div>
   )
}

export default ServiceDetails
