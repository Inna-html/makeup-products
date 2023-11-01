import { Link } from 'react-router-dom';

import css from './eyeBrows.module.css';


const EyeBrowAdd = ({eyeBrow}) => {

    const {api_featured_image, brand, name, price, currency, price_sign, 
        category, product_type}  = eyeBrow;

return (
    <div className={css.main}>
        <Link to={`/eyebrows/${eyeBrow.id}`} state={{...eyeBrow}}>
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

export { EyeBrowAdd };

