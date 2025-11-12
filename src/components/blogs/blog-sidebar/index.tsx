import FooterOne from "../../../layouts/footers/FooterOne"
import InnerHeaderTwo from "../../../layouts/headers/InnerHeaderTwo"
import Blog from "./Blog"
import BlogArea from "./BlogArea"
import BlogComment from "./BlogComment"
import BlogSidebarArea from "./BlogSidebarArea"
import MatrixRainPattern from "../../common/MatrixRainPattern"

const BlogSidebar = () => {
   return (
      <div className="theme-bg">
         <MatrixRainPattern 
            opacity={0.2}
            primaryColor="#2c6e49"
            secondaryColor="#91ed91"
            speed={50}
            density={0.8}
         />
         <InnerHeaderTwo />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <BlogArea />
                  <BlogSidebarArea />
                  <Blog />
                  <BlogComment />
               </main>
               <FooterOne />
            </div>
         </div>
      </div>
   )
}

export default BlogSidebar
