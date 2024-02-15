import DishCard from '../DishCard'
import Loader from '../Loader'
import { List } from './styles'

type Props = {
  dishes: Dishes[]
}

const DishesList = ({ dishes }: Props) => {
  if (!dishes) {
    return <Loader />
  }

  return (
    <List className="container">
      {dishes !== undefined &&
        dishes.map(({ id, nome, descricao, foto, porcao, preco }) => (
          <li key={id}>
            <DishCard
              id={id}
              descricao={descricao}
              foto={foto}
              nome={nome}
              preco={preco}
              porcao={porcao}
            />
          </li>
        ))}
    </List>
  )
}

export default DishesList
