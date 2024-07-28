import { Link } from "react-router-dom";

import css from "./bronzer.module.css";

const BronzerAdd = ({ bronzer }) => {
  const { api_featured_image, brand, price, currency, price_sign, category, product_type} = bronzer;

  return (
    <div className={css.main}>
      <Link to={`/bronzer/${bronzer.id}`} state={{ ...bronzer }}>
        {/* <Link to={'/bronzer/'+bronzers.id } state={{...bronzers}}> */}
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

export { BronzerAdd };
