import Breadcrumb from "./Breadcrumb"
import BlogDetailsArea from "./BlogDetailsArea"
import Blog from "../blog-sidebar/Blog"
import InnerHeader from "../../../layouts/headers/InnerHeader"
import FooterOne from "../../../layouts/footers/FooterOne"
import MatrixRainPattern from "../../common/MatrixRainPattern"

const BlogDetails = () => {
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
                  <Breadcrumb />
                  <BlogDetailsArea />
                  <Blog style={true} />
               </main>
               <FooterOne style={false} />
            </div>
         </div>
      </div>
   )
}

export default BlogDetails
