import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../componenets";
import css from './applayout.module.css';

const AppLayout = () => {

    return (
        <div>
            <Header />

            <div className={css.mainLayout}>
                <div className={css.navbar}> <Navbar /> </div>
                <div className={css.outlet}> <Outlet />  </div>
            </div>
            
        </div>
            

    )
}

export { AppLayout };


