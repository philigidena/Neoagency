const ServiceArea = () => {
   return (
      <div className="td-service-main-area pb-125">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="td-service-main-bigthumb fix td-rounded-10">
                     <img data-speed=".9" src="/Neo-Hero-image.png" alt="Neo Marketing" />
                  </div>
               </div>
            </div>
            <div className="row justify-content-center">
               <div className="col-lg-9">
                  <div className="td-service-main-content text-center pt-140 mb-60  wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                     <span className="mb-25 d-inline-block">//  What We Do</span>
                     <h2>We create emotionally resonant experiences
                        that naturally draw people toward
                        your brand</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-4">
                  <div className="td-service-main-expreance mb-30  wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
                     <h2 className="expreance mb-0">10+</h2>
                     <span className="year">YEARS OF WORK EXPERIENCE</span>
                  </div>
               </div>
               <div className="col-lg-8">
                  <div className="td-service-main-strategy-wrap ml-50">
                     <div className="row">
                        <div className="col-lg-6 col-md-6  wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1s">
                           <div className="td-service-main-strategy mb-40">
                              <h3 className="title mb-20">Strategy & Consulting</h3>
                              <p className="text">Brand Strategy & Positioning, Marketing Planning, Consumer Insights & Research</p>
                           </div>
                        </div>
                        <div className="col-lg-6 col-md-6  wow fadeInUp" data-wow-delay=".8s" data-wow-duration="1s">
                           <div className="td-service-main-strategy mb-40">
                              <h3 className="title mb-20">Content & Production</h3>
                              <p className="text">TV Shows, Commercials, Music Videos, Photography & Creative Direction</p>
                           </div>
                        </div>
                        <div className="col-12  wow fadeInUp" data-wow-delay=".9s" data-wow-duration="1s">
                           <div className="td-service-main-strategy">
                              <p className="text">Marketing is not about pushing products—it's about influencing perception through emotionally resonant experiences that naturally draw people toward your brand. At Neo, we merge the creative firepower of Dopamine Studios with psychology-driven marketing.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ServiceArea
