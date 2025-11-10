import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component that scrolls to top whenever the route changes
 * Place this inside the Router component
 */
const ScrollToTopOnMount = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately when route changes
    window.scrollTo(0, 0);
    
    // Also scroll smooth content wrapper if using GSAP ScrollSmoother
    const smoothWrapper = document.getElementById('smooth-content');
    if (smoothWrapper) {
      smoothWrapper.scrollTop = 0;
    }
  }, [pathname]);

  return null;
};

export default ScrollToTopOnMount;

