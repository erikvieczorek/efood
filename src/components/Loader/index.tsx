import { HashLoader } from 'react-spinners'
import { colors } from '../../styles '
import { Container } from './styles'

const Loader = () => (
  <Container>
    <HashLoader color={colors.salmon} />
  </Container>
)

export default Loader
