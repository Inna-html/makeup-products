import { Outlet } from "react-router-dom";

import css from './applayout.module.css';
import ScrollButton from "../componenets/scrollButton/ScrollButton";
import Header from "../componenets/header/Header";
import { Footer } from "../componenets";


const AppLayout = () => {

    return (
        <div className={css.wrapper}>
            {/* <div className={css.header}> */}
                <Header /> 
            {/* </div> */}
            
            <div className={css.mainLayout}>
                <ScrollButton />
                <div>
                    <Outlet />
                </div>
            </div>

            {/* <div className={css.footer}> */}
                <Footer />
            {/* </div> */}
        </div>
    )
}

export { AppLayout };

