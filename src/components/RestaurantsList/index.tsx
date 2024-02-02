import { Restaurant } from '../../pages/Home'
import RestaurantCard from '../RestaurantCard'
import { List } from './styles'

type Props = {
  title: string
  restaurants: Restaurant[]
  id?: string
}

const RestaurantsList = ({ restaurants }: Props) => (
  <section className="container">
    <List>
      {restaurants.map((restaurants) => (
        <li key={restaurants.id}>
          <RestaurantCard
            id={restaurants.id}
            tipo={restaurants.tipo}
            descricao={restaurants.descricao}
            capa={restaurants.capa}
            destacado={restaurants.destacado}
            avaliacao={restaurants.avaliacao}
            titulo={restaurants.titulo}
          />
        </li>
      ))}
    </List>
  </section>
)

export default RestaurantsList
