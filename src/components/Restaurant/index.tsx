import { Link } from 'react-router-dom'
import Tag from '../Tag'
import * as S from './styles'
import star_favorite from '../../assets/images/star_favorite.svg'

type Props = {
  title: string
  category: string
  description: string
  image: string
  banner: string
  highlight: boolean
  rate: number
}

const Restaurant = ({
  title,
  category,
  description,
  image,
  highlight,
  rate
}: Props) => (
  <S.Card>
    <S.ImgDiv style={{ backgroundImage: `url(${image})` }}>
      <S.Infos>
        {highlight === true && <Tag>Destaque da Semana</Tag>}
        <Tag>{category}</Tag>
      </S.Infos>
    </S.ImgDiv>
    <S.About>
      <S.Title>
        {title}
        <S.Rate>
          {rate}
          <img src={star_favorite} />
        </S.Rate>
      </S.Title>
      <S.Description>{description}</S.Description>
      <Link to="/">
        <Tag size="big">Saiba mais</Tag>
      </Link>
    </S.About>
  </S.Card>
)

export default Restaurant
