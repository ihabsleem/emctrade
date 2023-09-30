//import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import "./index.css";

import SmallHeader from "./component/SmallHeader";
import NavBar from "./component/NavBar";


import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";





const AppLayout = () => {
    return (
        <div className="app-layout">
            <SmallHeader />
            <Header />
            <NavBar />
            
         
            <Outlet/>
            
            
            <Footer />
            
        </div>
    );
}

export default AppLayout;
