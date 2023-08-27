import { Link } from 'react-router-dom';
import css from './headers.module.css'


const Header = () => {

    return (
      <div className={css.headers}>
        <div> <Link to={'/home'}>Home page</Link> </div>

        <div className={css.right}>
        <ul>
            <li> <Link to={'/blush'}> Blush </Link>  </li>
            <li> <Link to={'/bronzer'}>Bronzer </Link>  </li>
            <li> <Link to={'/eyebrows'}>Eyebrows</Link> </li>
            <li> <Link to={'/eyeShadow'}>Eye shadow </Link> </li>
            <li> <Link to={'/eyeliner'}>Eyeliner </Link> </li>
            <li> <Link to={'/foundation'}>Foundation</Link> </li>
            <li> <Link to={'/lipLiner'}>Lip liner </Link> </li>
            <li> <Link to={'/lipstick'}>Lipstick </Link> </li>
            <li> <Link to={'/mascara'}>Mascara </Link> </li>
            <li> <Link to={'/nailPolish'}>Nail polish </Link> </li>
        </ul>
        </div>
       
    </div>
    )
}

export { Header };