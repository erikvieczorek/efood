import { Link } from 'react-router-dom'
import efood_logo from '../../assets/images/efood_logo.png'
import * as S from './styles'

const Header = () => (
  <S.HeaderBar>
    <S.Container className="container">
      <S.LinkItem>
        <Link to="/">Restaurantes</Link>
      </S.LinkItem>
      <S.LinkItem>
        <Link to="/">
          <img src={efood_logo} alt="EFOOD" />
        </Link>
      </S.LinkItem>
      <S.LinkItem>
        <Link to="/">0 produto(s) no carrinho</Link>
      </S.LinkItem>
    </S.Container>
  </S.HeaderBar>
)

export default Header
