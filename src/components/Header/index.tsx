import { Link } from 'react-router-dom'
import efood_logo from '../../assets/images/efood_logo.png'
import { HeaderBar, LinkItem } from './styles'

const Header = () => (
  <HeaderBar>
    <LinkItem>
      <Link to="/">Restaurantes</Link>
    </LinkItem>
    <LinkItem>
      <Link to="/">
        <img src={efood_logo} alt="EFOOD" />
      </Link>
    </LinkItem>
    <LinkItem>
      <Link to="/">0 produto(s) no carrinho</Link>
    </LinkItem>
  </HeaderBar>
)

export default Header
