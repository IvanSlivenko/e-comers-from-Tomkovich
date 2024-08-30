import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import AppRoutes from "../Routes/Routes";


import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import { getCategories } from "../../features/categories/categoriesSlise";


const App = ()=>{
     const dispatch = useDispatch();
     
     useEffect(()=>{
          dispatch(getCategories());
     },[dispatch]);



     return <div className="app">
           <Header/> 

           <div className="container">
                <SideBar/>
                <AppRoutes/>
                
           </div>
            
           <Footer/>
        </div>
};
export default App;
