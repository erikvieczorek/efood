import { Dishes } from '../../pages/Profile'
import Dish from '../DishCard'
import { List } from './styles'

type Props = {
  dishes: Dishes[]
}

const DishesList = ({ dishes }: Props) => (
  <List className="container">
    {dishes.map((dish) => (
      <li key={dish.id}>
        <Dish
          id={dish.id}
          descricao={dish.descricao}
          foto={dish.foto}
          nome={dish.nome}
          preco={dish.preco}
          porcao={dish.porcao}
        />
      </li>
    ))}
  </List>
)

export default DishesList
