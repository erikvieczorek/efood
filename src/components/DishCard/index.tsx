import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import * as S from './styles'
import closeIcon from '../../assets/images/icons/close.svg'
import { Dishes } from '../../pages/Profile'

type ModalState = {
  isVisible: boolean
}

export const priceFormat = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const DishCard = (dish: Dishes) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(dish))
    dispatch(open())
  }
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  const getDescription = (descricao: string) => {
    if (descricao.length > 159) {
      return descricao.slice(0, 162) + '...'
    }
    return descricao
  }

  return (
    <>
      <S.Card>
        <S.About>
          <S.Image style={{ backgroundImage: `url(${dish.foto})` }}></S.Image>
          <S.Title>{dish.nome}</S.Title>
          <S.Description>{getDescription(dish.descricao)}</S.Description>
          <S.LinkCart
            onClick={() => {
              setModal({
                isVisible: true
              })
            }}
          >
            Adicionar ao carrinho
          </S.LinkCart>
        </S.About>
        <S.Modal className={modal.isVisible ? 'visible' : ''}>
          <S.ModalContent className="container">
            <img
              src={closeIcon}
              alt="Ícone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
            <div>
              <img src={dish.foto} alt="Foto do prato" />
            </div>
            <div>
              <S.Title>{dish.nome}</S.Title>
              <S.Description>{dish.descricao}</S.Description>
              <S.Description>Serve: de {dish.porcao}</S.Description>
              <S.LinkCart onClick={addToCart}>
                Adicionar ao carrinho - {priceFormat(dish.preco)}
              </S.LinkCart>
            </div>
          </S.ModalContent>
          <div
            onClick={() => {
              closeModal()
            }}
            className="overlay"
          ></div>
        </S.Modal>
      </S.Card>
    </>
  )
}

export default DishCard
