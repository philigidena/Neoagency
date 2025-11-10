import { useRef } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
   user_name: string;
   user_email: string;
   user_phone: number;
   message: string;
}

const schema = yup
   .object({
      user_name: yup.string().required().label("Name"),
      user_email: yup.string().required().email().label("Email"),
      user_phone: yup.number()
         .transform((originalValue, originalObject) => {
            // Convert empty string to NaN
            return originalObject && originalObject.phone === '' ? NaN : originalValue;
         })
         .typeError('Phone number is required')
         .required('Phone must be a number'),
      message: yup.string().required().label("Message"),
   })
   .required();

const ContactForm = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });

   const form = useRef<HTMLFormElement>(null);

   const sendEmail = () => {
      if (form.current) {
         emailjs.sendForm('themegenix', 'template_hdr7ic6', form.current, 'QOBCxT0bzNKEs-CwW')
            .then((result) => {
               const notify = () => toast('Message sent successfully', { position: 'top-center' });
               notify();
               reset();
               console.log(result.text);
            }, (error) => {
               console.log(error.text);
            });
      } else {
         console.error("Form reference is null");
      }
   };

   return (
      <form id="contact-form" ref={form} onSubmit={handleSubmit(sendEmail)}>
         <div className="row">
            <div className="col-md-6 mb-25">
               <label htmlFor="name" style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#91ed91',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
               }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Your Name *
               </label>
               <input {...register("user_name")} 
                  id="name" 
                  type="text" 
                  placeholder="John Doe" 
                  style={{
                     width: '100%',
                     padding: '16px 20px',
                     background: 'rgba(255, 255, 255, 0.05)',
                     border: '1px solid rgba(145, 237, 145, 0.2)',
                     borderRadius: '12px',
                     color: '#fff',
                     fontSize: '15px',
                     transition: 'all 0.3s ease',
                  }}
                  onFocus={(e) => {
                     e.currentTarget.style.borderColor = '#91ed91';
                     e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  }}
                  onBlur={(e) => {
                     e.currentTarget.style.borderColor = 'rgba(145, 237, 145, 0.2)';
                     e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
               />
               <p className="form_error" style={{ color: '#ff6b6b', marginTop: '5px', fontSize: '13px' }}>{errors.user_name?.message}</p>
            </div>
            <div className="col-md-6 mb-25">
               <label htmlFor="email" style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#91ed91',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
               }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                     <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Email Address *
               </label>
               <input {...register("user_email")} 
                  id="email" 
                  type="text" 
                  placeholder="john@example.com" 
                  style={{
                     width: '100%',
                     padding: '16px 20px',
                     background: 'rgba(255, 255, 255, 0.05)',
                     border: '1px solid rgba(145, 237, 145, 0.2)',
                     borderRadius: '12px',
                     color: '#fff',
                     fontSize: '15px',
                     transition: 'all 0.3s ease',
                  }}
                  onFocus={(e) => {
                     e.currentTarget.style.borderColor = '#91ed91';
                     e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  }}
                  onBlur={(e) => {
                     e.currentTarget.style.borderColor = 'rgba(145, 237, 145, 0.2)';
                     e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
               />
               <p className="form_error" style={{ color: '#ff6b6b', marginTop: '5px', fontSize: '13px' }}>{errors.user_email?.message}</p>
            </div>
            <div className="col-md-12 mb-25">
               <label htmlFor="phone" style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#91ed91',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
               }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Phone Number *
               </label>
               <input {...register("user_phone")} 
                  id="phone" 
                  type="text" 
                  placeholder="+251-XXX-XXX-XXX" 
                  style={{
                     width: '100%',
                     padding: '16px 20px',
                     background: 'rgba(255, 255, 255, 0.05)',
                     border: '1px solid rgba(145, 237, 145, 0.2)',
                     borderRadius: '12px',
                     color: '#fff',
                     fontSize: '15px',
                     transition: 'all 0.3s ease',
                  }}
                  onFocus={(e) => {
                     e.currentTarget.style.borderColor = '#91ed91';
                     e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  }}
                  onBlur={(e) => {
                     e.currentTarget.style.borderColor = 'rgba(145, 237, 145, 0.2)';
                     e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
               />
               <p className="form_error" style={{ color: '#ff6b6b', marginTop: '5px', fontSize: '13px' }}>{errors.user_phone?.message}</p>
            </div>
            <div className="col-md-12 mb-35">
               <label htmlFor="message" style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#91ed91',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
               }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Your Message *
               </label>
               <textarea {...register("message")} 
                  id="message" 
                  cols={30} 
                  rows={6} 
                  placeholder="Tell us about your project..."
                  style={{
                     width: '100%',
                     padding: '16px 20px',
                     background: 'rgba(255, 255, 255, 0.05)',
                     border: '1px solid rgba(145, 237, 145, 0.2)',
                     borderRadius: '12px',
                     color: '#fff',
                     fontSize: '15px',
                     transition: 'all 0.3s ease',
                     resize: 'vertical',
                     minHeight: '150px',
                  }}
                  onFocus={(e) => {
                     e.currentTarget.style.borderColor = '#91ed91';
                     e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  }}
                  onBlur={(e) => {
                     e.currentTarget.style.borderColor = 'rgba(145, 237, 145, 0.2)';
                     e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
               ></textarea>
               <p className="form_error" style={{ color: '#ff6b6b', marginTop: '5px', fontSize: '13px' }}>{errors.message?.message}</p>
            </div>
            <div className="col-12">
               <div style={{
                  background: 'rgba(145, 237, 145, 0.05)',
                  border: '1px solid rgba(145, 237, 145, 0.15)',
                  borderRadius: '12px',
                  padding: '20px',
                  marginBottom: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
               }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                     <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#91ed91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     <path d="M12 16V12" stroke="#91ed91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     <path d="M12 8H12.01" stroke="#91ed91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p style={{ 
                     color: 'rgba(255, 255, 255, 0.8)', 
                     fontSize: '14px', 
                     margin: 0,
                     lineHeight: '1.6',
                  }}>
                     We typically respond within <strong style={{ color: '#91ed91' }}>24 hours</strong>. For urgent inquiries, please call us directly.
                  </p>
               </div>
            </div>
            <div className="col-12 text-center">
               <button type="submit" style={{
                  background: 'linear-gradient(135deg, #91ed91 0%, #7FFF00 100%)',
                  border: 'none',
                  padding: '18px 60px',
                  borderRadius: '50px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#0a1e15',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 30px rgba(145, 237, 145, 0.3)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
               }}
               onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(145, 237, 145, 0.4)';
               }}
               onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(145, 237, 145, 0.3)';
               }}>
                  Send Message →
               </button>
               <p className="ajax-response pt-20"></p>
            </div>
         </div>
      </form>
   )
}

export default ContactForm
