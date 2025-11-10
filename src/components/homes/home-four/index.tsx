import { lazy, Suspense } from "react"
import Hero from "./Hero"
import Counter from "./Counter"
import About from "./About"
import HeaderFour from "../../../layouts/headers/HeaderFour"
import FooterFour from "../../../layouts/footers/FooterFour"
import MatrixRainPattern from "../../common/MatrixRainPattern"

// Lazy load below-the-fold sections for better initial load
const Portfolio = lazy(() => import("./Portfolio"))
const Service = lazy(() => import("./Service"))
const Packages = lazy(() => import("./Packages"))
const VideoArea = lazy(() => import("./VideoArea"))
const ProductionWorks = lazy(() => import("./ProductionWorks"))
const Team = lazy(() => import("./Team"))
const Faq = lazy(() => import("./Faq"))
const Blog = lazy(() => import("./Blog"))

const SectionLoader = () => (
   <div style={{ 
      minHeight: '200px', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      color: 'rgba(145, 237, 145, 0.5)'
   }}>
      Loading...
   </div>
)

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
                  <Suspense fallback={<SectionLoader />}>
                     <Portfolio />
                  </Suspense>
                  <Suspense fallback={<SectionLoader />}>
                     <Service />
                  </Suspense>
                  <Suspense fallback={<SectionLoader />}>
                     <Packages />
                  </Suspense>
                  <Suspense fallback={<SectionLoader />}>
                     <VideoArea />
                  </Suspense>
                  <Suspense fallback={<SectionLoader />}>
                     <ProductionWorks />
                  </Suspense>
                  <Suspense fallback={<SectionLoader />}>
                     <Team />
                  </Suspense>
                  <Suspense fallback={<SectionLoader />}>
                     <Faq />
                  </Suspense>
                  <Suspense fallback={<SectionLoader />}>
                     <Blog />
                  </Suspense>
               </main>
               <FooterFour />
            </div>
         </div>
      </div>
   )
}

export default HomeFour
