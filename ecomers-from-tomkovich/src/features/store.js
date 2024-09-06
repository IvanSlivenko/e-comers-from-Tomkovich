


import { configureStore } from '@reduxjs/toolkit'
import categoriesSlise from './categories/categoriesSlise'
import productsSlice from './products/productSlice'
import { apiSlice } from './api/apiSlice'
import userSlice from './user/userSlice'
// import rootReducer from './reducers'

export const store =  configureStore({
  reducer: {
    categories: categoriesSlise,
    products: productsSlice,
    user: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware ) ,
  devTools: true,
  

})



