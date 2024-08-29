import React from "react";
import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";

const App = ()=>{
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
