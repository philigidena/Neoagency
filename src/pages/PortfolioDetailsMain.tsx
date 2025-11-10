import PortfolioDetails from "../components/portfolios/portfolio-details"
import SEO from "../components/SEO"
import Wrapper from "../layouts/Wrapper"

const PortfolioDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Portfolio Project | Neo Marketing'} />
         <PortfolioDetails />
      </Wrapper>
   )
}

export default PortfolioDetailsMain
