import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'
import closeIcon from '../../assets/images/icons/close.svg'

import * as S from './styles'
import Button from '../Button'

type ModalState = {
  isVisible: boolean
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
          <Button
            title="Adicionar ao carrinho"
            type="button"
            onClick={() => {
              setModal({
                isVisible: true
              })
            }}
          >
            Adicionar ao carrinho
          </Button>
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
              <Button
                type="button"
                title="Adicionar ao carrinho"
                onClick={addToCart}
              >
                Adicionar ao carrinho - {parseToBrl(dish.preco)}
              </Button>
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
