import { Link } from 'react-router-dom';

import css from './blush.module.css';


const BlushAdd = ({blushs}) => {

    const {brand, name, price, price_sign, api_featured_image, 
            currency, category, product_type, }  = blushs;

    return (
        <div className={css.main}>
            <Link to={'/blush/'+blushs.id } state={{...blushs}}>
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

export { BlushAdd };

