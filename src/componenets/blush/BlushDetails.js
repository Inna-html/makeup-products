import { Link, useLocation } from "react-router-dom";

import css from '../../layout/applayout.module.css';


const BlushDetails = ({}) => {

    const location = useLocation();
    const {state: blush} = location;

    return (
        <div>
            {/* {JSON.stringify(blushs)} */}

            <div className={css.blockDetails}>

                <img src={blush.api_featured_image}  alt={blush.brand}/>
                <h1>Brand: {blush.brand}</h1>


                <p><span>Name:</span> {blush.name}</p>
                <p><span>Tag-list:</span> {blush.tag_list}</p>
                <p><span>Price:</span> {blush.price_sign} {blush.price} {blush.currency}</p>
                <p><span>Product-type:</span> {blush.product_type}</p>
                <p><span>Categoty:</span> {blush.category}</p>
                <p><Link to={blush.product_link} target='_blank'>Product Link </Link></p>
                <p><Link to={blush.website_link} target='_blank'>Website Link </Link></p>

                <p><span>Description:</span> {blush.description}</p>
                <p><span>Rating:</span> {blush.rating}</p>
                <p><span>Category:</span> {blush.category}</p>
                <p><span>Product type:</span> {blush.product_type}</p>
                <p><span>Tag-list:</span> {blush.tag_list}</p>
                 
                <p> {blush.colour_name}</p>
                <div className={css.colorB}>{blush.hex_value}</div>

                {/* <p>{blush.}</p>
                <p>{blush.}</p>
                <p>{blush.}</p>
                <p>{blush.}</p> */}

             
                 {/* "product_colors":[{"hex_value":"#E1BFC0","colour_name":"Pink Parfait"},
                 {"hex_value":"#D7A7A3","colour_name":"Papaya"},
                 {"hex_value":"#E6C3CB","colour_name":"Acai Berry"}]} */}
           </div>
        </div>
    )
}

export { BlushDetails };
