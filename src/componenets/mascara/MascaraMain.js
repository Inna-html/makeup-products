import { useEffect, useState } from "react";

import { mascaraService } from "../../services";
import css from "./mascara.module.css";
import { HasError } from "../HasError/HasError";
import { Pagination } from "../paginator/Pagination";
import { Mascara } from "./Mascara";

const MascaraMain = () => {
  const [mascaras, setMascaras] = useState([]);
  const [hasError, setHasError] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [mainPage] = useState(8);

  useEffect(() => {
    try {
      mascaraService.getAll().then(({ data }) => setMascaras(data));
    } catch (error) {
      setTimeout(setHasError(true), 5000);
    }
  }, []);

  if (hasError) return <HasError />;

  const indexOfLastPost = currentPage * mainPage;
  const indexOfFirstPost = indexOfLastPost - mainPage;
  const currentMascaras = mascaras.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className={css.contentBlock}>
      <h1 class={css.mainTitle}> Welcome to Mascara category </h1>
      <div className={css.navbar}>
        <ul className={css.mainList}>
          <li>Natural</li>
          <li>Gluten free</li>
          <li>Vegan</li>
          <li>Canadian</li>
          <li>Organic</li>
          <li>Purpicks</li>
          <li>Ewg verified</li>
          <li>Hypoallergenic</li>
          <li>No talc</li>
          <li>Ecocert</li>
          <li>Usda organic</li>
          <li>Certclean</li>
        </ul>
      </div>

      <div className={css.main__container}>
        <div className={css.blockCenterContent}>
          <Mascara mascaras={currentMascaras} />
        </div>

        <div className={css.pagination}>
          <Pagination
            mainPage={mainPage}
            totalPosts={mascaras.length}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export { MascaraMain };
