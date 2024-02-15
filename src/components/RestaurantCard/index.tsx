import { Link } from 'react-router-dom'

import Tag from '../Tag'
import star_favorite from '../../assets/images/icons/star_favorite.svg'

import * as S from './styles'

type Props = {
  titulo: string
  tipo: string
  descricao: string
  capa: string
  destacado: boolean
  avaliacao: number
  id: number
}

const RestaurantCard = ({
  titulo,
  tipo,
  descricao,
  capa,
  destacado,
  avaliacao,
  id
}: Props) => (
  <S.Card>
    <S.ImgDiv style={{ backgroundImage: `url(${capa})` }}>
      <S.Infos>
        {destacado === true && <Tag>Destaque da Semana</Tag>}
        <Tag>{tipo}</Tag>
      </S.Infos>
    </S.ImgDiv>
    <S.About>
      <S.Title>
        {titulo}
        <S.Rate>
          {avaliacao}
          <img src={star_favorite} />
        </S.Rate>
      </S.Title>
      <S.Description>{descricao}</S.Description>
      <Link to={`/profile/${id}`}>
        <Tag size="big">Saiba mais</Tag>
      </Link>
    </S.About>
  </S.Card>
)

export default RestaurantCard
