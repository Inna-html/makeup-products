import { Navigate, Outlet } from "react-router-dom";

import css from './applayout.module.css';
import ScrollButton from "../componenets/scrollButton/ScrollButton";
import { Footer } from "../componenets";
import Header from "../componenets/header/Header";


const AppLayout = () => {
   
    return (
        <div className={css.wrapper}>
            <div>
                <Header />
            </div>
                
            <div className={css.mainLayout}>
                <ScrollButton />

                <div>
                    <Navigate to={'/home' ? '/home' : <Outlet />} />
                    <Outlet />
                </div>
            </div>
            
            <div>
                <Footer />
            </div>
        </div>
    )
}

export { AppLayout };
    

// "homepage": "https://Inna-html.github.io//makeup_products"
    
// https://www.npmjs.com/package/bootstrap
 
