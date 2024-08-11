import { useEffect, useState } from "react";

import { foundationService } from "../../services";
import css from "./foundation.module.css";
import { HasError } from "../HasError/HasError";
import { Foundation } from "./Foundation";
import { Pagination } from "../paginator/Pagination";

const FoundationMain = () => {
  const [foundations, setFoundations] = useState([]);
  const [hasError, setHasError] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [mainPage] = useState(8);

  useEffect(() => {
    try {
      foundationService.getAll().then(({ data }) => setFoundations(data));
    } catch (error) {
      setTimeout(setHasError(true), 5000);
    }
  }, []);

  if (hasError) return <HasError />;

  const indexOfLastPost = currentPage * mainPage;
  const indexOfFirstPost = indexOfLastPost - mainPage;
  const currentFoundation = foundations.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  return (
    <div className={css.contentBlock}>
      <h1 class={css.mainTitle}> Welcome to Foundation category </h1>
      <div className={css.navbar}>
        <ul className={css.mainList}>
          <li>Vegan</li>
          <li>Canadian</li>
          <li>Natural</li>
          <li>Gluten free</li>
          <li>Purpicks</li>
          <li>Certclean</li>
          <li>Ewg verified</li>
          <li>Hypoallergenic</li>
          <li>No talc</li>
          <li>Water free</li>
          <li>Cruelty free</li>
          <li>Alcohol free</li>
          <li>Oil free</li>
          <li>Silicone free</li>
        </ul>
      </div>

      <div className={css.main__container}>
        <div className={css.blockCenterContent}>
          <Foundation foundations={currentFoundation} />
        </div>

        <div className={css.pagination}>
          <Pagination
            mainPage={mainPage}
            totalPosts={foundations.length}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export { FoundationMain };
