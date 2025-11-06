import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomeFourMain from '../pages/HomeFourMain';
import AboutMain from '../pages/AboutMain';
import ServiceMain from '../pages/ServiceMain';
import ServiceDetailsMain from '../pages/ServiceDetailsMain';
import TeamMain from '../pages/TeamMain';
import FaqMain from '../pages/FaqMain';
import PortfolioOneMain from '../pages/PortfolioOneMain';
import PortfolioDetailsMain from '../pages/PortfolioDetailsMain';
import BlogOneMain from '../pages/BlogOneMain';
import BlogSidebarMain from '../pages/BlogSidebarMain';
import BlogDetailsMain from '../pages/BlogDetailsMain';
import ContactMain from '../pages/ContactMain';
import ErrorMain from '../pages/ErrorMain';

const AppNavigation = () => {
   return (
      <Router>
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
      </Router>
   );
};

export default AppNavigation;