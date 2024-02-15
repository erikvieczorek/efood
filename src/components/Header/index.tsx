import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import efood_logo from '../../assets/images/efood_logo.png'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import * as S from './styles'

const Header = () => {
  const openCart = () => {
    dispatch(open())
  }

  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
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
          {items.length == 0 ? (
            <S.CartButton onClick={openCart}>
              Não há produtos no carrinho
            </S.CartButton>
          ) : (
            <S.CartButton onClick={openCart}>
              {items.length} produto{items.length > 1 && 's'} no carrinho
            </S.CartButton>
          )}
        </S.LinkItem>
      </S.Container>
    </S.HeaderBar>
  )
}

export default Header
