import { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoadingSpinner from '../components/common/LoadingSpinner';

// Lazy load all pages except home for better initial load
const HomeFourMain = lazy(() => import('../pages/HomeFourMain'));
const AboutMain = lazy(() => import('../pages/AboutMain'));
const ServiceMain = lazy(() => import('../pages/ServiceMain'));
const ServiceDetailsMain = lazy(() => import('../pages/ServiceDetailsMain'));
const TeamMain = lazy(() => import('../pages/TeamMain'));
const FaqMain = lazy(() => import('../pages/FaqMain'));
const PortfolioOneMain = lazy(() => import('../pages/PortfolioOneMain'));
const PortfolioDetailsMain = lazy(() => import('../pages/PortfolioDetailsMain'));
const BlogOneMain = lazy(() => import('../pages/BlogOneMain'));
const BlogSidebarMain = lazy(() => import('../pages/BlogSidebarMain'));
const BlogDetailsMain = lazy(() => import('../pages/BlogDetailsMain'));
const ContactMain = lazy(() => import('../pages/ContactMain'));
const ErrorMain = lazy(() => import('../pages/ErrorMain'));

const AppNavigation = () => {
   return (
      <Router>
         <Suspense fallback={<LoadingSpinner />}>
            <Routes>
               <Route path="/" element={<HomeFourMain />} />
               <Route path="/about" element={<AboutMain />} />
               <Route path="/service" element={<ServiceMain />} />
               <Route path="/service-details" element={<ServiceDetailsMain />} />
               <Route path="/team" element={<TeamMain />} />
               <Route path="/faq" element={<FaqMain />} />
               <Route path="/portfolio" element={<PortfolioOneMain />} />
               <Route path="/portfolio-details" element={<PortfolioDetailsMain />} />
               <Route path="/blog" element={<BlogOneMain />} />
               <Route path="/blog-sidebar" element={<BlogSidebarMain />} />
               <Route path="/blog-details" element={<BlogDetailsMain />} />
               <Route path="/contact" element={<ContactMain />} />
               <Route path="*" element={<ErrorMain />} />
            </Routes>
         </Suspense>
      </Router>
   );
};

export default AppNavigation;