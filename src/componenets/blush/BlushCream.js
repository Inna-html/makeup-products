
const BlushCream = ({creams}) => {

    const {brand, name, price, price_sign, currency, image_link, product_link, 
        website_link, description, rating, category, product_type, tag_list, 
        created_at, updated_at}  = creams;
        // product_colors, hex_value, colour_name}

return (
    <div>
        <div> <h1>{brand}</h1> </div>
        <div> {name} </div>
        <div> {price} </div>
        <div> {price_sign} </div>
        <div> {currency} </div>
        <div> <img src={image_link}/> </div>
        <div> {product_link} </div>
        <div> {website_link} </div>
        <div> {description} </div>
        <div> {rating} </div>
        <div> {category} </div>
        <div> {product_type} </div>
        <div> {tag_list} </div>
        <div> {created_at} </div>
        <div> {updated_at} </div>
    </div>
    )
}

export { BlushCream };

