const baseURL = 'http://makeup-api.herokuapp.com/api/v1/products.json';

const urls = {
    blush: '?product_type=blush',
    bronzer: '?product_type=bronzer',
    eyeBrows: '?product_type=eyebrow',
    eyeliner: '?product_type=eyeliner',
    eyeShadow: '?product_type=eyeshadow',
    foundation: '?product_type=foundation',
    lipLiner: '?product_type=lip_liner',
    lipstick: '?product_type=lipstick',
    mascara: '?product_type=mascara',
    nailPolish: '?product_type=nail_polish'
}

export { baseURL, urls };

