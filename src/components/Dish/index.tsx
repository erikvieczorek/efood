import * as S from './styles'

type Props = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Dish = ({ foto, nome, descricao, id }: Props) => {
  const getDescription = (descricao: string) => {
    if (descricao.length > 159) {
      return descricao.slice(0, 162) + '...'
    }
    return descricao
  }

  return (
    <S.Card>
      <S.About>
        <S.Image style={{ backgroundImage: `url(${foto})` }}></S.Image>
        <S.Title>{nome}</S.Title>
        <S.Description>{getDescription(descricao)}</S.Description>
        <S.LinkCart to={`/profile/${id}`}>Adicionar ao carrinho</S.LinkCart>
      </S.About>
    </S.Card>
  )
}

export default Dish
