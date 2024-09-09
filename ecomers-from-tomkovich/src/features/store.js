


import { configureStore } from '@reduxjs/toolkit'
import categoriesSlise from './categories/categoriesSlise'
import productsSlice from './products/productSlice'
import productsSliceCustome from './products/productSliceCustome'
import { apiSlice } from './api/apiSlice'
import userSlice from './user/userSlice'
import { apiSliceCustome } from './api/apiSliceСustome'
// import rootReducer from './reducers'

export const store =  configureStore({
  reducer: {
    categories: categoriesSlise,
    products: productsSlice,
    productsCustome: productsSliceCustome,
    user: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [apiSliceCustome.reducerPath]: apiSliceCustome.reducer
  },
  middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware ) ,
  // middleware: (getMiddleware) => getMiddleware().concat(apiSliceCustome.middleware ) , 
  devTools: true,
  

})



