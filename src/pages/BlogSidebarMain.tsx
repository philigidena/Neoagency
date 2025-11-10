import BlogSidebar from "../components/blogs/blog-sidebar"
import SEO from "../components/SEO"
import Wrapper from "../layouts/Wrapper"

const BlogSidebarMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Blog | Neo Marketing'} />
         <BlogSidebar />
      </Wrapper>
   )
}

export default BlogSidebarMain
