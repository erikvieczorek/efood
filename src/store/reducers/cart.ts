import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Dishes[]
  isOpen: boolean
  currentStep: string
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  currentStep: 'CART'
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Dishes>) => {
      const dish = state.items.find((item) => item.id === action.payload.id)

      if (!dish) {
        state.items.push(action.payload)
      } else {
        alert('O item já esta no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    },
    setCurrentStep: (state, action: PayloadAction<string>) => {
      state.currentStep = action.payload
    }
  }
})

export const { add, open, close, remove, clear, setCurrentStep } =
  cartSlice.actions
export default cartSlice.reducer
