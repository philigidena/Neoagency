import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import faq_data from "../../../data/FaqData";

interface DataType {
   id: number;
   page: string
   title: string;
   desc: string;
   showAnswer: boolean;
}

const Faq = () => {

   const [faqData, setFaqData] = useState<DataType[]>([]);

   useEffect(() => {
      const filtered = faq_data.filter(item => item.page === "home_4");
      const updatedData = filtered.map((item, index) => ({
         ...item,
         showAnswer: index === 1
      }));
      setFaqData(updatedData);
   }, []);

   const toggleAnswer = (faqId: number) => {
      setFaqData((prevFaqData) =>
         prevFaqData.map((faq) => ({
            ...faq,
            showAnswer: faq.id === faqId
         }))
      );
   };

   return (
      <div className="td-faq-area pt-160 pb-110">
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <div className="td-faq-4-wrap p-relative mb-50  wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="1s">
                     <img className="mb-50" src="/Neo-office-1.png" alt="Neo Marketing Team" style={{ borderRadius: '10px', maxWidth: '100%', objectFit: 'cover' }} />
                     <p className="mb-45">By merging the creative firepower of<br />
                        Dopamine Studios with psychology-driven<br />
                        marketing, Neo has easily adapted to a<br />
                        new way of thinking about branding.
                     </p>
                     <Link to="/contact" className="td-btn d-inline-block td-btn-4 td-btn-4-lg td-btn-switch-animation">
                        <span className="d-flex align-items-center justify-content-center">
                           <span className="btn-text"> GET YOUR SERVICE </span>
                           <span className="btn-icon">
                              <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M0.24707 6.57617H15.1436" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                                 <path d="M9.27734 0C9.27734 3.63501 12.3946 6.57638 16.2471 6.57638" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                                 <path d="M16.2471 6.57617C12.3946 6.57617 9.27734 9.51754 9.27734 13.1526" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                              </svg>
                           </span>
                           <span className="btn-icon">
                              <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M0.24707 6.57617H15.1436" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                                 <path d="M9.27734 0C9.27734 3.63501 12.3946 6.57638 16.2471 6.57638" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                                 <path d="M16.2471 6.57617C12.3946 6.57617 9.27734 9.51754 9.27734 13.1526" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                              </svg>
                           </span>
                        </span>
                     </Link>
                     <div className="td-faq-4-circale d-none d-sm-block">
                        <img className="td-live-anim-spin" src="/assets/img/faq/icon.png" alt="" />
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="td-faq-4-wrap-right mb-50  wow fadeInRight" data-wow-delay=".3s" data-wow-duration="1s">
                     <h2 className="td-section-4-title mb-30 ">
                        A PLACE WHERE <span className="green-text">STORYTELLING<br />
                           MEETS SCIENCE</span>, AND<br />
                        BRANDING BECOMES EFFORTLESS
                     </h2>
                     <div className="td-faq-4-accordion">
                        <div className="accordion" id="accordionExample">
                           {faqData.filter((items) => items.page === "home_4").map((item) => (
                              <div key={item.id} className="accordion-items">
                                 <h2 className="accordion-header" onClick={() => toggleAnswer(item.id)}>
                                    <button className={`accordion-buttons ${item.showAnswer ? "" : "collapsed"} `} type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                       {item.title}
                                       <span className="plus-icon"></span>
                                    </button>
                                 </h2>
                                 <div id="collapseOne" className={`accordion-collapse collapse ${item.showAnswer ? "show" : ""}`}>
                                    <div className="accordion-body">
                                       <p>
                                          {item.desc}
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Faq
