import * as Yup from 'yup'
import { useFormik } from 'formik'
import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Checkout = () => {
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)

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
          <input
            type="text"
            id="deliveryComplement"
            name="deliveryComplement"
          />
        </S.InputGroup>
      </S.Row>
    </>
  )
}

export default Checkout
