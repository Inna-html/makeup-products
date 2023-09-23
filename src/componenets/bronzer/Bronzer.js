import { useEffect, useState } from "react";

import { bronzerService } from "../../services";
import { BronzerAdd } from "./BronzerAdd";
import css from './bronzer.module.css';


const Bronzer = () => {

    const [bronzers, setBronzers] = useState([]);

    useEffect(() => {
        bronzerService.getAll().then(({data}) => setBronzers(data))
    }, [])
    
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
            <div className={css.blockCenterContent}>{bronzers.map(bronzers => <BronzerAdd key={bronzers.id} bronzers={bronzers}/>)}</div>
        </div>
    )
};


export { Bronzer };

