import RestaurantsList from '../../components/RestaurantsList'
import Hero from '../../components/Hero'
import { useGetRestaurantsQuery } from '../../services/api'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio?: []
}

const Home = () => {
  const { data: restaurantsList } = useGetRestaurantsQuery()

  return (
    <>
      <Hero />
      {restaurantsList && (
        <RestaurantsList title="Restaurantes" restaurants={restaurantsList} />
      )}
    </>
  )
}

export default Home
