import { Link } from "react-router-dom"
import SplitTextWrapper from "../../components/common/SplitTextWrapper"

const FooterFour = () => {
   return (
      <footer>
         <div className="td-footer-area td-btn-trigger" style={{ marginTop: '120px' }}>
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="td-footer-4-bg text-center p-relative">
                        <div className="td-footer-4-shape td-btn-bounce d-none d-lg-block">
                           <img src="/assets/img/cta/cta-4/shape.png" alt="" />
                        </div>
                        <div className="td-footer-4-shape-2 td-btn-bounce d-none d-lg-block">
                           <img src="/assets/img/cta/cta-4/shape-2.png" alt="" />
                        </div>
                        <h2 className="td-footer-4-bigtitle mb-45 td-split-text td-split-in-right">
                           <SplitTextWrapper direction="right">
                              LET'S BUILD SOMETHING<br />EXTRAORDINARY TOGETHER
                           </SplitTextWrapper>
                        </h2>
                        <Link to="/contact" className="td-portfolio-4-btn">
                           <span>
                              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M15.7767 7.45005C15.9198 7.60217 16 7.80764 16 8.02177C16 8.2359 15.9198 8.44137 15.7767 8.59351L8.92138 15.8154C8.77516 15.9627 8.58094 16.0453 8.37867 16.0461C8.27759 16.0456 8.17746 16.0253 8.08351 15.9859C7.94489 15.9246 7.8266 15.8213 7.74358 15.6892C7.66056 15.5571 7.61651 15.4021 7.61698 15.2437V8.82421H0.761697C0.559684 8.82421 0.365942 8.73968 0.223096 8.58918C0.0802502 8.43869 0 8.2346 0 8.02177C0 7.80896 0.0802502 7.60485 0.223096 7.45437C0.365942 7.30388 0.559684 7.21935 0.761697 7.21935H7.61698V0.79985C7.61651 0.64143 7.66056 0.486407 7.74358 0.354318C7.8266 0.222228 7.94489 0.118984 8.08351 0.0575969C8.2242 -0.000214525 8.37756 -0.0148812 8.52585 0.0152958C8.67412 0.0454711 8.81125 0.119257 8.92138 0.228116L15.7767 7.45005Z" fill="#05341D" />
                              </svg>
                           </span>
                           start your journey with Neo
                        </Link>
                     </div>
                  </div>
                  <div className="col-12">
                     <div className="td-footer-4-contact-modern mb-50" style={{
                        padding: '35px 30px',
                        borderRadius: '16px',
                        background: 'rgba(20, 50, 35, 0.6)',
                        border: '1px solid rgba(145, 237, 145, 0.25)',
                     }}>
                        <div className="row align-items-center g-3">
                           <div className="col-lg-3">
                              <div style={{ textAlign: 'left' }}>
                                 <span style={{
                                    fontSize: '13px',
                                    fontWeight: '600',
                                    color: '#91ed91',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                    display: 'block',
                                    marginBottom: '5px'
                                 }}>Get in Touch</span>
                                 <h4 style={{ 
                                    color: '#fff', 
                                    fontSize: '20px',
                                    fontWeight: '700',
                                    marginBottom: '0',
                                    lineHeight: '1.3',
                                 }}>
                                    Let's Work <span style={{ color: '#91ed91' }}>Together</span>
                                 </h4>
                              </div>
                           </div>
                           
                           <div className="col-lg-4">
                              <div style={{
                                 display: 'flex',
                                 alignItems: 'center',
                                 gap: '12px',
                                 padding: '12px 0',
                                 borderLeft: '2px solid rgba(145, 237, 145, 0.2)',
                                 paddingLeft: '20px'
                              }}>
                                 <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(135deg, #91ed91 0%, #7FFF00 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                 }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                 </div>
                                 <div>
                                    <a href="tel:+251955927981" style={{ 
                                       color: '#fff', 
                                       fontSize: '15px', 
                                       display: 'block', 
                                       textDecoration: 'none',
                                       marginBottom: '3px',
                                       fontWeight: '500'
                                    }}>
                                       +251-955-927-981
                                    </a>
                                    <a href="tel:+251910219336" style={{ 
                                       color: '#fff', 
                                       fontSize: '15px', 
                                       display: 'block',
                                       textDecoration: 'none',
                                       fontWeight: '500'
                                    }}>
                                       +251-910-219-336
                                    </a>
                                 </div>
                              </div>
                           </div>
                           
                           <div className="col-lg-5">
                              <div style={{
                                 display: 'flex',
                                 alignItems: 'center',
                                 gap: '12px',
                                 padding: '12px 0',
                                 borderLeft: '2px solid rgba(145, 237, 145, 0.2)',
                                 paddingLeft: '20px'
                              }}>
                                 <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(135deg, #91ed91 0%, #7FFF00 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                 }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#000"/>
                                       <path d="M22 6L12 13L2 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                 </div>
                                 <div>
                                    <a href="mailto:neomarketingsolutions@gmail.com" style={{ 
                                       color: '#fff', 
                                       fontSize: '15px',
                                       textDecoration: 'none',
                                       fontWeight: '500',
                                       wordBreak: 'break-word'
                                    }}>
                                       neomarketingsolutions@gmail.com
                                    </a>
                                    <p style={{
                                       fontSize: '12px',
                                       color: 'rgba(255,255,255,0.6)',
                                       margin: '3px 0 0 0'
                                    }}>
                                       Mon-Fri, 9:00 AM - 6:00 PM EAT
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="td-footer-bottom  td-footer-4-bottom mt-45">
                        <div className="row align-items-center">
                           <div className="col-lg-4">
                              <div className="td-footer-copyright mb-25">
                                 <p>© 2025 <Link to="#">Neo Marketing.</Link> All Rights Reserved.</p>
                              </div>
                           </div>
                           <div className="col-lg-5">
                              <div className="td-footer-3-menu td-footer-4-menu mb-25">
                                 <ul>
                                    <li><Link to="#">Portfolio</Link></li>
                                    <li><Link to="#">Services</Link></li>
                                    <li><Link to="#">About</Link></li>
                                    <li><Link to="#">Blog</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                 </ul>
                              </div>
                           </div>
                           <div className="col-lg-3">
                              <div className="td-footer-social text-lg-end mb-25">
                                 <Link to="#">
                                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M9.33161 6.77486L15.1688 0H13.7856L8.71722 5.8826L4.66907 0H0L6.12155 8.89546L0 16H1.38336L6.73581 9.78785L11.0109 16H15.68L9.33148 6.77486H9.33187H9.33161ZM7.43696 8.97374L6.81669 8.088L1.88171 1.03969H4.00634L7.98902 6.72789L8.60929 7.61362L13.7863 15.0074H11.6616L7.43709 8.974V8.97361L7.43696 8.97374Z" fill="currentColor" />
                                    </svg>
                                 </Link>
                                 <Link to="#">
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 12.7426 3.10833 16.2591 7.17188 16.8967V10.957H5.01367V8.5H7.17188V6.62734C7.17188 4.49703 8.44087 3.32031 10.3825 3.32031C11.3124 3.32031 12.2852 3.48633 12.2852 3.48633V5.57813H11.2133C10.1574 5.57813 9.82812 6.23334 9.82812 6.90554V8.5H12.1855L11.8087 10.957H9.82812V16.8967C13.8917 16.2591 17 12.7426 17 8.5Z" fill="currentColor" />
                                    </svg>
                                 </Link>
                                 <Link to="#">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M11.5 1H4.5C2.567 1 1 2.567 1 4.5V11.5C1 13.433 2.567 15 4.5 15H11.5C13.433 15 15 13.433 15 11.5V4.5C15 2.567 13.433 1 11.5 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                       <path d="M10.7963 7.55921C10.8827 8.14178 10.7832 8.73676 10.5119 9.25952C10.2407 9.78228 9.81148 10.2062 9.28542 10.471C8.75935 10.7358 8.16319 10.8279 7.58173 10.7344C7.00027 10.6408 6.46311 10.3663 6.04667 9.94982C5.63022 9.53338 5.35569 8.99622 5.26213 8.41476C5.16856 7.8333 5.26073 7.23714 5.52551 6.71107C5.79029 6.18501 6.21421 5.75583 6.73697 5.48458C7.25973 5.21333 7.85471 5.11382 8.43728 5.20021C9.03152 5.28833 9.58167 5.56524 10.0065 5.99003C10.4313 6.41482 10.7082 6.96496 10.7963 7.55921Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                       <path d="M11.8477 4.15039H11.8577" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                 </Link>
                                 <Link to="#">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M10.2579 4.7373C11.5141 4.7373 12.7188 5.23632 13.6071 6.12458C14.4954 7.01283 14.9944 8.21757 14.9944 9.47375V14.9996H11.8367V9.47375C11.8367 9.05502 11.6704 8.65344 11.3743 8.35736C11.0782 8.06127 10.6767 7.89493 10.2579 7.89493C9.8392 7.89493 9.43762 8.06127 9.14154 8.35736C8.84545 8.65344 8.67911 9.05502 8.67911 9.47375V14.9996H5.52148V9.47375C5.52148 8.21757 6.0205 7.01283 6.90876 6.12458C7.79701 5.23632 9.00174 4.7373 10.2579 4.7373Z" fill="currentColor" />
                                       <path d="M3.15763 5.52734H0V15.0002H3.15763V5.52734Z" fill="currentColor" />
                                       <path d="M1.57881 3.15763C2.45077 3.15763 3.15763 2.45077 3.15763 1.57881C3.15763 0.706859 2.45077 0 1.57881 0C0.706859 0 0 0.706859 0 1.57881C0 2.45077 0.706859 3.15763 1.57881 3.15763Z" fill="currentColor" />
                                    </svg>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterFour
