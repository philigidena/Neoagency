import Contact from "../components/contact"
import SEO from "../components/SEO"
import Wrapper from "../layouts/Wrapper"

const ContactMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Contact Us | Neo Marketing'} />
         <Contact />
      </Wrapper>
   )
}

export default ContactMain
