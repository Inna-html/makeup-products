import { Link, useLocation } from "react-router-dom";

import css from '../../layout/applayout.module.css';


const BronzerDetails = () => {

    const location = useLocation();
    const {state: bronzer} = location;

    return (
        <div>
            {/* {JSON.stringify(blushs)} */}

            <div className={css.blockDetails}>

                <img src={bronzer.api_featured_image}  alt={bronzer.brand}/>
                <h1>Brand: {bronzer.brand}</h1>


                <p><span>Name:</span> {bronzer.name}</p>
                <p><span>Tag-list:</span> {bronzer.tag_list}</p>
                <p><span>Price:</span> {bronzer.price_sign} {bronzer.price} {bronzer.currency}</p>
                <p><span>Product-type:</span> {bronzer.product_type}</p>
                <p><span>Categoty:</span> {bronzer.category}</p>
                <p><Link to={bronzer.product_link} target='_blank'>Product Link </Link></p>
                <p><Link to={bronzer.website_link} target='_blank'>Website Link </Link></p>

                <p><span>Description:</span> {bronzer.description}</p>
                <p><span>Rating:</span> {bronzer.rating}</p>
                <p><span>Category:</span> {bronzer.category}</p>
                <p><span>Product type:</span> {bronzer.product_type}</p>
                <p><span>Tag-list:</span> {bronzer.tag_list}</p>
                 
                <p> {bronzer.colour_name}</p>
                <div className={css.colorB}>{bronzer.hex_value}</div>
            </div>
        </div>

    )
}

export { BronzerDetails };
