import { useEffect, useState } from "react";
import { blushService } from "../../services";
import { HasError } from "../HasError/HasError";
import { Blush } from "./Blush";
import css from './blush.module.css';
import { Pagination } from "../paginator/Pagination";


const BlushsMain = () => {

    const [blushs, setBlushs] = useState([]);
    const [hasError, setHasError] = useState();

    const [currentPage, setCurrentPage] = useState(1);
    const [mainPage, setMainPage] = useState(8)


    useEffect(() => {
        try {
            blushService.getAll().then(({ data }) => setBlushs(data))
        } catch (error) {
            setTimeout((setHasError(true)), 5000);
        }
    }, [])


    if (hasError) return <HasError />

    const indexOfLastPost = currentPage * mainPage
    const indexOfFirstPost = indexOfLastPost - mainPage
    const currentBlushs = blushs.slice(indexOfFirstPost, indexOfLastPost)


    return (
        <div>

            <h1 className="css.main-title">  Welcome to Blush category </h1>
            <div className={css.navbar}>
                <ul>
                    <li>Vegan</li>
                    <li>Gluten free</li>
                    <li>Canadian</li>
                    <li>Natural</li>
                    <li>Non-gmo</li>
                    <li>Purpicks</li>
                    <li>Usda organic</li>
                    <li>Organic</li>
                    <li>Certclean</li>
                    <li>Ewg verified</li>
                    <li>Hypoallergenic</li>
                    <li>No talc</li>
                </ul>
            </div>

            <div className={css.blockCenterContent}>
                <Blush blushs={currentBlushs} />
            </div>

            <div className={css.pagination}>
                <Pagination
                    mainPage={mainPage}
                    totalPosts={blushs.length}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
};

export { BlushsMain };



