import { Link } from "react-router-dom";

import css from "./lipliner.module.css";

const LipLinerAdd = ({ lipliner }) => {
    const { api_featured_image, brand, price, currency,
        price_sign, category, product_type } = lipliner;

  return (
    <div className={css.main}>
      <Link to={`/lipliner/${lipliner.id}`} state={{ ...lipliner }}>
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

export { LipLinerAdd };
