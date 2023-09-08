import { Outlet } from "react-router-dom";

import css from './applayout.module.css';
import ScrollButton from "../componenets/scrollButton/ScrollButton";
import SlideOutMenuContainer from "../componenets/header/Header";


const AppLayout = () => {

    return (
        <div>
            <SlideOutMenuContainer />
            <div className={css.mainLayout}>
                
                <div><ScrollButton /></div>
                
                <div className={css.outlet}> 
                <Outlet /> </div>
            </div>
        </div>
    )
}

export { AppLayout };

