import { useEffect, useState } from "react";

import { lipstickService } from "../../services";
import css from './lipstick.module.css';
import { HasError } from "../HasError/HasError";
import { Pagination } from "../paginator/Pagination";
import { Lipstick } from "./Lipstick";


const LipstickMain = () => {
        
    const [lipsticks, setLipsticks] = useState([]);
    const [hasError, setHasError] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [mainPage, setMainPage] = useState(8);
        
        useEffect(() => {
            try {
                lipstickService.getAll().then(({data}) => setLipsticks(data))
            } catch (error) {
                setTimeout((setHasError(true)), 5000);
            }
        }, [])
    
    if (hasError) return <HasError />
    
    const indexOfLastPost = currentPage * mainPage;
    const indexOfFirstPost = indexOfLastPost - mainPage;
    const currentLipsticks = lipsticks.slice(indexOfFirstPost, indexOfLastPost);
            
            return (
                <div>
                    <h1> Welcome to Lipstick category </h1>
                    <div className={css.navbar}>
                    <ul>
                        <li>Canadian</li>
                        <li>Natural</li>
                        <li>Gluten free</li>
                        <li>Non-gmo</li>
                        <li>Peanut free product</li>
                        <li>Vegan</li>
                        <li>Cruelty free</li>
                        <li>Organic</li>
                        <li>Purpicks</li>
                        <li>Certclean</li>
                        <li>Chemical free</li>
                        <li>Ewg verified</li>
                        <li>Hypoallergenic</li>
                        <li>No talc</li>
                    </ul>
                    </div>
                    
                <div className={css.blockCenterContent}>
                <Lipstick lipsticks={currentLipsticks} />
            </div>

            <div className={css.pagination}>
                <Pagination
                    mainPage={mainPage}
                    totalPosts={lipsticks.length}
                    setCurrentPage={setCurrentPage}
                />
            </div>
                </div>
            )
        };

export { LipstickMain };
