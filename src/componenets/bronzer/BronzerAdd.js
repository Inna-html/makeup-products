import { Link } from 'react-router-dom';
import css from '../../layout/applayout.module.css'

const BronzerAdd = ({bronzers}) => {

    const {api_featured_image, brand, name, price, currency, price_sign, 
            category, product_type}  = bronzers;

    return (
        <div className={css.main}>
            <Link to={'/bronzer/'+bronzers.id } state={{...bronzers}}>
            <div className={css.block}>
                <img src={api_featured_image} alt={brand}/>
                <h1>{brand}</h1>
                <p>{name}</p>
                <p>{price_sign} {price} {currency}</p>
                <p>{product_type} {category}</p>
           </div>
           </Link>




            {/* <div className={css.block}>
                <img src={api_featured_image} alt={brand}/>
                <h1>{brand}</h1>
                <p>{name}</p>
                <p>{price_sign} {price} {currency}</p>
                <p>{product_type} {category}</p>
           </div> */}

            
            {/* <div className={css.block}>
                <img src={image_link} alt={brand}/>
                <h1>{brand}</h1>
                <div> {name} </div>
                <div> {tag_list} </div>
                <div> {price_sign} {price}  </div>
                <div> {product_type} {category} </div>
           </div> */}
        </div>
    )
}        

export { BronzerAdd };
