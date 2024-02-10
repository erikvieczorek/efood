import * as Yup from 'yup'
import { useFormik } from 'formik'
import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'
import Button from '../Button'
import Cart from '../Cart'
import { getTotalPrice, parseToBrl } from '../../utils'

const Checkout = () => {
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [showPayment, setShowPayment] = useState(true)
  const [showCart, setShowCart] = useState(false)

  const toggleCheckout = () => {
    setShowPayment((prevState) => !prevState)
  }

  const toggleShowCart = () => {
    setShowCart(true)
  }

  const form = useFormik({
    initialValues: {
      deliveryName: '',
      deliveryAddress: '',
      deliveryCity: '',
      deliveryCEP: '',
      deliveryNumber: '',
      deliveryComplement: '',
      cardOwner: '',
      cardNumber: '',
      expiresMonth: 1,
      expiresYear: 1,
      cardCode: 1
    },
    validationSchema: Yup.object({
      deliveryName: Yup.string()
        .min(5, 'Digite seu nome completo')
        .required('Campo obrigatório'),
      deliveryCEP: Yup.string().required('Campo obrigatório'),
      deliveryNumber: Yup.number().required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
        delivery: {
          receiver: values.deliveryName,
          address: {
            description: values.deliveryAddress,
            city: values.deliveryCity,
            zipCode: values.deliveryCEP,
            number: values.deliveryNumber,
            complement: values.deliveryComplement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: values.cardCode,
            expires: {
              month: values.expiresMonth,
              year: values.expiresYear
            }
          }
        }
      })
    }
  })
  return (
    <S.Container>
      {showCart ? (
        <>
          <Cart />
        </>
      ) : (
        <>
          {showPayment ? (
            <>
              <S.Row>
                <h3>Entrega</h3>
                <S.InputGroup>
                  <label htmlFor="deliveryName">Quem irá receber</label>
                  <input type="text" id="deliveryName" name="deliveryName" />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="deliveryAddress">Endereço</label>
                  <input
                    type="text"
                    id="deliveryAddress"
                    name="deliveryAddress"
                  />
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
                    <input
                      type="number"
                      id="deliveryNumber"
                      name="deliveryNumber"
                    />
                  </S.InputGroup>
                </S.InputGrid>
                <S.InputGroup>
                  <label htmlFor="deliveryComplement">
                    Complemento (opcional)
                  </label>
                  <input
                    type="text"
                    id="deliveryComplement"
                    name="deliveryComplement"
                  />
                </S.InputGroup>
              </S.Row>
              <Button
                onClick={toggleCheckout}
                title="Continuar com o pagamento"
                type="button"
                variant="secondary"
              >
                Continuar com o pagamento
              </Button>
              <Button
                onClick={toggleShowCart}
                title="Voltar para o carrinho"
                type="button"
                variant="secondary"
              >
                Voltar para o carrinho
              </Button>
            </>
          ) : (
            <>
              <S.Row>
                <h3>
                  Pagamento - Valor a pagar{' '}
                  <span>{parseToBrl(getTotalPrice(items))} </span>
                </h3>
                <S.InputGroup>
                  <label htmlFor="deliveryName">Nome no cartão</label>
                  <input type="text" id="cardOwner" name="cardOwner" />
                </S.InputGroup>
                <S.InputGrid>
                  <S.InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input type="text" id="cardNumber" name="cardNumber" />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="cardCode">CVV</label>
                    <input type="number" id="cardCode" name="cardCode" />
                  </S.InputGroup>
                </S.InputGrid>
                <S.InputGroup>
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <input type="number" id="expiresMonth" name="expiresMonth" />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <input type="number" id="expiresYear" name="expiresYear" />
                </S.InputGroup>
              </S.Row>
              <Button
                title="Voltar para o carrinho"
                type="button"
                variant="secondary"
              >
                Finalizar pagamento
              </Button>
              <Button
                onClick={toggleCheckout}
                title="Voltar para a edição de endereço"
                type="button"
                variant="secondary"
              >
                Voltar para a edição de endereço
              </Button>
            </>
          )}
        </>
      )}
    </S.Container>
  )
}

export default Checkout
