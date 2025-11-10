import ServiceDetails from "../components/pages/services/service-details"
import SEO from "../components/SEO"
import Wrapper from "../layouts/Wrapper"

const ServiceDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Service Details | Neo Marketing'} />
         <ServiceDetails />
      </Wrapper>
   )
}

export default ServiceDetailsMain
