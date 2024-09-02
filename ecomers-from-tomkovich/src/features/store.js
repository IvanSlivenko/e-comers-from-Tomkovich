


import { configureStore } from '@reduxjs/toolkit'
import categoriesSlise from './categories/categoriesSlise'
import productsSlice from './products/productSlice'
// import rootReducer from './reducers'

export const store =  configureStore({
  reducer: {
    categories: categoriesSlise,
    products: productsSlice,
  },
  devTools: true,
  

})

