import TeamArea from "./TeamArea"
import Brand from "./Brand"
import HeaderFour from "../../../../layouts/headers/HeaderFour"
import BreadcrumbTwo from "../../../common/BreadcrumbTwo"
import Cta from "../../../common/Cta"
import FooterFour from "../../../../layouts/footers/FooterFour"
import MatrixRainPattern from "../../../common/MatrixRainPattern"

const Team = () => {
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
                  <BreadcrumbTwo sub_title="MEET THE FOUNDERS"
                     title={<>The Visionaries <br /> <span>Behind Neo</span></>}
                     desc="Born from Dopamine Studios, our founders bring years of production expertise and strategic marketing vision. Together, they lead Neo in redefining what marketing agencies can achieve."
                  />
                  <TeamArea />
                  <Brand />
                  <Cta />
               </main>
               <FooterFour />
            </div>
         </div>
      </div>
   )
}

export default Team
