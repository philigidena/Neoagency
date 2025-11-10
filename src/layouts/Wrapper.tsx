import React, { type ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import useGsapSmoother from "../hooks/useGsapSmoother";
import useImageRevealAnimation from "../hooks/useImageRevealAnimation";
import useSplitTextTitleAnim from "../hooks/useSplitTextTitleAnim";
import useSplitTextBgAnim from "../hooks/useSplitTextBgAnim";
import ScrollToTop from "../components/common/ScrollToTop";
import CustomCursor from "../components/common/CustomCursor";

type WrapperProps = {
  children: ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  const [isContentReady, setIsContentReady] = React.useState(false);

  // Wait for lazy content to load before initializing animations
  React.useEffect(() => {
    // Small delay to ensure lazy-loaded content is rendered
    const timer = setTimeout(() => {
      setIsContentReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [children]);

  // Custom GSAP animations - only run after content is ready
  useGsapSmoother();
  useImageRevealAnimation();
  
  // Use a key to force re-initialization when content changes
  React.useEffect(() => {
    if (isContentReady) {
      // Force ScrollTrigger refresh after content loads
      const refreshTimer = setTimeout(() => {
        if (typeof window !== 'undefined') {
          const ScrollTrigger = require('gsap/ScrollTrigger').default;
          ScrollTrigger.refresh();
        }
      }, 150);

      return () => clearTimeout(refreshTimer);
    }
  }, [isContentReady, children]);

  useSplitTextTitleAnim();
  useSplitTextBgAnim();

  return (
    <>
      {children}
      <ScrollToTop />
      <CustomCursor />
      <ToastContainer position="top-center" />
    </>
  );
};

export default Wrapper;
