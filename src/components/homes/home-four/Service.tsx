import type { JSX } from "react";
import { Link } from "react-router-dom";
import SplitTextWrapper from "../../common/SplitTextWrapper";

interface DataType {
   id: number;
   thumb: string;
   icon: JSX.Element;
   title: JSX.Element;
   desc: string;
   services: string[];
}

const service_data: DataType[] = [
   {
      id: 1,
      thumb: "/assets/img/portfolio/details/thumb-2.jpg",
      icon: (
         <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4L6 14V22C6 32.4 13.2 42 24 44C34.8 42 42 32.4 42 22V14L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M24 24L16 20V28L24 32L32 28V20L24 24Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
         </svg>
      ),
      title: (<>STRATEGY &<br /> CONSULTING</>),
      desc: "Transform your vision into actionable strategies that drive results. We craft comprehensive marketing plans backed by deep market insights.",
      services: ["Brand Strategy & Positioning", "Marketing Planning", "Market Research", "Campaign Strategy"]
   },
   {
      id: 2,
      thumb: "/assets/img/video/bg.jpg",
      icon: (
         <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="10" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M19 22L27 26L19 30V22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 16H42" stroke="currentColor" strokeWidth="2"/>
         </svg>
      ),
      title: (<>CONTENT &<br /> PRODUCTION</>),
      desc: "From concept to delivery, we produce compelling visual content that captivates audiences and tells your brand story.",
      services: ["Film & TV Production", "Commercial Videos", "Music Videos", "Photography & Creative"]
   },
   {
      id: 3,
      thumb: "/assets/img/portfolio/2/portfolio-2.jpg",
      icon: (
         <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="2"/>
            <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2"/>
            <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2"/>
            <path d="M24 6V10M24 38V42M6 24H10M38 24H42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
         </svg>
      ),
      title: (<>DIGITAL & SOCIAL<br /> MEDIA</>),
      desc: "Amplify your digital presence with data-driven strategies that engage audiences and boost conversions across all platforms.",
      services: ["Social Media Management", "Digital Advertising", "SEO Optimization", "Email Marketing"]
   },
   {
      id: 4,
      thumb: "/assets/img/portfolio/details/thumb.jpg",
      icon: (
         <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 6C14.06 6 6 14.06 6 24C6 33.94 14.06 42 24 42C33.94 42 42 33.94 42 24C42 14.06 33.94 6 24 6Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M24 16C19.58 16 16 19.58 16 24C16 28.42 19.58 32 24 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M32 24C32 19.58 28.42 16 24 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
         </svg>
      ),
      title: (<>DESIGN & BRAND<br /> EXPERIENCE</>),
      desc: "Create memorable brand experiences through stunning visual design and immersive activations that leave lasting impressions.",
      services: ["Visual Identity Design", "Motion Graphics", "Brand Activations", "Influencer Campaigns"]
   },
];

const formatSerial = (num: number): string => {
   return `${num < 10 ? `0${num}` : num}`;
};

