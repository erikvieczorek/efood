import RestaurantsList from '../../components/RestaurantsList'
import Hero from '../../components/Hero'
import restaurants from '../../services/restaurants_api'

export const Home = () => (
  <>
    <Hero />
    <RestaurantsList title="Restaurantes" restaurants={restaurants} />
  </>
)

export default Home
