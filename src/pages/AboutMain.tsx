import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import About from '../components/pages/about';

const AboutMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'About Us | Neo Marketing'} />
         <About />
      </Wrapper>
   );
};

export default AboutMain;