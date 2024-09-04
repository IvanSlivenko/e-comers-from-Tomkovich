


import { configureStore } from '@reduxjs/toolkit'
import categoriesSlise from './categories/categoriesSlise'
import productsSlice from './products/productSlice'
import { apiSlice } from './api/apiSlice'
// import rootReducer from './reducers'

export const store =  configureStore({
  reducer: {
    categories: categoriesSlise,
    products: productsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware ) ,
  devTools: true,
  

})



