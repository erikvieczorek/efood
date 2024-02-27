import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useMask } from '@react-input/mask'

import Button from '../Button'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { clear, close, setCurrentStep } from '../../store/reducers/cart'

import { getTotalPrice, parseToBrl } from '../../utils'
import * as S from './styles'

const Checkout = () => {
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items, currentStep } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const deliveryCEPRef = useMask({
    mask: '_____-___',
    replacement: { _: /\d/ }
  })
  const cardNumberRef = useMask({
    mask: '____ ____ ____ ____',
    replacement: { _: /\d/ }
  })
  const expiresMonthRef = useMask({
    mask: '__',
    replacement: { _: /\d/ }
  })
  const expiresYearRef = useMask({
    mask: '__',
    replacement: { _: /\d/ }
  })

  const cardCodeRef = useMask({
    mask: '___',
    replacement: { _: /\d/ }
  })

  const deliveryForm = useFormik({
    initialValues: {
      deliveryName: '',
      deliveryAddress: '',
      deliveryCity: '',
      deliveryCEP: '',
      deliveryNumber: '',
      deliveryComplement: ''
    },
    validationSchema: Yup.object({
      deliveryName: Yup.string()
        .min(5, 'Digite seu nome completo')
        .required('Obrigatório'),
      deliveryAddress: Yup.string().required('Obrigatório'),
      deliveryCity: Yup.string().required('Obrigatório'),
      deliveryCEP: Yup.string().min(9, 'CEP inválido').required('Obrigatório'),
      deliveryNumber: Yup.number().required('Obrigatório')
    }),
    onSubmit: () => {
      handleNavigation('PAYMENT')
    }
  })

  const paymentForm = useFormik({
    initialValues: {
      cardOwner: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: ''
    },
    validationSchema: Yup.object({
      cardOwner: Yup.string().required('Obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'Cartão inválido')
        .required('Obrigatório'),
      expiresMonth: Yup.number()
        .max(12, 'Insira um mês válido')
        .min(1, 'Insira um mês válido')
        .required('Obrigatório'),
      expiresYear: Yup.number()
        .min(24, 'Insira um ano válido')
        .max(50, 'Insira um ano válido')
        .required('Obrigatório'),
      cardCode: Yup.string().min(3, 'Código inválido').required('Obrigatório')
    }),
    enableReinitialize: true,
    validateOnChange: true,
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
        delivery: {
          receiver: deliveryForm.values.deliveryName,
          address: {
            description: deliveryForm.values.deliveryAddress,
            city: deliveryForm.values.deliveryCity,
            zipCode: deliveryForm.values.deliveryCEP,
            number: deliveryForm.values.deliveryNumber,
            complement: deliveryForm.values.deliveryComplement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const checkDeliveryForm = (fieldName: string) => {
    const isTouched = fieldName in deliveryForm.touched
    const isInvalid = fieldName in deliveryForm.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const checkPaymentForm = (fieldName: string) => {
    const isTouched = fieldName in paymentForm.touched
    const isInvalid = fieldName in paymentForm.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    const fetchCepInfo = async () => {
      try {
        const cep = deliveryForm.values.deliveryCEP.replace(/\D/g, '')
        if (cep.length === 8) {
          const response = await fetch(`https://opencep.com/v1/${cep}.json`)
          if (!response.ok) {
            throw new Error('Falha ao buscar informações do CEP')
          }
          const cepData = await response.json()
          if (cepData && cepData.logradouro) {
            deliveryForm.setFieldValue(
              'deliveryAddress',
              cepData.logradouro || ''
            )
            deliveryForm.setFieldValue('deliveryCity', cepData.localidade || '')
          }
        }
      } catch (error) {
        console.error('Erro ao buscar informações do CEP:', error)
      }
    }

    fetchCepInfo()
  }, [
    deliveryForm.values.deliveryCEP,
    deliveryForm.setFieldValue,
    deliveryForm
  ])

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const handleNavigation = (step: string) => {
    dispatch(setCurrentStep(step))
  }

  const handleConcluir = () => {
    dispatch(close())
    dispatch(setCurrentStep('CART'))
  }

  return (
    <div>
      {isSuccess && data ? (
        <S.Container>
          <S.Row>
            <h3>Pedido realizado - {data.orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <br />
              <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <br />
              <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
              <br />
              <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Link to={'/'} type="button">
              <Button
                onClick={handleConcluir}
                title="Concluir"
                type="button"
                variant="secondary"
              >
                Concluir
              </Button>
            </Link>
          </S.Row>
        </S.Container>
      ) : (
        <S.Container>
          {currentStep === 'CHECKOUT' && (
            <form onSubmit={deliveryForm.handleSubmit}>
              <S.Row>
                <h3>Entrega</h3>
                <S.InputGroup>
                  <label htmlFor="deliveryName">Quem irá receber</label>
                  <input
                    type="text"
                    id="deliveryName"
                    name="deliveryName"
                    value={deliveryForm.values.deliveryName}
                    onChange={deliveryForm.handleChange}
                    onBlur={deliveryForm.handleBlur}
                    className={checkDeliveryForm('deliveryName') ? 'error' : ''}
                  />
                  {deliveryForm.errors.deliveryName &&
                    deliveryForm.touched.deliveryName && (
                      <S.ErrorMessage>
                        {deliveryForm.errors.deliveryName}
                      </S.ErrorMessage>
                    )}
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="deliveryAddress">Endereço</label>
                  <input
                    type="text"
                    id="deliveryAddress"
                    name="deliveryAddress"
                    value={deliveryForm.values.deliveryAddress}
                    onChange={deliveryForm.handleChange}
                    onBlur={deliveryForm.handleBlur}
                    className={
                      checkDeliveryForm('deliveryAddress') ? 'error' : ''
                    }
                  />
                  {deliveryForm.errors.deliveryAddress &&
                    deliveryForm.touched.deliveryAddress && (
                      <S.ErrorMessage>
                        {deliveryForm.errors.deliveryAddress}
                      </S.ErrorMessage>
                    )}
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="deliveryCity">Cidade</label>
                  <input
                    type="text"
                    id="deliveryCity"
                    name="deliveryCity"
                    value={deliveryForm.values.deliveryCity}
                    onChange={deliveryForm.handleChange}
                    onBlur={deliveryForm.handleBlur}
                    className={checkDeliveryForm('deliveryCity') ? 'error' : ''}
                  />
                  {deliveryForm.errors.deliveryCity &&
                    deliveryForm.touched.deliveryCity && (
                      <S.ErrorMessage>
                        {deliveryForm.errors.deliveryCity}
                      </S.ErrorMessage>
                    )}
                </S.InputGroup>
                <S.InputGrid>
                  <S.InputGroup>
                    <label htmlFor="deliveryCEP">CEP</label>
                    <input
                      type="text"
                      id="deliveryCEP"
                      name="deliveryCEP"
                      ref={deliveryCEPRef}
                      value={deliveryForm.values.deliveryCEP}
                      onChange={deliveryForm.handleChange}
                      onBlur={deliveryForm.handleBlur}
                      className={
                        checkDeliveryForm('deliveryCEP') ? 'error' : ''
                      }
                    />
                    {deliveryForm.errors.deliveryCEP &&
                      deliveryForm.touched.deliveryCEP && (
                        <S.ErrorMessage>
                          {deliveryForm.errors.deliveryCEP}
                        </S.ErrorMessage>
                      )}
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="deliveryNumber">Número</label>
                    <input
                      type="number"
                      id="deliveryNumber"
                      name="deliveryNumber"
                      value={deliveryForm.values.deliveryNumber}
                      onChange={deliveryForm.handleChange}
                      onBlur={deliveryForm.handleBlur}
                      className={
                        checkDeliveryForm('deliveryNumber') ? 'error' : ''
                      }
                    />
                    {deliveryForm.errors.deliveryNumber &&
                      deliveryForm.touched.deliveryNumber && (
                        <S.ErrorMessage>
                          {deliveryForm.errors.deliveryNumber}
                        </S.ErrorMessage>
                      )}
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
                    value={deliveryForm.values.deliveryComplement}
                    onChange={deliveryForm.handleChange}
                    onBlur={deliveryForm.handleBlur}
                    className={
                      checkDeliveryForm('deliveryComplement') ? 'error' : ''
                    }
                  />
                  {deliveryForm.errors.deliveryComplement &&
                    deliveryForm.touched.deliveryComplement && (
                      <S.ErrorMessage>
                        {deliveryForm.errors.deliveryComplement}
                      </S.ErrorMessage>
                    )}
                </S.InputGroup>
              </S.Row>
              <Button
                onClick={deliveryForm.handleSubmit}
                title="Continuar com o pagamento"
                type="button"
                variant="secondary"
              >
                Continuar com o pagamento
              </Button>
              <Button
                onClick={() => handleNavigation('CART')}
                title="Voltar para o carrinho"
                type="button"
                variant="secondary"
              >
                Voltar para o carrinho
              </Button>
            </form>
          )}
          {currentStep === 'PAYMENT' && (
            <form onSubmit={paymentForm.handleSubmit}>
              <S.Row>
                <h3>
                  Pagamento - Valor a pagar{' '}
                  <span>{parseToBrl(getTotalPrice(items))} </span>
                </h3>
                <S.InputGroup>
                  <label htmlFor="cardOwner">Nome no cartão</label>
                  <input
                    type="text"
                    id="cardOwner"
                    name="cardOwner"
                    value={paymentForm.values.cardOwner}
                    onChange={paymentForm.handleChange}
                    onBlur={paymentForm.handleBlur}
                    className={checkPaymentForm('cardOwner') ? 'error' : ''}
                  />
                  {paymentForm.errors.cardOwner &&
                    paymentForm.touched.cardOwner && (
                      <S.ErrorMessage>
                        {paymentForm.errors.cardOwner}
                      </S.ErrorMessage>
                    )}
                </S.InputGroup>
                <S.InputGrid className="gridVariant">
                  <S.InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      ref={cardNumberRef}
                      value={paymentForm.values.cardNumber}
                      onChange={paymentForm.handleChange}
                      onBlur={paymentForm.handleBlur}
                      className={checkPaymentForm('cardNumber') ? 'error' : ''}
                    />
                    {paymentForm.errors.cardNumber &&
                      paymentForm.touched.cardNumber && (
                        <S.ErrorMessage>
                          {paymentForm.errors.cardNumber}
                        </S.ErrorMessage>
                      )}
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="cardCode">CVV</label>
                    <input
                      type="text"
                      id="cardCode"
                      name="cardCode"
                      ref={cardCodeRef}
                      value={paymentForm.values.cardCode}
                      onChange={paymentForm.handleChange}
                      onBlur={paymentForm.handleBlur}
                      className={checkPaymentForm('cardCode') ? 'error' : ''}
                    />
                    {paymentForm.errors.cardCode &&
                      paymentForm.touched.cardCode && (
                        <S.ErrorMessage>
                          {paymentForm.errors.cardCode}
                        </S.ErrorMessage>
                      )}
                  </S.InputGroup>
                </S.InputGrid>
                <S.InputGrid>
                  <S.InputGroup className="gridVariant">
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <input
                      type="text"
                      id="expiresMonth"
                      name="expiresMonth"
                      ref={expiresMonthRef}
                      placeholder="mm"
                      value={paymentForm.values.expiresMonth}
                      onChange={paymentForm.handleChange}
                      onBlur={paymentForm.handleBlur}
                      className={
                        checkPaymentForm('expiresMonth') ? 'error' : ''
                      }
                    />
                    {paymentForm.errors.expiresMonth &&
                      paymentForm.touched.expiresMonth && (
                        <S.ErrorMessage>
                          {paymentForm.errors.expiresMonth}
                        </S.ErrorMessage>
                      )}
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <input
                      type="text"
                      id="expiresYear"
                      name="expiresYear"
                      ref={expiresYearRef}
                      placeholder="aa"
                      value={paymentForm.values.expiresYear}
                      onChange={paymentForm.handleChange}
                      onBlur={paymentForm.handleBlur}
                      className={checkPaymentForm('expiresYear') ? 'error' : ''}
                    />
                    {paymentForm.errors.expiresYear &&
                      paymentForm.touched.expiresYear && (
                        <S.ErrorMessage>
                          {paymentForm.errors.expiresYear}
                        </S.ErrorMessage>
                      )}
                  </S.InputGroup>
                </S.InputGrid>
              </S.Row>
              <Button
                onClick={paymentForm.handleSubmit}
                title="Finalizar pagamento"
                type="button"
                disabled={isLoading}
                variant="secondary"
              >
                {isLoading ? 'Finalizando pagamento...' : 'Finalizar pagamento'}
              </Button>
              <Button
                onClick={() => handleNavigation('CHECKOUT')}
                title="Voltar para a edição de endereço"
                type="button"
                variant="secondary"
              >
                Voltar para a edição de endereço
              </Button>
            </form>
          )}
        </S.Container>
      )}
    </div>
  )
}

export default Checkout
