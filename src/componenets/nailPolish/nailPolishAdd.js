import { Link } from 'react-router-dom';

import css from './nailpolish.module.css';


const NailPolishAdd = ({nailPolish}) => {

    const {api_featured_image, brand, name, price, currency, price_sign, 
        category, product_type}  = nailPolish;

    return (
        <div className={css.main}>
            <Link to={`/nailpolish/${nailPolish.id}`} state={{...nailPolish}}>
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

export { NailPolishAdd };