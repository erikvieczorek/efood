import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import DishesList from '../../components/DishesList'
import Banner from '../../components/Banner'
import Loader from '../../components/Loader'
import { useGetRestaurantPageQuery } from '../../services/api'

const Profile = () => {
  const { id } = useParams()
  const { data: restauranteAtual } = useGetRestaurantPageQuery(id ? id : '0')

  if (!restauranteAtual || !restauranteAtual.cardapio) {
    return <Loader />
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
