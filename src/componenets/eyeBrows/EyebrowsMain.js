import { useEffect, useState } from "react";

import { eyeBrowService } from "../../services";
import { EyeBrows } from "./EyeBrows";
import css from "./eyeBrows.module.css";
import { HasError } from "../HasError/HasError";
import { Pagination } from "../paginator/Pagination";

const EyeBrowsMain = () => {
  const [eyeBrows, setEyeBrows] = useState([]);
  const [hasError, setHasError] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [mainPage] = useState(8);

  useEffect(() => {
    try {
      eyeBrowService.getAll().then(({ data }) => setEyeBrows(data));
    } catch (error) {
      setTimeout(setHasError(true), 5000);
    }
  }, []);

  if (hasError) return <HasError />;

  const indexOfLastPost = currentPage * mainPage;
  const indexOfFirstPost = indexOfLastPost - mainPage;
  const currentEyeBrows = eyeBrows.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className={css.contentBlock}>
      <h1 class={css.mainTitle}> Welcome to Eyebrows category </h1>
      <div className={css.navbar}>
        <ul className={css.mainList}>
          <li>Ewg verified</li>
          <li>Purpicks</li>
        </ul>
      </div>

    <div className={css.main__container}>
        <div className={css.blockCenterContent}>
          <EyeBrows eyeBrows={currentEyeBrows} />
        </div>

        <div className={css.pagination}>
          <Pagination
            mainPage={mainPage}
            totalPosts={eyeBrows.length}
            setCurrentPage={setCurrentPage}
          />
        </div>
    </div>
          
    </div>
  );
};

export { EyeBrowsMain };
