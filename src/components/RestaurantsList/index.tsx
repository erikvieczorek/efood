import Restaurants from '../../models/restaurants'
import Restaurant from '../Restaurant'
import { Container, List } from './styles'

export type Props = {
  title: string
  restaurants: Restaurants[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <Container className="container">
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
          banner={restaurant.banner}
        />
      ))}
    </List>
  </Container>
)

export default RestaurantsList
