import { Outlet } from "react-router-dom";

import { Header } from "../componenets";
import css from './applayout.module.css';
import ScrollButton from "../componenets/scrollButton/ScrollButton";


const AppLayout = () => {

    return (
        <div >
            <Header />
            <div className={css.mainLayout}>
                <div><ScrollButton /></div>
            
                {/* <div className={css.navbar}> <Navbar /> </div> */}
                <div className={css.outlet}> <Outlet /> </div>
            </div>
        </div>
    )
}

export { AppLayout };


