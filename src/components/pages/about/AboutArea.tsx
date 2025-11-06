import { Link } from "react-router-dom"

const AboutArea = () => {
   return (
      <div className="td-about-area td-about-main-spacing pb-140">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="td-about-main-wrapper pb-90">
                     <h2 className="td-section-page-title td-title-anim text-center">
                        Born from <span>Dopamine Studios</span>, Neo Marketing<br />
                        redefines what agencies can be
                     </h2>
                  </div>
               </div>
               <div className="col-lg-5">
                  <div className="td-about-main-thumb mb-40 fix td-rounded-10 wow fadeInLeft" data-wow-delay=".5s" data-wow-duration="1s">
                     <img data-speed=".9" className="w-100 td-rounded-10" src="/Neo-studio_2.png" alt="Neo Marketing Studio" />
                  </div>
               </div>
               <div className="col-lg-7">
                  <div className="td-about-main-content ml-110 mb-40  wow fadeInRight" data-wow-delay=".5s" data-wow-duration="1s">
                     <h3 className="td-about-main-title mb-20">Where Storytelling Meets Science</h3>
                     <div className="row">
                        <div className="col-lg-5 col-md-5">
                           <div className="td-about-main-bigtext">
                              <h2>10+</h2>
                              <span>Years of experience</span>
                           </div>
                        </div>
                        <div className="col-lg-7 col-md-7">
                           <div className="td-about-main-text mt-30">
                              <p className="mb-30">Rather than forming from traditional agencies, Neo grew out of years of collaboration, production, and real-world branding experience. We believe marketing is not about pushing products—it's about influencing perception through emotionally resonant experiences.</p>
                              <div className="td-btn-group">
                                 <Link className="td-btn-circle" to="/contact">
                                    <i className="fa-solid fa-arrow-right"></i>
                                 </Link>
                                 <Link className="td-btn-2 td-btn-primary" to="/contact">EXPLORE MORE</Link>
                                 <Link className="td-btn-circle" to="/contact">
                                    <i className="fa-solid fa-arrow-right"></i>
                                 </Link>
                              </div>
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

export default AboutArea
