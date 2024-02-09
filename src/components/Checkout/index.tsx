import * as S from './styles'

const Checkout = () => (
  <>
    <S.Row>
      <h3>Entrega</h3>
      <S.InputGroup>
        <label htmlFor="deliveryName">Quem irá receber</label>
        <input type="text" id="deliveryName" name="deliveryName" />
      </S.InputGroup>
      <S.InputGroup>
        <label htmlFor="deliveryAddress">Endereço</label>
        <input type="text" id="deliveryAddress" name="deliveryAddress" />
      </S.InputGroup>
      <S.InputGroup>
        <label htmlFor="deliveryCity">Cidade</label>
        <input type="text" id="deliveryCity" name="deliveryCity" />
      </S.InputGroup>
      <S.InputGrid>
        <S.InputGroup maxWidth="155px">
          <label htmlFor="deliveryCEP">CEP</label>
          <input type="number" id="deliveryCEP" name="deliveryCEP" />
        </S.InputGroup>
        <S.InputGroup maxWidth="155px">
          <label htmlFor="deliveryNumber">Número</label>
          <input type="number" id="deliveryNumber" name="deliveryNumber" />
        </S.InputGroup>
      </S.InputGrid>
      <S.InputGroup>
        <label htmlFor="deliveryComplement">Complemento (opcional)</label>
        <input type="text" id="deliveryComplement" name="deliveryComplement" />
      </S.InputGroup>
    </S.Row>
  </>
)

export default Checkout
