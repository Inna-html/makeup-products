import { Link, useLocation } from "react-router-dom";

import css from './eyeshadow.module.css';


const EyeshadowDetails = () => {

    const location = useLocation();
    const {state: eyeShadows} = location;
    const {api_featured_image, brand, name, tag_list, price_sign, price, currency, product_type, category, 
            product_link, website_link, description} = eyeShadows;

    return (
        <div>
            <div className={css.blockDetails}>
                <img src={api_featured_image}  alt={brand}/>
                <h1>Brand: {brand}</h1>
            
                <p><span>Name:</span> {name}</p>
                <p><span>Tag-list:</span> {tag_list}</p>
                <p><span>Price:</span> {price_sign} {price} {currency}</p>
            
                <p><Link to={product_link} target='_blank'>Product Link </Link></p>
                <p><Link to={website_link} target='_blank'>Website Link </Link></p>
            
                <p><span>Description:</span> {description}</p>
                <p><span>Category:</span> {category}</p>
                <p><span>Product type:</span> {product_type}</p>
                <p><span>Tag-list:</span> {tag_list}</p>
            </div>
        </div>
    )
}

export { EyeshadowDetails };