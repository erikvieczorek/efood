import Dish from '../Dish'
import Dishes from '../../models/dishes'
import { List } from './styles'

type Props = {
  dishes: Dishes[]
}

const DishesList = ({ dishes }: Props) => (
  <List className="container">
    {dishes.map((dish) => (
      <Dish
        key={dish.id}
        description={dish.description}
        image={dish.image}
        title={dish.title}
      />
    ))}
  </List>
)

export default DishesList
