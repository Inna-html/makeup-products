import { Link } from 'react-router-dom';

import css from './eyeBrows.module.css';


const EyeBrowAdd = ({eyeBrows}) => {

    const {api_featured_image, brand, name, price, currency, price_sign, 
        category, product_type}  = eyeBrows;

return (
    <div className={css.main}>
        <Link to={'/eyeBrows/'+eyeBrows.id } state={{...eyeBrows}}>
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

