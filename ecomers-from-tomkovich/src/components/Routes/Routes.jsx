import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import Home_custome from '../Home/Home_custome.jsx'
import Home from '../Home/Home'

const AppRoutes = () => {
  return (
    <Routes>
        {/* <Route index element={<Home_custome />}/> */}
        <Route index element={<Home />}/>
    </Routes>
  )
}

export default AppRoutes