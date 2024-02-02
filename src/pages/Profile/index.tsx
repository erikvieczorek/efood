import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import DishesList from '../../components/DishesList'
import Banner from '../../components/Banner'
import { useGetRestaurantPageQuery } from '../../services/api'

export type Dishes = {
  id: number
  foto: string
  nome: string
  descricao: string
  porcao: string
  preco: number
}

const Profile = () => {
  const { id } = useParams()
  const { data: restauranteAtual } = useGetRestaurantPageQuery(id ? id : '0')

  if (!restauranteAtual || !restauranteAtual.cardapio) {
    return <h3>Carregando...</h3>
  }

  const listaProdutosRestaurante: Dishes[] = restauranteAtual.cardapio

  return (
    <>
      <Header />
      <Banner restaurants={restauranteAtual} />
      {listaProdutosRestaurante && (
        <DishesList dishes={listaProdutosRestaurante} />
      )}
    </>
  )
}

export default Profile
