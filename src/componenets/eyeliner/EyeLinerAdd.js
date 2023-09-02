import css from '../../layout/applayout.module.css'

const EyeBrowAdd = ({eyeLiners}) => {

    const {brand, name, price, price_sign, image_link, category, product_type, tag_list, }  = eyeLiners;
        // product_link, description, rating, 
            // product_colors, hex_value, colour_name}

    return (
        <div className={css.main}>
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

export { EyeBrowAdd };