import { useState } from "react";
import { Link } from "react-router-dom";

interface PackageType {
   id: string;
   name: string;
   price: string;
   category: string;
   badge?: string;
   features: {
      title: string;
      items: string[];
   }[];
   shootingStrategy?: {
      items: string[];
   };
   highlighted?: boolean;
}

const package_data: PackageType[] = [
   {
      id: "basic",
      name: "Starter Package",
      price: "45,000",
      category: "BLUE",
      features: [
         {
            title: "Content Creation",
            items: [
               "3 Videos per week",
               "1 Picture per week",
               "12 videos, 4 pictures monthly"
            ]
         },
         {
            title: "Social Media Management",
            items: [
               "3 platforms (TikTok, Facebook & Instagram)",
               "Basic Branding Consultation",
               "Monthly Performance Report"
            ]
         }
      ]
   },
   {
      id: "professional",
      name: "Professional Package",
      price: "60,000",
      category: "BLUE",
      highlighted: true,
      features: [
         {
            title: "Studio Shooting",
            items: [
               "2 Videos per week",
               "Social Media Management on 3 platforms (TikTok, Facebook & Instagram)",
               "8 videos per month"
            ]
         }
      ],
      shootingStrategy: {
         items: [
            "We will present an array of exceptional commercial videos while granting access to top-notch professional studio production services.",
            "We will study your company and develop ideas to help explain your services to your customers, tailored to customer psychology.",
            "We will assign speaking topics to key people in the company.",
            "3 Branding Ads for three months (1 ad every month), crafted by a specialized creative team, focusing on psychological storytelling and directing.",
            "Basic Branding Consultation",
            "Monthly Performance Report"
         ]
      }
   },
   {
      id: "premium",
      name: "Premium Package",
      price: "75,000",
      category: "RED",
      features: [
         {
            title: "Studio Shooting",
            items: [
               "3 Videos per week",
               "1 picture per week",
               "1 Graphics picture every two weeks"
            ]
         },
         {
            title: "Social Media Management",
            items: [
               "3 platforms (TikTok, Instagram, and Facebook)",
               "12 videos, 4 pictures, and 2 Graphics monthly"
            ]
         }
      ],
      shootingStrategy: {
         items: [
            "We will present an array of exceptional commercial videos while granting access to top-notch professional studio production services.",
            "We will study your company and develop ideas to help explain your services to your customers, tailored to customer psychology.",
            "We will assign speaking topics to key people in the company, & transform them into industry authorities, facilitated by a specialized creative team, focusing on psychological storytelling and directing.",
            "Consultation; expertly designed to captivate and influence audience psychology.",
            "9 Branding Ads for three months (3 ads every month), crafted by a specialized creative team, focusing on psychological storytelling and directing.",
            "Consultation, expertly designed to captivate and influence audience psychology.",
            "Monthly Performance Report"
         ]
      }
   },
   {
      id: "elite",
      name: "Elite Package",
      price: "90,000",
      category: "RED",
      highlighted: true,
      features: [
         {
            title: "Studio Shooting",
            items: [
               "4 Videos per week",
               "1 Motion graphics every two weeks",
               "1 Graphics every two weeks"
            ]
         },
         {
            title: "Social Media Management",
            items: [
               "3 platforms (TikTok, Instagram, and Facebook)",
               "16 videos, 2 motion graphics, and 2 graphics pictures monthly"
            ]
         }
      ],
      shootingStrategy: {
         items: [
            "We will present an array of exceptional commercial videos while granting access to top-notch professional studio production services.",
            "We will study your company and develop ideas to help explain your services to your customers, tailored to customer psychology.",
            "We will assign speaking topics to key people in the company.",
            "9 Branding Ads for three months (3 ads every month) crafted",
            "by a specialized creative team, focusing on psychological storytelling and directing.",
            "Harnessing the power of psychological marketing to captivate and influence your audience, transform your brand with our Social Media Branding Consultation, expertly designed to captivate and influence audience psychology.",
            "Monthly Performance Report"
         ]
      }
   },
   {
      id: "enterprise",
      name: "Nabuchadnezzar Package",
      price: "130,000",
      category: "NABUCHADNEZZAR",
      badge: "Nabuchadnezzar",
      features: [
         {
            title: "Studio Shooting",
            items: [
               "4 Videos per week",
               "1 picture per week",
               "1 Motion graphics per week",
               "1 Graphics picture per week",
               "16 videos, 4 motion graphics, 4 graphics pictures, and 4 pictures monthly"
            ]
         },
         {
            title: "Social Media Management",
            items: [
               "3 platforms (TikTok, Instagram, and Facebook)",
               "Episode or serialized campaign where the brand releases content in parts, often telling a story or evolving message over time."
            ]
         },
         {
            title: "Comprehensive Strategy",
            items: [
               "We will present an array of exceptional commercial videos while granting access to top-notch professional studio production services.",
               "We will be offering comprehensive training for your employees, designed to enhance their skills and empower their professional growth",
               "We understand minds. We fuse psychology with marketing to build message that people don't just notice, they feel. Every color, word, and message we craft is designed to trigger trust, desire, and action."
            ]
         }
      ]
   }
];

