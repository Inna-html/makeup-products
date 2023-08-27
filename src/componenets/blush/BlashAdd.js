import css from './blush.module.css';

const BlushAdd = ({blushs}) => {

    const {brand, name, price, price_sign, image_link, product_link, 
            description, rating, category, product_type, tag_list, }  = blushs;
            // product_colors, hex_value, colour_name}

    return (
        <div className={css.mainBlush}>
            <div className={css.block}>
                <img src={image_link} alt={brand}/>
                <h1>{brand}</h1>
                <div> {name} </div>
                <div> {tag_list} </div>
                <div> {price_sign} {price}  </div>
                <div> {product_type} {category} </div>
           </div>
        </div>
    )
}


            
            {/* <div> <button>{product_link}</button>  </div>

            <div> {description} </div>
            <div> {rating} </div>
 
            <div>  </div> */}

{/* {product_colors}  {hex_value} 
{colour_name} */}
        
            

export { BlushAdd };
