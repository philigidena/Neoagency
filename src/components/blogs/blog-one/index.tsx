import FooterFour from "../../../layouts/footers/FooterFour"
import HeaderFour from "../../../layouts/headers/HeaderFour"
import MatrixRainPattern from "../../common/MatrixRainPattern"
import BlogArea from "./BlogArea"
import BlogThumb from "./BlogThumb"

const BlogOne = () => {
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
                  <BlogThumb />
                  <BlogArea />
               </main>
               <FooterFour />
            </div>
         </div>
      </div>
   )
}

export default BlogOne
