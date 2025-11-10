import type { JSX } from "react";

interface DataType {
   sub_title: string;
   title: JSX.Element;
   desc: string;
}

const BreadcrumbTwo = ({ sub_title, title, desc }: DataType) => {
   return (
      <div className="td-breadcrumb-area td-breadcrumb-spacing mb-100">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="td-breadcrumb-wrap text-center">
                     <span className="subtitle d-inline-block mb-25 wow fadeInUp" 
                        data-wow-delay=".4s" 
                        data-wow-duration="1s"
                        style={{
                           color: '#2c6e49',
                           fontSize: '14px',
                           fontWeight: '700',
                           letterSpacing: '4px',
                           textTransform: 'uppercase',
                        }}>
                        {sub_title}
                     </span>
                     
                     <h1 className="td-section-page-title mb-35 td-title-anim wow fadeInUp" 
                        data-wow-delay=".6s" 
                        data-wow-duration="1s"
                        style={{
                           fontSize: 'clamp(52px, 8vw, 90px)',
                           lineHeight: '1.1',
                           color: '#0a1e15',
                           fontWeight: '800',
                        }}>
                        {title}
                     </h1>
                     
                     <div className="row justify-content-center">
                        <div className="col-lg-9">
                           <p className="text wow fadeInUp" 
                              data-wow-delay=".8s" 
                              data-wow-duration="1s"
                              style={{
                                 fontSize: '20px',
                                 lineHeight: '1.7',
                                 color: 'rgba(10, 30, 21, 0.85)',
                                 margin: '0',
                                 fontWeight: '400',
                              }}>
                              {desc}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BreadcrumbTwo
