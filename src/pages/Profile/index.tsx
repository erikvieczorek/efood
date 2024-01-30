import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import DishesList from '../../components/DishesList'
import Banner from '../../components/Banner'
import { Restaurant } from '../Home'

export type Dishes = {
  id: number
  foto: string
  nome: string
  descricao: string
  porcao: string
  preco: number
}

const Profile = () => {
  const { id } = useParams()
  const [dishes, setDishes] = useState<Dishes[]>([])
  const [restaurants, setRestaurants] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setDishes(res.cardapio))

    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [id])

  return (
    <>
      <Header />
      {restaurants && <Banner restaurants={restaurants} />}
      {dishes && <DishesList dishes={dishes} />}
      {!dishes && <h3>Carregando...</h3>}
      {!restaurants && <h3>Carregando...</h3>}
    </>
  )
}

export default Profile
