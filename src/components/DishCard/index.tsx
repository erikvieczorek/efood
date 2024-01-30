import { useState } from 'react'
import * as S from './styles'
import closeIcon from '../../assets/images/icons/close.svg'

type Props = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

type ModalState = {
  isVisible: boolean
}

export const priceFormat = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Dish = ({ foto, nome, descricao, porcao, preco }: Props) => {
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
          <S.Image style={{ backgroundImage: `url(${foto})` }}></S.Image>
          <S.Title>{nome}</S.Title>
          <S.Description>{getDescription(descricao)}</S.Description>
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
              <img src={foto} alt="Foto do prato" />
            </div>
            <div>
              <S.Title>{nome}</S.Title>
              <S.Description>{descricao}</S.Description>
              <S.Description>Serve: de {porcao}</S.Description>
              <S.LinkCart>
                Adicionar ao carrinho - {priceFormat(preco)}
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

export default Dish
