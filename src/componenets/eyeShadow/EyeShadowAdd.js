import { Link } from 'react-router-dom';

import css from './eyeshadow.module.css';


const EyeShadowAdd = ({eyeShadows}) => {

    const {api_featured_image, brand, name, price, currency, price_sign, 
        category, product_type}  = eyeShadows;

    return (
        <div className={css.main}>
            <Link to={'/eyeShadow/'+eyeShadows.id } state={{...eyeShadows}}>
            <div className={css.block}>
                <img src={api_featured_image} alt={brand}/>
                <h1>{brand}</h1>
                <p>{name}</p>
                <p>{price_sign} {price} {currency}</p>
                <p>{product_type} {category}</p>
            </div>
            </Link>
        </div>
    )
}        

export { EyeShadowAdd };