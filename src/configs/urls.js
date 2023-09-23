const baseURL = 'http://makeup-api.herokuapp.com/api/v1/products.json';

const urls = {
    blush: '?product_type=blush',
    bronzer: '?product_type=bronzer',
    eyebrows: '?product_type=eyebrow',
    eyeliner: '?product_type=eyeliner',
    eyeshadow: '?product_type=eyeshadow',
    foundation: '?product_type=foundation',
    lipliner: '?product_type=lip_liner',
    lipstick: '?product_type=lipstick',
    mascara: '?product_type=mascara',
    nailpolish: '?product_type=nail_polish'
}

export { baseURL, urls };

