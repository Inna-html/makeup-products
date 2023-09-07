import { Link } from 'react-router-dom';
import css from './headers.module.css'

import React, {Component} from 'react';


class SlideOutMenuContainer extends Component {
  constructor(props, context) {
  super(props, context);
 
  this.state = {
    visible: false,
  };
}

  render() {

    const { visible} = this.state;

    return (
            <div className={css.headers}>
            <div className={css.homeSign}>
                <Link to={'/home'}>
                <img className={css.imgHeader} src={'https://www.pinclipart.com/picdir/big/360-3603986_makeup-brushes-tools-papeis-de-parede-instagram-clipart.png'}/>
                    Home page
                </Link> 
            </div>

            <div className={css.right}>
                <ul style={{ display: (visible ? 'block' : 'none') }}>
                    <li> <Link to={'/blush'}> Blush </Link>  </li>
                    <li> <Link to={'/bronzer'}>Bronzer </Link>  </li>
                    <li> <Link to={'/eyebrows'}>Eyebrows</Link> </li>
                    <li> <Link to={'/eyeShadow'}>Eyeshadow </Link> </li>
                    <li> <Link to={'/eyeliner'}>Eyeliner </Link> </li>
                    <li> <Link to={'/foundation'}>Foundation</Link> </li>
                    <li> <Link to={'/lipLiner'}>Lip liner </Link> </li>
                    <li> <Link to={'/lipstick'}>Lipstick </Link> </li>
                    <li> <Link to={'/mascara'}>Mascara </Link> </li>
                    <li> <Link to={'/nailPolish'}>Nail polish </Link> </li>
                </ul>
            </div>

        <div className={css.slide_nav}> 
            <p className={css.slide_nav_btn} onClick={() => this.setState({visible : !visible } )}>☰</p>
        </div>
               
        </div>
    )

//     return (
//  <div>

//             <div>
//  <ul id='slide_menu' style={{ display: (visible ? 'block' : 'none') }}>
//         <li> <Link to={'/blush'}> Blush </Link>  </li>
//         <li> <Link to={'/bronzer'}>Bronzer </Link>  </li>
//         <li> <Link to={'/eyebrows'}>Eyebrows</Link> </li>
//         <li> <Link to={'/eyeShadow'}>Eyeshadow </Link> </li>
//         <li> <Link to={'/eyeliner'}>Eyeliner </Link> </li>
//         <li> <Link to={'/foundation'}>Foundation</Link> </li>
//         <li> <Link to={'/lipLiner'}>Lip liner </Link> </li>
//         <li> <Link to={'/lipstick'}>Lipstick </Link> </li>
//         <li> <Link to={'/mascara'}>Mascara </Link> </li>
//         <li> <Link to={'/nailPolish'}>Nail polish </Link> </li>
//  </ul>
//           </div>
//       </div>
//     );
  }
}
export default SlideOutMenuContainer;


//     const burger = document.querySelector('.humburger-menu')
// const menuElem = document.querySelector ('.menu')
// const menuList = document.querySelector ('.menu-list')

// const toggleMenu = () => {
//     menuElem.classList.toggle('menu-active')
//     burger.classList.toggle ('menu-active')
// }

// burger.addEventListener ('click', () => toggleMenu());


// //добавляем скрытие меню после нажания на кнопку

// menuElem.addEventListener ('click', () => toggleMenu());

//     return (
//       <div className={css.headers}>
//         <div className={css.homeSign}>
//             <Link to={'/home'}>
//             <img className={css.imgHeader} src={'https://www.pinclipart.com/picdir/big/360-3603986_makeup-brushes-tools-papeis-de-parede-instagram-clipart.png'}/>
//             Home page
//             </Link> 
//         </div>

//         <div className={css.right}>
//         <ul>
//             <li> <Link to={'/blush'}> Blush </Link>  </li>
//             <li> <Link to={'/bronzer'}>Bronzer </Link>  </li>
//             <li> <Link to={'/eyebrows'}>Eyebrows</Link> </li>
//             <li> <Link to={'/eyeShadow'}>Eyeshadow </Link> </li>
//             <li> <Link to={'/eyeliner'}>Eyeliner </Link> </li>
//             <li> <Link to={'/foundation'}>Foundation</Link> </li>
//             <li> <Link to={'/lipLiner'}>Lip liner </Link> </li>
//             <li> <Link to={'/lipstick'}>Lipstick </Link> </li>
//             <li> <Link to={'/mascara'}>Mascara </Link> </li>
//             <li> <Link to={'/nailPolish'}>Nail polish </Link> </li>
//         </ul>
//         </div>
       
//     </div>
//     )
// }

// export { Header };