import About from "./About"
import Blog from "./Blog"
import Counter from "./Counter"
import Hero from "./Hero"
import Portfolio from "./Portfolio"
import Service from "./Service"
import Team from "./Team"
import VideoArea from "./VideoArea"
import Faq from "./Faq"
import ProductionWorks from "./ProductionWorks"
import HeaderFour from "../../../layouts/headers/HeaderFour"
import FooterFour from "../../../layouts/footers/FooterFour"
import MatrixRainPattern from "../../common/MatrixRainPattern"

const HomeFour = () => {
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
         <div className="theme-bg" id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <Hero />
                  <Counter />
                  <About />
                  <Portfolio />
                  <Service />
                  <VideoArea />
                  <ProductionWorks />
                  <Team />
                  <Faq />
                  <Blog />
               </main>
               <FooterFour />
            </div>
         </div>
      </div>
   )
}

export default HomeFour
