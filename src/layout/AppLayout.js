import { Navigate, Outlet } from "react-router-dom";

import css from './applayout.module.css';
import ScrollButton from "../componenets/scrollButton/ScrollButton";
import Header from "../componenets/header/Header";
import { Footer } from "../componenets";


const AppLayout = () => {

    return (
        <div className={css.wrapper}>
            <div><Header /></div>
                
            <div className={css.mainLayout}>
                <ScrollButton />

                <div><Outlet />
                
                    <Navigate to={'home'} />
                
                </div>
            </div>
            
            <div><Footer /></div>
                
        </div>
    )
}

export { AppLayout };

