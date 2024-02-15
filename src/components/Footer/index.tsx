import { Link } from 'react-router-dom'

import efood_logo from '../../assets/images/efood_logo.png'
import facebookLogo from '../../assets/images/social_medias/facebook.svg'
import instagramLogo from '../../assets/images/social_medias/instagram.svg'
import twitterLogo from '../../assets/images/social_medias/twitter.svg'

import * as S from './styles'

const Footer = () => (
  <S.Container>
    <Link to="/">
      <img src={efood_logo} alt="EFOOD" />
    </Link>
    <S.SocialMediaLinks>
      <S.SocialMediaLink>
        <img src={instagramLogo} alt="Instagram Logo" />
      </S.SocialMediaLink>
      <S.SocialMediaLink>
        <img src={facebookLogo} alt="Facebook Logo" />
      </S.SocialMediaLink>
      <S.SocialMediaLink>
        <img src={twitterLogo} alt="Twitter Logo" />
      </S.SocialMediaLink>
    </S.SocialMediaLinks>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </S.Container>
)

export default Footer
