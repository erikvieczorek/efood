import { useDispatch, useSelector } from 'react-redux'

import Checkout from '../Checkout'
import Button from '../Button'

import { RootReducer } from '../../store'
import { close, remove, setCurrentStep } from '../../store/reducers/cart'

import { getTotalPrice, parseToBrl } from '../../utils'
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const currentStep = useSelector(
    (state: RootReducer) => state.cart.currentStep
  )

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const handleNavigation = (step: string) => {
    dispatch(setCurrentStep(step))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {currentStep === 'CART' && (
          <>
            <h2>Carrinho</h2>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((item) => (
                    <S.CartItem key={item.id}>
                      <img src={item.foto} alt={item.foto} />
                      <div>
                        <h3>{item.nome}</h3>
                        <span>{parseToBrl(item.preco)}</span>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        type="button"
                      />
                    </S.CartItem>
                  ))}
                </ul>
                <S.Prices>
                  <span>Valor total</span>
                  <span>{parseToBrl(getTotalPrice(items))}</span>
                </S.Prices>
                <Button
                  onClick={() => handleNavigation('CHECKOUT')}
                  title="Clique aqui para continuar com a entrega"
                  type="button"
                  variant="secondary"
                >
                  Continuar com a entrega
                </Button>
                <Button
                  onClick={closeCart}
                  title="Clique aqui para fechar o carrinho"
                  type="button"
                  variant="secondary"
                >
                  Fechar
                </Button>
              </>
            ) : (
              <>
                <p className="empty-text">
                  O carrinho está vazio, adicione pelo menos um produto para
                  continuar com a compra
                </p>
                <Button
                  onClick={closeCart}
                  title="Clique aqui para fechar o carrinho"
                  type="button"
                  variant="secondary"
                >
                  Fechar
                </Button>
              </>
            )}
          </>
        )}
        {currentStep === 'CHECKOUT' && <Checkout />}
        {currentStep === 'PAYMENT' && <Checkout />}
        {currentStep === 'COMPLETION' && <Checkout />}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
