import Team from "../components/pages/teams/team"
import SEO from "../components/SEO"
import Wrapper from "../layouts/Wrapper"

const TeamMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Our Team | Neo Marketing'} />
         <Team />
      </Wrapper>
   )
}

export default TeamMain
