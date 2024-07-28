import { useEffect, useState } from "react";

import { HasError } from "../HasError/HasError";
import css from "./bronzer.module.css";
import { Pagination } from "../paginator/Pagination";
import { bronzerService } from "../../services";
import { Bronzer } from "./Bronzer";

const BronzerMain = () => {
  const [bronzers, setBronzers] = useState([]);
  const [hasError, setHasError] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [mainPage, setMainPage] = useState(8);

  useEffect(() => {
    try {
      bronzerService.getAll().then(({ data }) => setBronzers(data));
    } catch (error) {
      setTimeout(setHasError(true), 5000);
    }
  }, []);

  if (hasError) return <HasError />;

  const indexOfLastPost = currentPage * mainPage;
  const indexOfFirstPost = indexOfLastPost - mainPage;
  const currentBronzers = bronzers.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className={css.contentBlock}>
      <h1> Welcome to Bronzer category </h1>
      <div className={css.navbar}>
        <ul className={css.mainList}>
          <li>Gluten free</li>
          <li>Canadian</li>
          <li>Natural</li>
          <li>Organic</li>
          <li>Vegan</li>
          <li>Purpicks</li>
          <li>Ewg verified</li>
        </ul>
      </div>

    <div className={css.main__container}>
        <div className={css.blockCenterContent}>
          <Bronzer bronzers={currentBronzers} />
        </div>

        <div className={css.pagination}>
          <Pagination
            mainPage={mainPage}
            totalPosts={bronzers.length}
            setCurrentPage={setCurrentPage}
          />
        </div>
    </div>
          
    </div>
  );
};

export { BronzerMain };
