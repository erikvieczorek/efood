import { Link } from 'react-router-dom'
import efood_logo from '../../assets/images/efood_logo.png'
import { Container, Title } from './styles'

const Hero = () => (
  <Container>
    <Link to="/">
      <img src={efood_logo} alt="EFOOD" />
    </Link>
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </Container>
)

export default Hero
