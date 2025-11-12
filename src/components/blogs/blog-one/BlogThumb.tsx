
const BlogThumb = () => {
   return (
      <div className="td-blog-bigthumb-area td-blog-bigthumb-spacing">
         <div className="container container-1530">
            <div className="include-bg td-blog-bigthumb-bg" style={{ 
               backgroundImage: `url("/Neo-studio_11.png")`,
               backgroundPosition: 'center',
               backgroundSize: 'cover'
            }}>
               <div className="row">
                  <div className="col-12">
                     <div className="td-blog-bigthumb-wrap">
                        <span className="td-blog-bigthumb-dates  wow fadeInLeft" data-wow-delay=".5s" data-wow-duration="1s" style={{ 
                           color: '#91ed91',
                           textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                        }}>FEB<br /> 01</span>
                        <div className="td-blog-bigthumb-content  wow fadeInLeft" data-wow-delay=".7s" data-wow-duration="1s">
                           <h2 className="td-blog-bigthumb-title" style={{
                              color: '#fff',
                              textShadow: '0 2px 20px rgba(0,0,0,0.7)'
                           }}>Where Storytelling Meets Science: 
                              Insights from the Neo World</h2>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlogThumb
