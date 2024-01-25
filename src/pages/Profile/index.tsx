import Header from '../../components/Header'
import DishesList from '../../components/DishesList'
import dishes from '../../services/dishes_api'
import { Banner } from '../../components/Banner'

const Profile = () => {
  return (
    <>
      <Header />
      <Banner />
      <DishesList dishes={dishes} />
    </>
  )
}

export default Profile
