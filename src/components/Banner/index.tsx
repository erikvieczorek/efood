import * as S from './styles'
import DolceBanner from '../../assets/images/banners/dolcetrattoria.png'

export const Banner = () => (
  <S.BannerContainer style={{ backgroundImage: `url(${DolceBanner})` }}>
    <S.Effect />
    <S.TitleContainer className="container">
      <S.Category>italiana</S.Category>
      <S.Title>La Dolce Vita Trattoria</S.Title>
    </S.TitleContainer>
  </S.BannerContainer>
)
