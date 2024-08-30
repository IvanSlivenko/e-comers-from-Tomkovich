


import { configureStore } from '@reduxjs/toolkit'
import categoriesSlise from './categories/categoriesSlise'
// import rootReducer from './reducers'

export const store =  configureStore({
  reducer: {
    categories: categoriesSlise,
  },
  devTools: true,
  

})

