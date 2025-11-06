import HomeFour from "../components/homes/home-four"
import SEO from "../components/SEO"
import Wrapper from "../layouts/Wrapper"

const HomeFourMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Neo Marketing - Where Storytelling Meets Science'} />
         <HomeFour />
      </Wrapper>
   )
}

export default HomeFourMain
