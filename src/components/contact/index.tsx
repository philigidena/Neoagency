import ContactMap from "./ContactMap"
import ContactArea from "./ContactArea"
import Breadcrumb from "./Breadcrumb"
import HeaderFour from "../../layouts/headers/HeaderFour"
import FooterFour from "../../layouts/footers/FooterFour"
import MatrixRainPattern from "../common/MatrixRainPattern"

const Contact = () => {
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
                  <Breadcrumb />
                  <ContactMap />
                  <ContactArea />
               </main>
               <FooterFour />
            </div>
         </div>
      </div>
   )
}

export default Contact
