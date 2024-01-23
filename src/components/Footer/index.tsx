import { Link } from 'react-router-dom'
import { Container, SocialMediaLink, SocialMediaLinks } from './styles'
import efood_logo from '../../assets/images/efood_logo.png'
import facebookLogo from '../../assets/images/social_medias/facebook.svg'
import instagramLogo from '../../assets/images/social_medias/instagram.svg'
import twitterLogo from '../../assets/images/social_medias/twitter.svg'

const Footer = () => (
  <Container>
    <Link to="/">
      <img src={efood_logo} alt="EFOOD" />
    </Link>
    <SocialMediaLinks>
      <SocialMediaLink>
        <img src={instagramLogo} alt="Instagram Logo" />
      </SocialMediaLink>
      <SocialMediaLink>
        <img src={facebookLogo} alt="Facebook Logo" />
      </SocialMediaLink>
      <SocialMediaLink>
        <img src={twitterLogo} alt="Twitter Logo" />
      </SocialMediaLink>
    </SocialMediaLinks>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </Container>
)

export default Footer
