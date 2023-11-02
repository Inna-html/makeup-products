import { useEffect, useState } from "react";

import { bronzerService } from "../../services";
import { BronzerAdd } from "./BronzerAdd";
import css from './bronzer.module.css';
import { HasError } from "../HasError/HasError";


const Bronzer = () => {

    const [bronzers, setBronzers] = useState([]);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        try {
            bronzerService.getAll().then(({data}) => setBronzers(data))
        } catch (error) {
            setTimeout((setHasError(true)), 5000);
        }
    }, [])

    if (hasError) return <HasError />
    
    return (
        <div>
            <h1> Welcome to Bronzer category </h1>
            <div className={css.navbar}>
            <ul>
                <li>Gluten free</li>
                <li>Canadian</li>
                <li>Natural</li>
                <li>Organic</li>
                <li>Vegan</li>
                <li>Purpicks</li>
                <li>Ewg verified</li>
            </ul>
            </div>
            <div className={css.blockCenterContent}>
                {bronzers.map(bronzer => <BronzerAdd key={bronzer.id} bronzer={bronzer}/>)}
            </div>
        </div>
    )
};


export { Bronzer };

