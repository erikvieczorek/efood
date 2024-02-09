import RestaurantsList from '../../components/RestaurantsList'
import Hero from '../../components/Hero'
import { useGetRestaurantsQuery } from '../../services/api'

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
