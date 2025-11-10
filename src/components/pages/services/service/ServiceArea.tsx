const ServiceArea = () => {
   return (
      <div className="td-service-main-area pb-140">
         <div className="container">
            {/* Hero Image Section */}
            <div className="row mb-100">
               <div className="col-12">
                  <div className="td-service-main-bigthumb fix" style={{
                     borderRadius: '20px',
                     overflow: 'hidden',
                     boxShadow: '0 30px 80px rgba(0, 0, 0, 0.4)',
                     border: '2px solid rgba(145, 237, 145, 0.2)',
                  }}>
                     <img 
                        data-speed=".9" 
                        src="/Neo-Hero-image.png" 
                        alt="Neo Marketing"
                        style={{
                           width: '100%',
                           height: 'auto',
                           display: 'block',
                        }}
                     />
                  </div>
               </div>
            </div>

            {/* What We Do Section */}
            <div className="row justify-content-center mb-100">
               <div className="col-lg-11">
                  <div className="text-center wow fadeInUp" 
                     data-wow-delay=".5s" 
                     data-wow-duration="1s">
                     <span className="mb-25 d-inline-block" style={{
                        color: '#2c6e49',
                        fontSize: '13px',
                        fontWeight: '700',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                     }}>
                        //  WHAT WE DO
                     </span>
                     <h2 className="td-title-anim" style={{
                        fontSize: 'clamp(36px, 6vw, 64px)',
                        lineHeight: '1.25',
                        color: '#0a1e15',
                        fontWeight: '700',
                        margin: '0 auto',
                        maxWidth: '1000px',
                     }}>
                        We create emotionally resonant experiences that naturally draw people toward your brand
                     </h2>
                  </div>
               </div>
            </div>

            {/* Experience & Strategy Section */}
            <div className="row g-4 align-items-stretch">
               {/* Years of Experience Card */}
               <div className="col-lg-4 col-md-6">
                  <div className="wow fadeInUp" 
                     data-wow-delay=".4s" 
                     data-wow-duration="1s"
                     style={{
                        background: 'rgba(145, 237, 145, 0.12)',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(44, 110, 73, 0.4)',
                        borderRadius: '16px',
                        padding: '50px 30px',
                        textAlign: 'center',
                        height: '100%',
                        minHeight: '300px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                     }}
                     onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-8px)';
                        e.currentTarget.style.borderColor = '#2c6e49';
                        e.currentTarget.style.boxShadow = '0 20px 50px rgba(44, 110, 73, 0.3)';
                     }}
                     onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = 'rgba(44, 110, 73, 0.4)';
                        e.currentTarget.style.boxShadow = 'none';
                     }}>
                     <h2 style={{
                        fontSize: 'clamp(70px, 10vw, 100px)',
                        color: '#2c6e49',
                        fontWeight: '900',
                        lineHeight: '1',
                        marginBottom: '20px',
                     }}>
                        10+
                     </h2>
                     <span style={{
                        fontSize: '13px',
                        letterSpacing: '2px',
                        color: '#0a1e15',
                        fontWeight: '700',
                     }}>
                        YEARS OF WORK EXPERIENCE
                     </span>
                  </div>
               </div>

               {/* Strategy & Consulting Card */}
               <div className="col-lg-4 col-md-6">
                  <div className="wow fadeInUp" 
                     data-wow-delay=".6s" 
                     data-wow-duration="1s"
                     style={{
                        background: 'rgba(10, 30, 21, 0.04)',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(10, 30, 21, 0.15)',
                        borderRadius: '16px',
                        padding: '40px 35px',
                        height: '100%',
                        minHeight: '300px',
                        transition: 'all 0.3s ease',
                     }}
                     onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-8px)';
                        e.currentTarget.style.borderColor = 'rgba(44, 110, 73, 0.5)';
                        e.currentTarget.style.boxShadow = '0 20px 50px rgba(44, 110, 73, 0.15)';
                        e.currentTarget.style.background = 'rgba(145, 237, 145, 0.08)';
                     }}
                     onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = 'rgba(10, 30, 21, 0.15)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.background = 'rgba(10, 30, 21, 0.04)';
                     }}>
                     <h3 style={{
                        fontSize: '24px',
                        color: '#2c6e49',
                        fontWeight: '700',
                        marginBottom: '20px',
                     }}>
                        Strategy & Consulting
                     </h3>
                     <p style={{
                        fontSize: '16px',
                        lineHeight: '1.7',
                        color: '#0a1e15',
                        margin: '0',
                        opacity: '0.85',
                     }}>
                        Brand Strategy & Positioning, Marketing Planning, Consumer Insights & Research
                     </p>
                  </div>
               </div>

               {/* Content & Production Card */}
               <div className="col-lg-4 col-md-6">
                  <div className="wow fadeInUp" 
                     data-wow-delay=".8s" 
                     data-wow-duration="1s"
                     style={{
                        background: 'rgba(10, 30, 21, 0.04)',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(10, 30, 21, 0.15)',
                        borderRadius: '16px',
                        padding: '40px 35px',
                        height: '100%',
                        minHeight: '300px',
                        transition: 'all 0.3s ease',
                     }}
                     onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-8px)';
                        e.currentTarget.style.borderColor = 'rgba(44, 110, 73, 0.5)';
                        e.currentTarget.style.boxShadow = '0 20px 50px rgba(44, 110, 73, 0.15)';
                        e.currentTarget.style.background = 'rgba(145, 237, 145, 0.08)';
                     }}
                     onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = 'rgba(10, 30, 21, 0.15)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.background = 'rgba(10, 30, 21, 0.04)';
                     }}>
                     <h3 style={{
                        fontSize: '24px',
                        color: '#2c6e49',
                        fontWeight: '700',
                        marginBottom: '20px',
                     }}>
                        Content & Production
                     </h3>
                     <p style={{
                        fontSize: '16px',
                        lineHeight: '1.7',
                        color: '#0a1e15',
                        margin: '0',
                        opacity: '0.85',
                     }}>
                        TV Shows, Commercials, Music Videos, Photography & Creative Direction
                     </p>
                  </div>
               </div>

               {/* Full-width Philosophy Card */}
               <div className="col-12">
                  <div className="wow fadeInUp" 
                     data-wow-delay="1s" 
                     data-wow-duration="1s"
                     style={{
                        background: 'linear-gradient(135deg, rgba(145, 237, 145, 0.15) 0%, rgba(44, 110, 73, 0.12) 100%)',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(44, 110, 73, 0.35)',
                        borderRadius: '16px',
                        padding: '45px 50px',
                        textAlign: 'center',
                     }}>
                     <p style={{
                        fontSize: '19px',
                        lineHeight: '1.8',
                        color: '#0a1e15',
                        margin: '0',
                        maxWidth: '1100px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                     }}>
                        Marketing is not about pushing products—it's about <strong style={{ color: '#2c6e49' }}>influencing perception</strong> through emotionally resonant experiences that naturally draw people toward your brand. At Neo, we merge the creative firepower of <strong style={{ color: '#2c6e49' }}>Dopamine Studios</strong> with psychology-driven marketing.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ServiceArea
