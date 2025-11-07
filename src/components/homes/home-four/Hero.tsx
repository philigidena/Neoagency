
const Hero = () => {
   return (
      <>
         <div className="td-hero-area td-hero-4-spacing td-btn-trigger p-relative fix z-index-1">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xl-5 col-lg-6 col-md-12">
                     <div className="td-hero-4-title-large mb-30">
                        <h2 className="td-split-text td-split-in-right">
                           <span className="d-none d-md-inline">WHERE<br />
                           STORYTELLING<br />
                           MEETS<br />
                           SCIENCE</span>
                           <span className="d-md-none">WHERE STORYTELLING<br />MEETS SCIENCE</span>
                        </h2>
                     </div>
                  </div>
                  <div className="col-xl-7 col-lg-6 col-md-12">
                     <div className="td-hero-4-thumb p-relative mb-30">
                        <div className="td-hero-4-circale">
                           <div className="td-hero-4-circale-inner td-btn-bounce p-relative">
                              <img className="td-live-anim-spin" src="/assets/img/hero/hero-4/vector.png" alt="" />
                              <img className="shape" src="/assets/img/hero/hero-4/shape.png" alt="" />
                           </div>
                        </div>
                        <img className="thumb" src="/assets/img/hero/hero-4/thumb.png" alt="" />
                        <div className="thumb-2 include-bg td-btn-bounce d-none d-md-inline-block" style={{ backgroundImage: `url(/assets/img/hero/hero-4/subtract.png)` }}>
                           <h5 className="titles mb-75">Psychology<br /> Driven</h5>
                           <img className="mb-75" src="/assets/img/hero/hero-4/shape-3.png" alt="" />
                           <h5>2025</h5>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-2"></div>
                  <div className="col-xl-6 col-lg-8">
                     <div className="td-hero-4-bottom pt-30">
                        <div className="icon d-none d-md-block">
                           <img src="/assets/img/hero/hero-4/icon.png" alt="" />
                        </div>
                        <div className="td-hero-4-bottom-content p-relative">
                           <img className="mb-35" src="/assets/img/hero/hero-4/avatar.png" alt="" />
                           <h6 className="count mb-0">99%</h6>
                           <p>Psychology meets<br />
                              1% technology for<br />
                              powerful marketing</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="td-hero-4-bottom-thumb p-relative td-btn-trigger">
            <div className="td-btn-bounce td-hero-4-shape d-none d-xl-block">
               <img src="/assets/img/hero/hero-4/shape-1.png" alt="" />
            </div>
            <img className="w-100" src="/Neo-studio_9.png" alt="Neo Marketing Studio" style={{ objectFit: 'cover', maxHeight: '500px' }} />
         </div>
      </>
   )
}

export default Hero
