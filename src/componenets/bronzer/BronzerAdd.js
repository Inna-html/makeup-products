import { Link } from 'react-router-dom';

import css from './bronzer.module.css';


const BronzerAdd = ({bronzer}) => {

    const {api_featured_image, brand, name, price, currency, price_sign, 
            category, product_type}  = bronzer;

    return (
        <div className={css.main}>
            <Link to={`/bronzer/${bronzer.id}`} state={{...bronzer}}>
            {/* <Link to={'/bronzer/'+bronzers.id } state={{...bronzers}}> */}
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

export { BronzerAdd };

