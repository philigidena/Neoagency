import AboutArea from "./AboutArea"
import Feature from "./Feature"
import Team from "./Team"
import HeaderFour from "../../../layouts/headers/HeaderFour"
import FooterFour from "../../../layouts/footers/FooterFour"
import MatrixRainPattern from "../../common/MatrixRainPattern"

const About = () => {
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
                  <AboutArea />
                  <Feature />
                  <Team />
               </main>
               <FooterFour />
            </div>
         </div>
      </div>
   )
}

export default About
