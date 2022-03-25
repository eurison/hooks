import { reducer } from './reducers'
import {numberAdd2} from './actions/number'

const initialState = {
  cart: [],
  products: [],
  user: [],
  number: 0,
}

export {
  initialState,
  reducer
}