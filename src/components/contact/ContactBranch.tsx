import { Link } from "react-router-dom"

const ContactBranch = () => {
   return (
      <div className="td-contact-branch-area pb-140">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="text-center  wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                     <h2 className="td-section-page-title mb-105">Get in <span>Touch</span></h2>
                  </div>
               </div>
               <div className="col-12">
                  <div className="td-contact-branch-item td-contact-branch-border  wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                     <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                           <h3 className="td-contact-branch-name mb-20">Neo Marketing</h3>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                           <div className="td-contact-branch-thumb mb-20">
                              <img className="w-100 td-rounded-10" src="/Neo-office-1.png" alt="Neo Marketing Office" />
                           </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                           <div className="td-contact-branch-lucation ml-40 mb-20">
                              <h5 className="td-contact-branch-lucation-title">Addis Ababa, Ethiopia</h5>
                              <Link className="lucation mb-110" to="#">Where Storytelling Meets Science</Link>
                           </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                           <div className="td-contact-branch-number ml-40 mb-20">
                              <Link className="mb-30" to="tel:+251955927981">+251-955-927-981</Link>
                              <Link className="mb-30" to="tel:+251910219336">+251-910-219-336</Link>
                              <Link className="link" to="mailto:neomarketingsolutions@gmail.com">neomarketingsolutions@gmail.com</Link>
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

export default ContactBranch
