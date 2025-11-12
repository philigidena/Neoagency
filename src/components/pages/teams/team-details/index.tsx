import TeamDetailsArea from "./TeamDetailsArea"
import Brand from "../team/Brand"
import InnerHeader from "../../../../layouts/headers/InnerHeader"
import BreadcrumbTwo from "../../../common/BreadcrumbTwo"
import Cta from "../../../common/Cta"
import FooterOne from "../../../../layouts/footers/FooterOne"
import MatrixRainPattern from "../../../common/MatrixRainPattern"

const TeamDetails = () => {
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
                  <BreadcrumbTwo sub_title="OUR TEAM MEMBERS"
                     title={<>Our Talented <br /> <span>Team Members</span></>}
                     desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  varius enim in eros elementum Duis cursus, mi quis viverra  ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                  />
                  <TeamDetailsArea />
                  <Brand />
                  <Cta />
               </main>
               <FooterOne style={true} />
            </div>
         </div>
      </div>
   )
}

export default TeamDetails
