import { Link } from "react-router-dom"
import LazyImage from "../../common/LazyImage"

interface ProductionType {
   id: number;
   thumb: string;
   title: string;
   subtitle?: string;
}

const production_data: ProductionType[] = [
   {
      id: 1,
      thumb: "/The Small Kitchen_2.jpg",
      title: "The Small Kitchen",
      subtitle: "Cooking Show"
   },
   {
      id: 2,
      thumb: "/Baletarikochu.jpg",
      title: "Baletarikochu",
      subtitle: "Entertainment Series"
   },
   {
      id: 3,
      thumb: "/2_guada.png",
      title: "2 Guada",
      subtitle: "Reality Show"
   },
   {
      id: 4,
      thumb: "/Studio_30_thumbnail.jpg",
      title: "Studio 30",
      subtitle: "Talk Show"
   },
];

const partner_logos: string[] = [
   "/assets/img/brand/logo-1.png",
   "/assets/img/brand/logo-2.png",
   "/assets/img/brand/logo-3.png",
   "/assets/img/brand/logo-4.png",
   "/assets/img/brand/logo-5.png",
];

const ProductionWorks = () => {
   return (
      <div className="td-portfolio-area pt-170 pb-160" style={{ 
         position: 'relative',
      }}>
         <div className="container">
            <div className="row mb-70">
               <div className="col-lg-12">
                  <div className="text-center">
                     <div className="td-production-badge mb-25" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '12px 28px',
                        background: 'linear-gradient(135deg, rgba(145, 237, 145, 0.15) 0%, rgba(127, 255, 0, 0.1) 100%)',
                        border: '1px solid rgba(145, 237, 145, 0.3)',
                        borderRadius: '50px',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#91ed91',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                     }}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                           <path d="M8 9L12 11L8 13V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Dopamine Studios
                     </div>
                     
                     <h2 className="td-section-4-title mb-30" style={{ 
                        fontSize: 'clamp(40px, 5vw, 72px)',
                        lineHeight: '1.15',
                        color: '#fff',
                        fontWeight: '700',
                        letterSpacing: '-1px',
                     }}>
                        OUR PRODUCTION <br />
                        <span style={{
                           background: 'linear-gradient(135deg, #91ed91 0%, #7FFF00 100%)',
                           WebkitBackgroundClip: 'text',
                           WebkitTextFillColor: 'transparent',
                           backgroundClip: 'text',
                        }}>WORKS</span>
                     </h2>
                     
                     <p className="td-section-4-text mx-auto" style={{ 
                        fontSize: '20px',
                        lineHeight: '1.8',
                        color: 'rgba(255, 255, 255, 0.8)',
                        maxWidth: '700px'
                     }}>
                        Showcasing our creative excellence through compelling television 
                        productions and entertainment series that captivate audiences.
                     </p>
                  </div>
               </div>
            </div>
            
            <div className="row g-4 mb-80">
               {production_data.map((item) => (
                  <div key={item.id} className="col-lg-3 col-md-6">
                     <div className="td-production-card" style={{ 
                        position: 'relative',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        transition: 'all 0.4s ease',
                        height: '100%',
                     }}
                        onMouseEnter={(e) => { 
                           e.currentTarget.style.transform = 'translateY(-10px)';
                           e.currentTarget.style.borderColor = 'rgba(145, 237, 145, 0.3)';
                           e.currentTarget.style.boxShadow = '0 20px 60px rgba(145, 237, 145, 0.15)';
                        }} 
                        onMouseLeave={(e) => { 
                           e.currentTarget.style.transform = 'translateY(0)';
                           e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                           e.currentTarget.style.boxShadow = 'none';
                        }}>
                        <div className="td-production-thumb" style={{ 
                           height: '320px',
                           overflow: 'hidden',
                           position: 'relative'
                        }}>
                           <LazyImage
                              className="w-100" 
                              src={item.thumb} 
                              alt={item.title} 
                              style={{ 
                                 height: '100%', 
                                 width: '100%',
                                 objectFit: 'cover',
                                 transition: 'transform 0.4s ease'
                              }} 
                           />
                           <div style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
                              zIndex: 1
                           }}></div>
                        </div>
                        <div style={{ 
                           padding: '25px',
                           position: 'relative'
                        }}>
                           {item.subtitle && (
                              <span style={{
                                 fontSize: '13px',
                                 color: '#91ed91',
                                 fontWeight: '600',
                                 textTransform: 'uppercase',
                                 letterSpacing: '1px',
                                 display: 'block',
                                 marginBottom: '8px'
                              }}>{item.subtitle}</span>
                           )}
                           <h5 style={{ 
                              color: '#fff', 
                              fontSize: '22px',
                              fontWeight: '700',
                              marginBottom: '0',
                              lineHeight: '1.3'
                           }}>{item.title}</h5>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            
            <div className="row">
               <div className="col-lg-12">
                  <div className="td-broadcasters-section" style={{
                     padding: '60px 40px',
                     borderRadius: '24px',
                     background: 'linear-gradient(135deg, rgba(145, 237, 145, 0.05) 0%, rgba(127, 255, 0, 0.03) 100%)',
                     border: '1px solid rgba(145, 237, 145, 0.15)',
                  }}>
                     <div className="text-center mb-50">
                        <h3 style={{ 
                           color: '#91ed91', 
                           fontSize: 'clamp(24px, 3vw, 36px)',
                           fontWeight: '700',
                           marginBottom: '15px',
                           letterSpacing: '-0.5px'
                        }}>
                           Broadcasters We've Partnered With
                        </h3>
                        <p style={{
                           fontSize: '16px',
                           color: 'rgba(255,255,255,0.7)',
                           maxWidth: '600px',
                           margin: '0 auto'
                        }}>
                           Trusted by leading broadcasters and media companies
                        </p>
                     </div>
                     <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        flexWrap: 'wrap', 
                        gap: '50px' 
                     }}>
                        {partner_logos.map((logo, i) => (
                           <div key={i} style={{ textAlign: 'center' }}>
                              <Link to="#" style={{
                                 display: 'block',
                                 padding: '20px',
                                 borderRadius: '12px',
                                 background: 'rgba(255,255,255,0.02)',
                                 transition: 'all 0.3s ease',
                              }}
                                 onMouseEnter={(e) => { 
                                    e.currentTarget.style.background = 'rgba(145, 237, 145, 0.1)';
                                 }}
                                 onMouseLeave={(e) => { 
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                                 }}>
                                 <img 
                                    src={logo} 
                                    alt="" 
                                    style={{ 
                                       maxWidth: '120px', 
                                       maxHeight: '70px', 
                                       objectFit: 'contain', 
                                       filter: 'brightness(0) invert(1) grayscale(100%)', 
                                       opacity: '0.7', 
                                       transition: 'all 0.3s ease' 
                                    }} 
                                    onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }} 
                                    onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7'; }} 
                                 />
                              </Link>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProductionWorks

