import { useEffect, useState } from "react";

import { lipLinerService } from "../../services";
import css from "./lipliner.module.css";
import { HasError } from "../HasError/HasError";
import { Pagination } from "../paginator/Pagination";
import { LipLiner } from "./LipLiner";

const LipLinerMain = () => {
  const [lipliners, setLipliners] = useState([]);
  const [hasError, setHasError] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [mainPage] = useState(8);

  useEffect(() => {
    try {
      lipLinerService.getAll().then(({ data }) => setLipliners(data));
    } catch (error) {
      setTimeout(setHasError(true), 5000);
    }
  }, []);

  if (hasError) return <HasError />;

  const indexOfLastPost = currentPage * mainPage;
  const indexOfFirstPost = indexOfLastPost - mainPage;
  const currentLipliners = lipliners.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className={css.contentBlock}>
      <h1 class={css.mainTitle}> Welcome to Lip liner category </h1>
      <div className={css.navbar}>
        <ul className={css.mainList}>
          <li>Natural</li>
          <li>Vegan</li>
          <li>Gluten free</li>
          <li>Canadian</li>
          <li>Purpicks</li>
          <li>Ewg verified</li>
          <li>Hypoallergenic</li>
          <li>No talc</li>
          <li>Cruelty free</li>
        </ul>
      </div>

      <div className={css.main__container}>
        <div className={css.blockCenterContent}>
          <LipLiner lipliners={currentLipliners} />
        </div>

        <div className={css.pagination}>
          <Pagination
            mainPage={mainPage}
            totalPosts={lipliners.length}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export { LipLinerMain };
