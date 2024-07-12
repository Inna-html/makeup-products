import { Link } from "react-router-dom";

import css from "./blush.module.css";

const BlushAdd = ({ blush }) => {
    const { brand, price, price_sign, api_featured_image,
        currency, category, product_type } = blush;

  return (
    <div className={css.main}>
      <Link to={`/blush/${blush.id}`} state={{ ...blush }}>
        {/* <Link to={'/blush/'+blushs.id } state={{...blushs}}> */}
        <div className={css.block}>
          <div className={css.addImg}>
            <img src={api_featured_image} alt={brand} />
          </div>

          <h1 className={css.title}>{brand}</h1>
          <p className={css.addParagraph}>
            {price_sign} {price} {currency}
          </p>
          <p className={css.addParagraph}>
            {product_type} {category}
          </p>
        </div>
      </Link>
    </div>
  );
};

export { BlushAdd };
