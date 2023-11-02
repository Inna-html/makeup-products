import { useEffect, useState } from "react";

import { BlushAdd } from "./BlashAdd";
import { blushService } from "../../services";
import css from './blush.module.css';
import { HasError } from "../HasError/HasError";


const Blush = () => {

    const [blushs, setBlushs] = useState([]);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        try {
            blushService.getAll().then(({data}) => setBlushs(data));
        } catch (error) {
            setTimeout((setHasError(true)), 5000);
        }
    }, [])

    if (hasError) return <HasError />
    
    return (
        <div>
            <h1> Welcome to Blush category </h1>
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
                {blushs.map(blush => <BlushAdd key={blush.id} blush={blush}/>)}
            </div>
            
        </div>
    )
};

export { Blush };

