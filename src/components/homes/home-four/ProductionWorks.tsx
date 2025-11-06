import { Link } from "react-router-dom"

interface ProductionType {
   id: number;
   thumb: string;
   title: string;
}

const production_data: ProductionType[] = [
   {
      id: 1,
      thumb: "/The_small_kitchen.png",
      title: "The Small Kitchen"
   },
   {
      id: 2,
      thumb: "/Baletarikochu.png",
      title: "Baletarikochu"
   },
   {
      id: 3,
      thumb: "/2_guada.png",
      title: "2 Guada"
   },
   {
      id: 4,
      thumb: "/Studio_30.png",
      title: "Studio 30"
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
      <div className="td-portfolio-area pt-140 pb-140" style={{ backgroundColor: '#0a1e15' }}>
         <div className="container">
            <div className="row mb-50">
               <div className="col-lg-12">
                  <div className="text-center mb-20">
                     <span className="td-section-4-subtitle mb-20" style={{ color: '#91ed91' }}>// DOPAMINE STUDIOS</span>
                     <h2 className="td-section-4-title" style={{ color: '#91ed91' }}>
                        OUR<br />PRODUCTION WORKS
                     </h2>
                     <p className="td-section-4-text mt-20" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        Some works that is done with Dopamine Studios
                     </p>
                  </div>
               </div>
            </div>
            <div className="row mb-60">
               {production_data.map((item) => (
                  <div key={item.id} className="col-lg-3 col-md-6 mb-30">
                     <div className="td-portfolio-item" style={{ borderRadius: '10px', overflow: 'hidden', transition: 'transform 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}>
                        <div className="td-portfolio-thumb" style={{ height: '250px', overflow: 'hidden' }}>
                           <img className="w-100" src={item.thumb} alt={item.title} style={{ height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="text-center mt-20">
                           <h5 style={{ color: '#fff', fontSize: '18px' }}>{item.title}</h5>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            <div className="row mt-80">
               <div className="col-lg-12">
                  <div className="text-center mb-40">
                     <h4 className="td-section-4-title" style={{ color: '#91ed91', fontSize: '24px' }}>
                        Broadcasters that we worked with:
                     </h4>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
                     {partner_logos.map((logo, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                           <Link to="#">
                              <img src={logo} alt="" style={{ maxWidth: '100px', maxHeight: '60px', objectFit: 'contain', filter: 'brightness(0) invert(1) grayscale(100%)', opacity: '0.8', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }} onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.8'; }} />
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

export default ProductionWorks

