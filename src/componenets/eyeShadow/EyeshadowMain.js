import { useEffect, useState } from "react";

import { EyeShadow } from "./EyeShadow";
import { eyeShadowService } from "../../services";
import css from "./eyeshadow.module.css";
import { HasError } from "../HasError/HasError";
import { Pagination } from "../paginator/Pagination";

const EyeShadowMain = () => {
  const [eyeShadows, setEyeShadows] = useState([]);
  const [hasError, setHasError] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [mainPage] = useState(8);

  useEffect(() => {
    try {
      eyeShadowService.getAll().then(({ data }) => setEyeShadows(data));
    } catch (error) {
      setTimeout(setHasError(true), 5000);
    }
  }, []);

  if (hasError) return <HasError />;

  const indexOfLastPost = currentPage * mainPage;
  const indexOfFirstPost = indexOfLastPost - mainPage;
  const currentEyeShadows = eyeShadows.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className={css.contentBlock}>
      <h1 class={css.mainTitle}> Welcome to Eyeshadow category </h1>
      <div className={css.navbar}>
        <ul className={css.mainList}>
          <li>Vegan</li>
          <li>Canadian</li>
          <li>Natural</li>
          <li>Gluten free</li>
          <li>Non-gmo</li>
          <li>Purpicks</li>
          <li>Certclean</li>
          <li>Ewg verified</li>
          <li>Organic</li>
          <li>Usda organic</li>
          <li>Hypoallergenic</li>
          <li>No talc</li>
          <li>Ecocert</li>
        </ul>
      </div>

      <div className={css.main__container}>
        <div className={css.blockCenterContent}>
          <EyeShadow eyeShadows={currentEyeShadows} />
        </div>

        <div className={css.pagination}>
          <Pagination
            mainPage={mainPage}
            totalPosts={eyeShadows.length}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export { EyeShadowMain };
