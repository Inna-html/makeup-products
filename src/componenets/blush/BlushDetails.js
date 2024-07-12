import { Link, useLocation } from "react-router-dom";

import css from './blush.module.css';


const BlushDetails = () => {

    const location = useLocation();
    const {state: blush} = location;

    const {api_featured_image, brand, name, tag_list, price_sign, price, currency, product_type, category, 
        product_link, website_link, description} = blush;

return (
    <div>
        <div className={css.blockDetails}>
            <div className={css.detailsImg}>
                <img src={api_featured_image} alt={brand} />  
            </div>
            
            <h1 className={css.title}>Brand: {brand}</h1>

            <p className={css.detailsParagraph}><span>Name:</span> {name}</p>
            <p className={css.detailsParagraph}><span>Tag-list:</span> {tag_list}</p>
            <p className={css.detailsParagraph}><span>Price:</span> {price_sign} {price} {currency}</p>

            <p className={css.detailsParagraph__linksDet}><Link to={product_link} target='_blank'>Product Link </Link></p>
            <p className={css.detailsParagraph__linksDet}><Link to={website_link} target='_blank'>Website Link </Link></p>

            <p className={css.detailsParagraph}><span>Description:</span> {description}</p>
            <p className={css.detailsParagraph}><span>Category:</span> {category}</p>
            <p className={css.detailsParagraph}><span>Product type:</span> {product_type}</p>
            <p className={css.detailsParagraph}><span>Tag-list:</span> {tag_list}</p>
        </div>
    </div>
    )
}

export { BlushDetails };