const Service = () => {
   return (
      <div className="td-service-area pt-120 pb-100">
         <div className="container">
            <div className="row align-items-center mb-50">
               <div className="col-lg-12">
                  <div className="td-service-title-wrap-modern text-center mb-40">
                     <div className="td-service-badge mb-25" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '12px 28px',
                        background: 'linear-gradient(135deg, rgba(127, 255, 0, 0.15) 0%, rgba(0, 255, 127, 0.1) 100%)',
                        border: '1px solid rgba(127, 255, 0, 0.3)',
                        borderRadius: '50px',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#7FFF00',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                     }}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M10 2L3 7V11C3 15.2 6 19 10 20C14 19 17 15.2 17 11V7L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Our Services
                     </div>
                     
                     <h2 className="td-section-4-title fw-700 mb-20" style={{
                        fontSize: 'clamp(36px, 5vw, 58px)',
                        lineHeight: '1.15',
                        color: '#fff',
                        letterSpacing: '-1px',
                        textAlign: 'center',
                     }}>
                        <SplitTextWrapper direction="right">
                           FULL-HOUSE MARKETING <span style={{
                              color: '#7FFF00',
                           }}>SOLUTIONS</span>
                        </SplitTextWrapper>
                     </h2>
                     
                     <div className="td-service-description mx-auto" style={{ maxWidth: '750px' }}>
                        <p style={{ 
                           fontSize: '17px', 
                           lineHeight: '1.6',
                           color: 'rgba(255,255,255,0.8)',
                           fontWeight: '400',
                           marginBottom: '0'
                        }}>
                           Neo is a full-house marketing agency offering <span style={{ color: '#7FFF00', fontWeight: '600' }}>end-to-end solutions</span> through 
                           a wide range of specialized services. Our expertise is divided into <span style={{ color: '#7FFF00', fontWeight: '600' }}>four key areas</span> designed 
                           to elevate your brand and drive measurable results.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row g-4">
               {service_data.map((item, i) => (
                  <div key={item.id} className="col-lg-6 col-md-6">
                     <div className="td-service-4-item-modern p-relative h-100" style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '24px',
                        padding: '30px',
                        transition: 'all 0.4s ease',
                        overflow: 'hidden',
                     }}>
                        <div className="td-service-4-thumb-modern" style={{
                           position: 'absolute',
                           top: 0,
                           right: 0,
                           width: '200px',
                           height: '200px',
                           opacity: 0.1,
                           transform: 'translate(30px, -30px)',
                           transition: 'all 0.4s ease',
                        }}>
                           <img src={item.thumb} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        
                        <div className="td-service-4-header mb-20 d-flex align-items-center justify-content-between">
                           <div className="td-service-4-icon-modern" style={{
                              width: '60px',
                              height: '60px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderRadius: '14px',
                              background: 'linear-gradient(135deg, #7FFF00 0%, #00FF7F 100%)',
                              color: '#000',
                              transition: 'all 0.4s ease',
                           }}>
                              {item.icon}
                           </div>
                           <span className="td-service-4-number" style={{
                              fontSize: '60px',
                              fontWeight: '800',
                              color: 'rgba(127, 255, 0, 0.1)',
                              lineHeight: '1',
                           }}>{formatSerial(i + 1)}</span>
                        </div>
                        
                        <h3 className="td-service-4-title-modern mb-15" style={{
                           fontSize: '24px',
                           fontWeight: '700',
                           lineHeight: '1.3',
                           color: '#fff',
                        }}>
                           <Link to="/service-details" style={{ color: 'inherit', textDecoration: 'none' }}>
                              {item.title}
                           </Link>
                        </h3>
                        
                        <p className="td-service-4-desc mb-20" style={{
                           fontSize: '15px',
                           lineHeight: '1.6',
                           color: 'rgba(255,255,255,0.7)',
                        }}>
                           {item.desc}
                        </p>
                        
                        <div className="td-service-4-features mb-20">
                           <ul style={{ 
                              listStyle: 'none', 
                              padding: 0, 
                              margin: 0,
                              display: 'grid',
                              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                              gap: '12px'
                           }}>
                              {item.services.map((service, idx) => (
                                 <li key={idx} style={{
                                    fontSize: '14px',
                                    color: 'rgba(255,255,255,0.6)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                 }}>
                                    <span style={{
                                       width: '6px',
                                       height: '6px',
                                       borderRadius: '50%',
                                       background: '#7FFF00',
                                       display: 'inline-block',
                                       flexShrink: 0
                                    }}></span>
                                    {service}
                                 </li>
                              ))}
                           </ul>
                        </div>
                        
                        <div className="td-service-4-action">
                           <Link to="/service-details" style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '8px',
                              color: '#7FFF00',
                              fontSize: '15px',
                              fontWeight: '600',
                              textDecoration: 'none',
                              transition: 'all 0.3s ease',
                           }}>
                              Learn More
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                           </Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         
         <style>{`
            .td-service-4-item-modern:hover {
               transform: translateY(-8px);
               border-color: rgba(127, 255, 0, 0.3) !important;
               box-shadow: 0 20px 60px rgba(127, 255, 0, 0.15);
            }
            
            .td-service-4-item-modern:hover .td-service-4-thumb-modern {
               opacity: 0.2;
               transform: translate(20px, -20px) scale(1.1);
            }
            
            .td-service-4-item-modern:hover .td-service-4-icon-modern {
               transform: scale(1.1) rotate(5deg);
               box-shadow: 0 10px 30px rgba(127, 255, 0, 0.3);
            }
            
            .td-service-4-item-modern:hover .td-service-4-action a {
               gap: 12px;
            }
            
            @media (max-width: 991px) {
               .td-service-4-item-modern {
                  padding: 25px !important;
               }
               
               .td-service-4-title-modern {
                  font-size: 22px !important;
               }
            }
         `}</style>
      </div>
   )
}

export default Service
