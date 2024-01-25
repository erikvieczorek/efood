import * as S from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const Dish = ({ image, title, description }: Props) => (
  <S.Card>
    <S.Image style={{ backgroundImage: `url(${image})` }}></S.Image>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.LinkCart>Adicionar ao carrinho</S.LinkCart>
  </S.Card>
)

export default Dish
