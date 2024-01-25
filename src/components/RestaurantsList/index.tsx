import Restaurants from '../../models/restaurants'
import Restaurant from '../Restaurant'
import { List } from './styles'

type Props = {
  title: string
  restaurants: Restaurants[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <section className="container">
    <List>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          category={restaurant.category}
          description={restaurant.description}
          image={restaurant.image}
          highlight={restaurant.highlight}
          rate={restaurant.rate}
          title={restaurant.title}
        />
      ))}
    </List>
  </section>
)

export default RestaurantsList
