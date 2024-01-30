import { Restaurant } from '../../pages/Home'
import * as S from './styles'

export type Props = {
  restaurants: Restaurant
}

const Banner = ({ restaurants }: Props) => (
  <S.BannerContainer style={{ backgroundImage: `url(${restaurants.capa})` }}>
    <S.Effect />
    <S.TitleContainer className="container">
      <S.Category>{restaurants.tipo}</S.Category>
      <S.Title>{restaurants.titulo}</S.Title>
    </S.TitleContainer>
  </S.BannerContainer>
)

export default Banner
