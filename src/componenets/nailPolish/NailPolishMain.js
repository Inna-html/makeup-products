import { useEffect, useState } from "react";

import { nailPolishService } from "../../services";
import css from "./nailpolish.module.css";
import { HasError } from "../HasError/HasError";
import { NailPolish } from "./NailPolish";
import { Pagination } from "../paginator/Pagination";

const NailPolishMain = () => {
  const [nailPolishs, setNailPolishs] = useState([]);
  const [hasError, setHasError] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [mainPage, setMainPage] = useState(8);

  useEffect(() => {
    try {
      nailPolishService.getAll().then(({ data }) => setNailPolishs(data));
    } catch (error) {
      setTimeout(setHasError(true), 5000);
    }
  }, []);

  if (hasError) return <HasError />;

  const indexOfLastPost = currentPage * mainPage;
  const indexOfFirstPost = indexOfLastPost - mainPage;
  const currentNailPolish = nailPolishs.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  return (
    <div className={css.contentBlock}>
      <h1 class={css.mainTitle}> Welcome to Nail polish category </h1>
      <div className={css.navbar}>
        <ul className={css.mainList}>
          <li>Vegan</li>
          <li>Canadian</li>
          <li>Natural</li>
          <li>Gluten free</li>
          <li>Fair trade</li>
          <li>Sugar free</li>
          <li>Non-gmo</li>
          <li>Dairy free</li>
        </ul>
      </div>

      <div className={css.main__container}>
        <div className={css.blockCenterContent}>
          <NailPolish nailPolishs={currentNailPolish} />
        </div>

        <div className={css.pagination}>
          <Pagination
            mainPage={mainPage}
            totalPosts={nailPolishs.length}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export { NailPolishMain };
