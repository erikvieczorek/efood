import { Link } from 'react-router-dom'
import efood_logo from '../../assets/images/efood_logo.png'
import * as S from './styles'

const Hero = () => (
  <S.Container>
    <Link to="/">
      <img src={efood_logo} alt="EFOOD" />
    </Link>
    <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
  </S.Container>
)

export default Hero
