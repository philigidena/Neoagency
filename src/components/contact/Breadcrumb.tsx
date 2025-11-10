
const Breadcrumb = () => {
   return (
      <div className="td-breadcrumb-area td-breadcrumb-spacing mb-80">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="td-breadcrumb-wrap text-center">
                     <span className="subtitle d-inline-block mb-25 wow fadeInUp" 
                        data-wow-delay=".4s" 
                        data-wow-duration="1s"
                        style={{
                           color: '#2c6e49',
                           fontSize: '13px',
                           fontWeight: '700',
                           letterSpacing: '3px',
                           textTransform: 'uppercase',
                        }}>
                        // GET IN TOUCH
                     </span>
                     <h1 className="td-section-page-title td-title-anim mb-30 wow fadeInUp" 
                        data-wow-delay=".6s" 
                        data-wow-duration="1s"
                        style={{
                           fontSize: 'clamp(42px, 7vw, 72px)',
                           lineHeight: '1.15',
                           color: '#0a1e15',
                           fontWeight: '800',
                           marginBottom: '25px',
                        }}>
                        Let's Build Something<br />
                        <span style={{ color: '#2c6e49' }}>Extraordinary</span> Together
                     </h1>
                     <p className="wow fadeInUp" 
                        data-wow-delay=".8s" 
                        data-wow-duration="1s"
                        style={{
                           fontSize: '18px',
                           lineHeight: '1.7',
                           color: 'rgba(10, 30, 21, 0.75)',
                           maxWidth: '700px',
                           margin: '0 auto',
                        }}>
                        Ready to transform your brand? Drop us a message and let's start creating marketing magic together.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Breadcrumb
