import { Link } from "react-router-dom"
import SplitTextWrapper from "../../common/SplitTextWrapper";

const award_logo: string[] = [
   "/assets/img/brand/logo-1.png",
   "/assets/img/brand/logo-2.png",
   "/assets/img/brand/logo-3.png",
   "/assets/img/brand/logo-4.png",
   "/assets/img/brand/logo-5.png",
   "/assets/img/brand/brands-6/logo.png",
   "/assets/img/brand/brands-6/logo-2.png",
   "/assets/img/brand/brands-6/logo-3.png",
];

const AwardArea = () => {
   return (
      <div className="td-awards-area pt-155">
         <div className="container">
            <div className="row">
               <div className="col-lg-3 col-md-5">
                  <div className="td-awards-title-wrap">
                     <h2 className="td-section-4-title td-split-text td-split-in-right">
                       <SplitTextWrapper direction="right">
                            BRANDS THAT<br /> <span className="green-text">TRUST US</span>
                        </SplitTextWrapper>
                        </h2>
                  </div>
               </div>
               <div className="col-lg-4 col-md-7">
                  <div className="td-awards-4-para">
                     <p>We've had the privilege of working with some of
                        the most influential and respected names in the
                        industry. These collaborations reflect our ability to
                        adapt, deliver, and elevate brands through bold
                        storytelling and smart strategy.
                     </p>
                  </div>
               </div>
               <div className="col-lg-5">
                  <div className="td-awards-4-brands" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '20px', alignItems: 'center' }}>
                     {award_logo.map((logo, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                           <Link to="#">
                              <img src={logo} alt="" style={{ maxWidth: '100px', maxHeight: '60px', objectFit: 'contain', filter: 'grayscale(100%)', opacity: '0.7', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.filter = 'grayscale(0%)'; e.currentTarget.style.opacity = '1'; }} onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%)'; e.currentTarget.style.opacity = '0.7'; }} />
                           </Link>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AwardArea
