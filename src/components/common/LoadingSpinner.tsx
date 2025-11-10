const LoadingSpinner = () => {
   return (
      <div style={{
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         minHeight: '100vh',
         background: 'linear-gradient(180deg, rgba(10, 30, 21, 1) 0%, rgba(15, 40, 28, 1) 100%)',
      }}>
         <div style={{
            textAlign: 'center',
         }}>
            <div style={{
               width: '60px',
               height: '60px',
               border: '4px solid rgba(145, 237, 145, 0.2)',
               borderTop: '4px solid #91ed91',
               borderRadius: '50%',
               animation: 'spin 1s linear infinite',
               margin: '0 auto 20px',
            }}></div>
            <p style={{
               color: '#91ed91',
               fontSize: '16px',
               fontWeight: '600',
               letterSpacing: '1px',
            }}>
               Loading...
            </p>
         </div>
         <style>{`
            @keyframes spin {
               0% { transform: rotate(0deg); }
               100% { transform: rotate(360deg); }
            }
         `}</style>
      </div>
   );
};

export default LoadingSpinner;


