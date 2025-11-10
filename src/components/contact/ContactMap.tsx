import { Link } from "react-router-dom"

const ContactMap = () => {
   return (
      <div className="td-contact-map-area">
         <div className="container-fluid p-0">
            <div className="row">
               <div className="col-12">
                  <div className="td-contact-map p-relative">
                     <div style={{
                        padding: '40px 35px',
                        borderRadius: '16px',
                        background: 'rgba(15, 40, 28, 0.96)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(145, 237, 145, 0.25)',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                        position: 'absolute',
                        right: '250px',
                        top: '-120px',
                        zIndex: 2,
                        width: '350px',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='5' y='15' font-family='monospace' font-size='12' fill='rgba(145, 237, 145, 0.08)'%3E1%3C/text%3E%3Ctext x='25' y='35' font-family='monospace' font-size='12' fill='rgba(145, 237, 145, 0.08)'%3E0%3C/text%3E%3Ctext x='45' y='55' font-family='monospace' font-size='12' fill='rgba(145, 237, 145, 0.08)'%3E1%3C/text%3E%3C/svg%3E")`,
                     }}>
                        <h3 style={{
                           fontSize: '36px',
                           fontWeight: '700',
                           color: '#fff',
                           marginBottom: '8px',
                           letterSpacing: '-1px'
                        }}>NEO</h3>
                        
                        <h6 className="mb-25" style={{
                           fontSize: '12px',
                           fontWeight: '600',
                           color: '#91ed91',
                           letterSpacing: '1.5px',
                           textTransform: 'uppercase',
                        }}>Contact info:</h6>

                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '15px' }}>
                           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '3px', flexShrink: 0 }}>
                              <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="#91ed91" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                           <div>
                              <Link to="tel:+251955927981" style={{
                                 color: '#fff',
                                 fontSize: '15px',
                                 fontWeight: '500',
                                 textDecoration: 'none',
                                 display: 'block',
                                 marginBottom: '5px',
                                 transition: 'color 0.3s ease'
                              }}
                                 onMouseEnter={(e) => e.currentTarget.style.color = '#91ed91'}
                                 onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}>
                                 +251-955-927-981
                              </Link>
                              <Link to="tel:+251910219336" style={{
                                 color: '#fff',
                                 fontSize: '15px',
                                 fontWeight: '500',
                                 textDecoration: 'none',
                                 display: 'block',
                                 transition: 'color 0.3s ease'
                              }}
                                 onMouseEnter={(e) => e.currentTarget.style.color = '#91ed91'}
                                 onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}>
                                 +251-910-219-336
                              </Link>
                           </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                              <rect x="3" y="5" width="18" height="14" rx="2" stroke="#91ed91" strokeWidth="1.5" strokeLinecap="round"/>
                              <path d="M3 7L12 13L21 7" stroke="#91ed91" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                           <Link to="mailto:neomarketingsolutions@gmail.com" style={{
                              color: '#fff',
                              fontSize: '14px',
                              fontWeight: '500',
                              textDecoration: 'none',
                              transition: 'color 0.3s ease',
                              wordBreak: 'break-all'
                           }}
                              onMouseEnter={(e) => e.currentTarget.style.color = '#91ed91'}
                              onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}>
                              neomarketingsolutions@gmail.com
                           </Link>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '2px', flexShrink: 0 }}>
                              <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#91ed91" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="#91ed91" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                           <Link to="#" style={{
                              color: '#fff',
                              fontSize: '14px',
                              fontWeight: '400',
                              textDecoration: 'none',
                              lineHeight: '1.6',
                              opacity: '0.95'
                           }}>
                              22 Bata Complex Building,<br />
                              Around Gollagul Tower,<br />
                              Addis Ababa, Ethiopia
                           </Link>
                        </div>
                     </div>
                     <div className="td-contact-map-inner">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.314679587446!2d38.759682!3d9.034761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f3b6c4b36f%3A0x8d6c8f3b1b4a4a3f!2sGollagul%20Tower%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1699000000000!5m2!1sen!2set" width="600" height="450" style={{ border: 0 }} loading="lazy"></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ContactMap
