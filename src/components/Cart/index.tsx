import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { priceFormat } from '../DishCard'
import * as S from './styles'
import { LinkCart } from '../DishCard/styles'

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    const getTotalPrice = () => {
        return items.reduce((acumulador, valorAtual) => {
            return (acumulador += valorAtual.preco!)
        }, 0)
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    return (
        <S.CartContainer className={isOpen ? 'is-open' : ''}>
            <S.Overlay onClick={closeCart} />
            <S.Sidebar>
                <ul>
                    {items.map((item) => (
                        <S.CartItem key={item.id}>
                            <img src={item.foto} alt={item.foto} />
                            <div>
                                <h3>{item.nome}</h3>
                                <span>{priceFormat(item.preco)}</span>
                            </div>
                            <button onClick={() => removeItem(item.id)} type="button" />
                        </S.CartItem>
                    ))}
                </ul>
                <S.Prices>
                    <span>Valor total</span>
                    <span>{priceFormat(getTotalPrice())} </span>
                </S.Prices>
                <LinkCart title="Clique aqui para continuar com a compra" type="button">
                    Continuar com a entrega
                </LinkCart>
            </S.Sidebar>
        </S.CartContainer>
    )
}

export default Cart
