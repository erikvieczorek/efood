import Restaurants from '../../models/restaurants'

// import * as S from './styles'

type TipoBanner = {
  restaurant: Restaurants
}

export const Banner = ({ restaurant }: TipoBanner) => {
  return (
    <div style={{ backgroundImage: `url(${restaurant?.banner})` }}>
      <div className="Container">
        <div>{restaurant?.category}</div>
        <div>{restaurant?.title}</div>
      </div>
    </div>
  )
}
