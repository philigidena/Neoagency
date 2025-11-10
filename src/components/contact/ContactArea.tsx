import ContactForm from '../forms/ContactForm'

const ContactArea = () => {
   return (
      <div className="td-contact-main pt-80 pb-140">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-12">
                  <div className="td-contact-form-box wow fadeInUp" 
                     data-wow-delay=".5s" 
                     data-wow-duration="1s"
                     style={{
                        background: 'linear-gradient(135deg, rgba(15, 40, 28, 0.95) 0%, rgba(10, 30, 21, 0.98) 100%)',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(145, 237, 145, 0.25)',
                        borderRadius: '20px',
                        padding: '60px 50px',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                        position: 'relative',
                        overflow: 'hidden',
                     }}>
                     <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='5' y='15' font-family='monospace' font-size='12' fill='rgba(145, 237, 145, 0.05)'%3E1%3C/text%3E%3Ctext x='25' y='35' font-family='monospace' font-size='12' fill='rgba(145, 237, 145, 0.05)'%3E0%3C/text%3E%3Ctext x='45' y='55' font-family='monospace' font-size='12' fill='rgba(145, 237, 145, 0.05)'%3E1%3C/text%3E%3C/svg%3E")`,
                        opacity: 0.3,
                        pointerEvents: 'none',
                        zIndex: 0,
                     }}></div>
                     <div style={{ position: 'relative', zIndex: 1 }}>
                        <div className="text-center mb-45">
                           <h3 style={{
                              fontSize: '36px',
                              fontWeight: '700',
                              color: '#fff',
                              marginBottom: '12px',
                              letterSpacing: '-0.5px',
                           }}>
                              Send us a message
                           </h3>
                           <p style={{
                              fontSize: '16px',
                              color: 'rgba(255, 255, 255, 0.7)',
                              maxWidth: '600px',
                              margin: '0 auto',
                           }}>
                              Fill out the form below and we'll get back to you within 24 hours
                           </p>
                        </div>
                        <ContactForm />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ContactArea