const brand_strategy_items = [
   {
      title: "Brand Strategy & Positioning",
      items: [
         "Market psychology & audience segmentation",
         "Competitive brand audits",
         "Unique Value Proposition (UVP) development",
         "Archetype-based brand identity"
      ]
   },
   {
      title: "Brand Identity Design",
      items: [
         "Emotionally resonant logo design",
         "Color psychology + typography systems",
         "Visual language & mood boards",
         "Brand style guide"
      ]
   },
   {
      title: "Messaging & Voice",
      items: [
         "Brand story creation using narrative psychology",
         "Tone of voice development (aligned with audience psychology)",
         "Taglines & brand hooks designed for memorability",
         "Website & social copywriting based on persuasive language frameworks"
      ]
   },
   {
      title: "Monthly Performance Report",
      items: []
   }
];

const Packages = () => {
   const [activeCategory, setActiveCategory] = useState<string>("RED");

   const filteredPackages = package_data.filter(pkg => pkg.category === activeCategory);

   const categories = [
      { id: "BLUE", label: "Blue", color: "#4A90E2" },
      { id: "RED", label: "Red", color: "#E24A4A" },
      { id: "NABUCHADNEZZAR", label: "Nabuchadnezzar", color: "#2c6e49" }
   ];

   return (
      <>
         {/* Packages Section */}
         <div className="td-packages-area pt-170 pb-160" style={{ 
            background: 'linear-gradient(180deg, rgba(15, 40, 28, 1) 0%, rgba(10, 30, 21, 1) 100%)',
            position: 'relative',
         }}>
            <div className="container">
               <div className="row mb-70">
                  <div className="col-lg-12">
                     <div className="text-center">
                        <div className="td-packages-badge mb-25" style={{
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
                              <rect x="3" y="5" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                              <path d="M7 5V4C7 3.44772 7.44772 3 8 3H12C12.5523 3 13 3.44772 13 4V5" stroke="currentColor" strokeWidth="1.5"/>
                              <path d="M10 8V12M8 10H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                           </svg>
                           Our Packages
                        </div>
                        
                        <h2 className="td-section-4-title mb-30" style={{ 
                           fontSize: 'clamp(40px, 5vw, 72px)',
                           lineHeight: '1.15',
                           color: '#fff',
                           fontWeight: '700',
                           letterSpacing: '-1px',
                        }}>
                           MARKETING <br />
                           <span style={{
                              background: 'linear-gradient(135deg, #91ed91 0%, #7FFF00 100%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                           }}>PACKAGES</span>
                        </h2>
                        
                        <p className="td-section-4-text mx-auto mb-50" style={{ 
                           fontSize: '20px',
                           lineHeight: '1.8',
                           color: 'rgba(255, 255, 255, 0.8)',
                           maxWidth: '700px'
                        }}>
                           Whether your time-saving automation needs are large or small, 
                           we're here to help you scale.
                        </p>

                        {/* Category Toggle */}
                        <div className="td-packages-toggle" style={{
                           display: 'inline-flex',
                           gap: '0',
                           padding: '4px',
                           background: 'rgba(0, 0, 0, 0.3)',
                           borderRadius: '50px',
                           border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}>
                           {categories.map((category) => (
                              <button
                                 key={category.id}
                                 onClick={() => setActiveCategory(category.id)}
                                 style={{
                                    padding: '12px 32px',
                                    borderRadius: '50px',
                                    border: 'none',
                                    background: activeCategory === category.id 
                                       ? category.color
                                       : 'transparent',
                                    color: '#fff',
                                    fontSize: '15px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                 }}
                              >
                                 {category.label}
                              </button>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="row g-4 justify-content-center">
                  {filteredPackages.map((pkg) => (
                     <div key={pkg.id} className={`col-lg-${activeCategory === 'NABUCHADNEZZAR' ? '10' : '6'} col-md-6`}>
                        <div className="td-package-card" style={{ 
                           position: 'relative',
                           borderRadius: '24px',
                           overflow: 'hidden',
                           background: pkg.highlighted 
                              ? 'linear-gradient(135deg, rgba(145, 237, 145, 0.1) 0%, rgba(127, 255, 0, 0.05) 100%)'
                              : 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                           border: pkg.highlighted 
                              ? '2px solid rgba(145, 237, 145, 0.3)'
                              : '1px solid rgba(255,255,255,0.1)',
                           transition: 'all 0.4s ease',
                           height: '100%',
                           padding: '40px',
                        }}
                           onMouseEnter={(e) => { 
                              e.currentTarget.style.transform = 'translateY(-10px)';
                              e.currentTarget.style.borderColor = 'rgba(145, 237, 145, 0.5)';
                              e.currentTarget.style.boxShadow = '0 30px 80px rgba(145, 237, 145, 0.2)';
                           }} 
                           onMouseLeave={(e) => { 
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.borderColor = pkg.highlighted ? 'rgba(145, 237, 145, 0.3)' : 'rgba(255,255,255,0.1)';
                              e.currentTarget.style.boxShadow = 'none';
                           }}>
                           
                           {pkg.badge && (
                              <div style={{
                                 position: 'absolute',
                                 top: '20px',
                                 right: '20px',
                                 padding: '8px 20px',
                                 background: '#000',
                                 borderRadius: '20px',
                                 fontSize: '12px',
                                 fontWeight: '700',
                                 color: '#91ed91',
                                 textTransform: 'uppercase',
                                 letterSpacing: '1px',
                                 border: '1px solid rgba(145, 237, 145, 0.3)',
                              }}>
                                 {pkg.badge}
                              </div>
                           )}

                           <div className="td-package-header mb-35">
                              <h3 style={{ 
                                 fontSize: '32px',
                                 fontWeight: '700',
                                 color: '#fff',
                                 marginBottom: '15px',
                                 lineHeight: '1.2'
                              }}>
                                 {pkg.name}
                              </h3>
                              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '10px' }}>
                                 <span style={{ 
                                    fontSize: 'clamp(48px, 6vw, 64px)',
                                    fontWeight: '800',
                                    color: '#91ed91',
                                    lineHeight: '1',
                                 }}>{pkg.price}</span>
                                 <span style={{ 
                                    fontSize: '20px',
                                    color: 'rgba(255,255,255,0.6)',
                                    fontWeight: '500'
                                 }}>/in total</span>
                              </div>
                           </div>

                           <div className="td-package-content">
                              {pkg.features.map((feature, idx) => (
                                 <div key={idx} style={{ marginBottom: '30px' }}>
                                    <h4 style={{
                                       fontSize: '20px',
                                       fontWeight: '700',
                                       color: '#91ed91',
                                       marginBottom: '20px',
                                       display: 'flex',
                                       alignItems: 'center',
                                       gap: '10px'
                                    }}>
                                       <span style={{
                                          width: '6px',
                                          height: '6px',
                                          borderRadius: '50%',
                                          background: '#91ed91',
                                          display: 'inline-block'
                                       }}></span>
                                       {feature.title}
                                    </h4>
                                    <ul style={{ 
                                       listStyle: 'none', 
                                       padding: 0, 
                                       margin: 0,
                                       display: 'flex',
                                       flexDirection: 'column',
                                       gap: '12px'
                                    }}>
                                       {feature.items.map((item, i) => (
                                          <li key={i} style={{
                                             fontSize: '15px',
                                             lineHeight: '1.6',
                                             color: 'rgba(255,255,255,0.8)',
                                             paddingLeft: '25px',
                                             position: 'relative'
                                          }}>
                                             <span style={{
                                                position: 'absolute',
                                                left: '0',
                                                top: '8px',
                                                width: '16px',
                                                height: '16px',
                                                borderRadius: '50%',
                                                border: '2px solid #91ed91',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                             }}>
                                                <span style={{
                                                   width: '6px',
                                                   height: '6px',
                                                   borderRadius: '50%',
                                                   background: '#91ed91',
                                                }}></span>
                                             </span>
                                             {item}
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              ))}

                              {pkg.shootingStrategy && (
                                 <div style={{ marginBottom: '30px' }}>
                                    <h4 style={{
                                       fontSize: '20px',
                                       fontWeight: '700',
                                       color: '#91ed91',
                                       marginBottom: '20px',
                                       display: 'flex',
                                       alignItems: 'center',
                                       gap: '10px'
                                    }}>
                                       <span style={{
                                          width: '6px',
                                          height: '6px',
                                          borderRadius: '50%',
                                          background: '#91ed91',
                                          display: 'inline-block'
                                       }}></span>
                                       Shooting Strategy
                                    </h4>
                                    <ul style={{ 
                                       listStyle: 'none', 
                                       padding: 0, 
                                       margin: 0,
                                       display: 'flex',
                                       flexDirection: 'column',
                                       gap: '12px'
                                    }}>
                                       {pkg.shootingStrategy.items.map((item, i) => (
                                          <li key={i} style={{
                                             fontSize: '15px',
                                             lineHeight: '1.6',
                                             color: 'rgba(255,255,255,0.8)',
                                             paddingLeft: '25px',
                                             position: 'relative'
                                          }}>
                                             <span style={{
                                                position: 'absolute',
                                                left: '0',
                                                top: '8px',
                                                width: '16px',
                                                height: '16px',
                                                borderRadius: '50%',
                                                border: '2px solid #91ed91',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                             }}>
                                                <span style={{
                                                   width: '6px',
                                                   height: '6px',
                                                   borderRadius: '50%',
                                                   background: '#91ed91',
                                                }}></span>
                                             </span>
                                             {item}
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              )}
                           </div>

                           <Link 
                              to="/contact"
                              style={{
                                 display: 'block',
                                 width: '100%',
                                 padding: '18px 40px',
                                 marginTop: '30px',
                                 background: pkg.highlighted 
                                    ? 'linear-gradient(135deg, #91ed91 0%, #7FFF00 100%)'
                                    : 'rgba(255,255,255,0.05)',
                                 color: pkg.highlighted ? '#000' : '#fff',
                                 fontSize: '16px',
                                 fontWeight: '700',
                                 textAlign: 'center',
                                 borderRadius: '50px',
                                 textDecoration: 'none',
                                 transition: 'all 0.3s ease',
                                 border: pkg.highlighted ? 'none' : '1px solid rgba(255,255,255,0.2)',
                                 textTransform: 'uppercase',
                                 letterSpacing: '1px'
                              }}
                              onMouseEnter={(e) => {
                                 if (pkg.highlighted) {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(145, 237, 145, 0.4)';
                                 } else {
                                    e.currentTarget.style.background = 'rgba(145, 237, 145, 0.1)';
                                    e.currentTarget.style.borderColor = 'rgba(145, 237, 145, 0.5)';
                                 }
                              }}
                              onMouseLeave={(e) => {
                                 if (pkg.highlighted) {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                 } else {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                                 }
                              }}
                           >
                              Choose Plan
                           </Link>
                        </div>
                     </div>
                  ))}
               </div>

               {/* Additional Brand Strategy for Nabuchadnezzar */}
               {activeCategory === 'NABUCHADNEZZAR' && (
                  <div className="row mt-60">
                     <div className="col-lg-12">
                        <div style={{
                           padding: '60px',
                           borderRadius: '24px',
                           background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                           border: '1px solid rgba(145, 237, 145, 0.2)',
                        }}>
                           <h3 style={{
                              fontSize: 'clamp(28px, 4vw, 42px)',
                              fontWeight: '700',
                              color: '#91ed91',
                              marginBottom: '40px',
                              textAlign: 'center'
                           }}>
                              Complete Brand Strategy Included
                           </h3>
                           <div className="row g-4">
                              {brand_strategy_items.map((section, idx) => (
                                 <div key={idx} className="col-lg-6">
                                    <div style={{ marginBottom: '30px' }}>
                                       <h4 style={{
                                          fontSize: '20px',
                                          fontWeight: '700',
                                          color: '#fff',
                                          marginBottom: '20px',
                                       }}>
                                          {idx + 1}. {section.title}
                                       </h4>
                                       {section.items.length > 0 && (
                                          <ul style={{ 
                                             listStyle: 'none', 
                                             padding: 0, 
                                             margin: 0,
                                             display: 'flex',
                                             flexDirection: 'column',
                                             gap: '10px'
                                          }}>
                                             {section.items.map((item, i) => (
                                                <li key={i} style={{
                                                   fontSize: '15px',
                                                   lineHeight: '1.6',
                                                   color: 'rgba(255,255,255,0.7)',
                                                   paddingLeft: '25px',
                                                   position: 'relative'
                                                }}>
                                                   <span style={{
                                                      position: 'absolute',
                                                      left: '0',
                                                      top: '8px',
                                                      width: '4px',
                                                      height: '4px',
                                                      borderRadius: '50%',
                                                      background: '#91ed91',
                                                   }}></span>
                                                   {item}
                                                </li>
                                             ))}
                                          </ul>
                                       )}
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </div>

         {/* The Neo Approach Section */}
         <div className="td-approach-area pt-170 pb-160" style={{ 
            background: 'linear-gradient(180deg, rgba(10, 30, 21, 1) 0%, rgba(15, 40, 28, 1) 100%)',
            position: 'relative',
         }}>
            <div className="container">
               <div className="row mb-70">
                  <div className="col-lg-12">
                     <div className="text-center">
                        <h2 className="td-section-4-title mb-30" style={{ 
                           fontSize: 'clamp(40px, 5vw, 72px)',
                           lineHeight: '1.15',
                           color: '#fff',
                           fontWeight: '700',
                           letterSpacing: '-1px',
                        }}>
                           The Neo <span style={{
                              background: 'linear-gradient(135deg, #91ed91 0%, #7FFF00 100%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                           }}>Approach</span>
                        </h2>
                        
                        <p className="td-section-4-text mx-auto" style={{ 
                           fontSize: '20px',
                           lineHeight: '1.8',
                           color: 'rgba(255, 255, 255, 0.8)',
                           maxWidth: '800px',
                           fontStyle: 'italic'
                        }}>
                           Selling to the Subconscious Mind
                        </p>

                        <p className="td-section-4-text mx-auto mb-60" style={{ 
                           fontSize: '18px',
                           lineHeight: '1.8',
                           color: 'rgba(255, 255, 255, 0.7)',
                           maxWidth: '900px'
                        }}>
                           Our strategies are built on scientific marketing psychology to ensure 
                           brand messages are deeply ingrained in the consumer's mind
                        </p>
                     </div>
                  </div>
               </div>

               <div className="row g-4">
                  {[
                     {
                        title: "Authority Bias Making",
                        desc: "brands appear in the industry leaders to gain trust and credibility.",
                        icon: (
                           <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M24 6L6 14V22C6 32.4 13.2 42 24 44C34.8 42 42 32.4 42 22V14L24 6Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M24 24L16 20V28L24 32L32 28V20L24 24Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                        )
                     },
                     {
                        title: "Emotional Triggers",
                        desc: "Using nostalgia, excitement, and aspiration to connect with audiences.",
                        icon: (
                           <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40Z" stroke="currentColor" strokeWidth="2.5"/>
                              <path d="M16 28C16 28 19 32 24 32C29 32 32 28 32 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                              <circle cx="18" cy="20" r="2" fill="currentColor"/>
                              <circle cx="30" cy="20" r="2" fill="currentColor"/>
                           </svg>
                        )
                     },
                     {
                        title: "Social Proof",
                        desc: "Leveraging testimonials, influencers, and trends to make people feel like they're missing out.",
                        icon: (
                           <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="24" cy="14" r="6" stroke="currentColor" strokeWidth="2.5"/>
                              <path d="M12 40C12 33.3726 17.3726 28 24 28C30.6274 28 36 33.3726 36 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                              <circle cx="38" cy="16" r="4" stroke="currentColor" strokeWidth="2.5"/>
                              <circle cx="10" cy="16" r="4" stroke="currentColor" strokeWidth="2.5"/>
                           </svg>
                        )
                     },
                     {
                        title: "Subtle Storytelling",
                        desc: "Creating narratives that make brands part of a consumer's identity.",
                        icon: (
                           <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="8" y="10" width="32" height="28" rx="2" stroke="currentColor" strokeWidth="2.5"/>
                              <path d="M8 18H40" stroke="currentColor" strokeWidth="2.5"/>
                              <path d="M16 26L22 30L32 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                        )
                     },
                     {
                        title: "FOMO (Fear of Missing Out)",
                        desc: "creates urgency to push consumer action.",
                        icon: (
                           <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5"/>
                              <path d="M24 16V24L30 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M10 10L6 6M38 10L42 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                           </svg>
                        )
                     }
                  ].map((approach, idx) => (
                     <div key={idx} className="col-lg-4 col-md-6">
                        <div className="td-approach-card" style={{
                           padding: '40px',
                           borderRadius: '20px',
                           background: 'linear-gradient(135deg, rgba(145, 237, 145, 0.08) 0%, rgba(127, 255, 0, 0.03) 100%)',
                           border: '1px solid rgba(145, 237, 145, 0.2)',
                           transition: 'all 0.4s ease',
                           height: '100%',
                        }}
                           onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'translateY(-10px)';
                              e.currentTarget.style.borderColor = 'rgba(145, 237, 145, 0.4)';
                              e.currentTarget.style.boxShadow = '0 20px 60px rgba(145, 237, 145, 0.15)';
                           }}
                           onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.borderColor = 'rgba(145, 237, 145, 0.2)';
                              e.currentTarget.style.boxShadow = 'none';
                           }}
                        >
                           <div style={{
                              width: '70px',
                              height: '70px',
                              borderRadius: '16px',
                              background: 'linear-gradient(135deg, rgba(145, 237, 145, 0.15) 0%, rgba(127, 255, 0, 0.1) 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginBottom: '25px',
                              color: '#91ed91',
                           }}>
                              {approach.icon}
                           </div>
                           <h3 style={{
                              fontSize: '24px',
                              fontWeight: '700',
                              color: '#fff',
                              marginBottom: '15px',
                              lineHeight: '1.3'
                           }}>
                              {approach.title}
                           </h3>
                           <p style={{
                              fontSize: '16px',
                              lineHeight: '1.7',
                              color: 'rgba(255,255,255,0.7)',
                              margin: 0
                           }}>
                              {approach.desc}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>
   )
}

export default Packages

