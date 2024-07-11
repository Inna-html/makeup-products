import { useEffect, useState } from "react";

import { eyeLinerService } from "../../services";
import { Eyeliner } from './Eyeliner';
import css from './eyeliner.module.css';
import { HasError } from "../HasError/HasError";
import { Pagination } from "../paginator/Pagination";

const EyelinerMain = () => {

    const [eyeLiners, setEyeLiners] = useState([]);
    const [hasError, setHasError] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [mainPage, setMainPage] = useState(8);

    useEffect(() => {
        try {
            eyeLinerService.getAll().then(({data}) => setEyeLiners(data))
        } catch (error) {
            setTimeout((setHasError(true)), 5000);
        }
    }, [])

    if (hasError) return <HasError />


    const indexOfLastPost = currentPage * mainPage
    const indexOfFirstPost = indexOfLastPost - mainPage
    const currentEyeLiner = eyeLiners.slice(indexOfFirstPost, indexOfLastPost)
    
    return (
        <div>
            <h1> Welcome to Eyeliner category </h1>
            <div className={css.navbar}>
            <ul>
                <li>Natural</li>
                <li>Vegan</li>
                <li>Canadian</li>
                <li>Gluten free</li>
                <li>Organic</li>
                <li>Purpicks</li>
                <li>Certclean</li>
                <li>Ewg verified</li>
                <li>Hypoallergenic</li>
                <li>No talc</li>
                <li>Ecocert</li>
            </ul>
            </div>
            
            <div className={css.blockCenterContent}>
                <Eyeliner eyeLiners={currentEyeLiner} />
            </div>

            <div className={css.pagination}>
                <Pagination
                    mainPage={mainPage}
                    totalPosts={eyeLiners.length}
                    setCurrentPage={setCurrentPage}
                />
            </div>

        </div>
    )
};

export { EyelinerMain };
